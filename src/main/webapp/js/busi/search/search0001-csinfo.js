/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    $.pdialog.closeCurrent();
    var searchData;
    var $dialog = $("body").data('search_cs_info');
//    var $dialog = $.pdialog.getCurrent();
    var param = $dialog.data('param'); //父窗口传递的参数
    console.log(json2string(param) + "[][][][][][][][---------");
    getResult();
    function getResult() {
        // '分页查询', 显示全部数据
        $('#ssqbxx', $dialog).cutPage({
            hy: param.hyfl,
            mc: param.hymc,
            service_code: 'S40001',
            page_size: 15,
            page: 1
        }, function (data) {
            searchData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i];     // 获取到table每一行数据
                item.name_link = $('<a/>').attr({
                    "hyid": item.id,
                    "hylb": item.hylb,
                    "hymc": item.mc,
                }).addClass("xq-link").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
                item.map_link = $('<a/>').attr({
                    "hyid": item.id,
                    "hylb": item.hylb,
                    "jd": item.jd,
                    "wd": item.wd,
                    "hymc": item.mc,
                    "dz": item.dz
                }).addClass("map-link").css({"cursor": "pointer", "color": "red"}).html('进入地图');
            }
            setTimeout(function () {
                $(".xq-link").unbind("click").bind("click", function (e) {
                    openDetail($(this).attr('hylb'), $(this).attr('hyid'), $(this).attr('hymc'));
                });
            }, 50);
            setTimeout(function () {
                $(".map-link").unbind("click").bind("click", function (e) {
                    locationSearch($(this).attr("hyid"), $(this).attr("jd"), $(this).attr("wd"), $(this).attr("hymc"), $(this).attr("dz"), $(this).attr("hylb"));
//                    setTimeout(function () {
//                        $('a.minimize', $dialog).click();
//                    }, 50);
                });
            }, 100);
        });
    }
    $('#delete', $dialog).on('click', function () {
        var rowData = $(this).getRow();
        if (rowData) {
            if (rowData.id) {
                alertMsg.confirm("确定要删除该记录吗？", {"okCall": function () {
                        var o = new AjaxOptions();
                        o.put("id", rowData.id);
                        o.put('service_code', 'P00000');//删除社区建筑信息
                        o.put('hylb', rowData.hylb);
                        o.sus = function (data) {
                            alertMsg.correct("删除成功");
                            getResult();
                            $('#close', $dialog).trigger("click");
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
    $('#biaoji', $dialog).on('click', function () {
        if (searchData.length) {
            alertMsg.confirm("确定要全部标记到地图上吗？如果数据过多，可能需要等待一段时间", {"okCall": function () {
                    for (var i = 0; i < searchData.length; i++) {
                        var item = searchData[i]; // 获取到table每一行数据     
                        locationSearch(item.id, item.jd, item.wd, item.mc, item.dz, item.hylb);
                    }
                }
            });
        }
        else {
            alertMsg.warn("没有任何数据！");
        }
    });
})();