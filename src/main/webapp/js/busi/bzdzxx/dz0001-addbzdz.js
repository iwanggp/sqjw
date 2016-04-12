/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $dialog = $.pdialog.getCurrent();
     initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#ssjwqdm', $dialog));
    $("#add", $dialog).click(function () {
        if (!$('#shop_form', $dialog).valid()) {
            return false;
        }
        var o = new AjaxOptions($('#shop_form', $dialog));
        o.put('service_code', 'P57003');
        o.put('hylb', 'bzdz');
        o.sus = function () {
            alertMsg.correct("添加成功");
            $("#search-button", navTab.getCurrentPanel()).trigger("click");//激发一次查询按钮的点击，实现了页面的刷新
            $("#close", $dialog).trigger("click");
        };
        $.ajax(o);
    });
}).call();


