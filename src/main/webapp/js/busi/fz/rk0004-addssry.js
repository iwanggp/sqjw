/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $dialog = $("body").data('add_ssry_add'); //必须通过这种方法
    bringDialogToFront($dialog);
    var param = $dialog.data('param'); //父窗口传递的参数
    $('#gssfzh', $dialog).val(param.gssfzh);
    initServiceParaSelect('za_yg.xb', $('#xb', $dialog));
    initServiceParaSelect('za_ssry.gx', $('#gx', $dialog));
    $("#add", $dialog).click(function () {
        if (!$('#fz_form', $dialog).valid()) {
            return false;
        }
        addssry();
    });
    function addssry() {
        var o = new AjaxOptions($('#fz_form', $dialog));
        o.put('service_code', 'P31105');
        o.sus = function () {
            alertMsg.correct("添加成功");
            var $dia = $("body").data('add_jz_info');
            setTimeout(function () {
                $('#rkxx', $dia).click();
            }, 50);
            $("#close", $dialog).trigger("click");
        };
        $.ajax(o);
    }
}).call();


