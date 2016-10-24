/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $("body").data('add_jz_info');
    var param = $dialog.data('param'); //父窗口传递的参数
    console.log(param.sqid + param.jzid, param.fwid + param.jd + param.wd);
    var currentPage = 1;
//    // '分页查询', 显示全部数据
    getSearchCurrentResult();
    $("#addjm", $dialog).click(function () {
        $.pdialog.open('page/fz/rk0001-addzjh.html', 'add_yg_xx', "添加居民信息",
                {"width": 880, "height": 560, mask: true,
                    param: {sqid: param.sqid, jzid: param.jzid, fwid: param.fwid, jd: param.jd, wd: param.wd},
                    close: function (param) {
                      
                        return true;
                    }
                });
    });
    $('#superedit', $dialog).click(function () {
        var rowData1 = $(this).getRow();
        if (rowData1) {
            currentPage = rowData1.cut_row;
            currentPage = parseInt(currentPage / 30) + 1;
            $.pdialog.open('page/fz/fz0000-rkdetail.html', 'mydetail', '人员信息详情', {
                width: 600,
                height: 580,
                mask: true,
                param: {hylb: rowData1.hylb, hyid: rowData1.id},
                close: function (param) {
                    return true;
                }
            });
        } else {
            alertMsg.warn("请先选择一条数据！");
        }
    });
//
    $('#delete', $dialog).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            alertMsg.confirm("确定要删除该员工信息吗！", {"okCall": function () {
                    var oid = rowData.id;
                    currentPage = rowData.cut_row;
                    currentPage = parseInt(currentPage / 30) + 1;
                    if (oid) {
                        var o = new AjaxOptions();
                        o.put("id", oid);
                        o.put('service_code', 'P31007'); //删除社区建筑信息
                        o.sus = function (data) {
                            alertMsg.correct("删除成功");
                            getSearchCurrentResult();
                            $('#search_ry-button', $dialog).trigger('click');
                            $('#close', $dialog).trigger("click");
                        };
                        $.ajax(o);

                    } else {
                        alertMsg.error("没有找到该数据");
                    }
                }
            });
        } else {
            alertMsg.warn("请先选择至少一条数据！");
        }
    });
    $('#mutdelete', $dialog).click(function () {
        var $mychecked = $("input[type='checkbox']:checked");
        var len = $mychecked.length;
        if (len) {
            alertMsg.confirm("确定要删除这些人员信息吗！", {"okCall": function () {
                    $mychecked.each(function () {
                        var oid = $(this).attr('id');
                        currentPage = $(this).attr('cut_row');
                        currentPage = parseInt(currentPage / 30) + 1;
                        if (oid) {
                            var o = new AjaxOptions();
                            o.put("id", oid);
                            o.put('service_code', 'P31007'); //删除社区建筑信息
                            o.sus = function (data) {
                                alertMsg.correct("删除成功");
//                                $('#search_ry-button', $dialog).trigger('click');
//                                $('#close', $dialog).trigger("click");
                            };
                            $.ajax(o);

                        } else {
                            alertMsg.error("没有找到该数据");
                        }
                    });
                    getSearchCurrentResult();
                  
                }
            });
        } else {
            alertMsg.warn("请先勾选至少一条数据！");
        }
    });
    function getSearchCurrentResult() {
        $('#rkinfo', $dialog).cutPage({
            service_code: 'S70003',
            page_size: 30,
            fw_id: param.fwid,
            page: currentPage
        }, function (data) {
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                item.xz = $('<input type="checkbox"/>').attr({
                    "id": item.id,
                    "cut_row": item.cut_row,
                    "checked": false
                }).css({"cursor": "pointer"});
                item.map_link = $('<a/>').attr({
                    "hyid": item.id,
                    "hylb": item.hylb,
                    "jd": item.jd,
                    "wd": item.wd,
                    "hymc": item.xm,
                    "dz": item.jtdz
                }).addClass("map-link").css({"cursor": "pointer", "color": "red"}).html('进入地图');
                setTimeout(function () {
                    $(".map-link").unbind("click").bind("click", function () {
                        map.clearAllOverlays();
                        locationSearch($(this).attr("hyid"), $(this).attr("jd"), $(this).attr("wd"), $(this).attr("hymc"), $(this).attr("dz"), $(this).attr("hylb"));
                        $('.home_icon').click();
                    });
                }, 100);
                setTimeout(function () {
                    $(".name-link").unbind("click").bind("click", function () {
                        $.pdialog.open('page/za/za0009-zjhdetail.html', 'mydetail', "人房关联",
                                {"width": 680, "height": 560, mask: true,
                                    param: {hyid: $(this).attr('fzid'),
                                        hylb: 'za_zjh'},
                                    close: function (param) {
                                        return true;
                                    }
                                });
                    });
                }, 100);
                setTimeout(function () {
                    $(".info-link").unbind("click").bind("click", function () {
                        $.pdialog.open('page/fz/rk0003-ssry.html', 'add_ssry', "查看随行人员人员",
                                {"width": 880, "height": 560, mask: true,
                                    param: {gssfzh: $(this).attr('sfzh')},
                                    close: function (param) {
                                        currentPage = 1;
                                        return true;
                                    }
                                });

                    });
                }, 100);
            }
        });
    }
}).call();
