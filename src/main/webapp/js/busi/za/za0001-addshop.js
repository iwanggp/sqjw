/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    $.pdialog.close('add_role_pl');//关闭对话框参数为id，此处的id为打开属性菜单的id
    var poly = map.getOverlayById("gang");//获得小红点的经纬度，这是一个对象，通过this.point获得点坐标
    var $dialog = $.pdialog.getCurrent();
    $("#add", $dialog).click(function() {
        if ($("#shop_form", $dialog).valid()) {
            fileOptions.putForm($('#shop_form', $dialog));       //添加表单内容
            fileOptions.setService('P41001');
            fileOptions.put('jd', poly.point.x);//传递经度参数
            fileOptions.put('wd', poly.point.y);//传递维度参数
            fileOptions.sus = function(data) {
                alertMsg.correct("添加成功了！");
                $("#close").trigger("click");
                getCS(hy, mc, 1);
            };
            fileOptions.after = function(c, d) {
                console.log(c);
            };
            fileOptions.send();         //开始上传，可在后台中使用 byte[] file = (byte[])in.getObjectValue(id);     获取文件内容
        }

    });
//需要在页面加载完成时加载文件拖拽div，不同于AjaxOptions对象
    var fileOptions = new FileOptions($('#jyxkz', $dialog), $('#ajhgz', $dialog), $('#jypmt', $dialog));
    fileOptions.readFile = function(id, files) {      //加载文件的回调函数，可在该函数中进行文件格式与大小校验
        for (var i = 0; i < files.length; i++) {
            console.log(files[i].name + '---' + files[i].size);
            if (files[i].size > 5 * 1024 * 1024) {

                alertMsg.error(files[i].name + ' 文件大于是5M');
                return false;
            } else if (files[i].size == 0) {
                return false;
            }
        }
        return true;        //返回false时将中止文件加载，需要给出提示
    };

}).call();
