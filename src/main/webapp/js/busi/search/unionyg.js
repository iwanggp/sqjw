/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = navTab.getCurrentPanel();
    var obj = JSON.parse(sessionStorage.unionyg);
    $('#dwmc', $dialog).html(obj['mc']);//设置标题
    var tableData; // 存放临时数据
    var keyValue = {}; // 数据索引
    var currentPage = 1;
    // '分页查询', 显示全部数据
    getyg();
    /**
     * 查询服务
     */
    $('#search-button', $dialog).on('click', function () {
        // '分页查询', 显示全部数据
        getCurrentResult();
    });
    $("#add", $dialog).click(function () {
        $.pdialog.open('page/fz/yg0001-addyg.html', 'add_yg_xx', "添加员工信息",
                {"width": 580, "height": 560, mask: true,
                    param: {sqid: obj['sq_id'], jzid: obj['jz_id'], jd: obj['jd'], wd: obj['wd'], fzid: obj['id']},
                    close: function (param) {
                        currentPage = 1;
                        getyg();
                        return true;
                    }
                });
    });
    $('#edit', $dialog).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            $.pdialog.open('page/fz/yg0001-updateyg.html', 'mod_yg_info11', '员工信息修改', {
                width: 600,
                height: 380,
                param: {row: rowData},
                close: function (param) {
                    if (param.isFlush) {
                        var index = keyValue[param.row.id];
                        tableData[index] = param.row;
                        padBackTable(tableData, $('#yginfos', $dialog));
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
                    currentPage = parseInt(currentPage / 30) + 1;
                    if (oid) {
                        var o = new AjaxOptions();
                        o.put("id", oid);
                        o.put('service_code', 'P30007'); //删除社区建筑信息
                        o.sus = function (data) {
                            alertMsg.correct("删除成功");
                            getyg();
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
            alertMsg.confirm("确定要删除该员工信息吗！", {"okCall": function () {
                    $mychecked.each(function () {
                        var oid = $(this).attr('id');
                        currentPage = $(this).attr('cut_row');
                        if (oid) {
                            var o = new AjaxOptions();
                            o.put("id", oid);
                            o.put('service_code', 'P30007'); //删除社区建筑信息
                            o.sus = function (data) {
                                alertMsg.correct("删除成功");
                                $('#close', $dialog).trigger("click");
                            };
                            $.ajax(o);
                        } else {
                            alertMsg.error("没有找到该数据");
                        }
                    });
                    currentPage = parseInt(currentPage / 30) + 1;
                    getyg();
                }
            });
        } else {
            alertMsg.warn("请先勾选至少一条数据！");
        }
    });

    function getyg() {
        $('#yginfos', $dialog).cutPage({
            yg_fz_id: obj['id'],
            service_code: 'S30006',
            page_size: 30,
            page: currentPage
        }, function (data) {
            tableData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                keyValue[item["id"]] = i;
                item.xz = $('<input type="checkbox"/>').attr({
                    "id": item.id,
                    "cut_row": item.cut_row,
                    "checked": false
                }).css({"cursor": "pointer"});
            }
        });
    }
    function getCurrentResult() {
        $('#yginfos', $dialog).cutPage({
            yg_fz_id: obj['id'],
            sfid: $('#sfzh', $dialog).val(),
            xm: $('#xm', $dialog).val(),
            jtdz: $('#dz', $dialog).val(),
            xb: $('#xb', $dialog).val(),
            service_code: 'S50002',
            page_size: 30
        }, function (data) {
//            searchData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                item.xz = $('<input type="checkbox"/>').attr({
                    "id": item.id,
                    "cut_row": item.cut_row,
                    "checked": false
                }).css({"cursor": "pointer"});
            }
        });
    }
}).call();
