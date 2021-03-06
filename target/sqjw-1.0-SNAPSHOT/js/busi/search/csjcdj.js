/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = navTab.getCurrentPanel();
    var obj = JSON.parse(sessionStorage.unionyg);
    var fid = obj['id'];
    $('#dwmc', $dialog).html(obj['mc']);//设置标题
    var tableData; // 存放临时数据
    var keyValue = {}; // 数据索引
    var currentPage = 1;
    // '分页查询', 显示全部数据
    getResult();
    /**
     * 查询服务
     */
    $('#search-button', $dialog).on('click', function () {
        // '分页查询', 显示全部数据
        getCurrentResult();
    });
    $("#add_j", $dialog).click(function () {
        $.pdialog.open('page/za/za0013-addjcdj.html', 'add_yg_xx', "添加检查登记信息",
                {"width": 580, "height": 460, mask: true,
                    param: {fid: fid, mc: obj['mc'], dz: obj['dz'],zgbm:obj['zgbm']},
                    close: function (param) {
                        currentPage = 1;
                        getResult();
                        return true;
                    }
                });
    });
    $('#edit_jcdj', $dialog).click(function () {
        var rowData1 = $(this).getRow();
        detail = true;
        if (rowData1 && detail) {
            $.pdialog.open('page/za/za0013-jcdjdetail.html', 'jcdj_info', rowData1.mc + '检查登记详细信息', {
                width: 600,
                height: 380,
                mask: true,
                param: {rowData: rowData1},
                close: function (param) {
                    if (param.isFlush) {
                        var index = keyValue[param.row.id];
                        tableData[index] = param.row;
                        padBackTable(tableData, $('#jcdjinfos', $dialog));
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
            alertMsg.confirm("确定要删除该检查信息吗！", {"okCall": function () {
                    var oid = rowData.id;
                    currentPage = rowData.cut_row;
                    currentPage = parseInt(currentPage / 30) + 1;
                    if (oid) {
                        var o = new AjaxOptions();
                        o.put("id", oid);
                        o.put('service_code', 'P48003'); //删除社区建筑信息
                        o.sus = function (data) {
                            alertMsg.correct("删除成功");
                            getResult();
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
    function getResult() {
        $('#jcdjinfos', $dialog).cutPage({
            fid: obj['id'],
            service_code: 'S54001',
            page_size: 30,
            page: currentPage
        }, function (data) {
            tableData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                keyValue[item["id"]] = i;
            }
        });
    }
    function getCurrentResult() {
        $('#jcdjinfos', $dialog).cutPage({
            fid: obj['id'],
            jcr: $('#jcr', $dialog).val(),
            ks: $('#ks', $dialog).val(),
            js: $('#js', $dialog).val(),
            service_code: 'S54002',
            page_size: 30
        }, function (data) {

        });
    }
}).call();
