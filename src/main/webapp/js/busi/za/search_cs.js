/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    fylb = 'search_cs';
    var $page = $.pdialog.getCurrent();
    $("#search", $page).click(function () {
        $('#xiye').text(1);
        getCS($('#hy', $page).val(), $('#mc', $page).val(), 1);
    });
})();