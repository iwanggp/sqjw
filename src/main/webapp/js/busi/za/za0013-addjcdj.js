
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $dialog = $.pdialog.getCurrent();
    var param = $dialog.data('param'); //父窗口传递的参数
    console.log(param.fid + "------------------------------>>>>>>><><<<<><><<><><<>" + param.mc + param.dz);
    $("#add", $dialog).click(function () {
        if ($("#shop_form", $dialog).valid()) {
            var o = new AjaxOptions($('#shop_form', $dialog));
            o.put('service_code', 'P48002');
            o.put('fid', param.fid);
            o.put('mc', param.mc);
            o.put('dz', param.dz);
            o.put('zgbm',param.zgbm);
            o.sus = function () {
                alertMsg.correct("添加成功");
                $("#close", $dialog).trigger("click");
            };
            $.ajax(o);

        }
    });
}).call();
