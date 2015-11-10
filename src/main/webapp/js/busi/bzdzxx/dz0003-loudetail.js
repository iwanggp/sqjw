
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var f = false; //定义一个开关变量
    var $dialog = $("body").data('mydetail');
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#zgbm', $dialog));
    initParaSelect('jwsq_bzdzxx.xzqhdm', $('#xzqh', $dialog));
    var param = $dialog.data('param'); //父窗口传递的参数
    var sqname = "";//社区的名称
    var opt = new AjaxOptions();
    opt.put("service_code", "S31004");
    opt.put("jzid", param.hyid);
    $('#zgbm', $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    $("input", $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    opt.sus = function (data) {
        padBackData(data.jzdata, $('#jz_form', $dialog)); //回填信息
    };
    $.ajax(opt);
    //#修改信息服务
    $('#add_modify', $dialog).click(function () {
        var btns = new Array();
//        var mov = map.getOverlayById(param.sqid);
//        mov.moveable = true;//是否可以拖动
        if (f = !f) {
            $(":input", $dialog).removeAttr("disabled");
            $(this).html("保存");
        } else {
            f = !f;
            $('.required').each(function (key, value) {
                btns[key] = $(this).val();
                if (btns[key] != null) {
                    $('#add_modify').html("保存");
                }
            });
            if ($("#jz_form", $dialog).valid()) {
                var o = new AjaxOptions($('#jz_form', $dialog));
                o.put("service_code", "P30002");
                o.put("jzid", param.hyid);
                o.sus = function (data) {
                    alertMsg.correct("修改成功");
                    $("#search-button11", navTab.getCurrentPanel()).trigger("click");//激发一次查询按钮的点击，实现了页面的刷新
                    $("#add_close", $dialog).trigger("click");
                };
                $.ajax(o);
            }

        }
    });
    //#删除信息服务
    $('#del', $dialog).click(function () {
        if (param.jzid != null) {
            alertMsg.confirm("确定要删除该社区吗？如果删除则该社区所有的信息都将删除！请谨慎操作！", {"okCall": function () {
                    $("input", $dialog).removeAttr("disabled");
                    var o = new AjaxOptions();
                    o.put("jzid", param.jzid);
                    o.put("service_code", "P30003");
                    o.sus = function (data) {
                        alertMsg.correct("删除成功");
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
    $('#info', $dialog).click(function () {
        $.pdialog.open("page/add/sq0001-sqinfo.html", 'add_sq_info1', sqname, {width: 970, height: 600,
            param: {sqid: param.sqid, jd: param.jd, wd: param.wd},
            close: function () {
//               $.pdialog.close('add_sq_info');
//               $.pdialog.closeCurrent();
                return true;//这样才能关闭窗口
            }
        });//打开树形菜单
    });
}).call();





