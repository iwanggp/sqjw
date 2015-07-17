(function() {
    console.log('remark ...');
    var $panel = navTab.getCurrentPanel();
    var cRoleSelect = function(role_list) {
        if (role_list != null) {
            $.each(role_list, function(i, n) {
                $("#role_id", $panel).append($("<option />").attr({value: n.role_id}).html(n.role_name));
            });
        }
    }

    /*
     * To change this template, choose Tools | Templates
     * and open the template in the editor.
     */
    var o = new AjaxOptions();
    o.put("service_code", "S11006");
    o.sus = function(data) {
        sessionStorage.setItem("role_list", JSON.stringify(data.role_list));
        cRoleSelect(data.role_list)
        $("#auth_div").hide();

        $("#search-button", $panel).click(function() {
            var options = new AjaxOptions($("#search_form", $panel));
            o.isDailog = false;
            options.put("service_code", "S11010");
            options.put("role_id", $("#role_id", $panel).val());
            options.isAlert = false;
            options.sus = function(data) {
                var isCheck = "";
                $.each(data["role_limit"], function(i, v) {
                    if (v.m_id.length == 6) {
                        isCheck += ",#" + v.m_id;
                    }
                });
                $("#menu_div ul", $panel).eq(0).html("");
                createMenu(data["all_menu"], $("#menu_div ul", $panel).eq(0));
                $("#menu_div", $panel).jstree({
                    "themes": {
                        "theme": "apple"
                    },
                    "plugins": ["themes", "html_data", "checkbox", "sort", "ui"]
                })
                        .bind("select_node.jstree", function(event, data) {
                    if (data.rslt.obj.attr("type") == "1") {
                        $("#menu_div").jstree("toggle_node", data.rslt.obj);        //打开或关闭自身
                    }
                });
                $("#save", $panel).attr("role_id", this.get("role_id"));
                $("#auth_div", $panel).fadeIn(800, function() {
                    $("#menu_div", $panel).jstree("check_node", $(isCheck.substr(1), $panel));
                });
            };
            $("#auth_div", $panel).fadeOut(100);
            $.ajax(options);
        });

        $("#all_check", $panel).click(function() {
            $("#menu_div", $panel).jstree("check_all");
        });

        $("#all_uncheck", $panel).click(function() {
            $("#menu_div", $panel).jstree("uncheck_all");
        });

        $("#save", $panel).click(function() {
            var options = new AjaxOptions();
            options.put("service_code", "P11009");
            options.put("role_id", $(this).attr("role_id"));
            options.put("menus", getCheck());
            options.sus = function() {
                $("#auth_div", $panel).fadeOut(800);
                $("#search-button", $panel).click();
            };
            $.ajax(options);
        });


        /**
         * 获取已选择的项
         */
        function getCheck() {
            var check = "";
            $("#menu_div", $panel).find(".jstree-undetermined, .jstree-checked").each(function(i, v) {
                if (i > 0) {
                    check = check + ",";
                }
                check = check + v.id;
            });
            return check;
        }

    };
    $.ajax(o);
}).call();