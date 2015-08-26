/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    fylb = 'search_zjh';
    isSearch = true;
    var $page = $.pdialog.getCurrent();
    $("#search", $page).click(function () {
        $('#xiye').text(1);
        alert("haha");
        searchZjh($('#mph', $page).val(), $('#dz', $page).val(), $('#fzxm', $page).val(), 1);
    });
})();