/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $page = navTab.getCurrentPanel();
    var searchData;
    var currentPage = 1;
//    getResult();
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
    // 查看人员信息
    $('#look', $page).on('click', function () {
        console.log('look.....');
        var rowData11 = $(this).getRow();
        if (rowData11) {
            sessionStorage.unionyg = JSON.stringify(rowData11);//放到session中暂存一段时间
            console.log(sessionStorage.unionyg + "tandidezhiddddddddddddddddd");
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
    // 查看监督
    $('#jgjd', $page).on('click', function () {
        var rowData = $(this).getRow();
        if (rowData) {
            sessionStorage.unionyg = JSON.stringify(rowData);//放到session中暂存一段时间
            $.pdialog.open('page/za/za0019-jrhyjd.html', 'add_za_jrhyjd', rowData.mc + "监督检查表",
                    {"width": 1300, "height": 560, mask: true,
                        close: function (param) {
                            return true;
                        }
                    });
        } else {
            alertMsg.warn("请先选择一条数据！");
        }
    });
    function getCurrentResult() {
        $('#ssxx', $page).cutPage({
            zgbm: $('#zgbm', $page).val(),
            mc: $('#mc', $page).val(),
            lb: $('#dwlb', $page).val(),
            dz: $('#dz', $page).val(),
            ks: $('#ks', $page).val(),
            js: $('#js', $page).val(),
            service_code: 'S52006',
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
                item.jd_link = $('<a/>').attr({
                    "hyid": item.id,
                    "hymc": item.mc
                }).addClass("jd-link").css({"cursor": "pointer", "color": "red"}).html('查看监督信息');
            }
            setTimeout(function () {
                $(".xq-link").unbind("click").bind("click", function (e) {
                    openDetail($(this).attr('hylb'), $(this).attr('hyid'), $(this).attr('hymc'));
                });
            }, 50);
            setTimeout(function () {
                $(".jd-link").unbind("click").bind("click", function (e) {
                    $.pdialog.open('page/za/za0019-jrhyjddetail.html', 'za_jgjd_detail', $(this).attr('hymc') + "监督检查表",
                            {"width": 1300, "height": 560, mask: true,
                                param: {hyid: $(this).attr('hyid')},
                                close: function (param) {
                                    return true;
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
}).call();

