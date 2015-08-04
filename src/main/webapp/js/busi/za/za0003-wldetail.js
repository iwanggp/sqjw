/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
    var f = false; //定义一个开关变量

    hidePic();
    var poly = map.getOverlayById("gang");//获得小红点的经纬度，这是一个对象，通过this.point获得点坐标
    var $dialog = $.pdialog.getCurrent();
    $("input").attr("disabled", "disabled"); //让输入框为只读状态
    var param = $dialog.data('param'); //父窗口传递的参数
    var opt = new AjaxOptions();
    opt.put("service_code", "S40002");
    opt.put("hy", param.hy);
    opt.put("id", param.id);

    opt.sus = function(data) {
        data.csdata.ajhgz = "<a href='" + data.csdata.ajhgz + "' target='_blank'>" + "查看安检合格证" + "</a>";
        data.csdata.ysxkz = "<a href='" + data.csdata.ysxkz + "' target='_blank'>" + "查看运输合格证" + "</a>";
        data.csdata.gsxkz = "<a href='" + data.csdata.gsxkz + "' target='_blank'>" + "查看工商许可证" + "</a>";
        data.csdata.jypmt = "<a href='" + data.csdata.jypmt + "' target='_blank'>" + "查看经营平面图" + "</a>";
        data.csdata.yzxkz = "<a href='" + data.csdata.yzxkz + "' target='_blank'>" + "查看邮政许可证" + "</a>";
        padBackData(data.csdata, $('#shop_form', $dialog)); //回填物流信息
    };
    $.ajax(opt);

    //#修改信息服务
    $('#modify', $dialog).click(function() {
        var btns = new Array();
        var mov = map.getOverlayById(param.id);
        mov.moveable = true;//是否可以拖动
        if (f = !f) {
            $("input").removeAttr("disabled");
            $('#gsxkz_pic, #ysxkz_pic,#ajhgz_pic,#jypmt_pic,#yzxkz_pic', $dialog).show();
            $(this).html("保存");
        } else {
            f = !f;
            $('.required').each(function(key, value) {
                btns[key] = $(this).val();
                if (btns[key] != null) {
                    $('#modify').html("保存");
                }
            });
            if ($("#shop_form", $dialog).valid()) {
                fileOptions.putForm($('#shop_form', $dialog));       //添加表单内容
                fileOptions.setService('P43002');
                fileOptions.put("id", param.id);
                fileOptions.put('jd', mov.point.x);//传递经度参数
                fileOptions.put('wd', mov.point.y);//传递维度参数
                fileOptions.put("gsxkz", $('#gsxkz a').attr("href"));
                fileOptions.put("ajhgz", $('#ajhgz a').attr("href"));
                fileOptions.put("jypmt", $("#jypmt a").attr("href"));
                fileOptions.put("ysxkz", $("#ysxkz a").attr("href"));
                fileOptions.put("yzxkz", $("#yzxkz a").attr("href"));
                fileOptions.sus = function(data) {
                    hidePic();
                    alertMsg.correct("修改成功");
                    $('#xiye').text(1);
                    getCS(hy, mc, 1);
                };
                fileOptions.after = function(c, d) {
                    console.log(c);
                };
                fileOptions.send();
            }
        }
    });
    //#删除信息服务
    $('#del', $dialog).click(function() {
        if (param.id != null) {
            alertMsg.confirm("确定要删除改物流公司吗？", {"okCall": function() {
                    $("input", $dialog).removeAttr("disabled");
                    var o = new AjaxOptions();
                    o.put("gsxkz", $('#gsxkz a').html());
                    o.put("ajhgz", $('#ajhgz a').html());
                    o.put("jypmt", $("#jypmt a").html());
                    o.put("ysxkz", $("#ysxkz a").html());
                    o.put("yzxkz", $("#yzxkz a").html());
                    o.put("id", param.id);
                    o.put("service_code", "P43001");
                    o.sus = function() {
                        alertMsg.correct("删除成功了！");
                        getCS(hy, mc, 1);
                        $('#xiye').text(1);
                        $('#close', $dialog).trigger("click");
                    };
                    $.ajax(o);
                }
            });
        } else {
            alertMsg.error("没有找到该数据");
        }
    });
    function hidePic() {
        $('#gsxkz_pic, #ysxkz_pic,#ajhgz_pic,#jypmt_pic,#yzxkz_pic', $dialog).hide();
    }
    //需要在页面加载完成时加载文件拖拽div，不同于AjaxOptions对象
    var fileOptions = new FileOptions($('#pic_gsxkz', $dialog), $('#pic_ysxkz', $dialog), $('#pic_ajhgz', $dialog), $('#pic_jypmt', $dialog), $('#pic_yzxkz', $dialog));
    fileOptions.readFile = function(id, files) {      //加载文件的回调函数，可在该函数中进行文件格式与大小校验
        for (var i = 0; i < files.length; i++) {
            console.log(files[i].name + '---' + files[i].size);
            if (files[i].size > 5 * 1024 * 1024) {
                alertMsg.error(files[i].name + ' 文件大于是5M');
                return false;
            } else if (files[i].size == 0) {
                return false;
            }
        }
        return true;        //返回false时将中止文件加载，需要给出提示
    };

}).call();


