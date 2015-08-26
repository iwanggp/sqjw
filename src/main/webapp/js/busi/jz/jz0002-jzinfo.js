(function () {
    var $dialog = $("body").data('add_jz_info');
    $('#jzxx', $dialog).trigger('click');
//    var $dialog = $.pdialog.getCurrent();
//    bringDialogToFront($dialog);
//    var param = $dialog.data('param'); //父窗口传递的参数
//    var $dialog = $.pdialog.getCurrent();
////    var param = $dialog.data('param'); //父窗口传递的参数
    setTimeout(function () {
        $('#jzxx', $dialog).click();
    }, 0);

}).call();
