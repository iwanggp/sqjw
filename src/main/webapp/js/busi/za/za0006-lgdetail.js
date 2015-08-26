/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var f = false; //定义一个开关变量
    hidePic();
    var $dialog = $("body").data('mydetail');
    bringDialogToFront($dialog);
    $("input", $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    var param = $dialog.data('param'); //父窗口传递的参数
    var opt = new AjaxOptions();
    opt.put("service_code", "S40002");
    opt.put("hylb", param.hylb);
    opt.put("id", param.hyid);

    opt.sus = function (data) {
        if (isNaN(data.csdata.ajhgz)) {
            data.csdata.ajhgz = "<a href='" + server_root + data.csdata.ajhgz + "' target='_blank'>" + "查看安检合格证" + "</a>";
        } else {
            data.csdata.ajhgz = "<span>" + "无" + "</span>";
        }
        if (isNaN(data.csdata.jypmt)) {
            data.csdata.jypmt = "<a href='" + server_root + data.csdata.jypmt + "' target='_blank'>" + "查看经营平面图" + "</a>";
        } else {
            data.csdata.jypmt = "<span>" + "无" + "</span>";
        }
        if (isNaN(data.csdata.jyxkz)) {
            data.csdata.jyxkz = "<a href='" + server_root + data.csdata.jyxkz + "' target='_blank'>" + "查看经营许可证" + "</a>";
        } else {
            data.csdata.jyxkz = "<span>" + "无" + "</span>";
        }
        padBackData(data.csdata, $('#shop_form', $dialog)); //回填物流信息
    };
    $.ajax(opt);

    //#修改信息服务
    $('#modify', $dialog).click(function () {
        var btns = new Array();
        if (f = !f) {
            $("input", $dialog).removeAttr("disabled");
            $('#ajhgz_pic,#jypmt_pic,#jyxkz_pic', $dialog).show();
            $(this).html("保存");
        } else {
            f = !f;
            $('.required').each(function (key, value) {
                btns[key] = $(this).val();
                if (btns[key] != null) {
                    $('#modify').html("保存");
                }
            });
            if ($("#shop_form", $dialog).valid()) {
                fileOptions.putForm($('#shop_form', $dialog));       //添加表单内容
                fileOptions.setService('P43008');
                fileOptions.put("id", param.hyid);
                fileOptions.put("ajhgz", $('#ajhgz a').attr("href"));
                fileOptions.put("jypmt", $("#jypmt a").attr("href"));
                fileOptions.put("jyxkz", $("#jyxkz a").attr("href"));
                fileOptions.sus = function (data) {
                    hidePic();
                    alertMsg.correct("修改成功了！");
                    var page = parseInt($("#xiye").html());//获取当前的页数
                    if (isSearch) {
                        getCS('za_wb', '', page);
                    }
                    isSearch = false;
                    var $dia = $("body").data('add_jz_info');
                    setTimeout(function () {
                        $('#jzxx', $dia).click();
                    }, 0);
                    $('#close', $dialog).trigger("click");
                };
                fileOptions.after = function (c, d) {
                    console.log(c);
                };
                fileOptions.send();
            }
        }
    });
    //#删除信息服务
    $('#del', $dialog).click(function () {
        if (param.hyid != null) {
            alertMsg.confirm("确定要删除该旅馆吗？", {"okCall": function () {
                    $("input", $dialog).removeAttr("disabled");
                    var o = new AjaxOptions();
                    o.put("ajhgz", $('#ajhgz a').html());
                    o.put("jypmt", $("#jypmt a").html());
                    o.put("jyxkz", $("#jyxkz a").html());
                    o.put("id", param.hyid);
                    o.put("service_code", 'P43007');
                    o.sus = function (data) {
                        alertMsg.correct("删除成功了！");
                        var page = parseInt($("#xiye").html());//获取当前的页数
                        if (isSearch) {
                            getCS('za_wb', '', page);
                        }
                        isSearch = false;
                        var $dia = $("body").data('add_jz_info');
                        setTimeout(function () {
                            $('#jzxx', $dia).click();
                        }, 0);
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
        $('#ajhgz_pic,#jypmt_pic,#jyxkz_pic', $dialog).hide();
    }
    //需要在页面加载完成时加载文件拖拽div，不同于AjaxOptions对象
    var fileOptions = new FileOptions($('#pic_ajhgz', $dialog), $('#pic_jypmt', $dialog), $('#pic_jyxkz', $dialog));
    fileOptions.readFile = function (id, files) {      //加载文件的回调函数，可在该函数中进行文件格式与大小校验
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


