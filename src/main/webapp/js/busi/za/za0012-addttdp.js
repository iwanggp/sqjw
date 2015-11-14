
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $dialog = $("body").data('add_jz_xx');//必须通过这种方法
    bringDialogToFront($dialog);
    var param = $dialog.data('param'); //父窗口传递的参数
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#zgbm', $dialog));
    console.log(param.sqid + "-" + param.jzid + "--" + param.jd + "---" + param.wd + "wwwwaddddshop" + param.lb);
    $("#add", $dialog).click(function () {
        if ($("#shop_form", $dialog).valid()) {
            var o = new AjaxOptions($('#shop_form', $dialog));
            o.put('service_code', 'P30012');
            o.put('sq_id', param.sqid);
            o.put('jz_id', param.jzid);
            o.put('fw_id', param.fwid);
            o.put('jd', param.jd);//将修改后建筑的经度传递过来
            o.put('wd', param.wd);//传修改后建筑的维度传递过来
            o.put('lb', param.lb);
            o.put('hylb', 'za_ttdp');
            o.sus = function () {
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
