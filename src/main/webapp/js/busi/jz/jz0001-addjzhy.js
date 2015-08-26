
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
    var myhy = "";
    $('#jzhy', $dialog).change(function () {
        myhy = $(this).val();
        openAdd(myhy);
    });
    $('#add', $dialog).click(function () {
        var omyhy = $('#jzhy').val();
        openAdd(omyhy);
    });
    function openAdd(hyval) {
        if ("za_yl" == hyval) {
            url = 'page/za/za0002-addyl.html';
        } else if ("za_sp" == hyval) {
            url = 'page/za/za0001-addshop.html';
        } else if ("za_wl" == hyval) {
            url = 'page/za/za0003-addwl.html';
        } else if ("za_wb" == hyval) {
            url = 'page/za/za0005-addwb.html';
        } else if ("za_lg" == hyval) {
            url = 'page/za/za0006-addlg.html';
        } else if ("xb_xf" == hyval) {
            url = 'page/xb/xb0001-addxf.html';
        } else if ("za_zjh" == hyval) {
            url = 'page/za/za0008-addzjh.html';
        } else {
            url = 'page/za/za0007-addcs.html';
        }
        $.pdialog.open(url, 'add_jz_xx', "添加建筑内信息",
                {"width": 580, "height": 560, mask: true,
                    param: {sqid: param.sqid, jzid: param.jzid, jd: param.jd, wd: param.wd, hylb: hyval},
                    close: function (param) {
//                        $.pdialog.close('add_jz_xx');
                        return true;
                    }
                });
    }

}).call();
