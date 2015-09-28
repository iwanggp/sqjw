/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $page = navTab.getCurrentPanel();
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
            openDetail(rowData.hylb, rowData.id, rowData.dz);
            currentPage = parseInt(currentPage / 30) + 1;
        } else {
            alertMsg.warn('请先选择一条数据！');
        }
    });
    $("#add", $page).click(function () {
        $.pdialog.open('page/za/za0011-addbzdz.html', 'add_za_dz', "添加标准地址",
                {"width": 580, "height": 560, mask: true,
                    close: function (param) {
                        return true;
                    }
                });
    });

    function getResult() {
        $('#ssxx', $page).cutPage({
            service_code: 'S44002',
            page_size: 30,
        }, function (data) {
            searchData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                console.log(item.id + item.dz + item.hylb + "-------->>>><<<<<<<>>>>");
                item.name_link = $('<a/>').attr({
                    "hyid": item.id,
                    "hymc": item.dz,
                    "hylb": item.hylb
                }).addClass("xq-link").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
//                item.map_link = $('<a/>').attr({
//                    "hyid": item.id,
//                    "hylb": item.hylb,
//                    "jd": item.jd,
//                    "wd": item.wd,
//                    "hymc": item.mc,
//                    "dz": item.dz
//                }).addClass("map-link").css({"cursor": "pointer", "color": "red"}).html('进入地图');
            }
            setTimeout(function () {
                $(".xq-link").unbind("click").bind("click", function (e) {
                    openDetail($(this).attr('hylb'), $(this).attr('hyid'), $(this).attr('hymc'));
                });
            }, 50);
//            setTimeout(function () {
//                $(".map-link").unbind("click").bind("click", function () {
//                    map.clearAllOverlays();
//                    locationSearch($(this).attr("hyid"), $(this).attr("jd"), $(this).attr("wd"), $(this).attr("hymc"), $(this).attr("dz"), $(this).attr("hylb"));
//                    $('.home_icon').click();
//                });
//            }, 100);
        });
    }
    function getCurrentResult() {
        $('#ssxx', $page).cutPage({
            xzq: $('#xzq', $page).val(),
            mph: $('#mph', $page).val(),
            dz: $('#dz', $page).val(),
            jlxmc: $('#jlxmc', $page).val(),
            ks: $('#ks', $page).val(),
            js: $('#js', $page).val(),
            service_code: 'S53001',
            page_size: 30,
            page: currentPage
        }, function (data) {
            searchData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                item.name_link = $('<a/>').attr({
                    "hyid": item.id,
                    "hylb": item.hylb,
                    "hymc": item.dz,
                }).addClass("xq-link").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
//                item.map_link = $('<a/>').attr({
//                    "hyid": item.id,
//                    "hylb": item.hylb,
//                    "jd": item.jd,
//                    "wd": item.wd,
//                    "hymc": item.mc,
//                    "dz": item.dz
//                }).addClass("map-link").css({"cursor": "pointer", "color": "red"}).html('进入地图');
            }
            setTimeout(function () {
                $(".xq-link").unbind("click").bind("click", function (e) {
                    openDetail($(this).attr('hylb'), $(this).attr('hyid'), $(this).attr('hymc'));
                });
            }, 50);
//            setTimeout(function () {
//                $(".map-link").unbind("click").bind("click", function () {
//                    map.clearAllOverlays();
//                    locationSearch($(this).attr("hyid"), $(this).attr("jd"), $(this).attr("wd"), $(this).attr("hymc"), $(this).attr("dz"), $(this).attr("hylb"));
//                    $('.home_icon').click();
//                });
//            }, 100);
        });
    }
}).call();

