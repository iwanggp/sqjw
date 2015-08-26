/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $("body").data('add_lou_sq');
//    $('#cf', $dialog).trigger('click');//让当前对话框在最前面
    bringDialogToFront($dialog);
    var param = $dialog.data('param'); //父窗口传递的参数
    console.log(param.sqid + "--" + param.jd + "---" + param.wd);
    $("#add", $dialog).click(function () {
        if (!$('#jz_form', $dialog).valid()) {
            return false;
        }
        var o = new AjaxOptions($('#jz_form', $dialog));
        o.put('service_code', 'P30001');
        o.put('sq_id', param.sqid);
        o.put('jd', param.jd);//传递经度参数
        o.put('wd', param.wd);//传递维度参数
        o.sus = function () {
            alertMsg.correct("添加成功");
//            map.locateMap(new STMapPoint(param.jd, param.wd), 1);
            $("#close", $dialog).trigger("click");
        };
        $.ajax(o);

    });
}).call();


