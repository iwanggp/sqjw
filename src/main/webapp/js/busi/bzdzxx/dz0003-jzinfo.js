/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $page = navTab.getCurrentPanel();
    var obj = JSON.parse(sessionStorage.sqid);
    var sqid = obj['sqid'];
    var zgbm = obj['zgbm'];
    $('#sqmc', $page).html(obj['sqmc']);//设置标题
    getSearchCurrentResult();
    /**
     * 查询服务
     */
    $('#search-button11', $page).on('click', function () {
        // '分页查询', 显示全部数据
        getSearchCurrentResult();
    });
    $('#add', $page).click(function () {
        $.pdialog.open('page/bzdzxx/dz0003-addlou.html', 'add_lou_dz', '添加社区建筑', {
            width: 600,
            height: 380,
            mask: false,
            param: {sqid: sqid, zgbm: zgbm},
            close: function () {
                return true;
            }
        });
    });
//    // 修改模板按钮的点击事件
//    $('#edit', $page).on('click', function () {
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
//                    map.deleteOverlayById("udlou");
//                    return true;
//                }
//            });
//        } else {
//            alertMsg.warn("请先选择一条数据！");
//        }
//    });
//    $('#delete', $page).on('click', function () {
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
    function getSearchCurrentResult() {
        $('#jzinfos', $page).cutPage(form2JSON($('#search-form', $page), {service_code: 'S58002', page_size: 30, page: 1, sqid: sqid}), function (data) {
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                item.name_link = $('<a/>').attr({
                    "name": data[i].jzid,
                    "jzmc": data[i].mc,
                    "jd": data[i].jd,
                    "wd": data[i].wd
                }).addClass("check-link").css({"cursor": "pointer", "color": "blue"}).html('查看建筑内信息');
                item.xq_detail = $('<a/>').attr({
                    "jzid": data[i].jzid,
                    "jzmc": data[i].mc,
                }).addClass("xq-link1").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
                item.map_link = $('<a/>').attr({
                    "hyid": item.jzid,
                    "hylb": "sqjz",
                    "jd": item.jd,
                    "wd": item.wd,
                    "hymc": item.mc,
                    "dz": item.dz
                }).addClass("map-link").css({"cursor": "pointer", "color": "red"}).html('进入地图');
            }
            setTimeout(function () {
                $(".xq-link1").unbind("click").bind("click", function (e) {
                    $.pdialog.open("page/bzdzxx/dz0003-loudetail.html", 'mydetail', $(this).attr('jzmc'), {width: 600,
                        height: 560,
                        param: {jzid: $(this).attr('jzid'), jzmc: $(this).attr('jzmc')},
                        close: function () {
                            return true;//这样才能关闭窗口
                        }
                    });
                });
            }, 500);
            setTimeout(function () {
                $(".check-link").unbind("click").bind("click", function (e) {
//                    $('#jbsxBoxjzinfo', $page).loadUrl('page/bzdzxx/dz0004-jzinfo.html', {}, function () {
//                        $('#jzinfo', $page).show().trigger('click');
//                        $('#jbsxBoxjzinfo', $page).find("[layoutH]").layoutH();
//                    });
                    $.pdialog.open("page/jz/jz0002-jzinfo.html", 'add_jz_info', $(this).attr('jzmc'), {width: 1300,
                        height: 560,
                        param: {sqid: sqid, jzid: $(this).attr('name'), jd: $(this).attr('jd'), wd: $(this).attr('wd'), jzmc: $(this).attr('jzmc')},
                        close: function () {
                            return true;//这样才能关闭窗口
                        }
                    });
                });
            }, 50);
            setTimeout(function () {
                $(".map-link").unbind("click").bind("click", function () {
                    map.clearAllOverlays();
                    locationSearch($(this).attr("hyid"), $(this).attr("jd"), $(this).attr("wd"), $(this).attr("hymc"), $(this).attr("dz"), $(this).attr("hylb"));
                    $('.home_icon').click();
                });
            }, 100);
        });
    }
})();

