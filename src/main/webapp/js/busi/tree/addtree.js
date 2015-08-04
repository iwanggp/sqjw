/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $.pdialog.getCurrent();

//    var param = $dialog.data('param');      //父页面传递的参数
////    var map1 = param.mymap;
//    var poly1 = param.poly;
//    window.map.addOverlay(poly1, true);
//    map1.addOverlay(poly1, true);
    $("#csList li a", $dialog).click(function () {
        hy = $(this).attr('name');
    });

}).call();

