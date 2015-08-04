/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    $.pdialog.close('add_role_pl');//关闭对话框参数为id，此处的id为打开属性菜单的id
    map.addOverlay(poly, true);
    fylb = 'search_jfss';
    var $dialog = $.pdialog.getCurrent();
    var param = $dialog.data('param');      //父窗口传递的参数
    initServiceParaSelect('za_jfss.yxzt', $('#yxzt', $dialog));
    initServiceParaSelect('za_jfss.sblb', $('#sblb', $dialog));
    initServiceParaSelect('za_jfss.sblx', $('#sblx', $dialog));
    initServiceParaSelect('za_jfss.sx', $('#sx', $dialog));
    $('#add', $dialog).on('click', function () {
        if ($('#jfss_form', $dialog).valid()) {
            var o = new AjaxOptions($('#jfss_form', $dialog));
            o.put('service_code', 'P44000');
            o.put('jd', gangjd);
            o.put('wd', gangwd);
            o.sus = function (data) {
                alertMsg.correct('添加成功');
                $('#close', $dialog).trigger('click');
                getJfss(sblx, sx, 1);
            };
            $.ajax(o);
        }
    });
}).call();