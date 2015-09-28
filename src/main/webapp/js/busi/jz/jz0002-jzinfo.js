(function () {
    var $dialog = $("body").data('add_jz_info');
//    var $dialog = $.pdialog.getCurrent();
    bringDialogToFront($dialog);
    $('#rkck', $dialog).trigger('click');
//    var param = $dialog.data('param'); //父窗口传递的参数
//    var $dialog = $.pdialog.getCurrent();
////    var param = $dialog.data('param'); //父窗口传递的参数
    setTimeout(function () {
        $('#jzxx', $dialog).click();
    }, 30);

}).call();
