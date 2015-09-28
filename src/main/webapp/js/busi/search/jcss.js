/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $page = navTab.getCurrentPanel();
    initServiceParaSelect('za_jcss.sslx', $('#sslx', $page));
    var searchData;
    var currentPage = 1;
    getResult();
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
            openDetail(rowData.hylb, rowData.id, rowData.mc);
            currentPage = parseInt(currentPage / 30) + 1;
        } else {
            alertMsg.warn('请先选择一条数据！');
        }
    });
    $('#biaoji', $page).on('click', function () {
        if (searchData.length) {
            alertMsg.confirm("确定要全部标记到地图上吗？如果数据过多，可能需要等待一段时间", {"okCall": function () {
                    map.clearAllOverlays();
                    for (var i = 0; i < searchData.length; i++) {
                        var item = searchData[i]; // 获取到table每一行数据     
                        locationSearch(item.id, item.jd, item.wd, item.mc, item.dz, item.hylb);
                    }
                    $('.home_icon').click();
                }
            });
        }
        else {
            alertMsg.warn("没有任何数据！");
        }
    });
    function getCurrentResult() {
        $('#ssxx', $page).cutPage({
            zgbm: $('#zgbm', $page).val(),
            mc: $('#mc', $page).val(),
            sslx: $('#sslx', $page).val(),
            dz: $('#dz', $page).val(),
            ks: $('#ks', $page).val(),
            js: $('#js', $page).val(),
            service_code: 'P23002',
            page_size: 30,
            page: currentPage
        }, function (data) {
            searchData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
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
                $(".map-link").unbind("click").bind("click", function () {
                    map.clearAllOverlays();
                    locationSearch($(this).attr("hyid"), $(this).attr("jd"), $(this).attr("wd"), $(this).attr("hymc"), $(this).attr("dz"), $(this).attr("hylb"));
                    $('.home_icon').click();
                });
            }, 100);
        });
    }
    function getResult() {
        $('#ssxx', $page).cutPage({
            service_code: 'P23000',
            page_size: 30,
            page: currentPage
        }, function (data) {
            searchData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                item.name_link = $('<a/>').attr({
                    "hyid": item.id,
                    "hymc": item.mc,
                    "hylb": item.hylb
                }).addClass("xq-link").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
                item.map_link = $('<a/>').attr({
                    "hyid": item.id,
                    "jd": item.jd,
                    "wd": item.wd,
                    "hymc": item.mc,
                    "hylb": item.hylb,
                    "dz": item.dz
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

