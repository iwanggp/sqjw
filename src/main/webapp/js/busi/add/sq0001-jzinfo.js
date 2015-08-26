/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $page = $("body").data('add_sq_info');
    var param = $page.data('param'); //父窗口传递的参数
    var tableData;      // 存放临时数据
    var keyValue = {};  // 数据索引
    var sqid = param.sqid;
    // '分页查询', 显示全部数据
    serarch();
    $('#add', $page).click(function () {
        $.pdialog.open('page/add/sq0002-addlou.html', 'add_lou_sq', '添加社区建筑', {
            width: 600,
            height: 380,
            mask: false,
            param: {sqid: sqid, jd: param.jd, wd: param.wd},
            close: function () {
                serarch();
                return true;
            }
        });
    });
    // 修改模板按钮的点击事件
    $('#edit', $page).on('click', function () {
        var rowData = $(this).getRow();
        console.log("rowDataORG = " + json2string(rowData));
        if (rowData) {
            $.pdialog.open('page/add/sq0003-modjz.html', 'mod_lou_sq', '社区建筑修改', {
                width: 600,
                height: 380,
                param: {row: rowData},
                close: function (param) {
                    if (param.isFlush) {
                        var index = keyValue[param.row.jzid];
                        tableData[index] = param.row;
                        padBackTable(tableData, $('#jzinfos', $page));
                    }
                    return true;
                }
            });
        } else {
            alertMsg.warn("请先选择一条数据！");
        }
    });
    $('#delete', $page).on('click', function () {
        var rowData = $(this).getRow();
        if (rowData) {
            if (rowData.jzid != null) {
                alertMsg.confirm("确定要删除该建筑吗？删除后建筑内所有信息都会删除！请谨慎操作！", {"okCall": function () {
                        var o = new AjaxOptions();
                        o.put("jzid", rowData.jzid);
                        o.put('service_code', 'P30003');//删除社区建筑信息
                        o.sus = function (data) {
                            alertMsg.correct("删除成功");
                            $('#close', $page).trigger("click");
                            serarch();
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
    function serarch() {
        $('#jzinfos', $page).cutPage({
            sqid: sqid,
            service_code: 'S22001',
            page_size: 20
        }, function (data) {
            tableData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i];     // 获取到table每一行数据
                item.name_link = $('<a/>').attr({
                    "name": data[i].jzid,
                    "jzmc": data[i].mc
                }).addClass("check-link").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
                keyValue[item["jzid"]] = i;
            }
        });
    }

    $page.on("click", ".check-link", function () {
        console.log($(this).attr('name') + sqid + "---" + param.jd + "-----" + param.wd + "jzinfos......");
        $.pdialog.open("page/jz/jz0002-jzinfo.html", 'add_jz_info', $(this).attr('jzmc'), {width: 1000,
            height: 650,
            param: {sqid: sqid, jzid: $(this).attr('name'), jd: param.jd, wd: param.wd, jzmc: $(this).attr('jzmc')},
            close: function () {
                return true;//这样才能关闭窗口
            }
        });
    });
})();

