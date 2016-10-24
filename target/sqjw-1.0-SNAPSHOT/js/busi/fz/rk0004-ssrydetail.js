/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var f = false; //定义一个开关变量
    var $dialog = $("body").data('ssrydetail');
    bringDialogToFront($dialog);
    $("input", $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    $('#gx', $dialog).attr("disabled", "disabled");
    initServiceParaSelect('za_yg.xb', $('#xb', $dialog));
    initServiceParaSelect('za_ssry.gx', $('#gx', $dialog));
    var param = $dialog.data('param'); //父窗口传递的参数
    padBackData(param.data, $('#shop_form', $dialog)); //回填物流信息
    //#修改信息服务
    $('#modify', $dialog).click(function () {
        var btns = new Array();
        if (f = !f) {
            $(":input", $dialog).removeAttr("disabled");
            $(this).html("保存");
        } else {
            f = !f;
            $('.required', $dialog).each(function (key, value) {
                btns[key] = $(this).val();
                if (btns[key] != null) {
                    $('#modify').html("保存");
                }
            });
            if ($("#shop_form", $dialog).valid()) {
                var opt = new AjaxOptions($('#shop_form', $dialog));
                opt.put("service_code", "P43114");
                opt.put("id", param.data.id);
                opt.sus = function (data) {
                    alertMsg.correct("修改成功了！");
                    $("#close", $dialog).trigger("click");
                };
                $.ajax(opt);
            }
        }
    });
}).call();


