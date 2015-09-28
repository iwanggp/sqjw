/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var f = false; //定义一个开关变量
    var $dialog = $("body").data('mydetail');
    bringDialogToFront($dialog);
    initParaSelect('za_ssrk.rylb', $('#rylb', $dialog));
    initParaSelect('za_ssrk.fzgx', $('#fzgx', $dialog));
    initParaSelect('za_ssrk.fzgx', $('#fzgx', $dialog));
    initParaSelect('za_people.xb', $('#xb', $dialog));
    initParaSelect('za_people.hyzk_dm', $('#hyzk', $dialog));
    initParaSelect('za_people.mz', $('#mz', $dialog));
    initParaSelect('za_people.whcd', $('#whcd', $dialog));
    $("input", $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    $('#fzgx', $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    $('#rylb', $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    $("#fzgx", $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    $('#xb', $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    $('#hyzk', $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    $('#mz', $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    $('#whcd', $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    var param = $dialog.data('param'); //父窗口传递的参数
    var opt = new AjaxOptions();
    opt.put("service_code", "S40002");
    opt.put("hylb", param.hylb);
    opt.put("id", param.hyid);
    opt.sus = function (data) {
        padBackData(data.csdata, $('#shop_form', $dialog)); //回填物流信息
    };
    $.ajax(opt);

    //#修改信息服务
    $('#modify', $dialog).click(function () {
        var btns = new Array();
        if (f = !f) {
            $(":input", $dialog).removeAttr("disabled");
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
                opt.put("service_code", "P31008");
                opt.put("id", param.hyid);
                opt.sus = function (data) {
                    alertMsg.correct("修改成功了！");
                    var $dia = $("body").data('add_jz_info');
                    setTimeout(function () {
                        $('#rkxx', $dia).click();
//                        $('#jzxx', $dia).click();
                    }, 50);
                    $("#search_ry-button", navTab.getCurrentPanel()).trigger("click");//激发一次查询按钮的点击，实现了页面的刷新
                    $("#close", $dialog).trigger("click");
                };
                $.ajax(opt);
            }
        }
    });
    //#删除信息服务
    $('#del', $dialog).click(function () {
        if (param.hyid) {
            alertMsg.confirm("确定要删除该场所吗？", {"okCall": function () {
                    $("input", $dialog).removeAttr("disabled");
                    var o = new AjaxOptions();
                    o.put("id", param.hyid);
                    o.put("service_code", 'P43115');
                    o.sus = function () {
                        alertMsg.correct("删除成功了！");
                        var $dia = $("body").data('add_jz_info');
                        setTimeout(function () {
                            $('#rkxx', $dia).click();
//                            $('#jzxx', $dia).click();
                        }, 50);
                        $("#search_ry-button", navTab.getCurrentPanel()).trigger("click");//激发一次查询按钮的点击，实现了页面的刷新
                        $('#close', $dialog).trigger("click");
                    };
                    $.ajax(o);
                }
            });
        } else {
            alertMsg.error("没有找到该数据");
        }
    });
}).call();


