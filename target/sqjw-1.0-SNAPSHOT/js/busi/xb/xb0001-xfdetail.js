
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
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
    opt.sus = function (data) {
        if (isNaN(data.csdata.zdbwnbt)) {
            data.csdata.zdbwnbt = "<a href='" + server_root + data.csdata.zdbwnbt + "' target='_blank'>" + "查看重点部位内部图" + "</a>";
        } else {
            data.csdata.zdbwnbt = "<span>" + "无" + "</span>"+"<a href=''>" +"</a>";
        }
        if (isNaN(data.csdata.zdbwwbt)) {
            data.csdata.zdbwwbt = "<a href='" + server_root + data.csdata.zdbwwbt + "' target='_blank'>" + "查看重点部位外部图" + "</a>";
        } else {
            data.csdata.zdbwwbt = "<span>" + "无" + "</span>"+"<a href=''>" +"</a>";
        }

        padBackData(data.csdata, $('#shop_form', $dialog)); //回填信息
    };
    $.ajax(opt);
    //#修改信息服务
    $('#modify', $dialog).click(function () {
        var btns = new Array(); //或者写成：var btns= [];
        var mov = map.getOverlayById(param.id);
        mov.moveable = true;//是否可以拖动
        if (f = !f) {
            $("input").removeAttr("disabled");
            $('#zdbwnbt_pic, #zdbwwbt_pic', $dialog).show();
            $(this).html("保存");
        } else {
            f = !f;
            $('.required').each(function (key, value) {
                btns[key] = $(this).val();
                if (btns[key] != null) {
                    $('#modify').html("保存");
                }
            });
            
         
        }
    });
    //#删除信息服务
    $('#del', $dialog).click(function () {
        if (param.id != null) {
            alertMsg.confirm("确定要删除该消防登记吗？", {"okCall": function () {
                    $("input", $dialog).removeAttr("disabled");
                    var o = new AjaxOptions();
                    o.put("zdbwnbt", $('#zdbwnbt a').html());
                    o.put("zdbwwbt", $('#zdbwwbt a').html());
                    o.put("id", param.id);
                    o.put("service_code", "P45002");
                    o.sus = function (data) {
                        alertMsg.correct("删除成功");
                        $('#xiye').text(1);
                        getCS(hy, mc, 1);
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
        $('#zdbwnbt_pic, #zdbwwbt_pic', $dialog).hide();
    }
    //需要在页面加载完成时加载文件拖拽div，不同于AjaxOptions对象
    var fileOptions = new FileOptions($('#pic_zdbwnbt', $dialog), $('#pic_zdbwwbt', $dialog));
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



