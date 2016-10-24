(function() {
    var $page = navTab.getCurrentPanel();
//查询服务
    $("#search-button", $page).click(function() {
        if ($("#search-form", $page).valid()) {
            var role_name = $("#role_name", $page).val();
            $("#role_list", $page).cutPage({
                role_name: role_name,
                service_code: "S11008"
            }, function(list) {
            });
        }
    }).trigger('click');
    //删除服务
    $("#delete", $page).click(function() {
        var rowData = $(this).getRow();
        if (rowData) {
            alertMsg.confirm("确定要删除么？", {okCall: function() {
                    var o = new AjaxOptions();
                    o.put("role_id", rowData.role_id);
                    o.put("service_code", "P11005");
                    o.sus = function() {
                        alertMsg.correct("删除成功！");
                        $("#search-button", $page).trigger("click");
                    };
                    $.ajax(o);

                }});
        }
    });
    //打开添加服务对话框
    $("#add", $page).click(function() {
        $.pdialog.open("page/pl/pl0002-handle.html", 'add_role_pl', "添加角色", {"width": 550, "height": 159});
    });
    //打开修改服务对话框
    $("#edit", $page).click(function() {
        var rowData = $(this).getRow();
        if (rowData) {
            sessionStorage.pl0002_detail = JSON.stringify(rowData);
            $.pdialog.open("page/pl/pl0002-handle.html", 'mod_role_pl', "修改角色", {"width": 550, "height": 159});
        }
    });
}).call();