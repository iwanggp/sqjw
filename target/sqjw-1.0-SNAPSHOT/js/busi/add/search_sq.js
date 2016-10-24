/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    fylb = 'search_sq';
    var $page = $.pdialog.getCurrent();
    $("#search", $page).click(function () {
        $('#xiye').text(1);
        searchSq($('#sqmc', $page).val(), $('#dz', $page).val(), 1);
    });
})();