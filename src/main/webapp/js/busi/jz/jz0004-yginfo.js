/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    var $dialog = $("body").data('add_jz_info');
    var obj = JSON.parse(sessionStorage.jz0004_yginfo);
//    $('#ygxx').click();
//    setTimeout(function () {
//        $('#ygxx', $dialog).click();
//    }, 50);
    var tableData; // 存放临时数据
    var keyValue = {}; // 数据索引
    // '分页查询', 显示全部数据
    getyg();
    $("#add", $dialog).click(function () {
        $.pdialog.open('page/fz/yg0001-addyg.html', 'add_yg_xx', "添加员工信息",
                {"width": 580, "height": 560, mask: true,
                    param: {sqid: obj['sq_id'], jzid: obj['jz_id'], jd: obj['jd'], wd: obj['wd'], fzid: obj['did']},
                    close: function (param) {
                        return true;
                    }
                });
    });
    $('#delete', $dialog).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            if (rowData.id) {
                alertMsg.confirm("确定要删除该员工信息吗！", {"okCall": function () {
                        var o = new AjaxOptions();
                        o.put("id", rowData.id);
                        o.put('service_code', 'P30007'); //删除社区建筑信息
                        o.sus = function (data) {
                            alertMsg.correct("删除成功");
                            $('#close', $dialog).trigger("click");
                            getyg();
                        };
                        $.ajax(o);
                    }
                });
            } else {
                alertMsg.error("没有找到该数据");
            }
        }
        else {
            alertMsg.warn("请先选择一条数据！");
        }
    });
    $('#edit', $dialog).click(function () {
        var rowData = $(this).getRow();
        console.log("rowDataORG = " + json2string(rowData));
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
    function getyg() {
        $('#yginfos', $dialog).cutPage({
            yg_fz_id: obj['did'],
            service_code: 'S30006',
            page_size: 20
        }, function (data) {
            tableData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                keyValue[item["id"]] = i;
            }
        });
    }
}).call();