/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $page = navTab.getCurrentPanel();
    var searchData;
    var currentPage = 1;
    getCurrentResult();

    /**
     * 查询服务
     */
    $('#search-button', $page).on('click', function () {
        // '分页查询', 显示全部数据
        getCurrentResult();
    });

//    alert(searchData.yg_sq_id+searchData.yg_fz_id+searchData.yg_jz_id+"dddddddd");
    //打开修改用户对话框
    $('#superedit', $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            currentPage = rowData.cut_row;
            openDetail(rowData.hylb, rowData.id, rowData.mph);
            currentPage = parseInt(currentPage / 25) + 1;
        } else {
            alertMsg.warn('请先选择一条数据！');
        }
    });

    $("#add", $page).click(function () {
        var rowData2 = $(this).getRow();
        if (rowData2) {
            sessionStorage.jzinfo = JSON.stringify(rowData2);//放到session中暂存一段时间
            $('#jbsxBoxyg1', $page).loadUrl('page/search/addpeople.html', {}, function () {
                $('#unionyg1', $page).show().trigger('click');
                $('#jbsxBoxyg1', $page).find("[layoutH]").layoutH();
            });
        } else {
            alertMsg.warn('请先选择一个房子进行添加！');
        }
    });
    $("#addrk", $page).click(function () {
        var rowData1 = $(this).getRow();
        if (rowData1) {
            $.pdialog.open('page/fz/rk0001-addzjh.html', 'add_yg_xx', "添加实有人口信息信息",
                    {"width": 580, "height": 560, mask: true,
                        param: {sqid: rowData1.sq_id, jzid: rowData1.jz_id, jd: rowData1.jd, wd: rowData1.wd, fzid: rowData1.id},
                        close: function (param) {
                            return true;
                        }
                    });
        } else {
            alertMsg.warn('请先选择一个房屋进行添加！');
        }
    });
    $('#look', $page).on('click', function () {
        var rowData11 = $(this).getRow();
        if (rowData11) {
            sessionStorage.unionyg = JSON.stringify(rowData11);//放到session中暂存一段时间
            $('#jbsxBoxry', $page).loadUrl('page/search/jzry.html', {}, function () {
                $('#unionyg', $page).show().trigger('click');
                $('#jbsxBoxry', $page).find("[layoutH]").layoutH();
            });
        } else {
            alertMsg.warn("请先选择一条数据！");
        }
    });
    $('#yglook', $page).on('click', function () {
        var rowData11 = $(this).getRow();
        if (rowData11) {
            sessionStorage.unionyg = JSON.stringify(rowData11);//放到session中暂存一段时间
            $('#jbsxBoxyg', $page).loadUrl('page/search/unionyg.html', {}, function () {
                $('#yginfo', $page).show().trigger('click');
                $('#jbsxBoxyg', $page).find("[layoutH]").layoutH();
            });
        } else {
            alertMsg.warn("请先选择一条数据！");
        }
    });
    function getCurrentResult() {
        $('#ssxx', $page).cutPage(form2JSON($('#search-form', $page), {
            service_code: 'S56001',
            page_size: 25,
            page: currentPage
        }), function (data) {
            searchData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                item.name_link = $('<a/>').attr({
                    "hyid": item.id,
                    "hylb": item.hylb,
                    "hymc": item.dz,
                }).addClass("xq-link").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
                item.people_link = $('<a/>').attr({
                    "hyid": item.id,
//                    "hylb": item.hylb,
//                    "jd": item.jd,
//                    "wd": item.wd,
                    "hymc": item.mc,
                    "dz": item.dz
                }).addClass("people-link").css({"cursor": "pointer", "color": "red"}).html('人员查看');
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

