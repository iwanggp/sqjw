/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $.pdialog.getCurrent();
//    var log = 113.84257496754428;
//    var lat = 34.530768351088405;
//    window.map.addOverlay()
//    var param = $dialog.data('param');      //父页面传递的参数
//    console.log(json2string(param) + "[][][][][------")
//    var jd = param.jd;
//    var wd = param.wd;
//    var poly = new STMapMarker();
//    poly.id = "gang"; //【必选】对象 id
//    poly.point = new STMapPoint(jd, wd); //【必选】经纬度坐标  STMapPoint 类型
//    poly.img = "images/loc128.png"; //【必选】对象的图片地址 url
//    poly.infowin = false;
//    poly.anchor = "BR";//设置覆盖物的位置
//    poly.setMoveable(true);
//    window.map.addOverlay(poly, true);
    $("#csList li a", $dialog).click(function () {
        hy = $(this).attr('name');
    });

}).call();

