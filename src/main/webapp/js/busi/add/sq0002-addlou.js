/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $("body").data('add_lou_sq');
    var $dialog1 = $("body").data('add_sq_info');
    $('.minimize', $dialog1).trigger('click');//让当前对话框在最前面
    bringDialogToFront($dialog);
    var param = $dialog.data('param'); //父窗口传递的参数
    var opoly = new STMapMarker();
    opoly.id = "lou"; //【必选】对象 id
    opoly.point = new STMapPoint(param.jd, param.wd); //【必选】经纬度坐标  STMapPoint 类型
    opoly.img = "images/loc128.png"; //【必选】对象的图片地址 url
    opoly.infowin = false;
    opoly.anchor = "BR";//设置覆盖物的位置
    opoly.setMoveable(true);
    map.addOverlay(opoly, true);
    map.pan(-230, 0);//将地图移动N个像素距离,x右为正，左为负。y下为正，上为负。
    console.log(param.sqid + "--" + param.jd + "---" + param.wd + "sfsddfsdfasdfsdfgs");
    $("#add", $dialog).click(function () {
        if (!$('#jz_form', $dialog).valid()) {
            return false;
        }
        var o = new AjaxOptions($('#jz_form', $dialog));
        o.put('service_code', 'P30001');
        o.put('sq_id', param.sqid);
        o.put('jd', opoly.point.x);//将修改后建筑的经度传递过来
        o.put('wd', opoly.point.y);//传修改后建筑的维度传递过来
        o.sus = function () {
            alertMsg.correct("添加成功");
            $("#close", $dialog).trigger("click");
            $("#sqjz", $dialog1).trigger('click');
            setTimeout(function () {
                $('.minimize', $dialog1).trigger('click');//让当前对话框在最前面
            }, 500);
        };
        $.ajax(o);
    });
}).call();


