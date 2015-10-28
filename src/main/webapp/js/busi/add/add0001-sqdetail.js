
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var f = false; //定义一个开关变量
    var $dialog = $("body").data('detailSq');
    initParaSelect('jw_sq.lb', $('#sqlb', $dialog));
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#zgbm', $dialog));
    initParaSelect('jwsq_bzdzxx.xzqhdm', $('#xzqh', $dialog));
    var param = $dialog.data('param'); //父窗口传递的参数
    console.log(json2string(param) + 'hahahahahhaha');
    var sqname = "";//社区的名称
    var opt = new AjaxOptions();
    opt.put("service_code", "S21004");
    opt.put("sqid", param.sqid);
    $('#sqlb', $dialog).attr("disabled", "disabled");
    $('#fw', $dialog).attr("disabled", "disabled");
    $("input", $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    opt.sus = function (data) {
        padBackData(data.sqdata, $('#sq_form', $dialog)); //回填信息
        sqname = data.sqdata.sqmc;
    };
    $.ajax(opt);
    //#修改信息服务
    $('#add_modify', $dialog).click(function () {
        var btns = new Array();
        var mov = map.getOverlayById(param.sqid);
        mov.moveable = true;//是否可以拖动
        if (f = !f) {
            $(":input", $dialog).removeAttr("disabled");
            $(this).html("保存");
        } else {
            f = !f;
            $('.required').each(function (key, value) {
                btns[key] = $(this).val();
                if (btns[key] != null) {
                    $('#add_modify').html("保存");
                    mov.moveable = false;
                }
            });
            if ($("#sq_form", $dialog).valid()) {
                var fw = $('#fw', $dialog).val();
                var o = new AjaxOptions($('#sq_form', $dialog));
                o.put("sqid", param.sqid);
                o.put("service_code", "P21006");
                o.put("sqid", param.sqid);
                o.put("fw", fw);
                o.put('jd', mov.point.x);//传递经度参数
                o.put('wd', mov.point.y);//传递维度参数
                o.sus = function (data) {
                    alertMsg.correct("修改成功");
                    $("#close", $dialog).trigger("click");
                    $('#xiye').text(1);
                    getSq(mc, 1);
                };
                $.ajax(o);
            }

        }
    });
    //#删除信息服务
    $('#del', $dialog).click(function () {
        if (param.sqid != null) {
            alertMsg.confirm("确定要删除该社区吗？如果删除则该社区所有的信息都将删除！请谨慎操作！", {"okCall": function () {
                    $("input", $dialog).removeAttr("disabled");
                    var o = new AjaxOptions();
                    o.put("sqid", param.sqid);
                    o.put("service_code", "P21005");
                    o.sus = function (data) {
                        alertMsg.correct("删除成功");
                        $('#xiye').text(1);
                        getSq(mc, 1);
                        $('#close', $dialog).trigger("click");
                    };
                    $.ajax(o);
                }
            });
        } else {
            alertMsg.error("没有找到该数据");
        }
    });
    $('#info', $dialog).click(function () {
        $.pdialog.open("page/add/sq0001-sqinfo.html", 'add_sq_info', sqname, {width: 970, height: 600,
            param: {sqid: param.sqid, jd: param.jd, wd: param.wd},
            close: function () {
//               $.pdialog.close('add_sq_info');
//               $.pdialog.closeCurrent();
                return true;//这样才能关闭窗口
            }
        });//打开树形菜单
    });
}).call();





