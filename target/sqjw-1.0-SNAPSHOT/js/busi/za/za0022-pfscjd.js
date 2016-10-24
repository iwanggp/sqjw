/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $dialog = $.pdialog.getCurrent();
    var obj = JSON.parse(sessionStorage.unionyg);
    $('#mc', $dialog).val(obj['mc']);
    $('#dz', $dialog).val(obj['dz']);
    $("#add", $dialog).click(function () {
        if (!$('#shop_form', $dialog).valid()) {
            return false;
        }
        var o = new AjaxOptions($('#shop_form', $dialog));
        o.put('service_code', 'P44100');
        o.put('zgbm', obj['zgbm']);
        o.put('id', obj['id']);
        o.sus = function () {
            alertMsg.correct("添加成功");
            $("#close", $dialog).trigger("click");
        };
        $.ajax(o);
    });
}).call();




