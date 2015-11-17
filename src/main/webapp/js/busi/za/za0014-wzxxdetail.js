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
    padBackData(param.rowData, $('#shop_form', $dialog));
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
                    opt.put("service_code", "P49004");
                    opt.put("id", param.rowData.id);
                    opt.sus = function (data) {
                        alertMsg.correct("修改成功了！");
                        $("#search-button", navTab.getCurrentPanel()).trigger("click");//激发一次查询按钮的点击，实现了页面的刷新
                        $("#close", $dialog).trigger("click");
                    };
                    $.ajax(opt);
                }
            }
        }
    });
    $('#del', $dialog).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            if (zgbm != ssjws&&ssjws) {
                alertMsg.error("只能删除自己所属的警务室所属信息!");
            } else {
                alertMsg.confirm("确定要删除该检查信息吗！", {"okCall": function () {
                        var oid = param.rowData.id;
                        alert(oid);
                        currentPage = rowData.cut_row;
                        currentPage = parseInt(currentPage / 30) + 1;
                        if (oid) {
                            var o = new AjaxOptions();
                            o.put("id", oid);
                            o.put('service_code', 'P48003'); //删除社区建筑信息
                            o.sus = function (data) {
                                alertMsg.correct("删除成功");
                                $("#search-button", navTab.getCurrentPanel()).trigger("click");//激发一次查询按钮的点击，实现了页面的刷新
                                $('#close', $dialog).trigger("click");
                            };
                            $.ajax(o);
                        } else {
                            alertMsg.error("没有找到该数据");
                        }
                    }
                });
            }
        } else {
            alertMsg.warn("请先选择至少一条数据！");
        }
    });
}).call();


