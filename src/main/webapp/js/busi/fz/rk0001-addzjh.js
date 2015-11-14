/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $dialog = $("body").data('add_yg_xx'); //必须通过这种方法
    bringDialogToFront($dialog);
    var param = $dialog.data('param'); //父窗口传递的参数
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#zgbm', $dialog));
    initParaSelect('za_ssrk.rylb', $('#rylb', $dialog));
    initParaSelect('za_ssrk.fzgx', $('#fzgx', $dialog));
    initParaSelect('za_people.xb', $('#xb', $dialog));
    initParaSelect('za_people.hyzk_dm', $('#hyzk', $dialog));
    initParaSelect('za_people.mz', $('#mz', $dialog));
    initParaSelect('za_people.whcd', $('#whcd', $dialog));
    initParaSelect('za_people.zzmm', $('#zzmm', $dialog));
    $("#add", $dialog).click(function () {
        if (!$('#fz_form', $dialog).valid()) {
            return false;
        }
//        sqid: param.sqid, jzid: param.jzid, fwid: param.fwid, jd: param.jd, wd: param.wd
        var o = new AjaxOptions($('#fz_form', $dialog));
        o.put('service_code', 'P31005');
        o.put('yg_sq_id', param.sqid);
        o.put('yg_jz_id', param.jzid);
        o.put('yg_fz_id', param.fwid);
//        o.put('fzid', param.fzid);
        o.put('jd', param.jd); //传递经度参数
        o.put('wd', param.wd); //传递维度参数
        o.put('hylb', "za_ssrk");
        o.sus = function (param) {
            alertMsg.correct("添加成功");
            param.isAdd = true;
            var $dia = $("body").data('add_jz_info');
            setTimeout(function () {
                $('#zjh', $dia).click();
            }, 50);
//            $("#search_ry-button", navTab.getCurrentPanel()).trigger("click");//激发一次查询按钮的点击，实现了页面的刷新   
            $("#close", $dialog).trigger("click");
        };
        $.ajax(o);
    });
}).call();


