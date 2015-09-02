/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    isSearch = true;//当前为搜索
//    $.pdialog.closeCurrent();
//    var $page = $("body").data('searchtree');

//    $.pdialog.close('searchtree');
    var $page = $.pdialog.getCurrent();
    $("#search", $page).click(function () {
        var hyfl = $('#hy', $page).val();
        var hymc = $('#mc', $page).val();
//        sessionStorage.ou0003_detail = JSON.stringify(rowData);
        $.pdialog.open("page/search/search0001-csinfo.html", 'search_cs_info', "搜索结果", {width: 870, height: 500,
            param: {hyfl: hyfl, hymc: hymc},
            close: function () {
                return true;//这样才能关闭窗口
            }
        });
        searchSq('', '', 1);//进入地图时查询一下整个社区
    }
    );
})();
//(function () {
//    isSearch = true;//当前为搜索
//    var $page = $.pdialog.getCurrent();
//    $("#search", $page).click(function () {
//        $('#xiye').text(1);
//        var hyfl = $('#hy', $page).val();
//        if (hyfl == "za_sp") {
//            fylb = 'search_sp';
//            getSpCS(hyfl, $('#mc', $page).val(), 1);
//        } else {
//            fylb = 'search_cs';
//            getCS(hyfl, $('#mc', $page).val(), 1);
//        }
//    });
//})();