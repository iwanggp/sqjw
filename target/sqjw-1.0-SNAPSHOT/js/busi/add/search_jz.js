/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    fylb = 'search_jz';
    isSearch = true;
    var $page = $.pdialog.getCurrent();
    $("#search", $page).click(function () {
        $('#xiye').text(1);
        searchJZ($('#mph', $page).val(), $('#dz', $page).val(), $('#mc', $page).val(), 1);
    });
})();