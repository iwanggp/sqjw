/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $page = navTab.getCurrentPanel();
    var obj = JSON.parse(sessionStorage.fwjzid);
    var jzid=obj['jzid'];
    console.log(jzid+"-------->>><><><");
    $('#jzmc',$page).html(obj['mc']);
    getSearchCurrentResult();
    /**
     * 查询服务
     */
    $('#search_fw-button', $page).on('click', function () {
        // '分页查询', 显示全部数据
        getSearchCurrentResult();
    });






    function getSearchCurrentResult() {
        $('#fwinfos', $page).cutPage(form2JSON($('#search-form', $page), {service_code: 'S70001', page_size: 30, page: 1, jz_id: jzid}), function (data) {
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                item.name_link = $('<a/>').attr({
                    "name": data[i].jzid,
                    "jzmc": data[i].mc,
                    "jd": data[i].jd,
                    "wd": data[i].wd
                }).addClass("check-link").css({"cursor": "pointer", "color": "blue"}).html('查看建筑内信息');
                item.xq_detail = $('<a/>').attr({
                    "jzid": data[i].jzid,
                    "jzmc": data[i].mc,
                }).addClass("xq-link1").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
                item.map_link = $('<a/>').attr({
                    "hyid": data[i].jzid,
                    "hylb": "sqjz",
                    "jd": item.jd,
                    "wd": item.wd,
                    "hymc": item.mc,
                    "dz": item.dz
                }).addClass("map-link").css({"cursor": "pointer", "color": "red"}).html('进入地图');
            }
            setTimeout(function () {
                $(".xq-link1").unbind("click").bind("click", function (e) {
                    $.pdialog.open("page/bzdzxx/dz0003-loudetail.html", 'mydetail', $(this).attr('jzmc'), {width: 600,
                        height: 560,
                        param: {hyid: $(this).attr('jzid'), jzmc: $(this).attr('jzmc')},
                        close: function () {
                            return true;//这样才能关闭窗口
                        }
                    });
                });
            }, 500);
            setTimeout(function () {
                $(".check-link").unbind("click").bind("click", function (e) {
                    $('#jbsxBoxjz', $page).loadUrl('page/bzdzxx/dz0003-jzinfo.html', {}, function () {
                        $('#sqjz', $page).show().trigger('click');
                        $('#jbsxBoxjz', $page).find("[layoutH]").layoutH();
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

