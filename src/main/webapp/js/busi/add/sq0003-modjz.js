/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $("body").data('mod_lou_sq');
    bringDialogToFront($dialog);
    var param = $dialog.data('param');      //父窗口传递的参数
    padBackData(param.row, $('#jz_form', $dialog));
    //修改模板信息服务
    $("#save", $dialog).click(function () {
        if (!$('#jz_form', $dialog).valid()) {
            return false;
        }
        var opt = new AjaxOptions($('#jz_form', $dialog));
        opt.put("jzid", param.row.jzid);
        opt.put("service_code", "P30002");
        opt.sus = function (data) {
            alertMsg.correct("修改成功！");
            form2JSON($('#jz_form', $dialog), param.row);      //把修改后的数据写回
            param.isFlush = true;       //刷新表格
            $("#close").trigger("click");
        };
        $.ajax(opt);
    });
}).call();



