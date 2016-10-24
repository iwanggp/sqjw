/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $.pdialog.getCurrent();
    var param = $dialog.data('param'); //父窗口传递的参数
    $("#addList_v li a").click(function () {
        hy = $(this).attr('name');
        jzid = param.id;
        console.debug(jzid + "[][[][][][][]-----");
        jzjd = param.jd;
        console.debug(jzjd + "[][[][][][][]-----");
        jzwd = param.wd;
    });
}).call();

