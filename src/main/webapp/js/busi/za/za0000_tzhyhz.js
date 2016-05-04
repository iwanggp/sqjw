
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $("body").data('hz_tzhy');//必须通过这种方法

    $('#export', $dialog).on('click', function () {
        var ks = $('#ks', $dialog).val();
        var js = $('#js', $dialog).val();
        location.href = BaseUrl + 'xls.do?service_code=S88888&ks=' + ks + '&js=' + js + '';
    });


}).call();