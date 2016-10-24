/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $.pdialog.getCurrent();
    initParaSelect('za_jcss.sslx', $('#sslx', $dialog));
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#zgbm', $dialog));
    $("#add", $dialog).click(function () {
        if (!$('#shop_form', $dialog).valid()) {
            return false;
        }
        var o = new AjaxOptions($('#shop_form', $dialog));
        o.put('service_code', 'P23001');
        o.put('jd', gangjd);//传递经度参数
        o.put('wd', gangwd);//传递维度参数
        o.put('hylb', 'za_jcss');
        o.sus = function () {
            alertMsg.correct("添加成功");
            map.locateMap(new STMapPoint(gangjd, gangwd), 1);
            $("#close", $dialog).trigger("click");
//            poly.moveable = false;
//            $('#xiye').text(1);
//            getSq(mc, 1);
        };
        $.ajax(o);
    });
}).call();

