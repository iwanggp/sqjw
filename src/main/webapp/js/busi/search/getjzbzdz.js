/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $page = $.pdialog.getCurrent();
    var searchData;
    initParaSelect('jwsq_bzdzxx.xzqhdm', $('#xzqhdm', $page));
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#ssjwqdm', $page));
    $('#ssjwqdm', $page).val(currentjwq);
//    getResult();
    /**
     * 查询服务
     */
    $('#search-button', $page).on('click', function () {
        // '分页查询', 显示全部数据
        getResult();
    });
    function getResult() {
        $('#ssxx', $page).cutPage({
            service_code: 'S57002',
            ssjwqdm: $('#ssjwqdm', $page).val(),
            dzjc: $('#dzjc', $page).val(),
            mlphm: $('#mlphm', $page).val(),
            jlxmc: $('#jlxmc', $page).val(),
            page_size: 10,
        }, function (data) {
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
                item.find_fetch = $('<a/>').attr({
                    "hyid": item.jzdzbm,
                    "hylb": item.hylb,
                    "jd": item.zbwzx,
                    "wd": item.zbwzy,
                    "hymc": item.dzjc,
                    "dz": item.dzxz,
                    "href": "javascript:$.bringBack({orgName:'" + item.dzxz + "',jd:'" + item.zbwzx + "',wd:'" + item.zbwzy + "',xzqhdm:'" + item.xzqhdm + "',zgbm:'" + item.ssjwqdm + "',mchs:'" + item.hs + "',dys:'" + item.dys + "',jlx:'" + item.jlxmc + "',lcs:'" + item.lcs + "',mph:'" + item.mlphm + "'})"
                }).addClass("btnSelect").css({"cursor": "pointer", "color": "red"});
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

