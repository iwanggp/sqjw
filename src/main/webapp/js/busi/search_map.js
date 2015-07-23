/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
    var $page = $.pdialog.getCurrent();
    $("#search", $page).click(function() {
        getCS($('#hy', $page).val(), $('#mc', $page).val(), 1);
    });

})();