/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $dialog = $("body").data('add_jz_info');
//    var $dialog=$.pdialog.getCurrent();
    var param = $dialog.data('param'); //父窗口传递的参数
    bringDialogToFront($dialog);
    var keyValue = {};  // 数据索引
    var sqid = param.sqid;

    // '分页查询', 显示全部数据
    $('#jzqbxx', $dialog).cutPage({
        jz_id: param.jzid,
        service_code: 'S30004',
        page_size: 20
    }, function (data) {
        for (var i = 0; i < data.length; i++) {
            var item = data[i];     // 获取到table每一行数据
            item.name_link = $('<a/>').attr({
                "hyid": item.did,
                "hylb": item.hylb,
                "hymc": item.mc,
            }).addClass("xq-link").css({"cursor": "pointer", "color": "blue"}).html('查看详情');
            keyValue[item["spid"]] = i;
        }
        setTimeout(function () {
            $(".xq-link").unbind("click").bind("click", function (e) {
                openDetail($(this).attr('hylb'), $(this).attr('hyid'), $(this).attr('hymc'));
            });
        }, 50);
    });
    // 查看人员信息
    $('#look', $dialog).on('click', function () {
        var rowData = $(this).getRow();
        console.log("rowDataORG = " + json2string(rowData));
        if (rowData) {
            sessionStorage.jz0004_yginfo = JSON.stringify(rowData);//放到session中暂存一段时间
            var $dia = $("body").data('add_jz_info');
            setTimeout(function () {
                $('#rkck', $dia).css({'visibility': 'visible'});
                $('#rkxx', $dia).click();
            }, 0);
        } else {
            alertMsg.warn("请先选择一条数据！");
        }
    });
    $('#delete', $dialog).on('click', function () {
        var rowData = $(this).getRow();
        if (rowData) {
            if (rowData.did != null) {
                alertMsg.confirm("确定要删除该记录吗？", {"okCall": function () {
                        var o = new AjaxOptions();
                        o.put("id", rowData.did);
                        o.put('service_code', 'P00000');//删除社区建筑信息
                        o.put('hylb', rowData.hylb);
                        o.sus = function (data) {
                            alertMsg.correct("删除成功");
                            var $dia = $("body").data('add_jz_info');
                            setTimeout(function () {
                                $('#jzxx', $dia).click();
                            }, 0);
                            $('#close', $dialog).trigger("click");
                        };
                        $.ajax(o);
                    }
                });
            } else {
                alertMsg.error("没有找到该数据");
            }
        }
        else {
            alertMsg.warn("请先选择一条数据！");
        }
    });
    function openDetail(hyval, hyid, hymc) {
        console.log(hyval + "hangyeleibie--------jz0000-jzzong");
        if ("za_yl" == hyval) {
            url = 'page/za/za0002-yldetail.html';
        } else if ("za_sp" == hyval) {
            url = 'page/za/za0001-shopdetail.html';
        } else if ("za_wl" == hyval) {
            url = 'page/za/za0003-wldetail.html';
        } else if ("za_wb" == hyval) {
            url = 'page/za/za0005-wbdetail.html';
        } else if ("za_lg" == hyval) {
            url = 'page/za/za0006-lgdetail.html';
        } else if ("za_zjh" == hyval) {
            url = 'page/za/za0009-zjhdetail.html';
        } else {
            url = 'page/za/za0007-csdetail.html';
        }
        $.pdialog.open(url, 'mydetail', hymc + "详细情况",
                {"width": 580, "height": 560, mask: true,
                    param: {hylb: hyval, hyid: hyid},
                    close: function (param) {
                        return true;
                    }
                });
    }
}).call();
