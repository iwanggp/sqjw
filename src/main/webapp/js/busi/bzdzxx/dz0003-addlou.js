/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $.pdialog.getCurrent();
    var param = $dialog.data('param'); //父窗口传递的参数
    currentjwq = param.zgbm;
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#zgbm', $dialog));
    $('#zgbm', $dialog).val(param.zgbm);
    $("#add", $dialog).click(function () {
        if (!$('#jz_form', $dialog).valid()) {
            return false;
        }
        var dz = $('#dz', $dialog).val();
        var jd = $('#jd', $dialog).val();
        var wd = $('#wd', $dialog).val();
        var jlx = $('#jlx', $dialog).val();
        var dys = $('#dys', $dialog).val();
        var lcs = $('#lcs', $dialog).val();
        var zgbm = $('#zgbm', $dialog).val();
        var mchs = $('#mchs', $dialog).val();
        var mph = $('#mph', $dialog).val();
        var o = new AjaxOptions($('#jz_form', $dialog));
        o.put('service_code', 'P30001');
        o.put('dz', dz);
        o.put('mph', mph);
        o.put('jlx', jlx);
        o.put('zgbm', zgbm);
        o.put('dys', dys);
        o.put('lcs', lcs);
        o.put('mchs', mchs);
        o.put('sq_id', param.sqid);
        o.put('jd', jd);//传递经度参数
        o.put('wd', wd);//传递维度参数
        o.sus = function () {
            alertMsg.correct("添加成功");
            $.pdialog.closeCurrent();
            $("#search-button11", navTab.getCurrentPanel()).trigger("click");//激发一次查询按钮的点击，实现了页面的刷新
        };
        $.ajax(o);
    });
}).call();


