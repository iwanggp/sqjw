(function() {
    var $page = $.pdialog.getCurrent();
    var jsonStr = sessionStorage.pl0002_detail;
    sessionStorage.removeItem("pl0002_detail");
    if (jsonStr) {
        var data = JSON.parse(jsonStr);
        //回填表单数据并增加只读属性
        var jsonOb = JSON.parse(jsonStr);
        for (var x in jsonOb) {
            $("#" + x, $page).attr("value", jsonOb[x]);
        }
        //修改服务
        $("#save", $page).click(function() {
            var opt = new AjaxOptions();
            opt.put("service_code", "P11007");
            for (var x in jsonOb) {
                opt.put(x, $("#" + x, $page).val());
            }
            opt.put("role_id", jsonOb.role_id);
            opt.sus = function() {
                alertMsg.correct("修改成功！");
                $("#close").trigger("click");
                $("#search-button", navTab.getCurrentPanel()).trigger("click");
            };
            $.ajax(opt);
        });
    } else {
        $("#save", $page).click(function() {
            if (!$("#info", $page).valid()) {
                return false;
            }
            var options = new AjaxOptions($("#info", $page));
            options.put("service_code", "P11006");
            options.sus = function() {
                alertMsg.correct("添加成功!");
                $("#close").trigger("click");
                $("#search-button", navTab.getCurrentPanel()).trigger("click");
            };
            $.ajax(options);
        });
    }
}).call();