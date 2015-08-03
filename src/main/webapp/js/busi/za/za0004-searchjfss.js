/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    $.pdialog.close('searchtree');//关闭对话框参数为id，此处的id为打开属性菜单的id
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
}).call();