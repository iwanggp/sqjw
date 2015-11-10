/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $("body").data('add_twck');
    var param = $dialog.data('param'); //父窗口传递的参数
    var keyValue = {}; // 数据索引
    var currentPage = 1;
    var cutPageResult = null;       //分页查询结果
    console.log('remark twck....');
    // '分页查询', 显示全部数据
    getCurrentResult();
    /**
     * 查询服务
     */
    $('#superedit', $dialog).click(function () {
        var rowData1 = $(this).getRow();
        var $row = $(this).getRowObj();
        if (rowData1) {
            $.pdialog.open('page/fz/fz0000-rkdetail.html', 'mydetail', '人员信息详情', {
                width: 600,
                height: 580,
                mask: true,
                param: {hylb: rowData1.hylb, hyid: rowData1.id},
                close: function (param) {
                    if (param.shop) {
                        $.extend(rowData1, param.shop);
                        padBackTable(cutPageResult, $('#rkinfo', $dialog));
                    }
                    return true;
                }
            });
        } else {
            alertMsg.warn("请先选择一条数据！");
        }
    });

    $('#delete', $dialog).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            alertMsg.confirm("确定要删除该员工信息吗！", {"okCall": function () {
                    var oid = rowData.id;
                    currentPage = rowData.cut_row;
                    currentPage = parseInt(currentPage / 15) + 1;
                    if (oid) {
                        var o = new AjaxOptions();
                        o.put("id", oid);
                        o.put('service_code', 'P31007'); //删除社区建筑信息
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
                            o.put('service_code', 'P31007'); //删除社区建筑信息
                            o.sus = function (data) {
                                alertMsg.correct("删除成功");
//                                $('#close', $dialog).trigger("click");
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
                service_code: 'S55551',
                fzid: param.fzid,
                page_size: 15,
                page: currentPage
            }, function (data) {
                cutPageResult = data;
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
