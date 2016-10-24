(function() {
    console.log('remark ...');
    getRolePl();
    var $page = navTab.getCurrentPanel();
    var users = null;           //用于保存查询结果，修改用户信息后也用于刷新页面数据
    var roleList = null;        //用于保存角色信息，传递给打开的弹出窗口，可生成下拉列表
    /**
     * 查询服务
     */
    $('#search-button', $page).on('click', function() {
        var o = new AjaxOptions($('#search-form', $page));
        o.put('service_code', 'S11003');
        o.sus = function(data) {
            users = data.users;
        };
        $.ajax(o);
    }).trigger('click');
    /**
     * 删除服务
     */
    $('#delete', $page).click(function() {
        var rowData = $(this).getRow();
        if (rowData) {
            alertMsg.confirm('确定要删除么？', {okCall: function() {
                    var o = new AjaxOptions();
                    o.put('username', rowData.username);
                    o.put('service_code', 'P11004');
                    o.sus = function() {
                        alertMsg.correct('删除成功！');
                        $('#search-button', $page).trigger('click');
                    };
                    $.ajax(o);
                }});
        } else {
            alertMsg.warn('请先选择一条数据！');
        }
    });
    //打开添加服务对话框
    $('#add', $page).click(function() {
        $.pdialog.open('page/pl/pl0003-add.html', 'add_user_pl', '添加用户', {
            width: 550,
            height: 450,
            param: {roleList: roleList},
            /**
             * 关闭的回调函数，关闭时把新增加的数据显示到表格最后
             * @param {type} param
             * @returns {undefined}
             */
            close: function(param) {
                if (param.newUser) {        //如果存在新增数据，就显示
                    users.push(param.newUser);
                    padBackTable(users, $('#users', $page));//回填表单的方法
                }
                return true;            //只有返回 true 时弹出窗口才会关闭
            }
        });
    });
    //打开修改用户对话框
    $('#edit', $page).click(function() {
        var rowData = $(this).getRow();
        if (rowData) {
            $.pdialog.open('page/pl/pl0003-edit.html', 'mod_user_pl', '修改用户', {
                width: 550,
                height: 415,
                param: {row: rowData, roleList: roleList},
                close: function(param) {
                    if (param.isFlush) {
                        padBackTable(users, $('#users', $page));
                    }
                    return true;
                }
            });
        } else {
            alertMsg.warn('请先选择一条数据！')
        }
    });

    /**
     * 获取所有角色
     * @returns {undefined}
     */
    function getRolePl() {
        var o = new AjaxOptions();
        o.put('service_code', 'S11006');
        o.sus = function(data) {
            roleList = data.role_list;
        };
        $.ajax(o);
    }
}).call();