/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
    var f = false; //定义一个开关变量
    var poly = map.getOverlayById("gang");//获得小红点的经纬度，这是一个对象，通过this.point获得点坐标
    var $dialog = $.pdialog.getCurrent();
    initServiceParaSelect('za_jfss.yxzt', $('#yxzt', $dialog));
    initServiceParaSelect('za_jfss.sblb', $('#sblb', $dialog));
    initServiceParaSelect('za_jfss.sblx', $('#sblx', $dialog));
    initServiceParaSelect('za_jfss.sx', $('#sx', $dialog));
    $("input,select",$dialog).attr("disabled", "disabled"); //让输入框为只读状态
    var param = $dialog.data('param'); //父窗口传递的参数
    var opt = new AjaxOptions();
    opt.put("service_code", "S44006");
    opt.put("id", param.id);
    opt.sus = function(data) {
        padBackData(data.jfss, $('#jfss_form', $dialog)); //回填娱乐场所信息
    };
    $.ajax(opt);
    //#修改信息服务
    $('#modify', $dialog).click(function() {
        var mov = map.getOverlayById(param.id);
        var btns = new Array();
        mov.moveable = true;//是否可以拖动
        if (f = !f) {
            $("input,select",$dialog).removeAttr("disabled");
            $(this).html("保存");
        } else {
            f = !f;
            $('.required').each(function(key, value) {
                btns[key] = $(this).val();
                if (btns[key] != null) {
                    $('#modify').html("保存");
                }
            });
            if ($("#jfss_form", $dialog).valid()) {
                var up = new AjaxOptions($('#jfss_form', $dialog));
                up.put("service_code", "P44007");
                up.put("id", param.id);
                up.put("jd", mov.point.x);
                up.put("wd", mov.point.y);
                up.sus = function(data) {
                    if (data.res == 1) {
                        alertMsg.correct("更新成功");
                        $('#close', $dialog).trigger("click");
                        $('#xiye').text(1);
                        getJfss(sblx, sx, 1);
                    }
                };
                $.ajax(up);
            }
        }
    });
    //#删除信息服务
    $('#del', $dialog).click(function() {
        if (param.id != null) {
            alertMsg.confirm("确定要删除该技防设施吗？", {"okCall": function() {
                    var o = new AjaxOptions();
                    o.put("id", param.id);
                    o.put("service_code", "P44008");
                    o.sus = function(data) {
                        if (data.res == 1) {
                            alertMsg.correct("删除成功");
                            $('#close', $dialog).trigger("click");
                            $('#xiye').text(1);
                            getJfss(sblx, sx, 1);
                        }
                    };
                    $.ajax(o);
                }
            });
        } else {
            alertMsg.error("没有找到该数据");
        }
    });
}).call();
