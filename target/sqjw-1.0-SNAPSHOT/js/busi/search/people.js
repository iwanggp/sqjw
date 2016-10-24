/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var f = false; //定义一个开关变量
    var $dialog1 = navTab.getCurrentPanel();
    initParaSelect('za_people.xb', $('#xb', $dialog1));
    initParaSelect('za_people.tx', $('#tx', $dialog1));
    initParaSelect('za_people.lx', $('#lx', $dialog1));
    initParaSelect('za_people.ky', $('#ky', $dialog1));
    initParaSelect('za_people.fbyqk', $('#fbyqk', $dialog1));
    initParaSelect('za_people.grzc', $('#grzc', $dialog1));
    initParaSelect('za_people.ryxz', $('#ryxz', $dialog1));
    initParaSelect('za_people.jzsy', $('#jzsy', $dialog1));
    initParaSelect('za_people.mz', $('#mz', $dialog1));
    initParaSelect('za_people.whcd', $('#whcd', $dialog1));
    initParaSelect('za_people.zzmm', $('#zzmm', $dialog1));
    initParaSelect('za_people.hkszdlx_dm', $('#hkszdlx_dm', $dialog1));
    initParaSelect('za_people.hklb_dm', $('#hklb_dm', $dialog1));
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#fwdw_jws', $dialog1));
    initParaSelect('za_people.hyzk_dm', $('#hyzk_dm', $dialog1));
    initParaSelect('za_people.hklb_dm', $('#hklb_dm', $dialog1));
    initParaSelect('za_people.xzqh_hj', $('#xzqh_hj', $dialog1));
    initParaSelect('za_people.xzqh_hj', $('#fwdw_xzqh', $dialog1));
    $('select', $dialog1).attr("disabled", "disabled");
    var obj = JSON.parse(sessionStorage.unionyg);
    var lrryid = obj.lrryid;
    var o = new AjaxOptions();
    o.put("service_code", "S88007");
    o.put("lrryid", lrryid);
    o.sus = function (data) {
        padBackData(data.jzdata, $('#info', $dialog1)); //回填人员居住详细信息
        padBackData(data.gzdata, $('#info', $dialog1)); //回填人员工作详细信息
        padBackData(data.jhxxdata, $('#info', $dialog1)); //回填人员计划生育详细信息
        padBackData(data.sbdata, $('#info', $dialog1)); //回填人员社保详细信息
    };
    $.ajax(o);
    padBackData(obj, $('#info', $dialog1)); //回填人员详细信息
    //#修改信息服务
    $('#modify', $dialog1).click(function () {
        var btns = new Array();
        if (f = !f) {
            $(":input", $dialog1).removeAttr("disabled");
            $(this).html("保存");
        } else {
            f = !f;
            $('.required', $dialog1).each(function (key, value) {
                btns[key] = $(this).val();
                if (btns[key] != null) {
                    $('#modify').html("保存");
                }
            });
            if ($("#shop_form", $dialog1).valid()) {
                var opt = new AjaxOptions($('#shop_form', $dialog1));
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
                    $("#close", $dialog1).trigger("click");
                };
                $.ajax(opt);
            }
        }
    });
    //#删除信息服务
    $('#del', $dialog1).click(function () {
        if (param.hyid) {
            alertMsg.confirm("确定要删除该场所吗？", {"okCall": function () {
                    $("input", $dialog1).removeAttr("disabled");
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
                        $('#close', $dialog1).trigger("click");
                    };
                    $.ajax(o);
                }
            });
        } else {
            alertMsg.error("没有找到该数据");
        }
    });
}).call();


