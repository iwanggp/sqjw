/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var ZxGis = {};
//地图对象全局变量
window.map = null;
//设置港区的经纬度
var log = 113.84257496754428;
var lat = 34.530768351088405;
/**
 * 初始化，在welcome.js中调用
 * @returns {undefined}
 */
function init_map() {

    //初始化地图对象
    map = new STMapObj("STMap_map");
    //根据中心点和级别定位地图,STMapPoint表示具备x/y属性的二维点对象
    map.locateMap(new STMapPoint(log, lat), 2);
    var poly = new STMapMarker();
//    test();
    //设置放大缩小控件是否显示,默认显示
    map.setZoomCompVisible(true);
    //设置比例尺控件是否显示,默认显示
    map.setScaleCompVisible(true);
    map.setCenter(new STMapPoint(log, lat));//设置地图的中心位置
    map.addEventListner("rightclick", menu);
    searchSq('', '', 1);//进入地图时查询一下整个社区
//    map.addEventListner("click", closeMenu);
    document.oncontextmenu = function ()
    {
        return false;//屏蔽默认的鼠标右键事件
    };
}
function menu(obj, x, y) {
    var mpoint = map.screen2LonLat(new STMapPoint(x - 22, y - 81));//将屏幕坐标转换成GPS坐标，适当的调整显示位置
    gangjd = mpoint.x;//得到该点的真实经度
    gangwd = mpoint.y;//得到该点的真实维度
    var point = map.screen2LonLat(new STMapPoint(x + 30, y - 10));//将屏幕坐标转换成GPS坐标，适当的调整右击菜单位置
    var poly = new STMapCustomOverObj();
    poly.id = "menu";
    poly.point = new STMapPoint(point.x, point.y);
    poly.html = $('#mymenu').html();
    poly.anchor = new STMapPoint(50, 80);
    poly.size = new STMapSize(100, 100);//标记的尺寸
    poly.infowin = false;
    map.addOverlay(poly, false);
}
//function treemenu() {
//    map.deleteOverlayById("menu");
//    poly = new STMapMarker();
//    poly.id = "gang"; //【必选】对象 id
//    poly.point = new STMapPoint(gangjd, gangwd); //【必选】经纬度坐标  STMapPoint 类型
//    poly.img = "images/loc128.png"; //【必选】对象的图片地址 url
//    poly.infowin = false;
//    poly.anchor = "BR";//设置覆盖物的位置
//    poly.setMoveable(true);
//    map.addOverlay(poly, true);
//    map.pan(-150, 0);//将地图移动N个像素距离,x右为正，左为负。y下为正，上为负。
//    $.pdialog.open("page/tree/addtree.html", 'add_role_pl', "添加信息", {width: 270, height: 310, mask: false,
//        close: function () {
////            map.deleteOverlayById("gang");
//            return true;//这样才能关闭窗口
//        }
//    });//打开树形菜单
//}
function searchTree() {
    map.deleteOverlayById("menu");
    $.pdialog.open("page/tree/searchtree.html", 'searchtree', "查询信息", {"width": 750, "height": 260});//打开树形菜单
}
function closeMenu() {
//    $('#mymenu').css('display', 'none');
    map.setOverlayVisible('menu', false);
}
function add() {
    map.deleteOverlayById("menu");
    poly = new STMapMarker();
    poly.id = "gang"; //【必选】对象 id
    poly.point = new STMapPoint(gangjd, gangwd); //【必选】经纬度坐标  STMapPoint 类型
    poly.img = "images/loc128.png"; //【必选】对象的图片地址 url
    poly.infowin = false;
    poly.anchor = "BR";//设置覆盖物的位置
    poly.setMoveable(true);
    map.addOverlay(poly, true);
    map.pan(-150, 0);//将地图移动N个像素距离,x右为正，左为负。y下为正，上为负。
    $.pdialog.open("page/add/addsq.html", 'add_root_pl', "添加社区", {width: 580, height: 360, mask: false,
        close: function () {
            map.deleteOverlayById("gang");
            return true;//这样才能关闭窗口
        }
    });//打开树形菜单
}
function openSqDetail(hyid, sqmc) {
    $.pdialog.open("page/bzdzxx/dz0002-sqdetail.html", 'detailSq', sqmc + "详细情况",
            {"width": 580, "height": 560, mask: true,
                param: {sqid: hyid},
                close: function (param) {
                    return true;
                }
            });
}
var urlmap = {
    "za_yl": 'page/za/za0002-yldetail.html',
    "za_sp": 'page/za/za0001-shopdetail.html',
    "sqjz": 'page/bzdzxx/dz0003-loudetail.html',
    "bzdz": 'page/bzdzxx/dz0001-bzdzdetail.html',
    "za_wl": 'page/za/za0003-wldetail.html',
    "za_wb": 'page/za/za0005-wbdetail.html',
    "za_lg": 'page/za/za0006-lgdetail.html',
    "za_zjh": 'page/za/za0009-zjhdetail.html',
    "za_ssrk": 'page/fz/fz0000-rkdetail.html',
    "za_dw": 'page/za/za0010-dwdetail.html',
    "za_fzll": 'page/za/za0026-fzlldetail.html',
    "dw_jyz": 'page/za/za0010-dwdetail.html',
    "za_yg": 'page/fz/yg0001-ygdetail.html',
    "za_jrhy": 'page/za/za0010-dwdetail.html',
    "sc_sc": 'page/za/za0010-dwdetail.html',
    "qtdw": 'page/za/za0010-dwdetail.html',
    "za_ggcs": 'page/za/za0010-dwdetail.html',
    "za_jcss": 'page/add/jcssdetail.html',
    "ydtx": 'page/za/za0010-dwdetail.html',
    "dw_shfl": 'page/za/za0010-dwdetail.html',
    "za_school": 'page/za/za0015-schooldetail.html',
    "za_yy": 'page/za/za0016-yydetail.html',
    "za_dz": 'page/za/za0011-bzdzdetail.html',
    "za_ttdp": 'page/za/za0012-ttdpdetail.html',
};
function openDetail(hyval, hyid, hymc) {
    if (urlmap[hyval]) {
        url = urlmap[hyval];
    } else {
        url = "page/za/za0007-csdetail.html";
    }
    $.pdialog.open(url, 'mydetail', hymc + "详细情况",
            {"width": 580, "height": 560, mask: true,
                param: {hylb: hyval, hyid: hyid},
                close: function (param) {
                    return true;
                }
            });
}
function locationSearch(id, log, lat, mc, dz, hylb) {
//    map.clearAllOverlays();
//    searchSq('', '', 1);//进入地图时查询一下整个社区
    //先清除之前的搜索结果
    var img = 'images/search.png';
    var pt = new STMapMarker();
    //设置对象的唯一id，id要唯一，如果存在重复id，后添加的覆盖已经存在的对象
//    pt.id = "mySearchId";
    pt.id = id;
    pt.point = new STMapPoint(log, lat);
    map.setCenter(new STMapPoint(log, lat), 3);
    //设置对象的图片URL
    pt.img = img;
    /*******以下为可选对象属性*******/
    //鼠标提示文字
    pt.label = mc;
    //设置对象尺寸,默认为图片本身尺寸
    pt.size = new STMapSize(30, 30); // 尺寸对象原型：STMapSize(长度,高度);
    //设置对象定位的锚点位置（相对于图片矩形）;取值范围：BC（下边中心点），BL（左下角），BR（右下角），TL（左上角），TC（上边中心点），TR（右上角），ML（左边中心点），MR（右边中心点），CENTER（图片中心点）
    pt.anchor = "CENTER";
    //设置是否点击显示信息窗口，默认为true。
    pt.infowin = true;
    //设置属性框的标题
    pt.title = '';
    //设置属性框的内容
    pt.content = "<div class='con'>名称：" + mc + "</div><div class='con'>地址：" + dz + "</div><div class='con'>详情：" + "<a class='det' onclick='showInfo($(this))' name='" + mc + "' hyid='" + id + "' hylb='" + hylb + "' >点击查看详情</a>" + "</div>";
    //将该对象添加到地图上
    //参数pt为marker对象，参数true表示是否自动调整视野，如果为true，则地图自动定位到该位置
    map.addOverlay(pt, true);
    pt.bound(1000);
}
function showInfo(data) {
    var id = $(data).attr('hyid');
    var hylb = $(data).attr("hylb");
    var mc = $(data).attr("name");
    openDetail(hylb, id, mc);
}
function test() {
    poly.id = "gang111"; //【必选】对象 id
    poly.point = new STMapPoint(log, lat); //【必选】经纬度坐标  STMapPoint 类型
    poly.img = "images/loc128.png"; //【必选】对象的图片地址 url
    poly.infowin = false;
    poly.anchor = "BR";//设置覆盖物的位置
//    poly.setMoveable(true);
    map.addOverlay(poly, true);
}
function addJcss() {
    map.deleteOverlayById("menu");
    poly = new STMapMarker();
    poly.id = "gangjcss"; //【必选】对象 id
    poly.point = new STMapPoint(gangjd, gangwd); //【必选】经纬度坐标  STMapPoint 类型
    poly.img = "images/loc128.png"; //【必选】对象的图片地址 url
    poly.infowin = false;
    poly.anchor = "BR";//设置覆盖物的位置
    poly.setMoveable(true);
    map.addOverlay(poly, true);
    map.pan(-170, 0);//将地图移动N个像素距离,x右为正，左为负。y下为正，上为负。
    $.pdialog.open("page/add/addjcss.html", 'add_za_jcss', "基础设施", {width: 580, height: 360, mask: false,
        close: function () {
            map.deleteOverlayById("gangjcss");
            return true;//这样才能关闭窗口
        }
    });//打开树形菜单
}