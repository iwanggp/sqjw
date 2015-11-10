
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $("body").data('update_ldrkdata');//必须通过这种方法
    bringDialogToFront($dialog);
    var param = $dialog.data('param'); //父窗口传递的参数

    $("#add", $dialog).click(function () {
        if ($("#updateData_form", $dialog).valid()) {
            fileOptions.putForm($('#updateData_form', $dialog));       //添加表单内容
            fileOptions.setService('P88001');
            fileOptions.sus = function (data) {
                alertMsg.correct("上传成功");
                $('#close', $dialog).trigger('click');
            };
            fileOptions.after = function (c, d) {
                console.log(c);
            };
            fileOptions.send();         //开始上传，可在后台中使用 byte[] file = (byte[])in.getObjectValue(id);     获取文件内容
        }
    });
//需要在页面加载完成时加载文件拖拽div，不同于AjaxOptions对象
    var fileOptions = new FileOptions($('#ldrkdata', $dialog));
    fileOptions.readFile = function (id, files) {      //加载文件的回调函数，可在该函数中进行文件格式与大小校验
        for (var i = 0; i < files.length; i++) {
            console.log(files[i].name + '---' + files[i].size);
            if (files[i].size > 50 * 1024 * 1024) {
                alertMsg.error(files[i].name + ' 文件大于是5M');
                return false;
            } else if (files[i].size == 0) {
                return false;
            }
        }
        return true;        //返回false时将中止文件加载，需要给出提示
    };
}).call();
