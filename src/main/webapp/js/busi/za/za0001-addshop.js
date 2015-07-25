/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    $.pdialog.close('add_role_pl');//关闭对话框参数为id，此处的id为打开属性菜单的id
    var poly = map.getOverlayById("gang");//获得小红点的经纬度，这是一个对象，通过this.point获得点坐标
    var $dialog = $.pdialog.getCurrent();
    $("#add", $dialog).click(function () {
        if ($("#shop_form", $dialog).valid()) {
            var o = new AjaxOptions($('#shop_form', $dialog)); //将整个表单的信息传过来
            o.put('service_code', 'P41001');//添加服务码
            o.put('jd', poly.point.x);//传递经度参数
            o.put('wd', poly.point.y);//传递维度参数
            o.sus = function () {
                alertMsg.correct("添加成功！");
                $("#close").trigger("click");
            };
            $.ajax(o);
        }
    });
    //需要在页面加载完成时加载文件拖拽div，不同于AjaxOptions对象
    var fileOptions = new FileOptions($('#file', $page));
}).call();
