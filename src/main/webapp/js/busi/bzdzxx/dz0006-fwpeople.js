/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = navTab.getCurrentPanel();
    initParaSelect('za_people.ryxz', $('#ryxz_s', $dialog));
    initParaSelect('za_people.xb', $('#xb_s', $dialog));
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#tbdw_dm', $dialog));
    var obj = JSON.parse(sessionStorage.fwbmid);
    var fwbm = obj['id'];
    getSearchCurrentResult();
//    $('#rylb', $dialog).change(function () {
//        currentPage = 1;//当改变查询条件时默认从第一行开始查询
//    });
//    $('#zgbm', $dialog).change(function () {
//        currentPage = 1;//当改变查询条件时默认从第一行开始查询
//    });
//    $('#sfzh', $dialog).change(function () {
//        currentPage = 1;//当改变查询条件时默认从第一行开始查询
//    });
//    $('#xm', $dialog).change(function () {
//        currentPage = 1;//当改变查询条件时默认从第一行开始查询
//    });
//    $('#xb', $dialog).change(function () {
//        currentPage = 1;//当改变查询条件时默认从第一行开始查询
//    });
//    $('#csks', $dialog).change(function () {
//        currentPage = 1;//当改变查询条件时默认从第一行开始查询
//    });
//    $('#csjs', $dialog).change(function () {
//        currentPage = 1;//当改变查询条件时默认从第一行开始查询
//    });
//    $('#ks', $dialog).change(function () {
//        currentPage = 1;//当改变查询条件时默认从第一行开始查询
//    });
//    $('#js', $dialog).change(function () {
//        currentPage = 1;//当改变查询条件时默认从第一行开始查询
//    });
//    var tableData; // 存放临时数据
//    var currentPage = 1;
//    // '分页查询', 显示全部数据
//    getSearchCurrentResult();
    /**
     * 查询服务
     */
    $('#search_ry-button', $dialog).on('click', function () {
        // '分页查询', 显示全部数据
        getCurrentResult();
    });
    $('#lrry', $dialog).click(function () {
        $('select', $dialog).removeAttr('disabled');
    });
    // 查看人员信息
    $('#look', $dialog).on('click', function () {
        var rowData11 = $(this).getRow();
        if (rowData11) {
            sessionStorage.unionyg = JSON.stringify(rowData11);//放到session中暂存一段时间
            $('#jbsxBoxyg', $dialog).loadUrl('page/search/people.html', {}, function () {
                $('#unionyg', $dialog).show().trigger('click');
                $('#jbsxBoxyg', $dialog).find("[layoutH]").layoutH();
            });

        } else {
            alertMsg.warn("请先选择一条数据！");
        }
    });
    $('#superedit', $dialog).click(function () {
        var rowData11 = $(this).getRow();
        if (rowData11) {
            sessionStorage.unionyg = JSON.stringify(rowData11);//放到session中暂存一段时间
            $('#jbsxBoxyg', $dialog).loadUrl('page/search/people.html', {}, function () {
                $('#people', $dialog).show().trigger('click');
                $('#jbsxBoxyg', $dialog).find("[layoutH]").layoutH();

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
                        o.put('service_code', 'P31007'); //删除社区建筑信息
                        o.sus = function (data) {
                            alertMsg.correct("删除成功");
                            $('#search_ry-button', $dialog).trigger('click');
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
//                                $('#search_ry-button', $dialog).trigger('click');
                                $('#close', $dialog).trigger("click");
                            };
                            $.ajax(o);
                        } else {
                            alertMsg.error("没有找到该数据");
                        }
                    });
                    currentPage = parseInt(currentPage / 30) + 1;
                    $('#search_ry-button', $dialog).trigger('click');
                }
            });
        } else {
            alertMsg.warn("请先勾选至少一条数据！");
        }
    });
    function getCurrentResult() {
        $('#rkinfo', $dialog).cutPage(form2JSON($('#search-form', $dialog), {service_code: 'S88004', page_size: 30, page: currentPage}), function (data) {
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                item.xz = $('<input type="checkbox"/>').attr({
                    "id": item.id,
                    "cut_row": item.cut_row,
                    "checked": false
                }).css({"cursor": "pointer"});
                item.map_link = $('<a/>').attr({
                    "hyid": item.id,
                    "hylb": item.hylb,
                    "jd": item.jd,
                    "wd": item.wd,
                    "hymc": item.xm,
                    "dz": item.jtdz
                }).addClass("map-link").css({"cursor": "pointer", "color": "red"}).html('进入地图');
                item.info = $('<a/>').attr({
                    "sfzh": item.sfzh
                }).addClass("info-link").css({"cursor": "pointer", "color": "brown"}).html('随行人员');
                item.name_link = $('<a/>').attr({
                    "fzid": item.fzid
                }).addClass('name-link').css({"cursor": "pointer", "color": "blue"}).html('人房关联');
                setTimeout(function () {
                    $(".map-link").unbind("click").bind("click", function () {
                        map.clearAllOverlays();
                        locationSearch($(this).attr("hyid"), $(this).attr("jd"), $(this).attr("wd"), $(this).attr("hymc"), $(this).attr("dz"), $(this).attr("hylb"));
                        $('.home_icon').click();
                    });
                }, 100);
                setTimeout(function () {
                    $(".name-link").unbind("click").bind("click", function () {
                        $.pdialog.open('page/za/za0009-zjhdetail.html', 'mydetail', "人房关联",
                                {"width": 680, "height": 560, mask: true,
                                    param: {hyid: $(this).attr('fzid'),
                                        hylb: 'za_zjh'},
                                    close: function (param) {
                                        return true;
                                    }
                                });
                    });
                }, 100);
                setTimeout(function () {
                    $(".info-link").unbind("click").bind("click", function () {
                        $.pdialog.open('page/fz/rk0003-ssry.html', 'add_ssry', "查看随行人员人员",
                                {"width": 880, "height": 560, mask: true,
                                    param: {gssfzh: $(this).attr('sfzh')},
                                    close: function (param) {
                                        currentPage = 1;
                                        return true;
                                    }
                                });

                    });
                }, 100);
            }
        });
    }
    function getSearchCurrentResult() {
        $('#rkinfo', $dialog).cutPage({
            fwbm: fwbm,
            service_code: 'S88006',
            page_size: 30,
            page: 1
        }, function (data) {
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                item.xz = $('<input type="checkbox"/>').attr({
                    "id": item.lrryid,
                    "cut_row": item.cut_row,
                    "checked": false
                }).css({"cursor": "pointer"});
                item.map_link = $('<a/>').attr({
                    "hyid": item.lrryid,
                    "hylb": item.hylb,
                    "jd": item.jd,
                    "wd": item.wd,
                    "hymc": item.xm,
                    "dz": item.jtdz
                }).addClass("map-link").css({"cursor": "pointer", "color": "red"}).html('进入地图');
                item.info = $('<a/>').attr({
                    "sfzh": item.sfzh
                }).addClass("info-link").css({"cursor": "pointer", "color": "brown"}).html('随行人员');
            }
            setTimeout(function () {
                $(".map-link").unbind("click").bind("click", function () {
                    map.clearAllOverlays();
                    locationSearch($(this).attr("hyid"), $(this).attr("jd"), $(this).attr("wd"), $(this).attr("hymc"), $(this).attr("dz"), $(this).attr("hylb"));
                    $('.home_icon').click();
                });
            }, 100);
        });
    }
//    function getSearchCurrentResult() {
//         $('#rkinfo', $dialog).cutPage({
//            service_code: 'S52222',
//            page_size: 30,
//            page: currentPage
//        }, function (data) {
//       {
//            for (var i = 0; i < data.length; i++) {
//                var item = data[i]; // 获取到table每一行数据
//                item.xz = $('<input type="checkbox"/>').attr({
//                    "id": item.lrryid,
//                    "cut_row": item.cut_row,
//                    "checked": false
//                }).css({"cursor": "pointer"});
//                item.map_link = $('<a/>').attr({
//                    "hyid": item.lrryid,
//                    "hylb": item.hylb,
//                    "jd": item.jd,
//                    "wd": item.wd,
//                    "hymc": item.xm,
//                    "dz": item.jtdz
//                }).addClass("map-link").css({"cursor": "pointer", "color": "red"}).html('进入地图');
//                item.info = $('<a/>').attr({
//                    "sfzh": item.sfzh
//                }).addClass("info-link").css({"cursor": "pointer", "color": "brown"}).html('随行人员');
//                item.name_link = $('<a/>').attr({
//                    "id": item.lrryid
//                }).addClass('name-link').css({"cursor": "pointer", "color": "blue"}).html('人房关联');
//                setTimeout(function () {
//                    $(".map-link").unbind("click").bind("click", function () {
//                        map.clearAllOverlays();
//                        locationSearch($(this).attr("hyid"), $(this).attr("jd"), $(this).attr("wd"), $(this).attr("hymc"), $(this).attr("dz"), $(this).attr("hylb"));
//                        $('.home_icon').click();
//                    });
//                }, 100);
//                setTimeout(function () {
//                    $(".name-link").unbind("click").bind("click", function () {
//                        $.pdialog.open('page/ldrk/ldrk0002-jzdetail.html', 'jzdetail', "人房关联",
//                                {"width": 680, "height": 560, mask: true,
//                                    param: {lrryid: $(this).attr('id')},
//                                    close: function (param) {
//                                        return true;
//                                    }
//                                });
//                    });
//                }, 100);
//                setTimeout(function () {
//                    $(".info-link").unbind("click").bind("click", function () {
//                        $.pdialog.open('page/fz/rk0003-ssry.html', 'add_ssry', "查看随行人员人员",
//                                {"width": 880, "height": 560, mask: true,
//                                    param: {gssfzh: $(this).attr('sfzh')},
//                                    close: function (param) {
//                                        currentPage = 1;
//                                        return true;
//                                    }
//                                });
//
//                    });
//                }, 100);
//        });
//    }
}).call();
