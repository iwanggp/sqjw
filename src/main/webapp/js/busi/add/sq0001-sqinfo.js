/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    $.pdialog.closeCurrent();
    var $dialog = $("body").data('add_sq_info');
//    var param = $dialog.data('param'); //父窗口传递的参数
    $('#jbsxBoxjz1', $dialog).loadUrl('page/search/unionyg.html', {}, function () {
        $('#sqjz1', $dialog).show().trigger('click');
        $('#jbsxBoxjz1', $dialog).find("[layoutH]").layoutH();
    });
}).call();

