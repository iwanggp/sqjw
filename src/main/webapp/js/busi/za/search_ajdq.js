/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    fylb = 'search_ajdq';
    isSearch = true;
    var $page = $.pdialog.getCurrent();
//    $('#')
    $("#search", $page).click(function () {
        $('#xiye').text(1);
        sjxz = $('#dqsj', $page).val();
        searchAjdq(sjxz, 1);
    });
})();