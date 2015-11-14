
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $dialog = $("body").data('add_jz_info');
    var param = $dialog.data('param'); //父窗口传递的参数
    setTimeout(function () {
        var $dia = $("body").data('add_jz_info');
        $('#rkck', $dia).css({'visibility': 'hidden'});
    }, 0);
    var dwlb = "";
    $('#dwlb', $dialog).change(function () {
        dwlb = $(this).val();
        openAdd(dwlb);
    });
    $('#add', $dialog).click(function () {
        var omyhy = $('#dwlb', $dialog).val();
        openAdd(omyhy);
    });
    function openAdd(hyval) {
        url = 'page/za/za0025-addjyz.html';
        $.pdialog.open(url, 'add_jz_xx', "添加建筑内信息",
                {"width": 580, "height": 560, mask: true,
                    param: {sqid: param.sqid, jzid: param.jzid, fwid: param.fwid, jd: param.jd, wd: param.wd, lb: hyval},
                    close: function (param) {
                        return true;
                    }
                });
    }

}).call();
