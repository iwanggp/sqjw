
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $("body").data('add_jypmt');//必须通过这种方法
    bringDialogToFront($dialog);
    var param = $dialog.data('param');
    var fileOptions = null;
    initFile();
//需要在页面加载完成时加载文件拖拽div，不同于AjaxOptions对象,初始化图片
    function initFile() {
        fileOptions = new FileOptions($("#jypmt", $dialog));
        fileOptions.readFile = function (id, files) {      //加载文件的回调函数，可在该函数中进行文件格式与大小校验
            debugger;
            id;
            fileOptions.put('file_length', files.length);
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
    }
    $('#add', $dialog).click(function () {
        fileOptions.putForm($('#jypmt_form', $dialog));       //添加表单内容
        fileOptions.setService('P44204');
        fileOptions.put('csid', param.row.id);
        fileOptions.sus = function (data) {
            alertMsg.correct("添加成功");
            $('#close', $dialog).trigger('click');
        };
        fileOptions.after = function (c, d) {
            console.log(c);
        };
        fileOptions.send();         //开始上传，可在后台中使用 byte[] file = (byte[])in.getObjectValue(id);     获取文件内容
    });
}).call();