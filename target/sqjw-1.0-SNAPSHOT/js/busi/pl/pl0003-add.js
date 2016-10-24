
(function () {
    console.log('remark ...');
    var $dialog = $.pdialog.getCurrent();
    var param = $dialog.data('param');      //父页面传递的参数.
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#ssjws', $dialog));
    initParaSelect('pl_user.xgqx', $('#xgqx', $dialog));
    initServiceParaSelect('pl_user.tstj', $('#tstj', $dialog));
    //加载角色列表
    initRole();
    $('#save', $dialog).click(function () {
        if (!$('#info', $dialog).valid()) {
            return false;
        }
        var options = new AjaxOptions($('#info', $dialog));
        options.put('service_code', 'P11000');
        options.sus = function () {
            alertMsg.correct('添加成功!');
            param.newUser = form2JSON($('#info', $dialog));         //返回给父窗口的数据
            var ses = getSession();
            param.newUser.cjr = ses.username;
            param.newUser.cjrxm = ses.xm;
            param.newUser.cjsj = new Date().format('yyyy-MM-dd HH:mm:ss');
            param.newUser.zt = '1';
            param.newUser.role_name = $('#role_id option:selected', $dialog).html();        //角色名
            $('#close').trigger('click');
        };
        $.ajax(options);
    });

    /**
     * 初始化角色列表
     * @returns {undefined}
     */
    function initRole() {
        var roleList = param.roleList;
        if (roleList != null) {
            $.each(roleList, function (i, n) {
                $('#role_id', $dialog).append($('<option />').attr({value: n.role_id}).html(n.role_name));
            });
        }
    }
}).call();