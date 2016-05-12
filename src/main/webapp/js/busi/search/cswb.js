/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $page = navTab.getCurrentPanel();
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#zgbm', $page));
    /**
     * 查询服务
     */
    var currentPage = 1;
    var searchData;
    $('#search-button', $page).on('click', function () {
        // '分页查询', 显示全部数据
        getResult();
    }).trigger('click');
    //打开修改用户对话框
    $('#edit1', $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            currentPage = rowData.cut_row;
            openDetail(rowData.hylb, rowData.id, rowData.mc);
            currentPage = parseInt(currentPage / 30) + 1;
        } else {
            alertMsg.warn('请先选择一条数据！')
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
    // 查看人员信息
    $('#look', $page).on('click', function () {
        var rowData = $(this).getRow();
        if (rowData) {
            sessionStorage.unionyg = JSON.stringify(rowData); //放到session中暂存一段时间
            $('#jbsxBoxyg', $page).loadUrl('page/search/unionyg.html', {}, function () {
                $('#unionyg', $page).show().trigger('click');
                $('#jbsxBoxyg', $page).find("[layoutH]").layoutH();
            });
        } else {
            alertMsg.warn("请先选择一条数据！");
        }
    });
    // 查看检查登记
    $('#ckjcdj', $page).on('click', function () {
        var rowData = $(this).getRow();
        if (rowData) {
            sessionStorage.unionyg = JSON.stringify(rowData);//放到session中暂存一段时间
            $('#jbsxBoxjcdj', $page).loadUrl('page/search/csjcdj.html', {}, function () {
                $('#jcdj', $page).show().trigger('click');
                $('#jbsxBoxjcdj', $page).find("[layoutH]").layoutH();
            });
        } else {
            alertMsg.warn("请先选择一条数据！");
        }
    });
    // 查看违章情况
    $('#ckwzqk', $page).on('click', function () {
        var rowData = $(this).getRow();
        if (rowData) {
            sessionStorage.unionyg = JSON.stringify(rowData);//放到session中暂存一段时间
            $('#jbsxBoxwzqk', $page).loadUrl('page/search/cswzxx.html', {}, function () {
                $('#wzqk', $page).show().trigger('click');
                $('#jbsxBoxwzqk', $page).find("[layoutH]").layoutH();
            });
        } else {
            alertMsg.warn("请先选择一条数据！");
        }
    });
    //查看旅馆业的经营平面图
    $('#look_jypmt', $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            $.pdialog.open('page/za/za0000-ckjypmt.html', 'look_jypmt', '查看经营平面图', {
                width: 800,
                height: 780,
                mask: true,
                param: {row: rowData},
                close: function (param) {
                    return true;
                }
            });
        } else {
            alertMsg.warn("请选择一条数据");
        }

    });
    //添加旅馆业的经营平面图
    $('#add_jypmt', $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            $.pdialog.open('page/za/za0000_jypmt.html', 'add_jypmt', '添加经营平面图', {
                width: 620,
                height: 580,
                mask: true,
                param: {row: rowData},
                close: function (param) {
                    return true;
                }
            });
        } else {
            alertMsg.warn("请选择一条数据");
        }

    });
    function getResult() {
        $('#ssxx', $page).cutPage({
            zgbm: $('#zgbm', $page).val(),
            mc: $('#mc', $page).val(),
            hylb: 'za_wb',
            dz: $('#dz', $page).val(),
            service_code: 'S51000',
            page_size: 30,
            page: currentPage
        }, function (data) {
            searchData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                item.name_link = $('<a/>').attr({
                    "hyid": item.id,
                    "hylb": 'za_wb',
                    "hymc": item.mc,
                }).addClass("xq-link").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
                item.map_link = $('<a/>').attr({
                    "hyid": item.id,
                    "hylb": 'za_wb',
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
                    map.clearAllOverlays();
                    locationSearch($(this).attr("hyid"), $(this).attr("jd"), $(this).attr("wd"), $(this).attr("hymc"), $(this).attr("dz"), $(this).attr("hylb"));
                    $('.home_icon').click();
                });
            }, 100);
        });
    }
}).call();

