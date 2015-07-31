/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    $.pdialog.close('searchtree');//关闭对话框参数为id，此处的id为打开属性菜单的id
    var $dialog = $.pdialog.getCurrent();

    initServiceParaSelect('za_jfss.sblx', $('#sblx', $dialog));
    $('#sear', $dialog).on('click', function() {
        if ($('#jfss_form', $dialog).valid()) {
            var o = new AjaxOptions($('#jfss_form', $dialog));
            o.put('service_code', 'S44000');
            o.sus = function(data) {
                  LocationPointJfss(data);
                $('#close', $dialog).trigger('click');
            };
            $.ajax(o);
        }
    });
}).call();