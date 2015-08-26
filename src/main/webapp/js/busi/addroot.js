/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//获取建筑列表
function getJZ(m, page) {
    fylb = 'search_jz';
    mc = m;
    var o = new AjaxOptions();
    o.isDialog = true; //为弹出窗口
    o.put("service_code", "S20000");
    o.put("mc", mc);
    o.put("page_size", 10);
    o.put("page", page);
    o.sus = function (data) {
        if (data.result.length > 0) {
            $.pdialog.closeCurrent();
            LocationPointJz(data);
            $('#STMap_map').css({width: '85%', overflow: 'hidden'});
            $('#contentRight').css('display', 'block');
            $('#mo').text(data.page_count);
            showJZList(data);
        } else {
            map.clearAllOverlays();
            $('#STMap_map').css({width: '100%', overflow: 'hidden'});
            $('#contentRight').css('display', 'none');
        }
    };
    $.ajax(o);
}
function searchJZ(mph, dz, m, page) {
    fylb = 'search_jz';
    mc = m;
    var o = new AjaxOptions();
    o.isDialog = true; //为弹出窗口
    o.put("service_code", "S20002");
    o.put("mph", mph);
    o.put("dz", dz);
    o.put("mc", mc);
    o.put("page_size", 10);
    o.put("page", page);
    o.sus = function (data) {
        if (data.result.length > 0) {
            $.pdialog.closeCurrent();
            LocationPointJz(data);
            $('#STMap_map').css({width: '85%', overflow: 'hidden'});
            $('#contentRight').css('display', 'block');
            $('#mo').text(data.page_count);
            showJZList(data);
        } else {
            map.clearAllOverlays();
            $('#STMap_map').css({width: '100%', overflow: 'hidden'});
            $('#contentRight').css('display', 'none');
        }
    };
    $.ajax(o);
}
function getSq(m, page) {
    fylb = 'search_sq';
    mc = m;
    var o = new AjaxOptions();
    o.isDialog = true; //为弹出窗口
    o.put("service_code", "S21002");
    o.put("mc", mc);
    o.put("page_size", 10);
    o.put("page", page);
    o.sus = function (data) {
        if (data.result.length > 0) {
            $.pdialog.closeCurrent();
            LocationPointSq(data);
            $('#STMap_map').css({width: '85%', overflow: 'hidden'});
            $('#contentRight').css('display', 'block');
            $('#mo').text(data.page_count);
            showSqList(data);
        } else {
            map.clearAllOverlays();
            $('#STMap_map').css({width: '100%', overflow: 'hidden'});
            $('#contentRight').css('display', 'none');
        }
    };
    $.ajax(o);
}
function searchSq(sqmc, sqdz, page) {
    fylb = 'search_sq';
    var o = new AjaxOptions();
    o.isDialog = true; //为弹出窗口
    o.put("service_code", "S21003");
    o.put("sqmc", sqmc);
    o.put("sqdz", sqdz);
    o.put("page_size", 10);
    o.put("page", page);
    o.sus = function (data) {
        if (data.result.length > 0) {
            $.pdialog.closeCurrent();
            LocationPointSq(data);
            $('#STMap_map').css({width: '85%', overflow: 'hidden'});
            $('#contentRight').css('display', 'block');
            $('#mo').text(data.page_count);
            showSqList(data);
        } else {
            map.clearAllOverlays();
            $('#STMap_map').css({width: '100%', overflow: 'hidden'});
            $('#contentRight').css('display', 'none');
        }
    };
    $.ajax(o);
}
