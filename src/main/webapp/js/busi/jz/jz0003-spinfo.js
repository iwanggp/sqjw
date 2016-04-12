/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
//    var $dialog = $.pdialog.getCurrent();add_jz_info
    var $dialog = $("body").data('add_jz_info');
    var param = $dialog.data('param'); //父窗口传递的参数
//    console.log(param.sqid + "---" + param.jzid + "---" + param.jd + "---" + param.wd + "chenayanggxiaooododoodododoodododdo" + param.jzmc);
//    console.log(param.jzid + "sssssssssschenayanggxiaooododoodododoodododdo");
    var tableData;      // 存放临时数据
    var keyValue = {};  // 数据索引
    var sqid = param.sqid;
    // '分页查询', 显示全部数据
    //  var sqid = param.sqid;
    // '分页查询', 显示全部数据
    serarch();
    $('#add', $dialog).click(function () {
        $.pdialog.open('page/za/za0001-addshop.html', 'add_jz_sp', '添加建筑商铺', {
            width: 600,
            height: 580,
            mask: false,
            param: {sqid: sqid, jzid: param.jzid, jd: param.jd, wd: param.wd}
        });
    });
    // 修改按钮的点击事件
//    $('#edit', $dialog).on('click', function () {
//        var rowData = $(this).getRow();
//        console.log("rowDataORG = " + json2string(rowData));
//        if (rowData) {
//            $.pdialog.open('page/add/sq0003-modjz.html', 'mod_lou_sq', '社区建筑修改', {
//                width: 600,
//                height: 380,
//                param: {row: rowData},
//                close: function (param) {
//                    if (param.isFlush) {
//                        var index = keyValue[param.row.jzid];
//                        tableData[index] = param.row;
//                        padBackTable(tableData, $('#jzinfos', $page));
//                    }
//                    return true;
//                }
//            });
//        } else {
//            alertMsg.warn("请先选择一条数据！");
//        }
//    });
//    $('#delete', $dialog).on('click', function () {
//        var rowData = $(this).getRow();
//        if (rowData) {
//            if (rowData.jzid != null) {
//                alertMsg.confirm("确定要删除该建筑吗？删除后建筑内所有信息都会删除！请谨慎操作！", {"okCall": function () {
//                        var o = new AjaxOptions();
//                        o.put("jzid", rowData.jzid);
//                        o.put('service_code', 'P30003');//删除社区建筑信息
//                        o.sus = function (data) {
//                            alertMsg.correct("删除成功");
//                            $('#close', $page).trigger("click");
//                            serarch();
//                        };
//                        $.ajax(o);
//                    }
//                });
//            } else {
//                alertMsg.error("没有找到该数据");
//            }
//        }
//        else {
//            alertMsg.warn("请先选择一条数据！");
//        }
//    });
    function serarch() {
        $('#spinfos', $dialog).cutPage({
            jzid: param.jzid,
            service_code: 'S22002',
            page_size: 20
        }, function (data) {
            tableData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i];     // 获取到table每一行数据
//                item.name_link = $('<a/>').attr({
//                    "name": data[i].spid,
//                    "jzmc": data[i].mc
//                }).addClass("check-link").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
                keyValue[item["sp_id"]] = i;
            }
        });
    }
}).call();

