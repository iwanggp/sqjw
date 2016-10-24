/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = navTab.getCurrentPanel();
    var ssjws = window.ssjws;
    var zgbm = "";
    var obj = JSON.parse(sessionStorage.unionyg);
    initParaSelect('za_yg.yghy', $('#yghy', $dialog));
    initParaSelect('za_people.xb', $('#xb', $dialog));
    $('#dwmc', $dialog).html(obj['mc']);//设置标题
    var tableData; // 存放临时数据
    var keyValue = {}; // 数据索引
    zgbm = obj['zgbm'];
    var currentPage = 1;
    $('#sfzh', $dialog).change(function () {
        currentPage = 1;//当改变查询条件时默认从第一行开始查询
    });
    $('#yghy', $dialog).change(function () {
        currentPage = 1;//当改变查询条件时默认从第一行开始查询
    });
    $('#xm', $dialog).change(function () {
        currentPage = 1;//当改变查询条件时默认从第一行开始查询
    });
    $('#xb', $dialog).change(function () {
        currentPage = 1;//当改变查询条件时默认从第一行开始查询
    });
    $('#jtdz', $dialog).change(function () {
        currentPage = 1;//当改变查询条件时默认从第一行开始查询
    });
    // '分页查询', 显示全部数据
    getyg();
    /**
     * 查询服务
     */
    $('#search_yg-button', $dialog).on('click', function () {
        // '分页查询', 显示全部数据
        getCurrentResult();
    });
    $("#add", $dialog).click(function () {
        $.pdialog.open('page/fz/yg0001-addyg.html', 'add_yg_xx', "添加员工信息",
                {"width": 580, "height": 560, mask: true,
                    param: {sqid: obj['sq_id'], jzid: obj['jz_id'], jd: obj['jd'], wd: obj['wd'], fzid: obj['id'], zgbm: obj['zgbm']},
                    close: function (param) {
                        currentPage = 1;
                        getyg();
                        return true;
                    }
                });
    });
    $('#edit', $dialog).click(function () {
        var rowData1 = $(this).getRow();
        detail = true;
        if (rowData1 && detail) {
            $.pdialog.open('page/fz/yg0001-updateyg.html', 'mod_yg_info11', '员工信息修改', {
                width: 600,
                height: 380,
                mask: true,
                param: {row: rowData1},
                close: function (param) {
                    if (param.isFlush) {
                        currentPage = rowData1.cut_row;
                        currentPage = parseInt(currentPage / 30) + 1;
                        var index = keyValue[param.row.id];
                        tableData[index] = param.row;
                        padBackTable(tableData, $('#yginfos', $dialog));
                    }
                    detail = false;
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
            if (zgbm != ssjws && ssjws) {
                alertMsg.error("只能修改自己所属的警务室所属信息!");
            } else {
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
                                getCurrentResult();
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
    $('#mutdelete', $dialog).click(function () {
        var $mychecked = $("input[type='checkbox']:checked");
        var len = $mychecked.length;
        if (len) {
            if (zgbm != ssjws && ssjws) {
                alertMsg.error("只能修改自己所属的警务室所属信息!");
            } else {
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
                        getCurrentResult();
                    }
                });
            }
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
        $('#yginfos', $dialog).cutPage(form2JSON($('#search-form', $dialog), {yg_fz_id: obj['id'], service_code: 'S50002', page_size: 30, page: currentPage}), function (data) {
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
