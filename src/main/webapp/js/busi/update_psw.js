/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
    var $page = $.pdialog.getCurrent();

    $("#update", $page).click(function() {
        if ($("#data_form", $page).valid()) {
            var o = new AjaxOptions($("#data_form", $page));
            o.isDialog = true;      //为弹出窗口
            o.put("service_code", "P11013");
            o.sus = function() {
                alertMsg.correct("修改成功！");
                localStorage.sqjw_pwd = this.get("new_password");
                $.pdialog.closeCurrent();
            };
            $.ajax(o);
        }
    });

})();