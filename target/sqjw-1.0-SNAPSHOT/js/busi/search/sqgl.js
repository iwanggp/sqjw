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
    //当点击选项卡时触发的事件
    $('#sqgl', $page).click(function () {
        $('#xzqhdm', $page).removeAttr("disabled");
        $('#ssjwqdm', $page).removeAttr("disabled");
    });
    //打开修改用户对话框
    $('#look', $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            sessionStorage.mysqid = JSON.stringify(rowData);//放到session中暂存一段时间
            $('#jbsxBoxjz', $page).loadUrl('page/bzdzxx/dz0003-jzinfo.html', {}, function () {
                $('#sqjz', $page).show().trigger('click');
                $('#jbsxBoxjz', $page).find("[layoutH]").layoutH();
            });
        } else {
            alertMsg.warn('请先选择一个社区进行查看！');
        }
    });
    $("#addsq", $page).click(function () {
        $.pdialog.open('page/bzdzxx/dz0002-addsq.html', 'add_sq_dz', "添加社区",
                {"width": 580, "height": 560, mask: true,
                    close: function (param) {
                        return true;
                    }
                });
    });
    function getCurrentResult() {
        $('#ssxx', $page).cutPage(form2JSON($('#search-form', $page), {service_code: 'S58001', page_size: 30}),
                function (data) {
                    searchData = data;
                    for (var i = 0; i < data.length; i++) {
                        var item = data[i]; // 获取到table每一行数据
                        item.name_link = $('<a/>').attr({
                            "hyid": item.sqid,
                            "sqmc": item.sqmc
                        }).addClass("xq-link_sq").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
                        item.sqxq = $('<a/>').attr({
                            "id": item.sqid,
                            "sqmc": item.sqmc
                        }).addClass("sq-link").css({"cursor": "pointer", "color": "blue"}).html('社区内信息');
                        item.map_link = $('<a/>').attr({
                            "sqmc": item.sqmc
                        }).addClass("map-link_sq").css({"cursor": "pointer", "color": "red"}).html('进入地图');
                    }
                    setTimeout(function () {
                        $(".xq-link_sq").unbind("click").bind("click", function (e) {
                            openSqDetail($(this).attr('hyid'), $(this).attr('sqmc'));
                        });
                    }, 50);
                    setTimeout(function () {
                        $(".map-link_sq").unbind("click").bind("click", function () {
                            map.clearAllOverlays();
                            getSq($(this).attr("sqmc"), 1);
                            $('.home_icon').click();
                        });
                    }, 100);
                });
    }
}).call();