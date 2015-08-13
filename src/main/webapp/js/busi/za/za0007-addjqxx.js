/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    $.pdialog.close('add_role_pl');//关闭对话框参数为id，此处的id为打开属性菜单的id
    map.addOverlay(poly, true);
    fylb = 'search_jqxx';
    var $dialog = $.pdialog.getCurrent();
    var param = $dialog.data('param');      //父窗口传递的参数
    initServiceParaSelect('za_jqxx.ssxq', $('#ssxq', $dialog));
    initServiceParaSelect('za_jqxx.ajfl', $('#ajfl', $dialog));
    initServiceParaSelect('za_jqxx.ajxz', $('#ajxz', $dialog));
    initServiceParaSelect('za_jqxx.sx', $('#sx', $dialog));
    $('#add', $dialog).on('click', function() {
        if ($('#jqxx_form', $dialog).valid()) {
            var o = new AjaxOptions($('#jqxx_form', $dialog));
            o.put('service_code', 'P47000');
            o.put('jd', gangjd);
            o.put('wd', gangwd);
            o.put('date', $('#jqsj', $dialog).val());
            o.sus = function(data) {
                alertMsg.correct('添加成功');
                $('#close', $dialog).trigger('click');
                $('#xiye').text(1);
                getJqxx('', '', 1, '', '');
            };
            $.ajax(o);
        }
    });
}).call();
