/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var f = false; //定义一个开关变量
    hidePic();
    var $dialog = $("body").data('mydetail');
    bringDialogToFront($dialog);
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#zgbm', $dialog));
    $('#zgbm', $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    $("input", $dialog).attr("disabled", "disabled"); //让输入框为只读状态
    var param = $dialog.data('param'); //父窗口传递的参数
    var opt = new AjaxOptions();
    opt.put("service_code", "S40002");
    opt.put("hylb", param.hylb);
    opt.put("id", param.hyid);
    opt.sus = function (data) {
        if (isNaN(data.csdata.jyxkz)) {
            data.csdata.jyxkz = "<a href='" + server_root + data.csdata.jyxkz + "' target='_blank'>" + "查看经营许可证" + "</a>";
        } else {
            data.csdata.jyxkz = "<span>" + "无" + "</span>";
        }
        if (isNaN(data.csdata.ajhgz)) {
            data.csdata.ajhgz = "<a href='" + server_root + data.csdata.ajhgz + "' target='_blank'>" + "查看安检合格证" + "</a>";
        } else {
            data.csdata.ajhgz = "<span>" + "无" + "</span>";
        }
        if (isNaN(data.csdata.cspmt)) {
            data.csdata.cspmt = "<a href='" + server_root + data.csdata.cspmt + "' target='_blank'>" + "查看经营平面图" + "</a>";
        } else {
            data.csdata.cspmt = "<span>" + "无" + "</span>";
        }
        if (isNaN(data.csdata.gsxkz)) {
            data.csdata.gsxkz = "<a href='" + server_root + data.csdata.gsxkz + "' target='_blank'>" + "查看工商许可证" + "</a>";
        } else {
            data.csdata.gsxkz = "<span>" + "无" + "</span>";
        }
        padBackData(data.csdata, $('#shop_form', $dialog)); //回填娱乐场所信息
    };
    $.ajax(opt);
    //#修改信息服务
    $('#modify', $dialog).click(function () {
        var btns = new Array(); //或者写成：var btns= [];
        if (f = !f) {
            $(":input", $dialog).removeAttr("disabled");
            $('#cspmt_pic,#gsxkz_pic,#jyxkz_pic,#ajhgz_pic', $dialog).show();
            $(this).html("保存");
        } else {
            f = !f;
            $('.required').each(function (key, value) {
                btns[key] = $(this).val();
                if (btns[key] != null) {
                    $('#modify').html("保存");
                }
            });
            if ($("#shop_form", $dialog).valid()) {
                fileOptions.putForm($('#shop_form', $dialog));       //添加表单内容
                fileOptions.setService('P41005');
                fileOptions.put("id", param.hyid);
                fileOptions.put("jyxkz", $('#jyxkz a').attr("href"));
                fileOptions.put("ajhgz", $('#ajhgz a').attr("href"));
                fileOptions.put("cspmt", $("#cspmt a").attr("href"));
                fileOptions.put("gsxkz", $("#gsxkz a").attr("href"));
                fileOptions.sus = function (data) {
                    alertMsg.correct("修改成功");
                    var page = parseInt($("#xiye").html());//获取当前的页数
                    if (isSearch) {
                        getCS('za_yl', '', page);
                    }
                    isSearch = false;
                    var $dia = $("body").data('add_jz_info');
                    setTimeout(function () {
                        $('#jzxx', $dia).click();
                    }, 50);
                    $("#search-button", navTab.getCurrentPanel()).trigger("click");//激发一次查询按钮的点击，实现了页面的刷新
                    $("#close", $dialog).trigger("click");
                };
                fileOptions.after = function (c, d) {
                    console.log(c);
                };
                fileOptions.send();
            }
        }
    });
    //#删除信息服务
    $('#del', $dialog).click(function () {
        if (param.hyid != null) {
            alertMsg.confirm("确定要删除该娱乐场所吗？", {"okCall": function () {
                    $("input", $dialog).removeAttr("disabled");
                    var o = new AjaxOptions();
                    o.put("jyxkz", $('#jyxkz a').html());
                    o.put("ajhgz", $('#ajhgz a').html());
                    o.put("cspmt", $("#jypmt a").html());
                    o.put("gsxkz", $("#gsxkz a").html());
                    o.put("id", param.hyid);
                    o.put("service_code", "P41004");
                    o.sus = function () {
                        alertMsg.correct("删除成功了！");
                        var page = parseInt($("#xiye").html());//获取当前的页数
                        if (isSearch) {
                            getCS('za_yl', '', page);
                        }
                        isSearch = false;
                        var $dia = $("body").data('add_jz_info');
                        setTimeout(function () {
                            $('#jzxx', $dia).click();
                        }, 50);
                        $('#close', $dialog).trigger("click");
                        $("#search-button", navTab.getCurrentPanel()).trigger("click");//激发一次查询按钮的点击，实现了页面的刷新
                    };
                    $.ajax(o);
                }
            });
        } else {
            alertMsg.error("没有找到该数据");
        }
    });
    function hidePic() {
        $('#jyxkz_pic,#ajhgz_pic,#cspmt_pic,#gsxkz_pic', $dialog).hide();
    }
    //需要在页面加载完成时加载文件拖拽div，不同于AjaxOptions对象
    var fileOptions = new FileOptions($('#pic_jyxkz', $dialog), $('#pic_ajhgz', $dialog), $('#pic_cspmt', $dialog), $('#pic_gsxkz', $dialog));
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
