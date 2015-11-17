/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var f = false; //定义一个开关变量
    var ssjws = window.ssjws;
    var zgbm = "";
    var $dialog = $.pdialog.getCurrent();
    $("input", $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    var param = $dialog.data('param'); //父窗口传递的参数
    var opt = new AjaxOptions();
    opt.put("service_code", "S44101");
    opt.put("id", param.hyid);
    opt.sus = function (data) {
        if (data.csdata) {
            padBackData(data.csdata, $('#shop_form', $dialog)); //回填表单信息
            zgbm = data.csdata.zgbm;
        } else {
            $.pdialog.closeCurrent();
            alertMsg.confirm("尚未添加该金融行业的监督信息！是否添加", {okCall: function () {//提示信息   
                    $("#jgjd", navTab.getCurrentPanel()).trigger("click");//激发一次查询按钮的点击，实现了页面的刷新
                }});
        }
    };
    $.ajax(opt);
    //#修改信息服务
    $('#modify', $dialog).click(function () {
        if (zgbm != ssjws&&ssjws) {
            alertMsg.error("只能修改自己所属的警务室所属信息!");
        } else {
            var btns = new Array();
            if (f = !f) {
                $("input", $dialog).removeAttr("disabled");
                $(this).html("保存");
            } else {
                f = !f;
                $('.required', $dialog).each(function (key, value) {
                    btns[key] = $(this).val();
                    if (btns[key] != null) {
                        $('#modify').html("保存");
                    }
                });
                if ($("#shop_form", $dialog).valid()) {
                    var opt = new AjaxOptions($('#shop_form', $dialog));
                    opt.put("service_code", "P44103");
                    opt.put("id", param.hyid);
                    opt.sus = function (data) {
                        alertMsg.correct("修改成功了！");
                        $("#close", $dialog).trigger("click");
                    };
                    $.ajax(opt);
                }
            }
        }
    });
    //#删除信息服务
    $('#del', $dialog).click(function () {
        if (param.hyid) {
            if (zgbm != ssjws&&ssjws) {
                alertMsg.error("只能删除自己所属的警务室所属信息!");
            } else {
                alertMsg.confirm("确定要删除该监督信息吗？", {"okCall": function () {
                        $("input", $dialog).removeAttr("disabled");
                        var o = new AjaxOptions();
                        o.put("id", param.hyid);
                        o.put("service_code", 'S44102');
                        o.sus = function () {
                            alertMsg.correct("删除成功了！");
                            $('#close', $dialog).trigger("click");
                        };
                        $.ajax(o);
                    }
                });
            }
        } else {
            alertMsg.error("没有找到该数据");
        }
    });
}).call();


