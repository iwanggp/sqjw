/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var f = false; //定义一个开关变量
    var $dialog = navTab.getCurrentPanel();
    initParaSelect('za_people.xb', $('#xb', $dialog));
    initParaSelect('za_people.tx', $('#tx', $dialog));
    initParaSelect('za_people.lx', $('#lx', $dialog));
    initParaSelect('za_people.ky', $('#ky', $dialog));
    initParaSelect('za_people.fbyqk', $('#fbyqk', $dialog));
    initParaSelect('za_people.grzc', $('#grzc', $dialog));
    initParaSelect('za_people.jzsy', $('#jzsy', $dialog));
    initParaSelect('za_people.mz', $('#mz', $dialog));
    initParaSelect('za_people.whcd', $('#whcd', $dialog));
    initParaSelect('za_people.zzmm', $('#zzmm', $dialog));
    initParaSelect('za_people.hklb_dm', $('#hklb_dm', $dialog));
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#fwdw_jws', $dialog));
    initParaSelect('za_people.hyzk_dm', $('#hyzk_dm', $dialog));
    initParaSelect('za_people.hklb_dm', $('#hklb_dm', $dialog));
    initParaSelect('za_people.xzqh_hj', $('#xzqh_hj', $dialog));
    initParaSelect('za_people.xzqh_hj', $('#fwdw_xzqh', $dialog));
    $('select', $dialog).attr("disabled", "disabled");
    var obj = JSON.parse(sessionStorage.unionyg);
    var opt = new AjaxOptions();
//    opt.put("service_code", "S88003");
//    opt.sus = function (data) {
    padBackData(obj, $('#info', $dialog)); //回填物流信息
//    };
//    $.ajax(opt);

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
                    $("#search-button", navTab.getCurrentPanel()).trigger("click");//激发一次查询按钮的点击，实现了页面的刷新
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
                        $("#search-button", navTab.getCurrentPanel()).trigger("click");//激发一次查询按钮的点击，实现了页面的刷新
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


