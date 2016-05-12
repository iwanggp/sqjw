/////* 
//// * To change this license header, choose License Headers in Project Properties.
//// * To change this template file, choose Tools | Templates
//// * and open the template in the editor.
// */
(function () {
//    $.pdialog.close('add_role_pl');//关闭对话框参数为id，此处的id为打开属性菜单的id
//    var $dialog = $("body").data('add_sq_dz');//必须通过这种方法
//    map.addOverlay(poly, true);
    var $dialog = $.pdialog.getCurrent();
//    initServiceParaSelect('jw_sq.lb', $('#sqlb', $dialog));
//    initServiceParaSelect('jw_sq.zgbm', $('#zgbm', $dialog));
    initParaSelect('jw_sq.lb', $('#sqlb', $dialog));
    initParaSelect('jwsq_bzdzxx.xzqhdm', $('#xzqh', $dialog));
//    initParaSelect('jw_sq.zgbm', $('#zgbm', $dialog));
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#zgbm', $dialog));
    $("#add", $dialog).click(function () {
        if (!$('#sq_form', $dialog).valid()) {
            return false;
        }
        var fw = $('#fw', $dialog).val();
        var dz = $('#dz', $dialog).val();
        var xzqh = $('#xzqh', $dialog).val();
        var zgbm = $('#zgbm', $dialog).val();
        var jzdzbm = $('#jzdzbm', $dialog).val();
        var o = new AjaxOptions($('#sq_form', $dialog));
        o.put('fw', fw);
        o.put('jzdzbm', jzdzbm);
        o.put('dz', dz);
        o.put('xzqh', xzqh);
        o.put('zgbm', zgbm);
        o.put('service_code', 'P21001');
        o.put('jd', gangjd);//传递经度参数
        o.put('wd', gangwd);//传递维度参数
        o.sus = function () {
            alertMsg.correct("添加成功");
            map.locateMap(new STMapPoint(gangjd, gangwd), 1);
            $("#close", $dialog).trigger("click");
//            poly.moveable = false;
            $('#xiye').text(1);
            getSq(mc, 1);
        };
        $.ajax(o);
    });
    function form2JSONById($form, json) {
        if ($form.length == 0) {
            return {};
        }
        var data = json ? json : {};
        $form.find(":text,:password,:radio:checked,:checkbox:checked,:hidden,textarea").each(function () {
            if ($(this).attr("id")) {
                data[$(this).attr("id")] = $(this).val();
            }
        });
        $form.find("select").each(function (i, s) {
            s = $(s);
            if (s.attr("id")) {
                s.find("option:selected").each(function (j, option) {
                    option = $(option);
                    data[s.attr("id")] = option.attr("id");
                });
            }
        });
        return data;
    }
}).call();
////
///* 
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//(function () {
////    $.pdialog.close('add_role_pl');//关闭对话框参数为id，此处的id为打开属性菜单的id
//
////    map.addOverlay(poly, true);
//    var $dialog = $.pdialog.getCurrent();
//    initParaSelect('jw_sq.lb', $('#sqlb', $dialog));
//    initParaSelect('jwsq_bzdzxx.xzqhdm', $('#xzqh', $dialog));
//    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#zgbm', $dialog));
//    $("#add", $dialog).click(function () {
//        if (!$('#sq_form', $dialog).valid()) {
//            return false;
//        }
//        var sqmc = $('#sqmc', $dialog).val();
//        var fw = $('#fw', $dialog).val();
//        var dz = $('#dz', $dialog).val();
//        var jd = $('#jd', $dialog).val();
//        var wd = $('#wd', $dialog).val();
//        var xzqh = $('#xzqh', $dialog).val();
//        var zgbm = $('#zgbm', $dialog).val();
//        var o = new AjaxOptions($('#sq_form', $dialog));
//        o.put('fw', fw);
//        o.put('sqmc', sqmc);
//        o.put('dz', dz);
//        o.put('xzqh', xzqh);
//        o.put('zgbm', zgbm);
//        o.put('service_code', 'P21001');
//        o.put('jd', jd);//传递经度参数
//        o.put('wd', wd);//传递维度参数
//        o.sus = function () {
//            alertMsg.correct("添加成功");
////            map.locateMap(new STMapPoint(gangjd, gangwd), 1);
//            $("#close", $dialog).trigger("click");
//            $("#search-button", navTab.getCurrentPanel()).trigger("click");//激发一次查询按钮的点击，实现了页面的刷新
//            $('#xiye').text(1);
//            getSq(mc, 1);
//        };
//        $.ajax(o);
//    });
//}).call();

