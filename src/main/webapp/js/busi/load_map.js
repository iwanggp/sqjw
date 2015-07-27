/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var ZxGis = {};
//地图对象全局变量
var map = null;
//设置港区的经纬度
var log = 113.8197010890652;
var lat = 34.486262701361284;
var currentLog = null;
var currentLat = null;
/**
 * 初始化，在welcome.js中调用
 * @returns {undefined}
 */
function init_map() {

    //初始化地图对象
    map = new STMapObj("STMap_map");

    //根据中心点和级别定位地图,STMapPoint表示具备x/y属性的二维点对象
    map.locateMap(new STMapPoint(log, lat), 5);
    //设置放大缩小控件是否显示,默认显示
    map.setZoomCompVisible(true);
    //设置比例尺控件是否显示,默认显示
    map.setScaleCompVisible(true);
    map.setCenter(new STMapPoint(log, lat));//设置地图的中心位置
    map.addEventListner("rightclick", menu);
    document.oncontextmenu = function ()
    {
        return false;//屏蔽默认的鼠标右键事件
    }
}
function menu(obj, x, y) {
    var mpoint = map.screen2LonLat(new STMapPoint(x - 30, y - 81));//将屏幕坐标转换成GPS坐标，适当的调整显示位置
    currentLog = mpoint.x;//得到该点点的真实经度
    currentLat = mpoint.y;//得到该点的真实维度
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
function treemenu() {
    map.deleteOverlayById("menu");
    var poly = new STMapMarker();
    poly.id = "gang"; //【必选】对象 id
    poly.point = new STMapPoint(currentLog, currentLat); //【必选】经纬度坐标  STMapPoint 类型
    poly.img = "images/loc128.png"; //【必选】对象的图片地址 url
    poly.infowin = false;
    poly.anchor = "BR";//设置覆盖物的位置
    poly.setMoveable(true);
    map.addOverlay(poly, true);
    map.pan(-150, 0);//将地图移动N个像素距离,x右为正，左为负。y下为正，上为负。
    $.pdialog.open("page/menutree.html", 'add_role_pl', "添加信息", {"width": 230, "height": 260});//打开树形菜单
}
function closeMenu() {
    map.deleteOverlayById("menu");//关闭右击菜单
}