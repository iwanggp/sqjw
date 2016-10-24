
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var f = false; //定义一个开关变量
//    var poly = map.getOverlayById("gang");//获得小红点的经纬度，这是一个对象，通过this.point获得点坐标
    var $dialog = $.pdialog.getCurrent();
    var param = $dialog.data('param'); //父窗口传递的参数
    var opt = new AjaxOptions();
    opt.put("service_code", "S20001");
    opt.put("id", param.jzid);
    $("input", $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    opt.sus = function (data) {
        padBackData(data.jzdata, $('#shop_form', $dialog)); //回填信息
    };
    $.ajax(opt);
//    //#修改信息服务
//    $('#add_modify', $dialog).click(function () {
//        var btns = new Array();
//        if (f = !f) {
//            $("input", $dialog).removeAttr("disabled");
//            $(this).html("保存");
//        } else {
//            f = !f;
//            $('.required').each(function (key, value) {
//                btns[key] = $(this).val();
//                if (btns[key] != null) {
//                    $('#add_modify').html("保存");
//                }
//            });
//
//        }
//    });
//    //#删除信息服务
//    $('#del', $dialog).click(function () {
//        if (param.jzid) {
//            alertMsg.confirm("确定要删除该建筑吗？如果删除则该建筑所有的信息都将删除！请谨慎操作！", {"okCall": function () {
//                    $("input", $dialog).removeAttr("disabled");
//                    var o = new AjaxOptions();
//                    o.put("id", param.id);
//                    o.put("service_code", "P20003");
//                    o.sus = function (data) {
//                        alertMsg.correct("删除成功");
//                        $('#xiye').text(1);
//                        getJZ(mc, 1);
//                        $('#close', $dialog).trigger("click");
//                    };
//                    $.ajax(o);
//                }
//            });
//        } else {
//            alertMsg.error("没有找到该数据");
//        }
//    });

}).call();





