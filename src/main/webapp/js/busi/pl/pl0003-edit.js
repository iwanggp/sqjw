
(function() {
    console.log('remark ...');
    var $dialog = $.pdialog.getCurrent();
    var param = $dialog.data('param');      //父窗口传递的参数

    initServiceParaSelect('pl_user.tstj', $('#tstj', $dialog));
    //加载角色列表
    initRole();
    //回填表单数据并增加只读属性
    padBackData(param.row, $('#info', $dialog));
    $("#username", $dialog).attr({readonly: "readonly"});
    //修改服务
    $("#save", $dialog).click(function() {
        if (!$('#info', $dialog).valid()) {
            return false;
        }
        var opt = new AjaxOptions($('#info', $dialog));
        opt.put("service_code", "P11002");
        opt.sus = function() {
            alertMsg.correct("修改成功！");
            form2JSON($('#info', $dialog), param.row);      //把修改后的数据写回
            param.isFlush = true;       //刷新表格
            $("#close").trigger("click");
        };
        $.ajax(opt);
    });


    /**
     * 初始化角色列表
     * @returns {undefined}
     */
    function initRole() {
        var roleList = param.roleList;
        if (roleList != null) {
            $.each(roleList, function(i, n) {
                $("#role_id", $dialog).append($("<option />").attr({value: n.role_id}).html(n.role_name));
            });
        }
    }
}).call();