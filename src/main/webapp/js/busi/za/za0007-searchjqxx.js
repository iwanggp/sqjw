/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    fylb = 'search_jqxx';
    var $dialog = $.pdialog.getCurrent();
    initServiceParaSelect('za_jqxx.ajfl', $('#ajfl', $dialog));
    $('#sear', $dialog).on('click', function () {
        $('#xiye').text(1);
        if ($('#jqxx_form', $dialog).valid()) {
            var str = [];
            var chk = $("input[name='sx']:checkbox:checked", $dialog);
            for (var i = 0; i < chk.length; i++) {
                str[i] = $(chk[i]).val();
            }
            getJqxx($('#ajfl', $dialog).val(), str, 1, $('#kssj', $dialog).val(), $('#jzsj', $dialog).val());
        }
    });
    $('span.sxd', $dialog).click(function () {
        $(this).prev().attr("checked", !$(this).prev().is(':checked'));
    })
}).call();