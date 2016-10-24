(function() {
    var panel = navTab.getCurrentPanel();

//查询服务
    $("#search-button", panel).click(function() {
        if ($("#search-form", panel).valid()) {
            var options = new AjaxOptions();
            options.put("username", $("#username", panel).val());
            options.put("service_code", "S11009");
            options.isAlert = false;
            options.sus = function(data) {
                var isCheck = "";
                $.each(data["user_limit"], function(i, v) {
                    if (v.m_id.length == 6) {
                        isCheck += ",#" + v.m_id;
                    }
                });
                $("#menu_div ul",panel).eq(0).html("");
                createMenu(data["all_menu"], $("#menu_div ul",panel).eq(0));
                $("#menu_div", panel).jstree({
                    "themes": {
                        "theme": "apple"
                    },
                    "plugins": ["themes", "html_data", "checkbox", "sort", "ui"]
                })
                        .bind("select_node.jstree", function(event, data) {
                    if (data.rslt.obj.attr("type") == "1") {
                        $("#menu_div", panel).jstree("toggle_node", data.rslt.obj);        //打开或关闭自身
                    }
                });
                $("#save", panel).attr("username", this.get("username"));
                $("#auth_div", panel).fadeIn(800, function() {
                    $("#menu_div", panel).jstree("check_node", $(isCheck.substr(1),panel));
                });
            };
            $("#auth_div", panel).fadeOut(100);
            $.ajax(options);
        }
    });
    $("#all_check", panel).click(function() {
        $("#menu_div").jstree("check_all");
    });

    $("#all_uncheck", panel).click(function() {
        $("#menu_div").jstree("uncheck_all");
    });

    $("#save", panel).click(function() {
        var options = new AjaxOptions();
        options.put("service_code", "P11010");
        options.put("username", $(this).attr("username"));
        options.put("menus", getCheck());
        options.sus = function() {
            $("#auth_div", panel).fadeOut(800);
            $("#search-button", panel).click();
        };
        $.ajax(options);
    });

//以传参方式进入页面时，直接支持查询
    if ($("#username", panel).val()) {
        $("#search-button", panel).click();
    }
    /**
     * 获取已选择的项
     */
    function getCheck() {
        var check = "";
        $("#menu_div", panel).find(".jstree-undetermined, .jstree-checked").each(function(i, v) {
            if (i > 0) {
                check = check + ",";
            }
            check = check + v.id;
        });
        return check;
    }
}).call();