/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    fylb = 'search_jfss';
    var $dialog = $.pdialog.getCurrent();

    initServiceParaSelect('za_jfss.sblx', $('#sblx', $dialog));
    $('#sear', $dialog).on('click', function() {
        $('#xiye').text(1);
        if ($('#jfss_form', $dialog).valid()) {
            var str = [];
            var chk = $("input[name='sx']:checkbox:checked", $dialog);
            for (var i = 0; i < chk.length; i++) {
                str[i] = $(chk[i]).val();
            }
            getJfss($('#sblx').val(), str, 1);
        }
    });
    $('span.sxd',$dialog).click(function(){
        $(this).prev().attr("checked",!$(this).prev().is(':checked'));
    })
}).call();