
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $("body").data('mod_yg_info11');
    bringDialogToFront($dialog);
    var param = $dialog.data('param');      //父窗口传递的参数
    initParaSelect('za_yg.yghy', $('#yghy', $dialog));
    initParaSelect('za_people.xb', $('#xb', $dialog));
    initParaSelect('za_people.hyzk_dm', $('#hyzk', $dialog));
    initParaSelect('za_people.mz', $('#mz', $dialog));
    initParaSelect('za_people.whcd', $('#whcd', $dialog));
    initParaSelect('za_people.zzmm', $('#zzmm', $dialog));
    padBackData(param.row, $('#fz_form', $dialog));
    //修改员工信息
    $("#update", $dialog).click(function () {
        if (!$('#fz_form', $dialog).valid()) {
            return false;
        }
        var opt = new AjaxOptions($('#fz_form', $dialog));
        opt.put("id", param.row.id);
        opt.put("service_code", "P30008");
        opt.sus = function (data) {
            alertMsg.correct("修改成功！");
            form2JSON($('#fz_form', $dialog), param.row);      //把修改后的数据写回
            param.isFlush = true;       //刷新表格
            param.row['xb_desc'] = data['xb_desc'];
            param.row['hyzk_desc'] = data['hyzk_desc'];
            $("#qx", $dialog).trigger("click");
        };
        $.ajax(opt);
    });
}).call();




