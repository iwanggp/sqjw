/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = navTab.getCurrentPanel();
    var obj = JSON.parse(sessionStorage.jzinfo);
    initParaSelect('za_people.xb', $('#xb', $dialog));
    initParaSelect('za_people.tx', $('#tx', $dialog));
    initParaSelect('za_people.lx', $('#lx', $dialog));
    initParaSelect('za_people.ky', $('#ky', $dialog));
    initParaSelect('za_people.fbyqk', $('#fbyqk', $dialog));
    initParaSelect('za_people.grzc', $('#grzc', $dialog));
    initParaSelect('za_people.jzsy', $('#jzsy', $dialog));
    initParaSelect('za_people.mz', $('#mz', $dialog));
    initParaSelect('za_people.whcd', $('#whcd', $dialog));
    initParaSelect('za_people.hyzk_dm', $('#hyzk_dm', $dialog));
    $("#add", $dialog).click(function () {
        if ($("#info", $dialog).valid()) {
            var o = new AjaxOptions($('#info', $dialog));
            o.put('service_code', 'P99991');
            o.put('yg_sq_id', obj['sq_id']);
            o.put('yg_jz_id', obj['jz_id']);
            o.put('yg_fz_id', obj['id']);
            o.put('jd', obj['jd']);//传递经度参数
            o.put('wd', obj['wd']);//传递维度参数
            o.sus = function (data) {
                alertMsg.correct("添加成功");
                $("#close", $dialog).trigger("click");
//                var $dia = $("body").data('add_jz_info');
//                setTimeout(function () {
//                    $('#jzxx', $dia).click();
//                }, 0);
            };
            $.ajax(o);
        }

    });
}).call();


