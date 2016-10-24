/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $("body").data('add_ssry');
    var param = $dialog.data('param'); //父窗口传递的参数
    var keyValue = {}; // 数据索引
    var currentPage = 1;
    // '分页查询', 显示全部数据
    getCurrentResult();
    /**
     * 查询服务
     */
    $('#superedit', $dialog).click(function () {
        var rowData1 = $(this).getRow();
        if (rowData1) {
            $.pdialog.open('page/fz/rk0004-ssrydetail.html', 'ssrydetail', '人员信息详情', {
                width: 600,
                height: 380,
                mask: true,
                param: {data: rowData1},
                close: function (param) {
                    getCurrentResult();
                    return true;
                }
            });
        } else {
            alertMsg.warn("请先选择一条数据！");
        }
    });
    $('#add', $dialog).click(function () {
        $.pdialog.open('page/fz/rk0004-addssry.html', 'add_ssry_add', '添加跟随人员', {
            width: 600,
            height: 380,
            mask: true,
            param: {gssfzh: param.gssfzh},
            close: function (param) {
                getCurrentResult();
                return true;
            }
        });

    });
    $('#delete', $dialog).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            alertMsg.confirm("确定要删除该人员信息吗！", {"okCall": function () {
                    var oid = rowData.id;
                    currentPage = rowData.cut_row;
                    currentPage = parseInt(currentPage / 15) + 1;
                    if (oid) {
                        var o = new AjaxOptions();
                        o.put("id", oid);
                        o.put('service_code', 'P31107'); //删除社区建筑信息
                        o.sus = function (data) {
                            alertMsg.correct("删除成功");
                            getCurrentResult();
                            $('#close', $dialog).trigger("click");
                        };
                        $.ajax(o);
                    } else {
                        alertMsg.error("没有找到该数据");
                    }
                }
            });
        } else {
            alertMsg.warn("请先选择至少一条数据！");
        }
    });
    $('#mutdelete', $dialog).click(function () {
        var $mychecked = $("input[type='checkbox']:checked");
        var len = $mychecked.length;
        if (len) {
            alertMsg.confirm("确定要删除这些人员信息吗！", {"okCall": function () {
                    $mychecked.each(function () {
                        var oid = $(this).attr('id');
                        currentPage = $(this).attr('cut_row');
                        if (oid) {
                            var o = new AjaxOptions();
                            o.put("id", oid);
                            o.put('service_code', 'P31107'); //删除社区建筑信息
                            o.sus = function (data) {
                                alertMsg.correct("删除成功");

                                $('#close', $dialog).trigger("click");
                            };
                            $.ajax(o);
                        } else {
                            alertMsg.error("没有找到该数据");
                        }
                    });
                    currentPage = parseInt(currentPage / 15) + 1;
                    getCurrentResult();
                }
            });
        } else {
            alertMsg.warn("请先勾选至少一条数据！");
        }
    });
    function getCurrentResult() {
        setTimeout(function () {
            $('#rkinfo', $dialog).cutPage({
                service_code: 'S55553',
                gssfzh: param.gssfzh,
                page_size: 15,
                page: currentPage
            }, function (data) {
                for (var i = 0; i < data.length; i++) {
                    var item = data[i]; // 获取到table每一行数据
                    item.xz = $('<input type="checkbox"/>').attr({
                        "id": item.id,
                        "cut_row": item.cut_row,
                        "checked": false
                    }).css({"cursor": "pointer"});
                }
            });
        }, 10);
    }
}).call();
