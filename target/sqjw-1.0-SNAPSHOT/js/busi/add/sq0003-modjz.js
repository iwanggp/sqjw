/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $("body").data('mod_lou_sq');
    bringDialogToFront($dialog);
    var $dialog1 = $("body").data('add_sq_info');
    $('.minimize', $dialog1).trigger('click');//将后面的对话框最小化
    var param = $dialog.data('param');      //父窗口传递的参数
    padBackData(param.row, $('#jz_form', $dialog));
    var opoly = new STMapMarker();
    opoly.id = "udlou"; //【必选】对象 id
    opoly.point = new STMapPoint(param.row.jd, param.row.wd); //【必选】经纬度坐标  STMapPoint 类型
    opoly.img = "images/loc128.png"; //【必选】对象的图片地址 url
    opoly.infowin = false;
    opoly.anchor = "BR";//设置覆盖物的位置
    opoly.setMoveable(true);
    map.addOverlay(opoly, true);
    map.pan(-230, 0);//将地图移动N个像素距离,x右为正，左为负。y下为正，上为负。
    //修改模板信息服务
    $("#save", $dialog).click(function () {
        if (!$('#jz_form', $dialog).valid()) {
            return false;
        }
        var opt = new AjaxOptions($('#jz_form', $dialog));
        opt.put("jzid", param.row.jzid);
        opt.put('jd', opoly.point.x);//将修改后建筑的经度传递过来
        opt.put('wd', opoly.point.y);//传修改后建筑的维度传递过来
        opt.put("service_code", "P30002");
        opt.sus = function (data) {
            alertMsg.correct("修改成功！");
            form2JSON($('#jz_form', $dialog), param.row);      //把修改后的数据写回
            param.isFlush = true;       //刷新表格
            $("#close").trigger("click");
        };
        $.ajax(opt);
    });
}).call();



