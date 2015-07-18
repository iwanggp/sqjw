/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var ZxGis = {};
//地图对象全局变量
var map;
/**
 * 初始化，在welcome.js中调用
 * @returns {undefined}
 */
function init_map() {

    //初始化地图对象
    map = new STMapObj("STMap_map");

    //根据中心点和级别定位地图,STMapPoint表示具备x/y属性的二维点对象
    map.locateMap(new STMapPoint(121.43745399, 31.211535), 7);
    //map.locateMap(new STMapPoint(111.741257,40.842905),5);

    //设置放大缩小控件是否显示,默认显示
    map.setZoomCompVisible(true);
    //设置比例尺控件是否显示,默认显示
    map.setScaleCompVisible(true);

}

