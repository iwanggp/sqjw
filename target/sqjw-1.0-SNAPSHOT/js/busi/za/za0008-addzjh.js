/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $.pdialog.getCurrent();
//    var $dialog = $("body").data('add_jz_xx');//必须通过这种方法
    //    bringDialogToFront($dialog);
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#zgbm', $dialog));
    var param = $dialog.data('param'); //父窗口传递的参数
    $("#add", $dialog).click(function () {
        if ($("#shop_form", $dialog).valid()) {
            var o = new AjaxOptions($('#shop_form', $dialog));
            o.put('service_code', 'P43012');
            o.put('hylb', 'za_zjh');
            o.put('sq_id', param.sqid);
            o.put('jz_id', param.jzid);
            o.put('jd', param.jd);//传递经度参数
            o.put('wd', param.wd);//传递维度参数
            o.sus = function (data) {
                alertMsg.correct("添加成功");
                $("#close", $dialog).trigger("click");
                var $dia = $("body").data('add_jz_info');
                setTimeout(function () {
                    $('#jzxx', $dia).click();
                }, 0);
            };
            $.ajax(o);
        }

    });
}).call();


