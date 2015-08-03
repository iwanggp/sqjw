/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
    $.pdialog.close('searchtree');//关闭对话框参数为id，此处的id为打开属性菜单的id
    fylb='search_cs';
    var $page = $.pdialog.getCurrent();
    $("#search", $page).click(function() {
        $('#xiye').text(1);
        getCS($('#hy', $page).val(), $('#mc', $page).val(), 1);
    });
})();