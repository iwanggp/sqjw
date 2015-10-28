/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $dialog = $("body").data('add_yg_xx'); //必须通过这种方法
    bringDialogToFront($dialog);
    var param = $dialog.data('param'); //父窗口传递的参数
    initParaSelect('za_yg.yghy', $('#yghy', $dialog));
    initParaSelect('za_people.xb', $('#xb', $dialog));
    initParaSelect('za_people.hyzk_dm', $('#hyzk', $dialog));
    initParaSelect('za_people.mz', $('#mz', $dialog));
    initParaSelect('za_people.whcd', $('#whcd', $dialog));
    initParaSelect('za_people.zzmm', $('#zzmm', $dialog));
    $("#add", $dialog).click(function () {
        if (!$('#fz_form', $dialog).valid()) {
            return false;
        }
        var o = new AjaxOptions($('#fz_form', $dialog));
        o.put('service_code', 'S30009');
        o.sus = function (data) {
            if (data["flag"] === "1") {
                alertMsg.confirm("该身份证号码已经存在过是否继续？", {okCall: function () {//提示信息
                        addYginfo();
                    }});
            } else {
                addYginfo();
            }
        };
        $.ajax(o);
    });
    function addYginfo() {
        var o = new AjaxOptions($('#fz_form', $dialog));
        o.put('service_code', 'P30005');
        o.put('yg_sq_id', param.sqid);
        o.put('yg_jz_id', param.jzid);
        o.put('yg_fz_id', param.fzid);
        o.put('jd', param.jd); //传递经度参数
        o.put('wd', param.wd); //传递维度参数
        o.put('hylb', 'za_yg');
        o.sus = function () {
            alertMsg.correct("添加成功");
            var $dia = $("body").data('add_jz_info');
            setTimeout(function () {
                $('#rkxx', $dia).click();
            }, 50);
            $("#close", $dialog).trigger("click");
        };
        $.ajax(o);
    }
}).call();


