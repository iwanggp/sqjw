
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $dialog = $("body").data('look_jypmt');//必须通过这种方法
    var param = $dialog.data('param');
    var row = param.row;
    var csid = row.id;
    getPicList();
    function getPicList() {
        var option = new AjaxOptions();
        option.put('service_code', 'S44205');//查询有多少个图片
        option.put('csid', csid);
        option.sus = function (data) {
            if (data != null) {
                var length = parseInt(data.pic_list.length);
                if (!length) {
                    alertMsg.warn("还没有上传证件亲");
                }
                var rowCount = Math.ceil(length / 3);
                var imags = [];
                var names = [];
                $.each(data.pic_list, function (i, n) {
                    var $span = $('<span/>').html("经营平面图" + i).css({color: "blue"});
                    names.push($span);
                    var image = $('<img/>').attr({src: n.jypmtpath, width: 200, height: 160});
                    var $a = $('<a/>').attr({href: n.jypmtpath, target: '_blank'}).append(image);
                    imags.push($a);
                });
                createTable(rowCount, 3, imags, names);//暂定为每行三列的显示图片
            }
        }
        $.ajax(option);
    }
    /**
     * 纯函数编程
     * @param {type} rowCount
     * @param {type} cellCount
     * @param {type} imags
     * @returns {undefined}
     */
    function createTable(rowCount, cellCount, imags, names)
    {
        var $table = $('<table>').attr({border: "1"});//这里使用单引号，不用双引号进行转义了
        $table.appendTo($("#createtable", $dialog));
        for (var i = 0; i < rowCount; i++) {
            var tr = $("<tr/>").attr({margin: "15px"});
            var _tr = $("<tr/>").attr({margin: "15px"});
            _tr.appendTo($table);
            tr.appendTo($table);
            for (var j = 0; j < cellCount; j++) {
                var $_a = $('<a/>').attr({href: "#", picid: i * cellCount + j}).css({color: "red"}).addClass("_delete").html("删除");
                var td = $("<td/>").attr({id: i * cellCount + j}).css({width: "auto", height: "auto", align: "center"});
                var _td = $("<td/>").attr({id: i * cellCount + j}).css({width: "auto", height: "auto", align: "center"});
                if (imags[i * cellCount + j]) {
                    names[i * cellCount + j].appendTo(_td);
                    imags[i * cellCount + j].appendTo(td);
                    $_a.appendTo(td);
                }
                _td.appendTo(_tr);
                td.appendTo(tr);

            }
        }
        $("#createtable", $dialog).append("</table>");
        $('a._delete').on('click', function () {
            var picid = $(this).attr('picid');
            alertMsg.confirm("确定删除吗？", {"okCall": function () {//表格移除的同时，也将数据库中该文件的路径删除
                    $("table tr").find('td[id="' + picid + '"]').remove();
                    var jypmtpath = imags[picid].attr("href");
                    var o = new AjaxOptions();
                    o.put('service_code', 'P44206');//删除照片
                    o.put('jypmtpath', jypmtpath);
                    o.sus = function () {
                        alertMsg.correct("删除成功");
                    }
                    $.ajax(o);
                }
            });
        });
    }

}).call();