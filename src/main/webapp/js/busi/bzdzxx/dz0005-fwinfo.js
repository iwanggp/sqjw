/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $page = navTab.getCurrentPanel();
    var obj = JSON.parse(sessionStorage.fwjzid);
    var jzid = obj['jzid'];
    var sqid = obj['sq_id'];
//    alert(obj['mc']);
    $('#jzmc', $page).html(obj['mc']);
    getSearchCurrentResult();
    /**
     * 查询服务
     */
    $('#search_fw-button', $page).on('click', function () {
        // '分页查询', 显示全部数据
        getSearchCurrentResult();
    });
     $('#lookry', $page).click(function () {
        var rowData = $(this).getRow();
        sessionStorage.fwbmid = JSON.stringify(rowData);//放到session中暂存一段时间
        if (rowData) {
            $('#jbsxBoxfwryinfo', $page).loadUrl('page/bzdzxx/dz0006-fwpeople.html', {}, function () {
                $('#fwryinfo', $page).show().trigger('click');
                $('#jbsxBoxfwryinfo', $page).find("[layoutH]").layoutH();
            });
        } else {
            alertMsg.warn('请先选择一个社区进行查看！');
        }
    });
//    // 查看居民人员信息
//    $('#jminfo', $page).on('click', function () {
//        console.log('look.....');
//        var rowData11 = $(this).getRow();
//        if (rowData11) {
//            sessionStorage.unionyg = JSON.stringify(rowData11);//放到session中暂存一段时间
//            $('#jbsxBoxjm', $page).loadUrl('page/search/ssrkcx.html', {}, function () {
//                $('#unionjm', $page).show().trigger('click');
//                $('#jbsxBoxjm', $page).find("[layoutH]").layoutH();
//            });
//
//        } else {
//            alertMsg.warn("请先选择一条数据！");
//        }
//    });



    function getSearchCurrentResult() {
        $('#fwinfos', $page).cutPage(form2JSON($('#search-form', $page), {service_code: 'S70001', page_size: 30, page: 1, jz_id: jzid}), function (data) {
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                item.name_link = $('<a/>').attr({
                    "name": data[i].id,
                    "jzmc": data[i].dyh+data[i].sh,
                    "jd": data[i].jd,
                    "wd": data[i].wd
                }).addClass("check-link").css({"cursor": "pointer", "color": "blue"}).html('查看房屋内信息');
                item.xq_detail = $('<a/>').attr({
                    "fwid": data[i].id,
                    "sh": data[i].sh,
                }).addClass("xq-link1").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
                item.map_link = $('<a/>').attr({
                    "hyid": data[i].id,
                    "hylb": "za_zjh",
                    "jd": item.jd,
                    "wd": item.wd,
                    "hymc": item.sh,
                    "dz": item.dz
                }).addClass("map-link").css({"cursor": "pointer", "color": "red"}).html('进入地图');
            }
            setTimeout(function () {
                $(".xq-link1").unbind("click").bind("click", function (e) {
                    $.pdialog.open("page/za/za0009-zjhdetail.html", 'mydetail', $(this).attr('sh'), {width: 600,
                        height: 560,
                        param: {hyid: $(this).attr('fwid'), sh: $(this).attr('sh')},
                        close: function () {
                            return true;//这样才能关闭窗口
                        }
                    });
                });
            }, 500);
            setTimeout(function () {
                $(".check-link").unbind("click").bind("click", function (e) {
                    $.pdialog.open("page/jz/jz0002-jzinfo.html", 'add_jz_info', $(this).attr('jzmc'), {width: 1300,
                        height: 560,
                        param: {sqid: sqid, jzid: jzid, fwid: $(this).attr('name'), jd: $(this).attr('jd'), wd: $(this).attr('wd'), jzmc: $(this).attr('jzmc')},
                        close: function () {
                            return true;//这样才能关闭窗口
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


})();

