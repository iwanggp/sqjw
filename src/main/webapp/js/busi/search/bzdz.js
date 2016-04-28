/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $page = navTab.getCurrentPanel();
    var searchData;
    initParaSelect('jwsq_bzdzxx.xzqhdm', $('#xzqhdm', $page));
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#ssjwqdm', $page));
    var currentPage = 1;
    getCurrentResult();
    /**
     * 查询服务
     */
    $('#search-button', $page).on('click', function () {
        // '分页查询', 显示全部数据
        getCurrentResult();
    });
    //打开修改用户对话框
    $('#superedit', $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            currentPage = rowData.cut_row;
            openDetail(rowData.hylb, rowData.id, rowData.dz);
            currentPage = parseInt(currentPage / 30) + 1;
        } else {
            alertMsg.warn('请先选择一条数据！');
        }
    });
    $("#add", $page).click(function () {
        $.pdialog.open('page/bzdzxx/dz0001-addbzdz.html', 'add_bz_dz', "添加标准地址",
                {"width": 580, "height": 560, mask: true,
                    close: function (param) {
                        return true;
                    }
                });
    });
    $("#sort", $page).click(function () {
        $.pdialog.open('page/bzdzxx/dz0000-czdz.html', 'cs_bz_dz', "添加标准地址",
                {"width": 680, "height": 560, mask: true,
                    close: function (param) {
                        return true;
                    }
                });
    });
    $('#biaoji', $page).on('click', function () {
        if (searchData.length) {
            alertMsg.confirm("确定要全部标记到地图上吗？如果数据过多，可能需要等待一段时间", {"okCall": function () {
                    map.clearAllOverlays();
                    for (var i = 0; i < searchData.length; i++) {
                        var item = searchData[i]; // 获取到table每一行数据     
                        locationSearch(item.jzdzbm, item.zbwzx, item.zbwzy, item.dzjc, item.dzxz, item.hylb);
                    }
                    $('.home_icon').click();
                }
            });
        }
        else {
            alertMsg.warn("没有任何数据！");
        }
    });
    function getResult() {
        $('#ssxx', $page).cutPage({
            service_code: 'S57001',
            page_size: 30,
        }, function (data) {
            searchData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                item.name_link = $('<a/>').attr({
                    "hyid": item.jzdzbm,
                    "hymc": item.dzjc,
                    "hylb": item.hylb
                }).addClass("xq-link1").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
                item.map_link = $('<a/>').attr({
                    "hyid": item.jzdzbm,
                    "hylb": item.hylb,
                    "jd": item.zbwzx,
                    "wd": item.zbwzy,
                    "hymc": item.dzjc,
                    "dz": item.dzxz
                }).addClass("map-link").css({"cursor": "pointer", "color": "red"}).html('进入地图');
            }
            setTimeout(function () {
                $(".xq-link1").unbind("click").bind("click", function (e) {
                    openDetail($(this).attr('hylb'), $(this).attr('hyid'), $(this).attr('hymc'));
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
    function getCurrentResult() {
        $('#ssxx', $page).cutPage(form2JSON($('#search-form', $page), {service_code: 'S57002', page_size: 30}),
                function (data) {
                    searchData = data;
                    for (var i = 0; i < data.length; i++) {
                        var item = data[i]; // 获取到table每一行数据
                        item.name_link = $('<a/>').attr({
                            "hyid": item.jzdzbm,
                            "hymc": item.dzjc,
                            "hylb": item.hylb
                        }).addClass("xq-link").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
                        item.map_link = $('<a/>').attr({
                            "hyid": item.jzdzbm,
                            "hylb": item.hylb,
                            "jd": item.zbwzx,
                            "wd": item.zbwzy,
                            "hymc": item.dzjc,
                            "dz": item.dzxz
                        }).addClass("map-link").css({"cursor": "pointer", "color": "red"}).html('进入地图');
                    }
                    setTimeout(function () {
                        $(".xq-link").unbind("click").bind("click", function (e) {
                            openDetail($(this).attr('hylb'), $(this).attr('hyid'), $(this).attr('hymc'));
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
}).call();

