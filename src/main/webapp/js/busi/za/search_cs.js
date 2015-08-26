/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    isSearch = true;//当前为搜索
    var $page = $.pdialog.getCurrent();
    $("#search", $page).click(function () {
        $('#xiye').text(1);
        var hyfl = $('#hy', $page).val();
        if (hyfl == "za_sp") {
            fylb = 'search_sp';
            getSpCS(hyfl, $('#mc', $page).val(), 1);
        } else {
            fylb = 'search_cs';
            getCS(hyfl, $('#mc', $page).val(), 1);
        }
    });
})();