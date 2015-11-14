/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $dialog = $("body").data('add_jz_info');
    var currentPage = 1;
    var param = $dialog.data('param'); //父窗口传递的参数
    bringDialogToFront($dialog);
    var keyValue = {};  // 数据索引
    var sqid = param.sqid;
    getResult();
    // 查看人员信息
    $('#look', $dialog).on('click', function () {
        var rowData = $(this).getRow();
        if (rowData) {
            sessionStorage.jz0004_yginfo = JSON.stringify(rowData);//放到session中暂存一段时间
            var $dia = $("body").data('add_jz_info');
            setTimeout(function () {
                $('#rkck', $dia).css({'visibility': 'visible'});
                $('#rkxx', $dia).click();
            }, 150);
        } else {
            alertMsg.warn("请先选择一条数据！");
        }
    });
    $('#delete', $dialog).on('click', function () {
        var rowData = $(this).getRow();
        currentPage = rowData.cut_row;
        currentPage = parseInt(currentPage / 20) + 1;
        if (rowData) {
            if (rowData.did != null) {
                alertMsg.confirm("确定要删除该记录吗？", {"okCall": function () {
                        var o = new AjaxOptions();
                        o.put("id", rowData.did);
                        o.put('service_code', 'P00000');//删除社区建筑信息
                        o.put('hylb', rowData.hylb);
                        o.sus = function (data) {
                            alertMsg.correct("删除成功");
                            getcurrentResult();
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
    function getResult() {
        // '分页查询', 显示全部数据
        $('#jzqbxx', $dialog).cutPage({
            fw_id: param.fwid,
            service_code: 'S30004',
            page_size: 20,
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
    }
    function getcurrentResult() {
        // '分页查询', 显示全部数据
        $('#jzqbxx', $dialog).cutPage({
            jz_id: param.jzid,
            service_code: 'S30004',
            page_size: 20,
            page: currentPage
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
    }
}).call();
