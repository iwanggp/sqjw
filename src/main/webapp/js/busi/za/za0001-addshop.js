
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $dialog = $("body").data('add_jz_xx');//必须通过这种方法
    bringDialogToFront($dialog);
    var param = $dialog.data('param'); //父窗口传递的参数
    console.log(param.sqid + "-" + param.jzid + "--" + param.jd + "---" + param.wd + "wwwwaddddshop");
    $("#add", $dialog).click(function () {
        if ($("#shop_form", $dialog).valid()) {
            fileOptions.putForm($('#shop_form', $dialog));       //添加表单内容
            fileOptions.setService('P41001');
            fileOptions.put('hylb', 'za_sp');
            fileOptions.put('sq_id', param.sqid);
            fileOptions.put('jz_id', param.jzid);
            fileOptions.put('jd', param.jd);//传递经度参数
            fileOptions.put('wd', param.wd);//传递维度参数
            fileOptions.sus = function (data) {
                alertMsg.correct("添加成功");
                $('#close', $dialog).trigger('click');
                var $dia = $("body").data('add_jz_info');
                setTimeout(function () {
                    $('#jzxx', $dia).click();
                }, 0);
            };
            fileOptions.after = function (c, d) {
                console.log(c);
            };
            fileOptions.send();         //开始上传，可在后台中使用 byte[] file = (byte[])in.getObjectValue(id);     获取文件内容
        }
    });
//需要在页面加载完成时加载文件拖拽div，不同于AjaxOptions对象
    var fileOptions = new FileOptions($('#jyxkz', $dialog), $('#ajhgz', $dialog), $('#jypmt', $dialog));
    fileOptions.readFile = function (id, files) {      //加载文件的回调函数，可在该函数中进行文件格式与大小校验
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
