/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = navTab.getCurrentPanel();
    var obj = JSON.parse(sessionStorage.unionyg);
    initParaSelect('za_ssrk.rylb', $('#rylb', $dialog));
    initParaSelect('za_people.xb', $('#xb', $dialog));
    initParaSelect('jwsq_bzdzxx.ssjwqdm', $('#zgbm', $dialog));
    var tableData; // 存放临时数据
    var keyValue = {}; // 数据索引
    var currentPage = 1;
    // '分页查询', 显示全部数据
    getCurrentResult();
    /**
     * 查询服务
     */
    $('#search_ry-button', $dialog).on('click', function () {
        // '分页查询', 显示全部数据
        getCurrentResult();
    });
    $('#superedit', $dialog).click(function () {
        var rowData1 = $(this).getRow();
        if (rowData1) {
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
    $("#addrk", $dialog).click(function () {
        var rowData1 = $(this).getRow();
        if (rowData1) {
            $.pdialog.open('page/fz/rk0001-addzjh.html', 'add_yg_xx', "添加实有人口信息信息",
                    {"width": 580, "height": 560, mask: true,
                        param: {sqid: obj['sq_id'], jzid: obj['jz_id'], fwid: obj['id'], jd: obj['jd'], wd: obj['wd'], fzid: obj['id']},
                        close: function (param) {
                            return true;
                        }
                    });
        } else {
            alertMsg.warn('请先选择一个房屋进行添加！');
        }
    });
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
                            $('#search_ry-button', navTab.getCurrentPanel()).trigger('click');
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
                        if (oid) {
                            var o = new AjaxOptions();
                            o.put("id", oid);
                            o.put('service_code', 'P31007'); //删除社区建筑信息
                            o.sus = function (data) {
                                alertMsg.correct("删除成功");
                            };
                            $.ajax(o);
                        } else {
                            alertMsg.error("没有找到该数据");
                        }
                    });
                    $('#close', $dialog).trigger("click");
                    currentPage = parseInt(currentPage / 30) + 1;
                    $('#search_ry-button', navTab.getCurrentPanel()).trigger('click');
                }
            });
        } else {
            alertMsg.warn("请先勾选至少一条数据！");
        }
    });
    function getCurrentResult() {
        $('#rkinfo', $dialog).cutPage(form2JSON($('#search-form', $dialog), {service_code: 'S55552', yg_fz_id: obj['id'], page_size: 30, page: currentPage}), function (data) {
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
                item.info = $('<a/>').attr({
                    "hyid": item.id,
                    "hylb": item.hylb,
                    "jd": item.jd,
                    "wd": item.wd,
                    "hymc": item.xm,
                    "dz": item.jtdz
                }).addClass("info-link").css({"cursor": "pointer", "color": "brown"}).html('信息管理');
                setTimeout(function () {
                    $(".map-link").unbind("click").bind("click", function () {
                        map.clearAllOverlays();
                        locationSearch($(this).attr("hyid"), $(this).attr("jd"), $(this).attr("wd"), $(this).attr("hymc"), $(this).attr("dz"), $(this).attr("hylb"));
                        $('.home_icon').click();
                    });
                }, 100);
            }
        });
    }
}).call();
