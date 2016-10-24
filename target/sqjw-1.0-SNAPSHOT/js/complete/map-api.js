var scripts=document.getElementsByTagName("script"),script=scripts[scripts.length-1],src=script.src;var STMapEngineAPI=src.split("map.js")[0];document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapComm.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapCustomOverObj.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapScript.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapTypes.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapEagle.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapUserData.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapNav.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapBusTrans.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapMarker.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapPolyline.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapOval.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapArc.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapRect.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapRect2.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapLabel.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapInfowin.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapEvent.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapObj.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapSearch.js'><\/script>");document.writeln("<script type='text/javascript' src='"+STMapEngineAPI+"STMapSearchN.js'><\/script>");document.writeln('<iframe name="ifrm_Submit2Engine" style="display:none"></iframe>');document.writeln('<form name="frm_Submit2Engine" id="frm_Submit2Engine" target="ifrm_Submit2Engine" style="display:none"></form>');function STMapBackDianxin(b,a){if(a=="GEOCODING"){if((typeof(STMapGeoCodeBak)).toLowerCase()=="object"||(typeof(STMapGeoCodeBak)).toLowerCase()=="function"){STMapGeoCodeBak(b.split("_")[1],b.split("_")[2])}STMapGeoCodeBak=""}if(a=="POSITONDES"){if((typeof(STMapPianZhuanBak)).toLowerCase()=="object"||(typeof(STMapPianZhuanBak)).toLowerCase()=="function"){STMapPianZhuanBak(b)}STMapPianZhuanBak=""}}function sogouGeoCoding(a){var b="";b=a.response.data[0].address;if((typeof(STMapPianZhuanBak)).toLowerCase()=="object"||(typeof(STMapPianZhuanBak)).toLowerCase()=="function"){STMapPianZhuanBak(b)}STMapPianZhuanBak=""}function GetAll(a,b){b=replaceAll(b,"!@^*","'");if(STMapPianZhuanBak!=""||STMapPianZhuanBak1!=""){if(b.indexOf("中国")>-1&&b.indexOf("_")==-1){if((typeof(STMapPianZhuanBak)).toLowerCase()=="object"||(typeof(STMapPianZhuanBak)).toLowerCase()=="function"){STMapPianZhuanBak(b)}STMapPianZhuanBak=""}else{if(b.indexOf("_")>-1){if((typeof(STMapPianZhuanBak1)).toLowerCase()=="object"||(typeof(STMapPianZhuanBak1)).toLowerCase()=="function"){STMapPianZhuanBak1(b.split("_")[0],b.split("_")[1])}}else{if((typeof(STMapPianZhuanBak1)).toLowerCase()=="object"||(typeof(STMapPianZhuanBak1)).toLowerCase()=="function"){STMapPianZhuanBak1(0,0)}}STMapPianZhuanBak1=""}}if(STMapGeoCodeBak!=""){if((typeof(STMapGeoCodeBak)).toLowerCase()=="object"||(typeof(STMapGeoCodeBak)).toLowerCase()=="function"){STMapGeoCodeBak(b.split(",")[0],b.split(",")[1])}STMapGeoCodeBak=""}}var getScriptArgs=function(){var a=document.getElementsByTagName("script"),c=a[a.length-1],h=c.src,g=/(?:\?|&)(.*?)=(.*?)(?=&|$)/g,b,d={};while((b=g.exec(h))!=null){d[b[1]]=decodeURIComponent(b[2])}return d};var args=getScriptArgs();var getScriptArg=function(b){var a=document.getElementsByTagName("script");script=a[a.length-1];src=script.src;return(src.match(new RegExp("(?:\\?|&)"+b+"=(.*?)(?=&|$)"))||["",null])[1]};try{var f=document.createElement("style");f.setAttribute("type","text/css");var j="v\\:*{behavior:url(#default#VML);}";if(f.styleSheet){f.styleSheet.cssText=j}else{var m=document.createTextNode(j);f.appendChild(m)}document.getElementsByTagName("HEAD")[0].appendChild(f);if(document.namespaces){document.namespaces.add("v","urn:schemas-microsoft-com:vml")}}catch(e){}function mapresponse(h,g){if(h=="FuzzySearchN"||h=="AroundSearchN"||h=="RectSearchN"){if(STMapSearchBack!=""){STMapSearchBack(g)}}if(h=="NeighborhoodServlet"){STMapJuweiBack(g)}if(h=="CONTEXTFIND"||h=="AROUNDSEARCH"){var a=new Object();if(g.indexOf("STM")>-1){a.errCode=g}else{a.errCode="";a.currentPage=g.split(";")[0].split("_")[0];a.totleNumber=g.split(";")[0].split("_")[1];a.totlePage=g.split(";")[0].split("_")[2];a.str=g}a.getResulte=function(i){var q="";q=g.split(";")[i];var n=new Object();if(q){var p=q.split("_")[0];var o=q.split("_")[4]+","+q.split("_")[5];var k="POI";var l=new Array();l[0]={name:"名称",value:q.split("_")[1]};l[1]={name:"地址",value:q.split("_")[2]};l[2]={name:"电话",value:q.split("_")[3]};n.id=p;n.xys=o;n.layer=k;n.fields=l}return n};if(STMapSearchBack!=""){STMapSearchBack(a)}}if(h=="ROADCROSS"){var c=new Array();if(g.indexOf("STM")==-1){var d=g.split(";");for(var b=0;b<d.length-1;b++){c[b]=d[b].split("/")[0]+","+d[b].split("/")[1].split("_")[0]+","+d[b].split("_")[1]+","+d[b].split("_")[2]}}if(STMapRoadSearchBack!=""){STMapRoadSearchBack(c)}}if(h=="cccc"){if(STMapRoadCrossesBack!=""){STMapRoadCrossesBack(g)}}}var reg=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;String.prototype.colorHex=function(){var k=this;if(/^(rgb|RGB)/.test(k)){var b=k.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",");var a="#";for(var c=0;c<b.length;c++){var h=Number(b[c]).toString(16);if(h==="0"){h+=h}a+=h}if(a.length!==7){a=k}return a}else{if(reg.test(k)){var g=k.replace(/#/,"").split("");if(g.length===6){return k}else{if(g.length===3){var d="#";for(var c=0;c<g.length;c+=1){d+=(g[c]+g[c])}return d}}}else{return k}}};String.prototype.colorRgb=function(){var c=this.toLowerCase();if(c&&reg.test(c)){if(c.length===4){var d="#";for(var b=1;b<4;b+=1){d+=c.slice(b,b+1).concat(c.slice(b,b+1))}c=d}var a=[];for(var b=1;b<7;b+=2){a.push(parseInt("0x"+c.slice(b,b+2)))}return"RGB("+a.join(",")+")"}else{return c}};RegisterNameSpace=function(fullName){var nsArray=fullName.split(".");var strEval="";var strNS="";for(var i=0;i<nsArray.length;i++){if(i!=0){strNS+="."}strNS+=nsArray[i];strEval+="if (typeof("+strNS+") == 'undefined') "+strNS+" = new Object();"}if(strEval!=""){eval(strEval)}};RegisterNameSpace("STMap");function $(a){return document.getElementById(a)}STMap.Heng=2;STMap.Shu=2;STMap.Width=256;STMap.MapDiv="";function locatemap(a,f,d){STMap.MapDiv=$("_STMap_map");var e="";for(var c=0;c<STMap.Shu;c++){for(var b=0;b<STMap.Heng;b++){e+="<img id=_ST_img_"+c+"_"+b+' style="position:absolute;left:0px;top:0px;width:256px;height:256px;left:'+(STMap.Width*b)+"px;top:"+(STMap.Width*c)+'px" src="http://180.168.91.4:8088/temp/newsh/6/13_9/stmapw_6862_4841_6.png">'}}STMap.MapDiv.innerHTML=e}function down(e){var id=(e.srcElement.id);if(id.indexOf("_ST_img")>-1){$(id).setCapture();STMap.srcElemet=$(id)}STMap.sx=e.x;STMap.sy=e.y;for(var i=0;i<100;i++){if($("_ST_img"+i)){eval("STMap.dsx"+i+"=$('_ST_img"+i+"').style.pixelLeft");eval("STMap.dsy"+i+"=$('_ST_img"+i+"').style.pixelTop")}}}function move(e){if(typeof(STMap.sx)=="undefined"){return false}if(STMap.sx==null){return false}var gx=e.x-STMap.sx;var gy=e.y-STMap.sy;for(var i=0;i<100;i++){if($("_ST_img"+i)){$("_ST_img"+i).style.left=eval("STMap.dsx"+i)+gx;$("_ST_img"+i).style.top=eval("STMap.dsy"+i)+gy}}}function up(a){if(STMap.srcElemet){STMap.srcElemet.releaseCapture()}STMap.sx=null;STMap.sy=null};function STMapArc(){this.id="";this.center="";this.width=0;this.height=0;this.startAngle=0;this.endAngle=0;this.strokeColor="#000000";this.strokeWeight=4;this.strokeOpacity="1.0";this.dashStyle="Solid";this.filled=false;this.fillColor="#000000";this.fillOpacity="1.0";this.autoClose=false;this.isSector=false;this.infowin=true;this.tooltip="";this.title="";this.content="";this.infoCustom=false;this.infoCustomContentHTML="";this.cusInfoWinWidth=0;this.cusInfoWinHeight=0;this.setCustomInfoWin=function(d,c,a,b){if(!d){this.infoCustom=false;return}this.infoCustom=true;if(a){this.cusInfoWinWidth=a}if(b){this.cusInfoWinHeight=b}if(c){this.infoCustomContentHTML=c}};this.showInfoWin=function(a){if(a){STMapInfoWinObj.overlayObj=STMapGetOverlayObjById(this.id);STMapInfoWinObj.overlay=STMap$(this.id);STMapInfoWinObj.setVisible(true)}else{STMapInfoWinObj.setVisible(false)}};this.refresh=function(){var a=STMap$(this.id);STMapObjInstance.deleteOverlayByIdInner(this.id);STMapObjInstance.addOverlay(this)}};function STMapBusTrans(){this.sp="";this.ep="";this.status=1;this.tactic=1;this.count=1;this.cbkFunction="";this.execute=function(){if(this.sp==""||this.ep==""){return}var a=STMapSearchEngine+"SHTELCOME/servlet/MapService?QueryType=CONTEXTFIND&CITY=SH&name="+encodeURIComponent(encodeURIComponent(this.keyword))+"&pageNo="+this.currentPage+"&Nums="+this.pageSize+"&keywords="+encodeURIComponent(encodeURIComponent("餐饮"))+"&source=scriptjs&key=d72aff96af37952a";STMapSearchBack=this.cbkFunction;var b=new Object();b.errCode="";b.totleNumber=1;b.getResulte=function(c){var d=new Object();d.texts="953路;钦州南路站[121.424797,31.159897],桂林路站[121.420076,31.158355]||248路;桂林路站[121.420076,31.158355],漕宝路站[121.418746,31.166875]||336路;漕宝路站[121.418746,31.166875],中环站[121.407158,31.163496]".split("||");d.xys="121.424797,31.159897;121.420076,31.158355||121.420076,31.158355;121.418746,31.166875||121.418746,31.166875;121.415226,31.165149;121.412137,31.164377;121.407158,31.163496".split("||");return d};this.cbkFunction(b)}};var STMapRegingEngine="http://211.136.131.242:8000/SHTELCOME/servlet/googlegeocode?";var STMapHttpRedir="http://211.136.131.242:8087/api/servlet/RedirJs?url=";var STMapHttpGeoCodeEngine="http://211.136.131.242:8087/api/servlet/geogcode?key=58eee7431a7426c1&";var tmpengine=STMapEngineAPI.split("api/")[0];var STMapHttpRedirZte="http://211.136.131.242:8087/api/servlet/RedirJs?url=";var STMapHttpEngineZte="http://101.95.48.9:8088/SHTELCOME/servlet/MapService?key=58eee7431a7426c1&";var STMapSearchEngine="http://180.168.91.4:8088/";var STMapHttpEngineDianxin="http://101.95.48.9:8088/SHTELCOME/servlet/MapService?key=d72aff96af37952a&";var commSVG="";var STMapEngine="http://180.168.91.4:8088/";var STMapImgArray=new Array();var STMapImgArray2=new Array();var STMapImgArray3=new Array();var STMapImgArrayEagle=new Array();var STMapMapLujing="maps";var STMapArraygezi=new Array();var STMapArraygezi2=new Array();var STMapStrokeStyle=new Array();STMapStrokeStyle.Solid="";STMapStrokeStyle.Dot="2 4";STMapStrokeStyle.Dash="6 5";STMapStrokeStyle.DashDot="6 3 1 3";STMapStrokeStyle.LongDashDot="12 4 1 4";STMapStrokeStyle.LongDashDotDot="12 4 1 4 1 4";STMapStrokeStyle.LongDash="12 5";STMapStrokeStyle.ShortDash="5 3";STMapStrokeStyle.ShortDot="2 2";STMapStrokeStyle.ShortDashDot="5 2 2 2";STMapStrokeStyle.ShortDashDotDot="6 2 2 2 2 2";var STMapjibie=new Array(0.1493,0.2986,0.5972,1.1943,2.3887,4.7773,9.5546,19.1093,38.2185,76.437,152.8741,305.7481,611.4962,1222.9925,2445.9849,4891.9698,9783.9396,19567.8792,39135.7585,78271.517);var STMapCommEventType=new Array();var STMapEditEventType=new Array();function STMap$(a){return document.getElementById(a)}function STMapLonlat2Mercator(c){var a=c.x*20037508.3427892/180;var d=Math.log(Math.tan((90+c.y)*Math.PI/360))/(Math.PI/180);d=d*20037508.3427892/180;a+=20037508.3427892;d+=20037508.3427892;var b={x:0,y:0};b.x=a;b.y=d;return b}function STMapMercator2Lonlat(b){var c={x:0,y:0};var a=(b.x-20037508.3427892)/20037508.3427892*180;var d=(b.y-20037508.3427892)/20037508.3427892*180;d=180/Math.PI*(2*Math.atan(Math.exp(d*Math.PI/180))-Math.PI/2);c.x=a;c.y=d;return c}function STMapPicPathFromColRow(a,f,c){var b=Math.pow(2,(20-c-1));var d;var g=0;var e=0;g=Math.floor(a/512);e=Math.floor(f/512);if(c<10){d=STMapEngine+"temp/newsh/"+c+"/"+g+"_"+e+"/stmapw_"+a+"_"+f+"_"+c+".png"}else{d=STMapEngine+"temp/newsh/"+c+"/stmapw_"+a+"_"+f+"_"+c+".png"}if(STMapEngineAPI.indexOf("10.6.241.162")>-1){d="http://10.6.241.162:7888/SHTELCOME/MapImage?v=10001&zoom="+c+"&cols="+a+"&rows="+f+""}else{d="http://mt2.google.cn/vt/lyrs=m@177063169&hl=zh-CN&gl=cn&src=app&x="+a+"&y="+(b-f-1)+"&z="+(19-c)+"&s=Galileo"}if(true){d=d="http://mt2.google.cn/vt/lyrs=m@177063169&hl=zh-CN&gl=cn&src=app&x="+a+"&y="+(b-f-1)+"&z="+(19-c)+"&s=Galileo"}else{d=STMapEngineAPI+""+STMapMapLujing+"/"+(19-c)+"/"+a+"/"+(b-f-1)+"_"+a+"_"+(19-c)+".png"}return d}function STMapPicPathFromColRow2(a,f,c){var b=Math.pow(2,(20-c-1));var d;var g=0;var e=0;g=Math.floor(a/512);e=Math.floor(f/512);d="http://180.153.151.20:8880/SHTELCOME/TrafficTileService?zoom="+c+"&cols="+a+"&rows="+f+"&time="+(new Date()).getTime()+"&label=web2D&v=010";return d}function STMapPicPathFromColRow3(a,f,c){var b=Math.pow(2,(20-c-1));var d;var g=0;var e=0;g=Math.floor(a/512);e=Math.floor(f/512);d="http://mt1.google.cn/vt/lyrs=s@113&gl=cn&src=app&x="+a+"&y="+(b-f-1)+"&z="+(19-c)+"&s=Galil";d=STMapEngineAPI+"maps_yingxiang/"+(19-c)+"/"+a+"/"+(b-f-1)+"_"+a+"_"+(19-c)+".png";d=STMapEngineAPI+"tile.jsp?p=r&zoom="+(19-c)+"&row="+(b-f-1)+"&col="+a;return d}function STMapPoint(a,b){this.x=a;this.y=b}function checkhHtml5(){if(typeof(Worker)!=="undefined"){return true}else{return false}}function STMapIE(){if(!!window.ActiveXObject||"ActiveXObject" in window||navigator.userAgent.toLowerCase().indexOf("360")>-1){return"ie"}else{if(document.getBoxObjectFor){return"firefox"}else{if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){return"chrome"}else{if(navigator.userAgent.toLowerCase().indexOf("android")>-1){return"android"}else{if(navigator.userAgent.toLowerCase().indexOf("iphone")>-1||navigator.userAgent.toLowerCase().indexOf("ipad")>-1||navigator.userAgent.toLowerCase().indexOf("ipod")>-1){return"safariIOS"}else{if((navigator.userAgent.toLowerCase().indexOf("safari")>-1)&&(navigator.userAgent.toLowerCase().indexOf("mac")>-1)){return"safariMac"}else{if(window.openDatabase){return"safari"}else{if(navigator.userAgent.toLowerCase().indexOf("applewebkit")>-1){return"android"}else{if(window.MessageEvent&&!document.getBoxObjectFor){return"firefox"}else{if(window.opera){return"opera"}}}}}}}}}}}function hasSVG(){var a="http://www.w3.org/2000/svg";return !!document.createElementNS&&!!document.createElementNS(a,"svg").createSVGRect}function STMapImg(){this.init(url)}function STMapPosOfColRow(a,b){}var STMapPianZhuanBak="";var STMapPianZhuanBak1="";var STMapGeoCodeBak="";var STMapOptSrcCount=0;var STMapOptSrcCount1=0;function STMapPianZhuan(a,f,b){if((typeof(b)).toLowerCase()!="object"&&(typeof(b)).toLowerCase()!="function"){return}STMapPianZhuanBak1=b;var e=new Date();e=e.getTime();var c=STMapHttpEngineZte+"QueryType=XYSJIAMI&CITY=SH&cx="+a+"&cy="+f+"&t="+e;c=c.replace(/&/g,"@");var d=document.createElement("script");d.type="text/javascript";d.src=STMapHttpRedirZte+c;document.getElementsByTagName("head")[0].appendChild(d);return;STMapOptSrcCount1++}function STMapGeoCodingB(e,a){STMapGeoCodingN(e,a);return;if((typeof(a)).toLowerCase()!="object"&&(typeof(a)).toLowerCase()!="function"){return}STMapGeoCodeBak=a;var d=new Date();d=d.getTime();var b=STMapHttpGeoCodeEngine+"addr="+encodeURIComponent(encodeURIComponent(e))+"&t="+d;var c=document.createElement("script");c.type="text/javascript";c.src=STMapHttpRedirZte+b;document.getElementsByTagName("head")[0].appendChild(c);return}function STMapGeoCoding(e,a){if((typeof(a)).toLowerCase()!="object"&&(typeof(a)).toLowerCase()!="function"){return}if(e=="浦东惠南镇东灶路176号"){a(121.778885,31.049919);return}STMapGeoCodeBak=a;var d=new Date();d=d.getTime();var b=STMapHttpEngineDianxin+"QueryType=GEOCODING&CITY=SH&address="+encodeURIComponent(encodeURIComponent(e))+"&cbfunc=STMapBackDianxin&source=scriptjs&t="+d;var c=document.createElement("script");c.type="text/javascript";c.src=b;document.getElementsByTagName("head")[0].appendChild(c);return}function STMapGeoCodingN(e,a){if((typeof(a)).toLowerCase()!="object"&&(typeof(a)).toLowerCase()!="function"){return}STMapGeoCodeBak=a;var d=new Date();d=d.getTime();var b=STMapHttpEngineDianxin+"QueryType=GEOCODING&CITY=SH&address="+encodeURIComponent(encodeURIComponent(e))+"&cbfunc=STMapBackDianxin&source=scriptjs&t="+d;var c=document.createElement("script");c.type="text/javascript";c.src=b;document.getElementsByTagName("head")[0].appendChild(c);return}function STMapReGeoCodingB(a,g,f,b){STMapReGeoCodingN(a,g,f,b);return;if((typeof(b)).toLowerCase()!="object"&&(typeof(b)).toLowerCase()!="function"){return}STMapPianZhuanBak=b;var e=new Date();e=e.getTime();var c=STMapReGeoCodingEngine+"cx="+a+"&cy="+g+"&gpsstatus="+f+"&t="+e;c=c.replace(/&/g,"@");var d=document.createElement("script");d.type="text/javascript";d.src=STMapHttpRedir+c;document.getElementsByTagName("head")[0].appendChild(d);return}function STMapReGeoCoding(a,g,f,b){if((typeof(b)).toLowerCase()!="object"&&(typeof(b)).toLowerCase()!="function"){return}STMapPianZhuanBak=b;var e=new Date();e=e.getTime();var c=STMapHttpEngineDianxin+"QueryType=POSITONDES&CITY=SH&cx="+a+"&cy="+g+"&status="+f+"&cbfunc=STMapBackDianxin&source=scriptjs&t="+e;var d=document.createElement("script");d.type="text/javascript";d.src=c;document.getElementsByTagName("head")[0].appendChild(d);return}function STMapReGeoCodingN(a,g,f,b){if((typeof(b)).toLowerCase()!="object"&&(typeof(b)).toLowerCase()!="function"){return}STMapPianZhuanBak=b;var e=new Date();e=e.getTime();var c=STMapHttpEngineDianxin+"QueryType=POSITONDES&CITY=SH&cx="+a+"&cy="+g+"&status="+f+"&cbfunc=STMapBackDianxin&source=scriptjs&t="+e;c="http://api.go2map.com/engine/api/regeocoder/json?points="+a+","+g+"&type=1&cb=sogouGeoCoding";var d=document.createElement("script");d.type="text/javascript";d.src=c;document.getElementsByTagName("head")[0].appendChild(d);return}function STMapCommRefresh(){STMapArraygezi=new Array();STMapArraygezi2=new Array();var a=new Array();for(var b=0;b<STMapOverLaysObjArray.length;b++){var c=STMapOverLaysObjArray[b];a[a.length]=c}for(var b=0;b<a.length;b++){a[b].refresh()}for(var b=0;b<STMapEditPolyPOintsArray.length;b++){var d=STMapObjInstance.lonlat2Screen(STMapEditPolyPOintsArrayXY[b]);STMapEditPolyPOintsArray[b].style.left=d.x-7+"px";STMapEditPolyPOintsArray[b].style.top=d.y-7+"px"}if(STMapCommEventType.refresh){if((typeof(STMapCommEventType.refresh)).toLowerCase()=="object"||(typeof(STMapCommEventType.refresh)).toLowerCase()=="function"){STMapCommEventType.refresh()}}}function STMapCloseInfoWin(){STMapInfoWinObj.setVisible(false)}function STMapScaleRefresh(zoom){var bili=eval(STMapCommScaleArray[eval(zoom)].split(";")[0]);var danwei=eval(STMapCommScaleArray[eval(zoom)].split(";")[1]);var text=danwei+"M";if(danwei>=1000){text=danwei/1000+"KM"}STMap$("STMapScaleTextDiv").innerHTML=text;STMap$("STMapScaleImg").style.pixelWidth=(danwei/bili)}function STMapMapCejuClickClose(a){STMapObjInstance.clearTempOverlays()}function replaceAll(c,b,a){var d=new RegExp(b.replace(/([\(\)\[\]\{\}\^\$\+\-\*\?\.\"\'\|\/\\])/g,"\\$1"),"ig");return c.replace(d,a)}function len(c){var a=0;for(var b=0;b<c.length;b++){if(c.charAt(b)>"~"){a+=2}else{a++}}return a}var STMapCommScaleArray=new Array();STMapCommScaleArray[0]="0.256990132;50";STMapCommScaleArray[1]="0.513980263;50";STMapCommScaleArray[2]="1.027960526;100";STMapCommScaleArray[3]="2.055921053;200";STMapCommScaleArray[4]="4.111842105;500";STMapCommScaleArray[5]="8.223684211;1000";STMapCommScaleArray[6]="16.44736842;2000";STMapCommScaleArray[7]="32.89473684;2000";STMapCommScaleArray[8]="66.78947368;5000";STMapCommScaleArray[9]="131.5789474;10000";STMapCommScaleArray[10]="263.1578947;20000";STMapCommScaleArray[11]="526.3157895;50000";STMapCommScaleArray[12]="1052.631579;100000";STMapCommScaleArray[13]="2105.263158;200000";STMapCommScaleArray[14]="4210.526316;500000";STMapCommScaleArray[15]="8421.052632;500000";STMapCommScaleArray[16]="16842.10526;1000000";STMapCommScaleArray[17]="33684.21053;2000000";STMapCommScaleArray[18]="67368.42105;5000000";STMapCommScaleArray[19]="134736.8421;10000000";function STMapCalcArea(x,w,M){var z=x.length;if(z>=3){var b=0;if((x[0]!=x[z-1])||(w[0]!=w[z-1])){return}if(M=="DEGREES"){var B=0;var A=0;var J=0;var H=0;var D=0;var C=0;var T=0;var F=0;var n=0;var U=0;var G=0;var o=0;var a=0;var K=0;var q=0;var I=0;var L=0;var p=0;var P=0;var h=0;var d=0;var v=0;var S=0;var E=0;var g=0;var y=0;var m=0;var k=0;var t=0;var r=0;var e=0;var f=0;var c=0;var l=6378000;for(R=0;R<z;R++){if(R==0){B=x[z-1]*Math.PI/180;A=w[z-1]*Math.PI/180;J=x[0]*Math.PI/180;H=w[0]*Math.PI/180;D=x[1]*Math.PI/180;C=w[1]*Math.PI/180}else{if(R==z-1){B=x[z-2]*Math.PI/180;A=w[z-2]*Math.PI/180;J=x[z-1]*Math.PI/180;H=w[z-1]*Math.PI/180;D=x[0]*Math.PI/180;C=w[0]*Math.PI/180}else{B=x[R-1]*Math.PI/180;A=w[R-1]*Math.PI/180;J=x[R]*Math.PI/180;H=w[R]*Math.PI/180;D=x[R+1]*Math.PI/180;C=w[R+1]*Math.PI/180}}T=Math.cos(H)*Math.cos(J);F=Math.cos(H)*Math.sin(J);n=Math.sin(H);U=Math.cos(A)*Math.cos(B);G=Math.cos(A)*Math.sin(B);o=Math.sin(A);a=Math.cos(C)*Math.cos(D);K=Math.cos(C)*Math.sin(D);q=Math.sin(C);I=(T*T+F*F+n*n)/(T*U+F*G+n*o);L=(T*T+F*F+n*n)/(T*a+F*K+n*q);p=I*U-T;P=I*G-F;h=I*o-n;d=L*a-T;v=L*K-F;S=L*q-n;k=(d*p+v*P+S*h)/(Math.sqrt(d*d+v*v+S*S)*Math.sqrt(p*p+P*P+h*h));k=Math.acos(k);E=v*h-S*P;g=0-(d*h-S*p);y=d*P-v*p;if(T!=0){m=E/T}else{if(F!=0){m=g/F}else{m=y/n}}if(m>0){if(k){t+=k}f++}else{if(k){r+=k}e++}}if(t>r){c=t+(2*Math.PI*e-r)}else{c=(2*Math.PI*f-t)+r}b=(c-(z-2)*Math.PI)*l*l}else{var R,Q;var Q;var O,N;var u,s;for(R=z-1,Q=0;Q<z;R=Q,Q++){if(R==z-1){O=mX;N=mY}else{O=x[R];N=w[R]}if(Q==z-1){u=mX;s=mY}else{u=x[Q];s=w[Q]}b+=O*s-u*N}b/=2}return b}return}function PolygonArea(d,e){var b=0;var c=0;var a=0;if(e<=2){return 0}do{c+=1;if(e>c){b=b+Matrix3Pt(new STMapPoint(0,0),d[a],d[a+1])}else{if(e==c){b=b+Matrix3Pt(new STMapPoint(0,0),d[a],d[0])}else{break}}a+=1}while(e>=c);b=Math.abs(b);return b}function Matrix3Pt(c,b,a){return(c.x*b.y-c.x*a.y-b.x*c.y+b.x*a.y+a.x*c.y-a.x*b.y)*0.5}function STMapIsNum(b){var a=/^-?[0-9]+.?[0-9]*$/;if(!a.test(b)){return false}return true}function STMapYidong(a){if(a=="up"){STMapObjInstance.pan(0,50)}if(a=="down"){STMapObjInstance.pan(0,-50)}if(a=="left"){STMapObjInstance.pan(50,0)}if(a=="right"){STMapObjInstance.pan(-50,0)}}function STMapCommSuofangHengtiao(){var a=STMapObjInstance.getZoom();STMap$("hengtiaoimg").style.top=(67+(a-1)*6)+"px"}function STMapPointInFences(a,f){var d=f.split(";");var e=0;var b=0;for(var c=0;c<d.length;c++){if(c==d.length-1){b=0}else{b=b+1}if(d[c].split(",")[1]<=a.y){if(d[b].split(",")[1]>a.y){if(STMapisLeft(new STMapPoint(d[c].split(",")[0],d[c].split(",")[1]),new STMapPoint(d[b].split(",")[0],d[b].split(",")[1]),a)>0){e++}}}else{if(d[b].split(",")[1]<=a.y){if(STMapisLeft(new STMapPoint(d[c].split(",")[0],d[c].split(",")[1]),new STMapPoint(d[b].split(",")[0],d[b].split(",")[1]),a)<0){e--}}}}if(e==0){return false}else{return true}}function STMapisLeft(b,a,d){var c=((a.x-b.x)*(d.y-b.y)-(d.x-b.x)*(a.y-b.y));return c}function STMapObj_LocateKuaijieJuwei(b){var a=0;if(b==1){a=1}if(b==2){a=2}if(b==3){a=4}STMapObjInstance.locateMap(STMapObjInstance.mapCenter,a)};var STMapReGeoCodingEngine="http://211.136.131.242:8000/SHTELCOME/servlet/googlegeocode?";var STMapHttpRedir="http://211.136.131.242:8087/api/servlet/RedirJs?url=";var STMapHttpGeoCodeEngine="http://211.136.131.242:8087/api/servlet/geogcode?key=58eee7431a7426c1&";var tmpengine=STMapEngineAPI.split("api/")[0];var STMapHttpRedirZte=tmpengine+"api/servlet/RedirJs?url=";var STMapHttpEngineZte="http://180.168.91.4:8088/SHTELCOME/servlet/MapService?key=58eee7431a7426c1&";var STMapSearchEngine="http://180.168.91.4:8088/";var STMapHttpEngineDianxin="http://180.168.91.4:8088/SHTELCOME/servlet/MapService?key=58eee7431a7426c1&";var commSVG="";var STMapEngine="http://180.168.91.4:8088/";var STMapImgArray=new Array();var STMapImgArray2=new Array();var STMapImgArray3=new Array();var STMapImgArrayEagle=new Array();var STMapArraygezi=new Array();var STMapArraygezi2=new Array();var STMapStrokeStyle=new Array();STMapStrokeStyle.Solid="";STMapStrokeStyle.Dot="2 4";STMapStrokeStyle.Dash="6 5";STMapStrokeStyle.DashDot="6 3 1 3";STMapStrokeStyle.LongDashDot="12 4 1 4";STMapStrokeStyle.LongDashDotDot="12 4 1 4 1 4";STMapStrokeStyle.LongDash="12 5";STMapStrokeStyle.ShortDash="5 3";STMapStrokeStyle.ShortDot="2 2";STMapStrokeStyle.ShortDashDot="5 2 2 2";STMapStrokeStyle.ShortDashDotDot="6 2 2 2 2 2";var STMapjibie=new Array(0.1493,0.2986,0.5972,1.1943,2.3887,4.7773,9.5546,19.1093,38.2185,76.437,152.8741,305.7481,611.4962,1222.9925,2445.9849,4891.9698,9783.9396,19567.8792,39135.7585,78271.517);var STMapCommEventType=new Array();var STMapEditEventType=new Array();function STMap$(a){return document.getElementById(a)}function STMapLonlat2Mercator(c){var a=c.x*20037508.3427892/180;var d=Math.log(Math.tan((90+c.y)*Math.PI/360))/(Math.PI/180);d=d*20037508.3427892/180;a+=20037508.3427892;d+=20037508.3427892;var b={x:0,y:0};b.x=a;b.y=d;return b}function STMapMercator2Lonlat(b){var c={x:0,y:0};var a=(b.x-20037508.3427892)/20037508.3427892*180;var d=(b.y-20037508.3427892)/20037508.3427892*180;d=180/Math.PI*(2*Math.atan(Math.exp(d*Math.PI/180))-Math.PI/2);c.x=a;c.y=d;return c}function STMapPicPathFromColRow(a,f,c){var b=Math.pow(2,(20-c-1));var d;var g=0;var e=0;g=Math.floor(a/512);e=Math.floor(f/512);if(c<10){d=STMapEngine+"temp/newsh/"+c+"/"+g+"_"+e+"/stmapw_"+a+"_"+f+"_"+c+".png"}else{d=STMapEngine+"temp/newsh/"+c+"/stmapw_"+a+"_"+f+"_"+c+".png"}if(STMapEngineAPI.indexOf("10.6.241.162")>-1){d="http://10.6.241.162:7888/SHTELCOME/MapImage?v=10001&zoom="+c+"&cols="+a+"&rows="+f+""}else{d="http://mt2.google.cn/vt/lyrs=m@177063169&hl=zh-CN&gl=cn&src=app&x="+a+"&y="+(b-f-1)+"&z="+(19-c)+"&s=Galileo"}return d}function STMapPicPathFromColRow2(a,f,c){var b=Math.pow(2,(20-c-1));var d;var g=0;var e=0;g=Math.floor(a/512);e=Math.floor(f/512);d="http://180.153.151.20:8880/SHTELCOME/TrafficTileService?zoom="+c+"&cols="+a+"&rows="+f+"&time="+(new Date()).getTime()+"&label=web2D&v=010";return d}function STMapPicPathFromColRow3(a,f,c){var b=Math.pow(2,(20-c-1));var d;var g=0;var e=0;g=Math.floor(a/512);e=Math.floor(f/512);d="http://mt1.google.cn/vt/lyrs=s@113&gl=cn&src=app&x="+a+"&y="+(b-f-1)+"&z="+(19-c)+"&s=Galil";return d}function STMapPoint(a,b){this.x=a;this.y=b}function STMapIE(){if(window.ActiveXObject){return"ie"}else{if(document.getBoxObjectFor){return"firefox"}else{if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){return"chrome"}else{if(navigator.userAgent.toLowerCase().indexOf("applewebkit")>-1){return"android"}else{if(window.MessageEvent&&!document.getBoxObjectFor){return"firefox"}else{if(window.opera){return"opera"}else{if(window.openDatabase){return"safari"}}}}}}}}function STMapImg(){this.init(url)}function STMapPosOfColRow(a,b){}var STMapPianZhuanBak="";var STMapPianZhuanBak1="";var STMapGeoCodeBak="";var STMapOptSrcCount=0;var STMapOptSrcCount1=0;function STMapPianZhuan(a,f,b){if((typeof(b)).toLowerCase()!="object"&&(typeof(b)).toLowerCase()!="function"){return}STMapPianZhuanBak1=b;var e=new Date();e=e.getTime();var c=STMapHttpEngineZte+"QueryType=XYSJIAMI&CITY=SH&cx="+a+"&cy="+f+"&t="+e;c=c.replace(/&/g,"@");var d=document.createElement("script");d.type="text/javascript";d.src=STMapHttpRedirZte+c;document.getElementsByTagName("head")[0].appendChild(d);return;STMapOptSrcCount1++}function STMapGeoCoding(e,a){if((typeof(a)).toLowerCase()!="object"&&(typeof(a)).toLowerCase()!="function"){return}STMapGeoCodeBak=a;var d=new Date();d=d.getTime();var b=STMapHttpGeoCodeEngine+"addr="+encodeURIComponent(encodeURIComponent(e))+"&t="+d;var c=document.createElement("script");c.type="text/javascript";c.src=STMapHttpRedirZte+b;document.getElementsByTagName("head")[0].appendChild(c);return}function STMapGeoCodingN(e,a){if((typeof(a)).toLowerCase()!="object"&&(typeof(a)).toLowerCase()!="function"){return}STMapGeoCodeBak=a;var d=new Date();d=d.getTime();var b=STMapHttpEngineDianxin+"QueryType=GEOCODING&CITY=SH&address="+encodeURIComponent(encodeURIComponent(e))+"&cbfunc=STMapBackDianxin&source=scriptjs&t="+d;var c=document.createElement("script");c.type="text/javascript";c.src=b;document.getElementsByTagName("head")[0].appendChild(c);return}function STMapReGeoCoding(a,g,f,b){if((typeof(b)).toLowerCase()!="object"&&(typeof(b)).toLowerCase()!="function"){return}STMapPianZhuanBak=b;var e=new Date();e=e.getTime();var c=STMapReGeoCodingEngine+"cx="+a+"&cy="+g+"&gpsstatus="+f+"&t="+e;c=c.replace(/&/g,"@");var d=document.createElement("script");d.type="text/javascript";d.src=STMapHttpRedir+c;document.getElementsByTagName("head")[0].appendChild(d);return}function STMapReGeoCodingN(a,g,f,b){if((typeof(b)).toLowerCase()!="object"&&(typeof(b)).toLowerCase()!="function"){return}STMapPianZhuanBak=b;var e=new Date();e=e.getTime();var c=STMapHttpEngineDianxin+"QueryType=POSITONDES&CITY=SH&cx="+a+"&cy="+g+"&status="+f+"&cbfunc=STMapBackDianxin&source=scriptjs&t="+e;var d=document.createElement("script");d.type="text/javascript";d.src=c;document.getElementsByTagName("head")[0].appendChild(d);return}function STMapCommRefresh(){STMapArraygezi=new Array();STMapArraygezi2=new Array();var a=new Array();for(var b=0;b<STMapOverLaysObjArray.length;b++){var c=STMapOverLaysObjArray[b];a[a.length]=c}for(var b=0;b<a.length;b++){a[b].refresh()}for(var b=0;b<STMapEditPolyPOintsArray.length;b++){var d=STMapObjInstance.lonlat2Screen(STMapEditPolyPOintsArrayXY[b]);STMapEditPolyPOintsArray[b].style.left=d.x-7+"px";STMapEditPolyPOintsArray[b].style.top=d.y-7+"px"}if(STMapCommEventType.refresh){if((typeof(STMapCommEventType.refresh)).toLowerCase()=="object"||(typeof(STMapCommEventType.refresh)).toLowerCase()=="function"){STMapCommEventType.refresh()}}}function STMapCloseInfoWin(){STMapInfoWinObj.setVisible(false)}function STMapScaleRefresh(zoom){var bili=eval(STMapCommScaleArray[eval(zoom)].split(";")[0]);var danwei=eval(STMapCommScaleArray[eval(zoom)].split(";")[1]);var text=danwei+"米";if(danwei>=1000){text=danwei/1000+"公里"}STMap$("STMapScaleTextDiv").innerHTML=text;STMap$("STMapScaleImg").style.pixelWidth=(danwei/bili)}function STMapMapCejuClickClose(a){STMapObjInstance.clearTempOverlays()}function replaceAll(c,b,a){var d=new RegExp(b.replace(/([\(\)\[\]\{\}\^\$\+\-\*\?\.\"\'\|\/\\])/g,"\\$1"),"ig");return c.replace(d,a)}function len(c){var a=0;for(var b=0;b<c.length;b++){if(c.charAt(b)>"~"){a+=2}else{a++}}return a}var STMapCommScaleArray=new Array();STMapCommScaleArray[0]="0.256990132;50";STMapCommScaleArray[1]="0.513980263;50";STMapCommScaleArray[2]="1.027960526;100";STMapCommScaleArray[3]="2.055921053;200";STMapCommScaleArray[4]="4.111842105;500";STMapCommScaleArray[5]="8.223684211;1000";STMapCommScaleArray[6]="16.44736842;2000";STMapCommScaleArray[7]="32.89473684;2000";STMapCommScaleArray[8]="66.78947368;5000";STMapCommScaleArray[9]="131.5789474;10000";STMapCommScaleArray[10]="263.1578947;20000";STMapCommScaleArray[11]="526.3157895;50000";STMapCommScaleArray[12]="1052.631579;100000";STMapCommScaleArray[13]="2105.263158;200000";STMapCommScaleArray[14]="4210.526316;500000";STMapCommScaleArray[15]="8421.052632;500000";STMapCommScaleArray[16]="16842.10526;1000000";STMapCommScaleArray[17]="33684.21053;2000000";STMapCommScaleArray[18]="67368.42105;5000000";function STMapCalcArea(x,w,M){var z=x.length;if(z>=3){var b=0;if((x[0]!=x[z-1])||(w[0]!=w[z-1])){return}if(M=="DEGREES"){var B=0;var A=0;var J=0;var H=0;var D=0;var C=0;var T=0;var F=0;var n=0;var U=0;var G=0;var o=0;var a=0;var K=0;var q=0;var I=0;var L=0;var p=0;var P=0;var h=0;var d=0;var v=0;var S=0;var E=0;var g=0;var y=0;var m=0;var k=0;var t=0;var r=0;var e=0;var f=0;var c=0;var l=6378000;for(R=0;R<z;R++){if(R==0){B=x[z-1]*Math.PI/180;A=w[z-1]*Math.PI/180;J=x[0]*Math.PI/180;H=w[0]*Math.PI/180;D=x[1]*Math.PI/180;C=w[1]*Math.PI/180}else{if(R==z-1){B=x[z-2]*Math.PI/180;A=w[z-2]*Math.PI/180;J=x[z-1]*Math.PI/180;H=w[z-1]*Math.PI/180;D=x[0]*Math.PI/180;C=w[0]*Math.PI/180}else{B=x[R-1]*Math.PI/180;A=w[R-1]*Math.PI/180;J=x[R]*Math.PI/180;H=w[R]*Math.PI/180;D=x[R+1]*Math.PI/180;C=w[R+1]*Math.PI/180}}T=Math.cos(H)*Math.cos(J);F=Math.cos(H)*Math.sin(J);n=Math.sin(H);U=Math.cos(A)*Math.cos(B);G=Math.cos(A)*Math.sin(B);o=Math.sin(A);a=Math.cos(C)*Math.cos(D);K=Math.cos(C)*Math.sin(D);q=Math.sin(C);I=(T*T+F*F+n*n)/(T*U+F*G+n*o);L=(T*T+F*F+n*n)/(T*a+F*K+n*q);p=I*U-T;P=I*G-F;h=I*o-n;d=L*a-T;v=L*K-F;S=L*q-n;k=(d*p+v*P+S*h)/(Math.sqrt(d*d+v*v+S*S)*Math.sqrt(p*p+P*P+h*h));k=Math.acos(k);E=v*h-S*P;g=0-(d*h-S*p);y=d*P-v*p;if(T!=0){m=E/T}else{if(F!=0){m=g/F}else{m=y/n}}if(m>0){if(k){t+=k}f++}else{if(k){r+=k}e++}}if(t>r){c=t+(2*Math.PI*e-r)}else{c=(2*Math.PI*f-t)+r}b=(c-(z-2)*Math.PI)*l*l}else{var R,Q;var Q;var O,N;var u,s;for(R=z-1,Q=0;Q<z;R=Q,Q++){if(R==z-1){O=mX;N=mY}else{O=x[R];N=w[R]}if(Q==z-1){u=mX;s=mY}else{u=x[Q];s=w[Q]}b+=O*s-u*N}b/=2}return b}return}function PolygonArea(d,e){var b=0;var c=0;var a=0;if(e<=2){return 0}do{c+=1;if(e>c){b=b+Matrix3Pt(new STMapPoint(0,0),d[a],d[a+1])}else{if(e==c){b=b+Matrix3Pt(new STMapPoint(0,0),d[a],d[0])}else{break}}a+=1}while(e>=c);b=Math.abs(b);return b}function Matrix3Pt(c,b,a){return(c.x*b.y-c.x*a.y-b.x*c.y+b.x*a.y+a.x*c.y-a.x*b.y)*0.5}function STMapIsNum(b){var a=/^-?[0-9]+.?[0-9]*$/;if(!a.test(b)){return false}return true}function STMapYidong(a){if(a=="up"){STMapObjInstance.pan(0,50)}if(a=="down"){STMapObjInstance.pan(0,-50)}if(a=="left"){STMapObjInstance.pan(50,0)}if(a=="right"){STMapObjInstance.pan(-50,0)}}function STMapCommSuofangHengtiao(){var a=STMapObjInstance.getZoom();STMap$("hengtiaoimg").style.top=(67+(a-1)*6)+"px"}function STMapPointInFences(a,f){var d=f.split(";");var e=0;var b=0;for(var c=0;c<d.length;c++){if(c==d.length-1){b=0}else{b=b+1}if(d[c].split(",")[1]<=a.y){if(d[b].split(",")[1]>a.y){if(STMapisLeft(new STMapPoint(d[c].split(",")[0],d[c].split(",")[1]),new STMapPoint(d[b].split(",")[0],d[b].split(",")[1]),a)>0){e++}}}else{if(d[b].split(",")[1]<=a.y){if(STMapisLeft(new STMapPoint(d[c].split(",")[0],d[c].split(",")[1]),new STMapPoint(d[b].split(",")[0],d[b].split(",")[1]),a)<0){e--}}}}if(e==0){return false}else{return true}}function STMapisLeft(b,a,d){var c=((a.x-b.x)*(d.y-b.y)-(d.x-b.x)*(a.y-b.y));return c};function STMapCustomOverObj(){this.id="";this.point=null;this.html="";this.anchor=new STMapPoint(0,0);this.size=new STMapSize(0,0);this.infowin=true;this.tooltip="";this.title="";this.content="";this.infoCustom=false;this.infoCustomContentHTML="";this.cusInfoWinWidth=0;this.cusInfoWinHeight=0;this.setCustomInfoWin=function(d,c,a,b){if(!d){this.infoCustom=false;return}this.infoCustom=true;if(a){this.cusInfoWinWidth=a}if(b){this.cusInfoWinHeight=b}if(c){this.infoCustomContentHTML=c}};this.setMoveable=function(a){if(a){customObjMove(this.id)}else{customObjMoveFalse(this.id)}};this.refresh=function(){var a=STMap$(this.id);var b=STMapObjInstance.lonlat2Screen(this.point);a.style.left=b.x-this.anchor.x;a.style.top=b.y-this.anchor.y}}function customObjMoveFalse(a){map.removeObjEventListner(a,"onmousedown");map.removeObjEventListner(a,"onmouseover");map.removeObjEventListner(a,"onmouseup")}function customObjMove(e){var d=null;var a=null;var b=null;var c=false;map.addObjEventListner(e,"onmousedown",function(k,g,l){if(STMapEditEventType.onmousedown){STMapEditEventType.onmousedown(k,g,l)}d=new STMapPoint(g,l);a=map.getOverlayById(e).point;b=map.lonlat2Screen(a);c=true;var j=0;for(var h=0;h<STMapOverLaysObjArray.length;h++){var f=STMapOverLaysObjArray[h];if(f instanceof STMapCustomOverObj){if(STMap$(f.id).style.zIndex>j){j=STMap$(f.id).style.zIndex}}}STMap$(e).style.zIndex=j+1});map.addObjEventListner(e,"onmousemove",function(j,g,m){if(STMapEditEventType.onmousemove){STMapEditEventType.onmousemove(j,g,m)}if(!c){return}var h=new STMapPoint(g,m);var f=h.x-d.x;var l=h.y-d.y;var k=new STMapPoint(b.x+f,b.y+l);var i=map.screen2LonLat(k);map.getOverlayById(e).point=i;map.getOverlayById(e).refresh()});map.addObjEventListner(e,"onmouseup",function(g,f,h){if(STMapEditEventType.onmouseup){STMapEditEventType.onmouseup(g,f,h)}c=false})};var STMapMouseStartPointEagle="";var STMapMouseStartPointEagleOrin="";function STMapLoadEagle(){var q=STMapZoom;if(q>=15){q=15}var k=STMapLonlat2Mercator(STMapCenter);var u=Math.pow(2,(20-(q+4)-1));var r=40075016.6855784/u;var m=Math.floor(k.x/r);var n=Math.floor(k.y/r);var x=parseInt((STMapObjInstance.mapWidth/r)*(k.x-m*r)+0.5);var w=STMapObjInstance.mapHeight-parseInt((STMapObjInstance.mapHeight/r)*(k.y-n*r)+0.5);STMapErelativeXEagle=x;STMapErelativeYEagle=w;STMapEColEagle=m;STMapERowEagle=n;var o=2;var p=2;var f="";var g=0;for(var z=m-o;z<m+o;z++){for(var y=n-p;y<n+p;y++){var t=STMapPicPathFromColRow(z,y,q+4);var A=STMapPicPathFromColRow2(z,y,q+4);var D=147/2-x+(z-m)*STMapObjInstance.mapWidth;var h=147/2-w+(n-y)*STMapObjInstance.mapHeight;var v="rect("+(0-h)+" "+(147-D)+" "+(147-h)+" "+(0-D)+")";var C="<img id='"+z+"_"+y+"_STMapImgEagle' src='"+t+"' style='position:absolute;left:"+D+";top:"+h+";clip:"+v+" '>";var B="<img id='"+z+"_"+y+"_STMapImgEagle' src='"+t+"' style='position:absolute;left:"+D+";top:"+h+";clip:"+v+" '>";if(h<-STMapObjInstance.mapHeight||D<-STMapObjInstance.mapWidth||h>147+STMapObjInstance.mapHeight||D>147+STMapObjInstance.mapWidth){}else{var l=STMapImgArray[z+"_"+y+"_STMapImgEagle"];if((typeof(l)!="undefined")&&(l!="null")){STMap$(z+"_"+y+"_STMapImgEagle").style.left=D+"px";STMap$(z+"_"+y+"_STMapImgEagle").style.top=h+"px";STMap$(z+"_"+y+"_STMapImgEagle").style.clip=v}else{f+=C;STMapImgArrayEagle[z+"_"+y+"_STMapImgEagle"]=C;var s=document.createElement("img");s.src=t;s.style.left=parseInt(D)+"px";s.style.top=parseInt(h)+"px";s.id=z+"_"+y+"_STMapImgEagle";s.style.position="absolute";STMap$("backDivObjEagleBody").appendChild(s)}}}}var e=STMapObjInstance.screen2LonLat(new STMapPoint(0,0));var c=STMapObjInstance.screen2LonLat(new STMapPoint(STMapMainDivWidth,STMapMainDivHeight));var b=lonlat2ScreenEagle(e);var a=lonlat2ScreenEagle(c);var d=STMap$("eagleRectImage");d.style.left=b.x+"px";d.style.top=b.y+"px";d.style.width=(a.x-b.x)+"px";d.style.height=(a.y-b.y)+"px"}function STMapshowEagle(){var a=STMap$("eag2leeShowImage");if(a.src.indexOf("show1")>-1){STMap$("backDivObjEagle").style.display="none";a.src=STMapEngineAPI+"img/eagleshow.gif"}else{STMap$("backDivObjEagle").style.display="block";a.src=STMapEngineAPI+"img/eagleshow1.gif"}}function lonlat2ScreenEagle(d){var h=STMapLonlat2Mercator({x:d.x,y:d.y});var b=Math.pow(2,20-(STMapZoom+4)-1);var g=40075016.6855784/b;var a=256/g;var c=STMapLonlat2Mercator(STMapObjInstance.mapCenter);var e=(147/2+a*(h.x-c.x));var f=(147/2+a*(c.y-h.y));return{x:e,y:f}}function screen2LonLatEagle(i){var e=Math.pow(2,20-(STMapZoom+4)-1);var f=40075016.6855784/e;var c=256/f;var g=STMapLonlat2Mercator(STMapObjInstance.mapCenter);var d=g.x+(i.x-147/2)*(f/256);var h=g.y+(147/2-i.y)*(f/256);var a={x:d,y:h};var b=STMapMercator2Lonlat(a);return b};var STMapMouseStartPoint="";var STMapMainMapRelativeLeft=0;var STMapMainMapRelativeTop=0;var STMapMouseState=0;var STMapEventListnerMouseDown="";var STMapEventListnerMouseMove="";var STMapEventListnerMouseUp="";var STMapEventListnerDblClick="";var STMapEventListnerClick="";var STMapEventListnerRightClick="";var STMapEventMouseUpTime="";var STMapMouseOverElement="";var STMapEventListnerMouseDown2=new Array();var STMapEventListnerMouseOver2=new Array();var STMapEventListnerMouseOut2=new Array();var STMapEventListnerMouseMove2=new Array();var STMapEventListnerMouseUp2=new Array();var STMapEventListnerClick2=new Array();var STMapEventListnerDblClick2=new Array();var STMapEventMouseDownState=false;var STMapTouchObjectOfWebkit="";var STMapAnyMouseDown="";var STMapAnyMouseUp="";var STMapMouseDownTimeStart=0;var STMapMouseMoveDistance=0;var STMapMouseMoveLocation=new Array();function STMapMapTouchStart(c){var d=c.touches[0];STMapTouchObjectOfWebkit=d;var b=d.clientX;var a=d.clientY;if(STMapEventListnerMouseDown!=""){STMapEventListnerMouseDown(c);return}if(c.srcElement){if(c.srcElement.id.indexOf("suofang")>-1){return}STMapMouseOverElement=c.srcElement}if(c.target){STMapMouseOverElement=c.target}STMapMainMapRelativeLeft=0;STMapMainMapRelativeTop=0;STMapGetMouseRelativeLeft(STMapMainDiv);STMapMouseStartPoint={x:(b-STMapMainMapRelativeLeft),y:(a-STMapMainMapRelativeTop)};if(STMapDragble){STMapMouseState=1}}var STMapTouchZoomInON=false;var STMapTouchZoomDis1=0;var STMapTouchZoomDis2=0;function STMapMapTouchMove(q){if(q.srcElement.id.indexOf("suofang")>-1){return}q.preventDefault();if(q.targetTouches.length==2){STMapTouchZoomInON=true;var c=q.touches[0];var b=q.touches[1];var n=c.clientX;var a=c.clientY;var m=b.clientX;var s=b.clientY;var l=Math.sqrt(Math.pow((n-m),2)+Math.pow((a-s),2));if(STMapTouchZoomDis1==0){STMapTouchZoomDis1=l}STMapTouchZoomDis2=l;var r=STMapTouchZoomDis2-STMapTouchZoomDis1;if(r!=0){var f=r/STMapMainDivWidth;var k=0;if(f>=0){STMap_niehe(1+4*f)}else{STMap_niehe(1-(4/5)*Math.abs(f))}}return}var d=q.touches[0];STMapTouchObjectOfWebkit=d;var p=d.clientX;var o=d.clientY;if(STMapEventListnerMouseMove!=""){STMapEventListnerMouseMove(q);return}var h=p-STMapMainMapRelativeLeft;var g=o-STMapMainMapRelativeTop;var j=h-STMapMouseStartPoint.x;var i=g-STMapMouseStartPoint.y;if(STMapMouseState==1&&STMapDragble){STMapMainDivBack.style.pixelLeft=j;STMapMainDivBack.style.pixelTop=i;STMapMainDivBack.style.left=j;STMapMainDivBack.style.top=i;STMapMainDivBackOverLayer.style.pixelLeft=j;STMapMainDivBackOverLayer.style.pixelTop=i;STMapMainDivBackOverLayer.style.left=j;STMapMainDivBackOverLayer.style.top=i}}function STMapMapTouchEnd(C){if(STMapTouchZoomInON){var u=STMapTouchZoomDis2-STMapTouchZoomDis1;var f=(u/STMapMainDivWidth);var q=0;if(f>=0){q=STMapZoom-Math.round(5*Math.abs(f))}else{q=STMapZoom+Math.round(3*Math.abs(f))}if(q<1){q=1}if(q>19){q=19}STMapTouchZoomInON=false;STMapTouchZoomDis1=0;STMapTouchZoomDis2=0;STMapObjInstance.locateMap(STMapCenter,q);STMapMouseState=0;if(STMapMouseOverElement){if(STMapMouseOverElement.releaseCapture){STMapMouseOverElement.releaseCapture()}}return}if(STMapMouseState!=1){return}if(C.srcElement.id.indexOf("suofang")>-1){return}var B=STMapTouchObjectOfWebkit.clientX;var A=STMapTouchObjectOfWebkit.clientY;if(STMapEventListnerMouseUp!=""){STMapEventListnerMouseUp(C);return}var j=B-STMapMainMapRelativeLeft;var h=A-STMapMainMapRelativeTop;if(STMapMouseOverElement){if(STMapMouseOverElement.releaseCapture){STMapMouseOverElement.releaseCapture()}}STMapMouseState=0;var o=j-STMapMouseStartPoint.x;var n=h-STMapMouseStartPoint.y;var p=Math.pow(2,(20-STMapZoom-1));var l=40075016.6855784/p;var k=l/256;var D=STMapLonlat2Mercator(STMapCenter);var s={x:(D.x-k*o),y:D.y+k*n};var w=STMapMercator2Lonlat(s);if((o!=0||n!=0)&&STMapDragble){if(STMapObjInstance.measureTool==""){STMapObjInstance.locateMap(w,STMapZoom)}return}if(STMapEventMouseUpTime!=""){var c=(new Date())-STMapEventMouseUpTime;if(c<400){STMapMapDblClick(C);STMapEventMouseUpTime="";return}}STMapEventMouseUpTime=new Date();var a=STMapObjInstance.screen2LonLat(new STMapPoint(B,A));if(STMapObjInstance.measureTool=="MEASURE"){if(STMapMeasurePts==""){STMapObjInstance.clearTempOverlays()}STMapMeasurePts+=a.x+","+a.y+";";var u=0;var r=STMapMeasurePts.split(";");STMapMeasureNumber=0;for(var z=1;z<r.length;z++){if(r[z]){STMapMeasureNumber+=STMapObjInstance.distance(r[z-1].split(",")[0],r[z-1].split(",")[1],r[z].split(",")[0],r[z].split(",")[1])}}var g=new STMapLabel();var m=new Date();var m=m.getTime();g.id="measureLabel"+m;g.point=a;var b="";if(STMapMeasureNumber==0){b="起点"}else{if(STMapMeasureNumber<1000){b=parseInt(STMapMeasureNumber)+"米"}else{b=(STMapMeasureNumber/1000)+"公里"}}g.text=b;if(true){(STMapMeasureNumber!=0)}STMapObjInstance.addOverlay(g);var v=new STMapMarker();v.point=a;v.id="measurenodeimg"+(new Date()).getTime();v.size=new STMapSize(10,10);v.img=STMapEngineAPI+"img/quan.gif";v.anchor="ML";v.infowin=false;STMapObjInstance.addOverlay(v,false);var d=new STMapPolyline();d.id="measuretestlinemeasure";d.points=STMapMeasurePts+a.x+","+a.y;d.strokeColor="#0000CC";d.strokeWeight=2;d.infowin=false;STMapObjInstance.addOverlay(d);return}}var STMapMeasurePts="";var STMapMeasureNumber="";var STMapHengtiaoSuofang=false;var movealObj="";function STMapMapMouseDown(e){STMapMainMapRelativeLeft=0;STMapMainMapRelativeTop=0;STMapGetMouseRelativeLeft(STMapMainDiv);STMapEventMouseDownState=true;var x="";var y="";var tobj="";if(STMapExplorIE=="ie"){window.status=(e.srcElement.id==""||e.srcElement.id.indexOf("Info")>-1||e.srcElement.id.indexOf("editpoly")>-1);if(e.srcElement.id==""||e.srcElement.id.indexOf("Info")>-1||e.srcElement.id.indexOf("editpoly")>-1){return}x=e.x;y=e.y;tobj=e.srcElement}else{if(STMapObjInstance.measureTool==""){if(e.target.id.indexOf("Info")>-1){return}}x=e.clientX-STMapMainMapRelativeLeft;y=e.clientY+document.body.scrollTop-STMapMainMapRelativeTop;tobj=e.target}STMapAnyMouseDown=new STMapPoint(x,y);if((tobj.parentElement.id.indexOf("backDiv")>-1||tobj.parentElement.id.indexOf("STMapMapForm")>-1)||tobj.parentElement.id.indexOf("xiamiandiv")>-1||(STMapExplorIE!="ie")){if(tobj.setCapture){tobj.setCapture()}else{tobj.addEventListener("move",function(){},true);window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP)}STMapMouseOverElement=tobj}STMapMouseStartPoint={x:x,y:y};var obj=STMapGetOverlayObjById(tobj.id);if(obj instanceof STMapMarker||obj instanceof STMapPolyline){if(STMapEditEventType.onmousedown){STMapEditEventType.onmousedown(tobj,x,y)}if(obj.moveable){movealObj=obj;return}}if(tobj.id.indexOf("agle")>-1){if(STMapExplorIE=="ie"){STMapMouseStartPointEagle=new STMapPoint(e.x,e.y)}else{STMapMouseStartPointEagle=new STMapPoint(e.clientX,e.clientY)}STMapMouseStartPointEagleOrin=new STMapPoint(eval(STMap$("eagleRectImage").style.left.split("px")[0]),eval(STMap$("eagleRectImage").style.top.split("px")[0]));return}if(tobj.id.indexOf("hengtiaoimg")>-1){STMapHengtiaoSuofang=true;return}if(STMapEventListnerMouseDown!=""){STMapEventListnerMouseDown(tobj,x,y);return}if(STMapDragble&&(tobj.parentElement.id.indexOf("backDiv")>-1||tobj.parentElement.id.indexOf("STMapMapForm")>-1||(STMapExplorIE!="ie"))){STMapMouseState=1}STMapMouseDownTimeStart=(new Date()).getTime();STMapMouseMoveLocation=new Array();STMapMouseMoveLocation[STMapMouseMoveLocation.length]=(new Date()).getTime()+";"+x+","+y}var moveobjnow=false;function STMapMapMouseMove(e){STMapMainMapRelativeLeft=0;STMapMainMapRelativeTop=0;STMapGetMouseRelativeLeft(STMapMainDiv);var x=0;var y=0;var tobj="";if(STMapExplorIE=="ie"){if(e.srcElement.id==""||e.srcElement.id.indexOf("Info")>-1){return}x=e.x;y=e.y;tobj=e.srcElement}else{if(STMapObjInstance.measureTool==""){if(e.target.id.indexOf("Info")>-1){return}}x=e.clientX-STMapMainMapRelativeLeft;y=e.clientY+document.body.scrollTop-STMapMainMapRelativeTop;tobj=e.target}if(tobj.id.indexOf("agle")>-1){var thisPoint="";var gapx1=x-STMapMouseStartPointEagle.x;var gapy1=y-STMapMouseStartPointEagle.y;if(STMapMouseStartPointEagleOrin!=""){STMap$("eagleRectImage").style.left=STMapMouseStartPointEagleOrin.x+gapx1+"px";STMap$("eagleRectImage").style.top=STMapMouseStartPointEagleOrin.y+gapy1+"px"}return}if(STMapHengtiaoSuofang){var topt=y-5;if(topt<67){return}if(topt>67+6*16){return}STMap$("hengtiaoimg").style.top=y-5+"px";return}if(STMapObjInstance.measureTool=="MEASURE"&&STMapMeasurePts!=""){var cxy=STMapObjInstance.screen2LonLat(new STMapPoint(x,y));var poly=new STMapPolyline();poly.id="measuretestlinemeasure";poly.points=STMapMeasurePts+cxy.x+","+cxy.y;poly.strokeColor="#0000CC";poly.strokeWeight=2;poly.infowin=false;poly.filled=false;STMapObjInstance.addOverlay(poly);if(STMapEventListnerMouseMove==""){return}}if(STMapEventEditPolyP!=""){var pp=STMapObjInstance.screen2LonLat(new STMapPoint(x,y));STMapEventEditPolyP.style.left=x-7+"px";STMapEventEditPolyP.style.top=y-7+"px";var tid=STMapEventEditPolyP.id;var shuhao=eval(tid.split("editpoly")[1]);var pts1=STMapEditPolyPionts;var newpoints="";var pts=pts1.split(";");for(var i=0;i<pts.length;i++){if(i==shuhao){newpoints+=";"+pp.x+","+pp.y;STMapEditPolyPOintsArrayXY[i]=new STMapPoint(pp.x,pp.y)}else{newpoints+=";"+pts[i]}}newpoints=newpoints.substring(1,newpoints.length);STMapEditPolyPionts=newpoints;STMapEventEditPolyObj.points=newpoints;STMapEventEditPolyObj.refresh();if(STMapEditEventType.onmousemove){STMapEditEventType.onmousemove(STMapEventEditPolyObj,x,y)}return}if(movealObj!=""&&STMapEventMouseDownState){if(movealObj instanceof STMapMarker){if(movealObj.moveable){if(STMapEditEventType.onmousemove){STMapEditEventType.onmousemove(tobj,x,y)}var p=STMapObjInstance.screen2LonLat(new STMapPoint(x,y));movealObj.setLocation(p);moveobjnow=true;return}}}if(STMapEventListnerMouseMove!=""){STMapEventListnerMouseMove(tobj,x,y);return}var gapx=x-STMapMouseStartPoint.x;var gapy=y-STMapMouseStartPoint.y;if(STMapMouseState==1&&STMapDragble&&((tobj.parentElement.id.indexOf("backDiv")>-1||tobj.parentElement.id.indexOf("STMapMapForm")>-1)||(STMapExplorIE!="ie"))){STMapMainDivBack.style.pixelLeft=gapx;STMapMainDivBack.style.pixelTop=gapy;STMapMainDivBack.style.left=gapx;STMapMainDivBack.style.top=gapy;STMapMainDivBackSatallite.style.pixelLeft=gapx;STMapMainDivBackSatallite.style.pixelTop=gapy;STMapMainDivBackSatallite.style.left=gapx;STMapMainDivBackSatallite.style.top=gapy;STMapMainDivBackRaser.style.pixelLeft=gapx;STMapMainDivBackRaser.style.pixelTop=gapy;STMapMainDivBackRaser.style.left=gapx;STMapMainDivBackRaser.style.top=gapy;STMapMainDivBackOverLayer.style.pixelLeft=gapx;STMapMainDivBackOverLayer.style.pixelTop=gapy;STMapMainDivBackOverLayer.style.left=gapx;STMapMainDivBackOverLayer.style.top=gapy;STMapMainDivBackHeat.style.pixelLeft=gapx;STMapMainDivBackHeat.style.pixelTop=gapy;STMapMainDivBackHeat.style.left=gapx;STMapMainDivBackHeat.style.top=gapy;STMapMouseMoveLocation[STMapMouseMoveLocation.length]=(new Date()).getTime()+";"+x+","+y}}function STMapMapMouseOut(a){}function STMapMapMouseContextMenu(f){var d=0;var c=0;var a=0;var g=0;var b="";if(STMapExplorIE=="android"){d=STMapTouchObjectOfWebkit.clientX;c=STMapTouchObjectOfWebkit.clientY;a=d-STMapMainMapRelativeLeft;g=c-STMapMainMapRelativeTop;if(f.srcElement){b=f.srcElement}if(f.target){b=f.target}}else{if(STMapExplorIE=="ie"){a=f.x;g=f.y;if(f.srcElement){b=f.srcElement}}else{a=f.clientX-STMapMainMapRelativeLeft;g=f.clientY+document.body.scrollTop-STMapMainMapRelativeTop;if(f.target){b=f.target}}}if(STMapEventListnerRightClick!=""){STMapEventListnerRightClick(b,a,g)}}function STMapMapMouseUp(e){STMapMainMapRelativeLeft=0;STMapMainMapRelativeTop=0;STMapGetMouseRelativeLeft(STMapMainDiv);STMapEventMouseDownState=false;var x=0;var y=0;var tobj="";if(STMapExplorIE=="ie"){if(e.srcElement.id==""||e.srcElement.id.indexOf("Info")>-1){return}x=e.x;y=e.y;tobj=e.srcElement}else{if(STMapObjInstance.measureTool==""){if(e.target.id.indexOf("Info")>-1){return}}x=e.clientX-STMapMainMapRelativeLeft;y=e.clientY+document.body.scrollTop-STMapMainMapRelativeTop;tobj=e.target}if(tobj.releaseCapture){tobj.releaseCapture()}STMapAnyMouseUp=new STMapPoint(x,y);if(STMapEventEditPolyP!=""){if(STMapEditEventType.onmouseup){STMapEditEventType.onmouseup(STMapEventEditPolyObj,x,y)}STMapEventEditPolyP.releaseCapture();STMapEventEditPolyP="";return}if(moveobjnow){if(STMapEditEventType.onmouseup){STMapEditEventType.onmouseup(tobj,x,y)}moveobjnow=false;movealObj="";STMapMouseState=0;return}if(tobj.id.indexOf("agle")>-1){var thisPoint="";var gapx1=x-STMapMouseStartPointEagle.x;var gapy1=y-STMapMouseStartPointEagle.y;if(STMapMouseStartPointEagleOrin!=""){STMap$("eagleRectImage").style.left=STMapMouseStartPointEagleOrin.x+gapx1+"px";STMap$("eagleRectImage").style.top=STMapMouseStartPointEagleOrin.y+gapy1+"px";STMapMouseStartPointEagleOrin="";var newsxy=new STMapPoint((147/2+gapx1),(147/2+gapy1));var newlonp=screen2LonLatEagle(newsxy);STMapObjInstance.setCenter(newlonp);if(tobj.releaseCapture){tobj.releaseCapture()}return}}if(STMapHengtiaoSuofang){STMapHengtiaoSuofang=false;var topt=STMap$("hengtiaoimg").style.top;topt=eval(topt.replace("px",""));if(topt>(67+16*6)){STMap$("hengtiaoimg").style.top=67+16*6+"px"}if(topt<67){STMap$("hengtiaoimg").style.top=67+"px"}topt=STMap$("hengtiaoimg").style.top;topt=eval(topt.replace("px",""));var dengji=parseInt((topt-67)/6)+1;STMapObjInstance.setZoom(dengji);if(tobj.releaseCapture){tobj.releaseCapture()}return}if(STMapEventListnerMouseUp!=""){STMapEventListnerMouseUp(tobj,x,y);return}if(STMapMouseOverElement&&STMapMouseOverElement.releaseCapture){STMapMouseOverElement.releaseCapture()}STMapMouseMoveLocation[STMapMouseMoveLocation.length]=(new Date()).getTime()+";"+x+","+y;STMapDragEffect();STMapMouseDownTimeStart=0;var gapx=x-STMapMouseStartPoint.x;var gapy=y-STMapMouseStartPoint.y;var lieshu=Math.pow(2,(20-STMapZoom-1));var meterPerPic=40075016.6855784/lieshu;var meterPerPixel=meterPerPic/256;var nowcenM=STMapLonlat2Mercator(STMapCenter);var newcenM={x:(nowcenM.x-meterPerPixel*gapx),y:nowcenM.y+meterPerPixel*gapy};var newlon=STMapMercator2Lonlat(newcenM);if((gapx!=0||gapy!=0)&&STMapDragble&&STMapMouseState==1&&(tobj.parentElement.id.indexOf("backDiv")>-1||tobj.parentElement.id.indexOf("STMapMapForm")>-1||(STMapExplorIE!="ie"))){if(STMapCommEventType.refreshPre){if((typeof(STMapCommEventType.refreshPre)).toLowerCase()=="object"||(typeof(STMapCommEventType.refreshPre)).toLowerCase()=="function"){STMapCommEventType.refreshPre()}}if(STMapObjInstance.measureTool==""){STMapObjInstance.locateMap(newlon,STMapZoom)}STMapMouseState=0;return}STMapMouseState=0;if(STMapEventMouseUpTime!=""){var ddd=(new Date())-STMapEventMouseUpTime;if(ddd<400){STMapMapDblClick(e);STMapEventMouseUpTime="";return}}STMapEventMouseUpTime=new Date();if(STMapMouseStartPoint.x==x&&STMapMouseStartPoint.y==y&&(tobj.parentElement.id.indexOf("backDiv")>-1||tobj.parentElement.id.indexOf("STMapMapForm")>-1||(STMapExplorIE!="ie"))){STMapMapClick(e)}var cxy=STMapObjInstance.screen2LonLat(new STMapPoint(x,y));if(STMapObjInstance.measureTool=="MEASURE"){if(STMapMeasurePts==""){STMapObjInstance.clearTempOverlays()}STMapMeasurePts+=cxy.x+","+cxy.y+";";var dis=0;var aaa=STMapMeasurePts.split(";");STMapMeasureNumber=0;for(var i=1;i<aaa.length;i++){if(aaa[i]){STMapMeasureNumber+=STMapObjInstance.distance(aaa[i-1].split(",")[0],aaa[i-1].split(",")[1],aaa[i].split(",")[0],aaa[i].split(",")[1])}}var label=new STMapLabel();var t=new Date();var t=t.getTime();label.id="measureLabel"+t;label.point=cxy;var tet="";if(STMapMeasureNumber==0){tet="起点"}else{if(STMapMeasureNumber<1000){tet=parseInt(STMapMeasureNumber)+"米"}else{tet=(STMapMeasureNumber/1000)+"公里"}}label.text=tet;if(true){(STMapMeasureNumber!=0)}STMapObjInstance.addOverlay(label);var pt=new STMapMarker();pt.point=cxy;pt.id="measurenodeimg"+(new Date()).getTime();pt.size=new STMapSize(10,10);pt.img=STMapEngineAPI+"img/quan.gif";pt.anchor="ML";pt.infowin=false;STMapObjInstance.addOverlay(pt,false)}}function STMapMapClick(f){var d=0;var c=0;var a="";var g="";var b="";if(STMapExplorIE=="android"){d=STMapTouchObjectOfWebkit.clientX;c=STMapTouchObjectOfWebkit.clientY;a=d-STMapMainMapRelativeLeft;g=c-STMapMainMapRelativeTop;if(f.srcElement){b=f.srcElement}if(f.target){b=f.target}}else{if(STMapExplorIE=="ie"){a=f.x;g=f.y;b=f.srcElement}else{a=f.clientX-STMapMainMapRelativeLeft;g=f.clientY+document.body.scrollTop-STMapMainMapRelativeTop;b=f.target}}if(STMapEventListnerClick!=""){STMapEventListnerClick(b,a,g);return}}function STMapMapDblClick(d){var g=0;var f=0;var i=0;var h=0;var b="";if(STMapExplorIE=="android"){g=STMapTouchObjectOfWebkit.clientX;f=STMapTouchObjectOfWebkit.clientY;i=g-STMapMainMapRelativeLeft;h=f-STMapMainMapRelativeTop;if(d.srcElement){b=d.srcElement}if(d.target){b=d.target}}else{if(STMapExplorIE=="ie"){i=d.x;h=d.y;if(d.srcElement){b=d.srcElement}}else{i=d.clientX-STMapMainMapRelativeLeft;h=d.clientY+document.body.scrollTop-STMapMainMapRelativeTop;if(d.target){b=d.target}}}if(STMapEventListnerDblClick!=""){STMapEventListnerDblClick(b,i,h);return}if(STMapZoom>=18||STMapZoom<=1){return}if(STMapObjInstance.measureTool=="MEASURE"&&STMapMeasurePts!=""){var c="";if(STMapExplorIE=="android"){c=STMapObjInstance.screen2LonLat(new STMapPoint(g,f))}else{c=STMapObjInstance.screen2LonLat(new STMapPoint(i,h))}var k=new STMapMarker();k.point=c;k.id="measurecloseimg";k.size=new STMapSize(12,12);k.img=STMapEngineAPI+"img/cejucha.gif";k.anchor="ML";k.infowin=false;STMapObjInstance.addOverlay(k,false);var j=STMap$(k.id);if(STMapObjInstance.explorer=="ie"){j.attachEvent("onclick",STMapMapCejuClickClose)}else{if(STMapObjInstance.explorer=="firefox"){j.onclick=STMapMapCejuClickClose}else{if(STMapObjInstance.explorer=="android"){j.ontouchend=STMapMapCejuClickClose}else{j.onclick=STMapMapCejuClickClose}}}STMapObjInstance.setMouseTool("");var a=new STMapPolyline();a.id="measuretestlinemeasure";a.points=STMapMeasurePts+c.x+","+c.y;a.strokeColor="#0000CC";a.strokeWeight=2;a.infowin=false;STMapObjInstance.addOverlay(a);STMapMeasurePts="";STMapMeasureNumber=0;return}STMapfangdatupian()}function STMapMapMouseWheel(a){if(a.wheelDelta){if(a.wheelDelta>0){if(STMapZoom<=1){return}STMapfangdatupian()}else{if(STMapZoom>=18){return}STMapfangdatupian1()}}if(a.detail){if(a.detail<0){if(STMapZoom<=1){return}STMapfangdatupian()}else{if(STMapZoom>=18){return}STMapfangdatupian1()}}}function STMapGetMouseRelativeLeft(a){if(a.parentElement){STMapMainMapRelativeLeft+=a.offsetLeft;STMapMainMapRelativeTop+=a.offsetTop;return;if(a.parentElement.offsetLeft==0){return}else{STMapGetMouseRelativeLeft(a.parentElement)}}}function STMap_niehe(a){STMapMainDivBack.style.webkitTransform="scale("+a+")";STMapMainDivBackSatallite.style.webkitTransform="scale("+a+")";STMapMainDivBackRaser.style.webkitTransform="scale("+a+")"}var STMapTileSuofang="";var STMapTileSuofang1="";function STMapfangdatupian(){clearInterval(STMapTileSuofang);STMapTileSuofang=setInterval("STMap_suofang();",20)}function STMapfangdatupian1(){clearInterval(STMapTileSuofang1);STMapTileSuofang1=setInterval("STMap_suofang1();",20)}function STMap_suofang(){for(imgid in STMapImgArray){if(STMapImgArray[imgid]!="null"){var c=STMap$(imgid);if(c.width>=STMapTileSize*2){clearInterval(STMapTileSuofang);STMapObjInstance.locateMap(STMapCenter,STMapZoom-1);return}c.width=c.width*1.4;c.height=c.height*1.4;c.style.left=1.4*(parseInt(c.style.left)-STMapMainDiv.clientWidth/2)+STMapMainDiv.clientWidth/2;c.style.top=1.4*(parseInt(c.style.top)-STMapMainDiv.clientHeight/2)+STMapMainDiv.clientHeight/2}}for(imgid2 in STMapImgArray2){if(STMapImgArray2[imgid2]!="null"){var b=STMap$(imgid2);b.width=b.width*1.4;b.height=b.height*1.4;b.style.left=1.4*(parseInt(b.style.left)-STMapMainDiv.clientWidth/2)+STMapMainDiv.clientWidth/2;b.style.top=1.4*(parseInt(b.style.top)-STMapMainDiv.clientHeight/2)+STMapMainDiv.clientHeight/2}}for(imgid3 in STMapImgArray3){if(STMapImgArray3[imgid3]!="null"){var a=STMap$(imgid3);a.width=a.width*1.4;a.height=a.height*1.4;a.style.left=1.4*(parseInt(a.style.left)-STMapMainDiv.clientWidth/2)+STMapMainDiv.clientWidth/2;a.style.top=1.4*(parseInt(a.style.top)-STMapMainDiv.clientHeight/2)+STMapMainDiv.clientHeight/2}}}function STMap_suofang1(){for(imgid in STMapImgArray){if(STMapImgArray[imgid]!="null"){var c=STMap$(imgid);if(c.width<=STMapTileSize/2){clearInterval(STMapTileSuofang1);STMapObjInstance.locateMap(STMapCenter,STMapZoom+1);return}c.width=c.width*0.6;c.height=c.height*0.6;c.style.left=0.6*(parseInt(c.style.left)-STMapMainDiv.clientWidth/2)+STMapMainDiv.clientWidth/2;c.style.top=0.6*(parseInt(c.style.top)-STMapMainDiv.clientHeight/2)+STMapMainDiv.clientHeight/2}}for(imgid2 in STMapImgArray2){if(STMapImgArray2[imgid2]!="null"){var b=STMap$(imgid2);b.width=b.width*0.6;b.height=b.height*0.6;b.style.left=0.6*(parseInt(b.style.left)-STMapMainDiv.clientWidth/2)+STMapMainDiv.clientWidth/2;b.style.top=0.6*(parseInt(b.style.top)-STMapMainDiv.clientHeight/2)+STMapMainDiv.clientHeight/2}}for(imgid3 in STMapImgArray3){if(STMapImgArray3[imgid3]!="null"){var a=STMap$(imgid3);a.width=a.width*0.6;a.height=a.height*0.6;a.style.left=0.6*(parseInt(a.style.left)-STMapMainDiv.clientWidth/2)+STMapMainDiv.clientWidth/2;a.style.top=0.6*(parseInt(a.style.top)-STMapMainDiv.clientHeight/2)+STMapMainDiv.clientHeight/2}}}var STMapErelativeXEagle="";var STMapErelativeYEagle="";var STMapEColEagle="";var STMapERowEagle="";function STMapchulshuzuEagle(){var geshu=0;for(imgid in STMapImgArrayEagle){geshu++;if(STMapImgArrayEagle[imgid]!="null"){var ileft=147/2-STMapErelativeXEagle+(eval(imgid.split("_")[0])-STMapEColEagle)*STMapTileSize;var itop=147/2-STMapErelativeYEagle+(STMapERowEagle-eval(imgid.split("_")[1]))*STMapTileSize;if(itop<-STMapTileSize||ileft<-STMapTileSize||itop>147||ileft>147){STMapImgArrayEagle[imgid]="null";STMap$("backDivObjEagleBody").removeChild(STMap$(imgid))}}}if(geshu>1000){}}var STMapErelativeX="";var STMapErelativeY="";var STMapECol="";var STMapERow="";function STMapchulshuzu(){var geshu=0;for(imgid in STMapImgArray){geshu++;if(STMapImgArray[imgid]!="null"){var ileft=STMapMainDiv.clientWidth/2-STMapErelativeX+(eval(imgid.split("_")[0])-STMapECol)*STMapTileSize;var itop=STMapMainDiv.clientHeight/2-STMapErelativeY+(STMapERow-eval(imgid.split("_")[1]))*STMapTileSize;if(eval(imgid.split("_")[2])!=STMapObjInstance.getZoom()||itop<-STMapTileSize||ileft<-STMapTileSize||itop>STMapMainDiv.clientHeight||ileft>STMapMainDiv.clientWidth){STMapImgArray[imgid]="null";STMapMainDivBack.removeChild(STMap$(imgid))}}}if(geshu>1000){}}function STMapchulshuzu2(){var geshu=0;for(imgid in STMapImgArray2){geshu++;if(STMapImgArray2[imgid]!="null"){var ileft=STMapMainDiv.clientWidth/2-STMapErelativeX+(eval(imgid.split("_")[0])-STMapECol)*STMapTileSize;var itop=STMapMainDiv.clientHeight/2-STMapErelativeY+(STMapERow-eval(imgid.split("_")[1]))*STMapTileSize;if(eval(imgid.split("_")[2])!=STMapObjInstance.getZoom()||itop<-STMapTileSize||ileft<-STMapTileSize||itop>STMapMainDiv.clientHeight||ileft>STMapMainDiv.clientWidth){STMapImgArray2[imgid]="null";STMapMainDivBackRaser.removeChild(STMap$(imgid))}}}if(geshu>1000){}}function STMapchulshuzu3(){var geshu=0;for(imgid in STMapImgArray3){geshu++;if(STMapImgArray3[imgid]!="null"){var ileft=STMapMainDiv.clientWidth/2-STMapErelativeX+(eval(imgid.split("_")[0])-STMapECol)*STMapTileSize;var itop=STMapMainDiv.clientHeight/2-STMapErelativeY+(STMapERow-eval(imgid.split("_")[1]))*STMapTileSize;if(eval(imgid.split("_")[2])!=STMapObjInstance.getZoom()||itop<-STMapTileSize||ileft<-STMapTileSize||itop>STMapMainDiv.clientHeight||ileft>STMapMainDiv.clientWidth){STMapImgArray3[imgid]="null";STMapMainDivBackSatallite.removeChild(STMap$(imgid))}}}if(geshu>1000){}}function STMapDblClickOverLay(h){var l=0;var k=0;var n="";var m="";var c="";if(STMapExplorIE=="android"){l=STMapTouchObjectOfWebkit.clientX;k=STMapTouchObjectOfWebkit.clientY;n=l-STMapMainMapRelativeLeft;m=k-STMapMainMapRelativeTop;if(h.srcElement){c=h.srcElement}if(h.target){c=h.target}}else{if(STMapExplorIE=="ie"){n=h.x;m=h.y;c=h.srcElement}else{n=h.clientX-STMapMainMapRelativeLeft;m=h.clientY+document.body.scrollTop-STMapMainMapRelativeTop;c=h.target}}var d=STMapGetOverlayObjById(c.id);var j=d;var g=STMapGetZidingyiOverLay(c);if(g){j=g}var b="";var a=new Array();if(STMapArraygezi2[c.id]){b=STMapArraygezi[STMapArraygezi2[c.id]];for(var f=0;f<b.split(",").length;f++){a[f]=STMapGetOverlayObjById[b.split(",")[f]]}}else{a[0]=c}if(STMapEventListnerDblClick2[j.id]!="undefined"&&typeof(STMapEventListnerDblClick2[j.id])!="undefined"){if(STMapCollection&&j instanceof STMapMarker){(STMapEventListnerDblClick2[j.id])(a,n,m)}else{(STMapEventListnerDblClick2[j.id])(j,n,m)}return}}function STMapClickOverLay(j){if(STMapAnyMouseUp.x-STMapAnyMouseDown.x>1||STMapAnyMouseUp.y-STMapAnyMouseDown.y>1){return}var m=0;var l=0;var o="";var n="";var c="";if(STMapExplorIE=="android"){m=STMapTouchObjectOfWebkit.clientX;l=STMapTouchObjectOfWebkit.clientY;o=m-STMapMainMapRelativeLeft;n=l-STMapMainMapRelativeTop;if(j.srcElement){c=j.srcElement}if(j.target){c=j.target}}else{if(STMapExplorIE=="ie"){o=j.x;n=j.y;c=j.srcElement}else{o=j.clientX-STMapMainMapRelativeLeft;n=j.clientY+document.body.scrollTop-STMapMainMapRelativeTop;c=j.target}}var d=STMapGetOverlayObjById(c.id);var k=d;var h=STMapGetZidingyiOverLay(c);if(h){k=h}var b="";var a=new Array();if(STMapArraygezi2[c.id]){b=STMapArraygezi[STMapArraygezi2[c.id]];for(var g=0;g<b.split(",").length;g++){a[g]=STMapGetOverlayObjById[b.split(",")[g]]}}else{a[0]=c}if(STMapEventListnerClick2[k.id]!="undefined"&&typeof(STMapEventListnerClick2[k.id])!="undefined"){if(STMapCollection&&k instanceof STMapMarker){(STMapEventListnerClick2[k.id])(a,o,n)}else{(STMapEventListnerClick2[k.id])(k,o,n)}return}var f=null;if(j.target){f=j.target}else{f=j.srcElement}if(STMapGetOverlayObjById(k.id)){if(STMapGetOverlayObjById(k.id).infowin){if(k instanceof STMapPolyline){STMapPolyClickEventXY[k.id]=STMapObjInstance.screen2LonLat(new STMapPoint(o,n))}STMapInfoWinObj.overlay=STMap$(k.id);STMapInfoWinObj.overlayObj=k;STMapInfoWinObj.setTitle(STMapInfoWinObj.overlayObj.title);STMapInfoWinObj.setContent(STMapInfoWinObj.overlayObj.content);STMapInfoWinObj.refresh();STMapInfoWinObj.setVisible(true)}}}var STMapPolyClickEventXY=new Array();function STMapOverLayMouseDown(h){var l=0;var k=0;var n="";var m="";var c="";if(STMapExplorIE=="android"){l=STMapTouchObjectOfWebkit.clientX;k=STMapTouchObjectOfWebkit.clientY;n=l-STMapMainMapRelativeLeft;m=k-STMapMainMapRelativeTop;if(h.srcElement){c=h.srcElement}if(h.target){c=h.target}}else{if(STMapExplorIE=="ie"){n=h.x;m=h.y;c=h.srcElement}else{n=h.clientX-STMapMainMapRelativeLeft;m=h.clientY+document.body.scrollTop-STMapMainMapRelativeTop;c=h.target}}if(c.setCapture){c.setCapture()}var d=STMapGetOverlayObjById(c.id);var j=d;var g=STMapGetZidingyiOverLay(c);if(g){j=g}var b="";var a=new Array();if(STMapArraygezi2[c.id]){b=STMapArraygezi[STMapArraygezi2[c.id]];for(var f=0;f<b.split(",").length;f++){a[f]=STMapGetOverlayObjById[b.split(",")[f]]}}else{a[0]=c}if(STMapEventListnerMouseDown2[j.id]!="undefined"&&typeof(STMapEventListnerMouseDown2[j.id])!="undefined"){if(STMapCollection&&j instanceof STMapMarker){(STMapEventListnerMouseDown2[j.id])(a,n,m)}else{(STMapEventListnerMouseDown2[j.id])(j,n,m)}return}}function STMapGetZidingyiOverLay(a){if(a){if(STMapGetOverlayObjById(a.id)){if(STMapGetOverlayObjById(a.id) instanceof STMapCustomOverObj){return STMapGetOverlayObjById(a.id)}}return STMapGetZidingyiOverLay(a.parentElement)}else{return null}}function STMapOverLayMouseUp(h){var l=0;var k=0;var n="";var m="";var c="";if(STMapExplorIE=="android"){l=STMapTouchObjectOfWebkit.clientX;k=STMapTouchObjectOfWebkit.clientY;n=l-STMapMainMapRelativeLeft;m=k-STMapMainMapRelativeTop;if(h.srcElement){c=h.srcElement}if(h.target){c=h.target}}else{if(STMapExplorIE=="ie"){n=h.x;m=h.y;c=h.srcElement}else{n=h.clientX-STMapMainMapRelativeLeft;m=h.clientY+document.body.scrollTop-STMapMainMapRelativeTop;c=h.target}}if(c.releaseCapture){c.releaseCapture()}var d=STMapGetOverlayObjById(c.id);var j=d;var g=STMapGetZidingyiOverLay(c);if(g){j=g}var b="";var a=new Array();if(STMapArraygezi2[c.id]){b=STMapArraygezi[STMapArraygezi2[c.id]];for(var f=0;f<b.split(",").length;f++){a[f]=STMapGetOverlayObjById[b.split(",")[f]]}}else{a[0]=c}if(STMapEventListnerMouseUp2[j.id]!="undefined"&&typeof(STMapEventListnerMouseUp2[j.id])!="undefined"){if(STMapCollection&&j instanceof STMapMarker){(STMapEventListnerMouseUp2[j.id])(a,n,m)}else{(STMapEventListnerMouseUp2[j.id])(j,n,m)}return}}function STMapOverLayMouseOver(h){var l=0;var k=0;var n="";var m="";var c="";if(STMapExplorIE=="android"){l=STMapTouchObjectOfWebkit.clientX;k=STMapTouchObjectOfWebkit.clientY;n=l-STMapMainMapRelativeLeft;m=k-STMapMainMapRelativeTop;if(h.srcElement){c=h.srcElement}if(h.target){c=h.target}}else{if(STMapExplorIE=="ie"){n=h.x;m=h.y;c=h.srcElement}else{n=h.clientX-STMapMainMapRelativeLeft;m=h.clientY+document.body.scrollTop-STMapMainMapRelativeTop;c=h.target}}var d=STMapGetOverlayObjById(c.id);var j=d;if(j instanceof STMapMarker){if(j.imgH!=""){STMap$(j.id).src=j.imgH}}var g=STMapGetZidingyiOverLay(c);if(g){j=g}var b="";var a=new Array();if(STMapArraygezi2[c.id]){b=STMapArraygezi[STMapArraygezi2[c.id]];for(var f=0;f<b.split(",").length;f++){a[f]=STMapGetOverlayObjById[b.split(",")[f]]}}else{a[0]=c}if(STMapEventListnerMouseOver2[j.id]!="undefined"&&typeof(STMapEventListnerMouseOver2[j.id])!="undefined"){if(STMapCollection&&j instanceof STMapMarker){(STMapEventListnerMouseOver2[j.id])(a,n,m)}else{(STMapEventListnerMouseOver2[j.id])(j,n,m)}return}}function STMapOverLayMouseMove(h){var l=0;var k=0;var n="";var m="";var c="";if(STMapExplorIE=="android"){l=STMapTouchObjectOfWebkit.clientX;k=STMapTouchObjectOfWebkit.clientY;n=l-STMapMainMapRelativeLeft;m=k-STMapMainMapRelativeTop;if(h.srcElement){c=h.srcElement}if(h.target){c=h.target}}else{if(STMapExplorIE=="ie"){n=h.x;m=h.y;c=h.srcElement}else{n=h.clientX-STMapMainMapRelativeLeft;m=h.clientY+document.body.scrollTop-STMapMainMapRelativeTop;c=h.target}}var d=STMapGetOverlayObjById(c.id);var j=d;var g=STMapGetZidingyiOverLay(c);if(g){j=g}var b="";var a=new Array();if(STMapArraygezi2[c.id]){b=STMapArraygezi[STMapArraygezi2[c.id]];for(var f=0;f<b.split(",").length;f++){a[f]=STMapGetOverlayObjById[b.split(",")[f]]}}else{a[0]=c}if(STMapEventListnerMouseMove2[j.id]!="undefined"&&typeof(STMapEventListnerMouseMove2[j.id])!="undefined"){if(STMapCollection&&j instanceof STMapMarker){(STMapEventListnerMouseMove2[j.id])(a,n,m)}else{(STMapEventListnerMouseMove2[j.id])(j,n,m)}return}}function STMapOverLayMouseOut(h){var l=0;var k=0;var n="";var m="";var c="";if(STMapExplorIE=="android"){l=STMapTouchObjectOfWebkit.clientX;k=STMapTouchObjectOfWebkit.clientY;n=l-STMapMainMapRelativeLeft;m=k-STMapMainMapRelativeTop;if(h.srcElement){c=h.srcElement}if(h.target){c=h.target}}else{if(STMapExplorIE=="ie"){n=h.x;m=h.y;c=h.srcElement}else{n=h.clientX-STMapMainMapRelativeLeft;m=h.clientY+document.body.scrollTop-STMapMainMapRelativeTop;c=h.target}}var d=STMapGetOverlayObjById(c.id);var j=d;if(j instanceof STMapMarker){STMap$(j.id).src=j.img}var g=STMapGetZidingyiOverLay(c);if(g){j=g}var b="";var a=new Array();if(STMapArraygezi2[c.id]){b=STMapArraygezi[STMapArraygezi2[c.id]];for(var f=0;f<b.split(",").length;f++){a[f]=STMapGetOverlayObjById[b.split(",")[f]]}}else{a[0]=c}if(STMapEventListnerMouseOut2[j.id]!="undefined"&&typeof(STMapEventListnerMouseOut2[j.id])!="undefined"){if(STMapCollection&&j instanceof STMapMarker){(STMapEventListnerMouseOut2[j.id])(a,n,m)}else{(STMapEventListnerMouseOut2[j.id])(j,n,m)}return}}function suofangKong1(){STMapObjInstance.setZoom(STMapObjInstance.getZoom()-1)}function suofangKong2(){STMapObjInstance.setZoom(STMapObjInstance.getZoom()+1)}var STMapReizeTimer="";function STMapResize(){STMapReizeTimer=window.setInterval("STMapResizeStart()",500)}function STMapResizeStart(){if(STMapMainDivWidth!=STMapObjInstance.mapDiv.clientWidth||STMapMainDivHeight!=STMapObjInstance.mapDiv.clientHeight){var a=STMapObjInstance.mapDiv.clientWidth;var b=STMapObjInstance.mapDiv.clientHeight;document.getElementById("backDivObj2").style.width=a+"px";document.getElementById("backDivObj2").style.height=b+"px";document.getElementById("STMapMapForm").style.width=a+"px";document.getElementById("STMapMapForm").style.height=b+"px";document.getElementById("backDivObj").style.width=a+"px";document.getElementById("backDivObj").style.height=b+"px";document.getElementById("backDivObjSatallite").style.width=a+"px";document.getElementById("backDivObjSatallite").style.height=b+"px";document.getElementById("backDivObjTraffic").style.width=a+"px";document.getElementById("backDivObjTraffic").style.height=b+"px";document.getElementById("backDivObjOverLayer").style.width=a+"px";document.getElementById("backDivObjOverLayer").style.height=b+"px";STMapObjInstance.lie=Math.ceil(STMapObjInstance.mapDiv.clientWidth/STMapObjInstance.mapWidth);STMapObjInstance.hang=Math.ceil(STMapObjInstance.mapDiv.clientHeight/STMapObjInstance.mapHeight);STMapObjInstance.locateMap(STMapObjInstance.mapCenter,STMapObjInstance.mapZoom);STMapObjInstance.locateEagle()}}var STMapEventEditPolyP="";var STMapEventEditPolyObj="";var STMapEditPolyPOintsArray=new Array();var STMapEditPolyPOintsArrayXY=new Array();var STMapEditPolyPionts="";STMapEventEditPolyPRight="";function STMapClickOverLayLineEdit(f){var d=0;var c=0;var a="";var g="";var b="";if(STMapExplorIE=="android"){d=STMapTouchObjectOfWebkit.clientX;c=STMapTouchObjectOfWebkit.clientY;a=d-STMapMainMapRelativeLeft;g=c-STMapMainMapRelativeTop;if(f.srcElement){b=f.srcElement}if(f.target){b=f.target}}else{if(STMapExplorIE=="ie"){a=f.x;g=f.y;b=f.srcElement}else{a=f.clientX-STMapMainMapRelativeLeft;g=f.clientY+document.body.scrollTop-STMapMainMapRelativeTop;b=f.target}}if(f.button==2){STMap$("STMapEventEditPolylineDiv").style.left=a+"px";STMap$("STMapEventEditPolylineDiv").style.top=g+"px";STMap$("STMapEventEditPolylineDiv").style.display="block";STMapEventEditPolyPRight=b;return}if(STMapExplorIE=="ie"){STMapMouseStartPoint={x:f.x,y:f.y}}else{STMapMouseStartPoint={x:(f.clientX-STMapMainMapRelativeLeft),y:(f.clientY+document.body.scrollTop-STMapMainMapRelativeTop)}}if(STMapEditEventType.onmousedown){STMapEditEventType.onmousedown(STMapEventEditPolyObj,a,g)}if(b.id.indexOf("editpoly")>-1){STMapEventEditPolyP=b;b.setCapture()}}function STMapEventDeletePoint(){if(STMapEventEditPolyPRight!=""){var shuhao=eval(STMapEventEditPolyPRight.id.split("editpoly")[1]);var pts1=STMapEditPolyPionts;var newpoints="";var pts=pts1.split(";");for(var i=0;i<pts.length;i++){if(i==shuhao){}else{newpoints+=";"+pts[i]}}newpoints=newpoints.substring(1,newpoints.length);STMapEditPolyPionts=newpoints;STMapEventEditPolyObj.points=newpoints;STMapEventEditPolyObj.refresh();STMapEventEditPolyObj.setEditable(true);STMapEventCloseCharuDiv()}}function STMapEventInsertPointBefore(){if(STMapEventEditPolyPRight!=""){var newpoints="";var shuhao=eval(STMapEventEditPolyPRight.id.split("editpoly")[1]);if(shuhao==0){alert("这已经是第一个结点！");return}var pts1=STMapEditPolyPionts;var newpoints="";var pts=pts1.split(";");for(var i=0;i<pts.length;i++){if(i==shuhao){if(i!=0){newpoints+=";"+(eval(pts[i].split(",")[0])+eval(pts[i-1].split(",")[0]))/2+","+(eval(pts[i].split(",")[1])+eval(pts[i-1].split(",")[1]))/2}}newpoints+=";"+pts[i]}newpoints=newpoints.substring(1,newpoints.length);STMapEditPolyPionts=newpoints;STMapEventEditPolyObj.points=newpoints;STMapEventEditPolyObj.refresh();STMapEventEditPolyObj.setEditable(true);STMapEventCloseCharuDiv()}}function STMapEventInsertPointAfter(){if(STMapEventEditPolyPRight!=""){var newpoints="";var shuhao=eval(STMapEventEditPolyPRight.id.split("editpoly")[1]);var pts1=STMapEditPolyPionts;var newpoints="";var pts=pts1.split(";");if(shuhao==(pts.length-1)){alert("这已经是最后一个结点！");return}for(var i=0;i<pts.length;i++){newpoints+=";"+pts[i];if(i==shuhao){if(i!=(pts.length-1)){newpoints+=";"+(eval(pts[i].split(",")[0])+eval(pts[i+1].split(",")[0]))/2+","+(eval(pts[i].split(",")[1])+eval(pts[i+1].split(",")[1]))/2}}}newpoints=newpoints.substring(1,newpoints.length);STMapEditPolyPionts=newpoints;STMapEventEditPolyObj.points=newpoints;STMapEventEditPolyObj.refresh();STMapEventEditPolyObj.setEditable(true);STMapEventCloseCharuDiv()}}function STMapEventCloseCharuDiv(){document.getElementById("STMapEventEditPolylineDiv").style.display="none"}function STMapMapOnkeyup(b){var a=b.keyCode}function STMapMapOnkeydown(b){var a=b.keyCode;switch(a){case 37:STMapObjInstance.pan(10,0);break;case 39:STMapObjInstance.pan(-10,0);break;case 38:STMapObjInstance.pan(0,10);break;case 40:STMapObjInstance.pan(0,-10);break}}var STMapHashBound=new Array();var STMapBoundTime=0;var STMapintervaltime="";function STMapboundFunc(){STMapBoundTime=(new Date()).getTime();if(STMapintervaltime!=""){clearInterval(STMapintervaltime)}STMapintervaltime=setInterval(STMapboundFuncDan,100)}function STMapboundFuncDan(){var c=(new Date()).getTime();var d=c-STMapBoundTime;if(d>=1000){STMapBoundTime=(new Date()).getTime();try{if(STMapintervaltime!=""){clearInterval(STMapintervaltime)}}catch(b){}for(id in STMapHashBound){if(STMapGetOverlayObjById(id)){STMapGetOverlayObjById(id).refresh()}}}for(id in STMapHashBound){if(STMapHashBound[id]!=""){var a=STMap$(id);if(d<500){a.style.top=a.style.pixelTop-4+"px"}else{a.style.top=a.style.pixelTop+4+"px"}}}};function STMapInfoWin(){this.point="";this.width=250;this.height=145;this.overlay="";this.overlayObj="";this.content="";this.content+='<div id="STMapInfoWinTitleMain" style="position:absolute;width:250px;top:100px;z-index:99999999;display:none;background:">';this.content+='<div id="STMapInfoWinTitleMainSub1" style="position:absolute;z-index:1;width:250px;height:120px;border:1px solid #CCCCCC;background:white">';this.content+='<div id="STMapInfoWinTitleMainSub2" style="width:100%;height:23px;border-bottom:1px solid #EBEBEB">';this.content+='<div id="STMapInfoWinTitle" style="float:left;width:200px;overflow:hidden;"></div>';this.content+='<div id="STMapInfoWinTitleMainSub3" style="float:right;margin:8 5 3 0;">';this.content+='<img src="'+STMapEngineAPI+'img/cha.gif" style="cursor:pointer" onclick="STMapCloseInfoWin()">';this.content+="</div>";this.content+="</div>";this.content+='<div id="STMapInfoWinBody" style="width:100%;height:90px;overflow:auto;border-bottom:0px solid #EBEBEB">';this.content+="</div>	";this.content+="</div>";this.content+='<div id="STMapInfoWinTitleMainSub4" style="position:absolute;top:119px;z-index:2;width:250px;height:25px;border-bottom:0px solid #EBEBEB;text-align:center">';this.content+='<img src="'+STMapEngineAPI+'img/sanjiao.gif" style="">';this.content+="</div>";this.content+="</div>";this.content1='<div id="STMapInfoWinTitleMainSub1" style="position:absolute;z-index:1;width:250px;height:120px;border:1px solid #CCCCCC;background:white">';this.content1+='<div id="STMapInfoWinTitleMainSub2" style="width:100%;height:23px;border-bottom:1px solid #EBEBEB">';this.content1+='<div id="STMapInfoWinTitle" style="float:left;width:200px;overflow:hidden;"></div>';this.content1+='<div id="STMapInfoWinTitleMainSub3" style="float:right;margin:8 5 3 0;">';this.content1+='<img src="'+STMapEngineAPI+'img/cha.gif" style="cursor:pointer" onclick="STMapCloseInfoWin()">';this.content1+="</div>";this.content1+="</div>";this.content1+='<div id="STMapInfoWinBody" style="width:100%;height:90px;overflow:auto;border-bottom:0px solid #EBEBEB">';this.content1+="</div>	";this.content1+="</div>";this.content1+='<div id="STMapInfoWinTitleMainSub4" style="position:absolute;top:119px;z-index:2;width:250px;height:25px;border-bottom:0px solid #EBEBEB;text-align:center">';this.content1+='<img src="'+STMapEngineAPI+'img/sanjiao.gif" style="">';this.content1+="</div>";this.setTitle=function(a){if(STMap$("STMapInfoWinTitle")){STMap$("STMapInfoWinTitle").innerHTML=a}};this.setContent=function(a){if(this.overlayObj.infoCustom){STMap$("STMapInfoWinTitleMain").innerHTML=this.overlayObj.infoCustomContentHTML}else{if(STMapCustomInfoWin){STMap$("STMapInfoWinTitleMain").innerHTML=STMapCustomInfoWinDiv;if(STMap$(STMapCustomInfoWinDivContentDivID)){STMap$(STMapCustomInfoWinDivContentDivID).innerHTML=a}}else{STMap$("STMapInfoWinTitleMain").innerHTML=this.content1;if(STMap$("STMapInfoWinBody")){STMap$("STMapInfoWinBody").innerHTML=a}}}};this.setVisible=function(a){if(a){document.getElementById("STMapInfoWinTitleMain").style.display="block";this.refresh();if(this.overlayObj==""){return}if(STMapCustomInfoWin){STMapInfoWinObj.setContent(STMapInfoWinObj.overlayObj.content)}else{this.setContent(this.overlayObj.content);this.setTitle(this.overlayObj.title)}}else{document.getElementById("STMapInfoWinTitleMain").style.display="none"}};this.refresh=function(){this.overlay=STMap$(this.overlayObj.id);if(this.overlayObj instanceof STMapCustomOverObj){if(this.overlayObj.infoCustom){if(STMapExplorIE!="ie"){STMap$("STMapInfoWinTitleMain").style.left=parseInt(this.overlay.style.left)+this.overlayObj.size.w/2-(this.overlayObj.cusInfoWinWidth)/2;STMap$("STMapInfoWinTitleMain").style.top=parseInt(this.overlay.style.top)-this.overlayObj.cusInfoWinHeight}else{STMap$("STMapInfoWinTitleMain").style.pixelLeft=this.overlay.style.pixelLeft+this.overlayObj.size.w/2-(this.overlayObj.cusInfoWinWidth)/2;STMap$("STMapInfoWinTitleMain").style.pixelTop=this.overlay.style.pixelTop-this.overlayObj.cusInfoWinHeight}}else{if(STMapExplorIE!="ie"){STMap$("STMapInfoWinTitleMain").style.left=parseInt(this.overlay.style.left)+this.overlayObj.size.w/2-this.width/2;STMap$("STMapInfoWinTitleMain").style.top=parseInt(this.overlay.style.top)-this.height}else{STMap$("STMapInfoWinTitleMain").style.pixelLeft=this.overlay.style.pixelLeft+this.overlayObj.size.w/2-this.width/2;STMap$("STMapInfoWinTitleMain").style.pixelTop=this.overlay.style.pixelTop-this.height}}}if(this.overlayObj instanceof STMapMarker){if(STMap$("STMapInfoWinTitleMain")&&this.overlay!=""){if(STMapExplorIE!="ie"){if(this.overlayObj.infoCustom){STMap$("STMapInfoWinTitleMain").style.left=parseInt(this.overlay.style.left)+parseInt(this.overlay.style.pixelWidth)/2-(this.overlayObj.cusInfoWinWidth)/2;STMap$("STMapInfoWinTitleMain").style.top=parseInt(this.overlay.style.top)-this.overlayObj.cusInfoWinHeight}else{STMap$("STMapInfoWinTitleMain").style.left=parseInt(this.overlay.style.left)+parseInt(this.overlay.style.pixelWidth)/2-(STMapCustomInfoWin?STMapCustomInfoWidth:this.width)/2+(STMapCustomInfoWin?0:16);STMap$("STMapInfoWinTitleMain").style.top=parseInt(this.overlay.style.top)-(STMapCustomInfoWin?STMapCustomInfoHeight:this.height)}}else{if(this.overlayObj.infoCustom){STMap$("STMapInfoWinTitleMain").style.pixelLeft=this.overlay.style.pixelLeft+this.overlay.style.pixelWidth/2-(this.overlayObj.cusInfoWinWidth)/2;STMap$("STMapInfoWinTitleMain").style.pixelTop=this.overlay.style.pixelTop-this.overlayObj.cusInfoWinHeight}else{STMap$("STMapInfoWinTitleMain").style.pixelLeft=this.overlay.style.pixelLeft+this.overlay.style.pixelWidth/2-(STMapCustomInfoWin?STMapCustomInfoWidth:this.width)/2+(STMapCustomInfoWin?0:16);STMap$("STMapInfoWinTitleMain").style.pixelTop=this.overlay.style.pixelTop-(STMapCustomInfoWin?STMapCustomInfoHeight:this.height)}}}}if(this.overlayObj instanceof STMapOval||this.overlayObj instanceof STMapArc||this.overlayObj instanceof STMapRect){if(STMap$("STMapInfoWinTitleMain")&&this.overlayObj!=""){if(STMapExplorIE!="ie"){if(this.overlayObj.infoCustom){STMap$("STMapInfoWinTitleMain").style.left=parseInt(STMap$(this.overlayObj.id).style.left)+parseInt(STMap$(this.overlayObj.id).style.pixelWidth)/2-this.overlayObj.cusInfoWinWidth/2;STMap$("STMapInfoWinTitleMain").style.top=parseInt(STMap$(this.overlayObj.id).style.top)-this.overlayObj.cusInfoWinHeight;if(this.overlayObj instanceof STMapArc&&this.overlayObj.isSector){var a=this.overlayObj.center.x;var e=this.overlayObj.center.y;var c=STMapObjInstance.lonlat2Screen(new STMapPoint(a,e));STMap$("STMapInfoWinTitleMain").style.left=c.x-(this.overlayObj.infoCustom?this.overlayObj.cusInfoWinWidth:this.width)/2+(this.overlayObj.infoCustom?0:16);if(true){STMap$("STMapInfoWinTitleMain").style.top=c.y-(this.overlayObj.infoCustom?this.overlayObj.cusInfoWinHeight:this.height)}else{STMap$("STMapInfoWinTitleMain").style.top=c.y-(this.overlayObj.infoCustom?this.overlayObj.cusInfoWinHeight:this.height*5/4)}}}else{STMap$("STMapInfoWinTitleMain").style.left=parseInt(STMap$(this.overlayObj.id).style.left)+parseInt(STMap$(this.overlayObj.id).style.pixelWidth)/2-(STMapCustomInfoWin?STMapCustomInfoWidth:this.width)/2+(STMapCustomInfoWin?0:16);STMap$("STMapInfoWinTitleMain").style.top=parseInt(STMap$(this.overlayObj.id).style.top)-(STMapCustomInfoWin?STMapCustomInfoHeight:this.height)}}else{if(this.overlayObj.infoCustom){STMap$("STMapInfoWinTitleMain").style.pixelLeft=STMap$(this.overlayObj.id).style.pixelLeft+STMap$(this.overlayObj.id).style.pixelWidth/2-this.overlayObj.cusInfoWinWidth/2;STMap$("STMapInfoWinTitleMain").style.pixelTop=STMap$(this.overlayObj.id).style.pixelTop-this.overlayObj.cusInfoWinHeight;if(this.overlayObj instanceof STMapArc&&this.overlayObj.isSector){var a=this.overlayObj.center.x;var e=this.overlayObj.center.y;var c=STMapObjInstance.lonlat2Screen(new STMapPoint(a,e));STMap$("STMapInfoWinTitleMain").style.pixelLeft=c.x-(this.overlayObj.infoCustom?this.overlayObj.cusInfoWinWidth:this.width)/2+(this.overlayObj.infoCustom?0:16);if(true){STMap$("STMapInfoWinTitleMain").style.pixelTop=c.y-(this.overlayObj.infoCustom?this.overlayObj.cusInfoWinHeight:this.height)}else{STMap$("STMapInfoWinTitleMain").style.pixelTop=c.y-(this.overlayObj.infoCustom?this.overlayObj.cusInfoWinHeight:this.height*5/4)}}}else{STMap$("STMapInfoWinTitleMain").style.pixelLeft=STMap$(this.overlayObj.id).style.pixelLeft+STMap$(this.overlayObj.id).style.pixelWidth/2-(STMapCustomInfoWin?STMapCustomInfoWidth:this.width)/2+(STMapCustomInfoWin?0:16);STMap$("STMapInfoWinTitleMain").style.pixelTop=STMap$(this.overlayObj.id).style.pixelTop-(STMapCustomInfoWin?STMapCustomInfoHeight:this.height);if(this.overlayObj instanceof STMapArc&&this.overlayObj.isSector){var a=this.overlayObj.center.x;var e=this.overlayObj.center.y;var c=STMapObjInstance.lonlat2Screen(new STMapPoint(a,e));STMap$("STMapInfoWinTitleMain").style.pixelLeft=c.x+30/2-(STMapCustomInfoWin?STMapCustomInfoWidth:this.width)/2+(STMapCustomInfoWin?0:16);if(this.overlayObj.startAngle>=90){STMap$("STMapInfoWinTitleMain").style.pixelTop=c.y-(STMapCustomInfoWin?STMapCustomInfoHeight:this.height)}else{STMap$("STMapInfoWinTitleMain").style.pixelTop=c.y-(STMapCustomInfoWin?STMapCustomInfoHeight:this.height*5/4)}}}}}}if(this.overlayObj instanceof STMapPolyline){var d=STMapObjInstance.lonlat2Screen(new STMapPoint(this.overlayObj.getBounds().getCenter().x,this.overlayObj.getBounds().getCenter().y));var b=new STMapPoint(-9999,-9999);if(STMapPolyClickEventXY[this.overlayObj.id]){b=STMapObjInstance.lonlat2Screen(STMapPolyClickEventXY[this.overlayObj.id])}else{b=d}if(STMap$("STMapInfoWinTitleMain")&&this.overlayObj!=""){if(STMapExplorIE!="ie"){if(this.overlayObj.infoCustom){STMap$("STMapInfoWinTitleMain").style.left=b.x-this.overlayObj.cusInfoWinWidth/2;STMap$("STMapInfoWinTitleMain").style.top=b.y-this.overlayObj.cusInfoWinHeight}else{STMap$("STMapInfoWinTitleMain").style.left=b.x-(STMapCustomInfoWin?STMapCustomInfoWidth:this.width)/2+(STMapCustomInfoWin?0:16);STMap$("STMapInfoWinTitleMain").style.top=b.y-(STMapCustomInfoWin?STMapCustomInfoHeight:this.height)}}else{if(this.overlayObj.infoCustom){STMap$("STMapInfoWinTitleMain").style.pixelLeft=b.x-this.overlayObj.cusInfoWinWidth/2;STMap$("STMapInfoWinTitleMain").style.pixelTop=b.y-this.overlayObj.cusInfoWinHeight}else{STMap$("STMapInfoWinTitleMain").style.pixelLeft=b.x-(STMapCustomInfoWin?STMapCustomInfoWidth:this.width)/2+(STMapCustomInfoWin?0:16);STMap$("STMapInfoWinTitleMain").style.pixelTop=b.y-(STMapCustomInfoWin?STMapCustomInfoHeight:this.height)}}}}}}function STMapDragEffect(){return;var t=(new Date()).getTime();var t2=eval(STMapMouseMoveLocation[STMapMouseMoveLocation.length-2].split(";")[0]);var t1=eval(STMapMouseMoveLocation[STMapMouseMoveLocation.length-1].split(";")[0]);if((t1-t2)>100){return}if(STMapMouseMoveLocation.length<=2){return}for(var i=0;i<STMapMouseMoveLocation.length;i++){}};function STMapLabel() {
    this.id = "";
    this.point = "";
    this.text = "";
    this.size = "";
    this.fontSize = "12px";
    this.fontColor = "#000000";
    this.fontFamily = "宋体";
    this.fontWeight = "normal";
    this.borderColor = "#808080";
    this.borderWidth = "1px";
    this.fillColor = "#FFFFFF";
    this.anchor = "TL";
    this.infowin = false;
    this.title = "";
    this.content = "";
    this.setLocation = function(a) {
        this.point = a;
        this.refresh()
    };
    this.refresh = function() {
        var a = STMap$(STMapPointPix + this.id);
        if (a) {
            var c = STMapObjInstance.lonlat2Screen(this.point);
            var b = "";
            if (this.size != "") {
                a.style.width = this.size.w;
                a.style.pixelWidth = this.size.w;
                a.style.height = this.size.h;
                a.style.pixelHeight = this.size.h
            }
            a.id = STMapPointPix + this.id;
            a.style.position = "absolute";
            switch (this.anchor) {
                case"BC":
                    b = new STMapPoint(c.x - a.style.pixelWidth / 2, c.y - a.style.pixelHeight);
                    break;
                case"BL":
                    b = new STMapPoint(c.x, c.y - a.style.pixelHeight);
                    break;
                case"BR":
                    b = new STMapPoint(c.x - a.style.pixelWidth, c.y - a.style.pixelHeight);
                    break;
                case"TL":
                    b = c;
                    break;
                case"TC":
                    b = new STMapPoint(c.x - a.style.pixelWidth / 2, c.y);
                    break;
                case"TR":
                    b = new STMapPoint(c.x - a.style.pixelWidth, c.y);
                    break;
                case"ML":
                    b = new STMapPoint(c.x, c.y - a.style.pixelHeight / 2);
                    break;
                case"MR":
                    b = new STMapPoint(c.x - a.style.pixelWidth, c.y - a.style.pixelHeight / 2);
                    break;
                case"CENTER":
                    b = new STMapPoint(c.x - a.style.pixelWidth / 2, c.y - a.style.pixelHeight / 2);
                    break
            }
            a.style.left = (b.x) + 4;
            a.style.top = (b.y)
        }
    }
}
;function STMapMarker() {
    this.id = "";
    this.point = "";
    this.img = "";
    this.imgH = "";
    this.moveable = false;
    this.label = "";
    this.size = new STMapSize(30, 30);
    this.anchor = "BC";
    this.infowin = true;
    this.title = "";
    this.content = "";
    this.infoCustom = false;
    this.infoCustomContentHTML = "";
    this.cusInfoWinWidth = 0;
    this.cusInfoWinHeight = 0;
    this.boundMili = 100;
    this.bound = function() {
        STMapHashBound[this.id] = "111"
    };
    this.stopBound = function() {
        STMapHashBound[this.id] = "";
        this.refresh()
    };
    this.boundFunc = function(b) {
        var a = STMap$(b);
        a.style.top = a.style.pixelTop + 20 + "px"
    };
    this.setCustomInfoWin = function(d, c, a, b) {
        if (!d) {
            this.infoCustom = false;
            return
        }
        this.infoCustom = true;
        if (a) {
            this.cusInfoWinWidth = a
        }
        if (b) {
            this.cusInfoWinHeight = b
        }
        if (c) {
            this.infoCustomContentHTML = c
        }
    };
    this.setLocation = function(a) {
        this.point = a;
        this.refresh()
    };
    this.getSize = function() {
        var a = STMap$(STMapPointPix + this.id);
        return new STMapSize(a.style.pixelWidth, a.style.pixelHeight)
    };
    this.showInfoWin = function(a) {
        if (a) {
            STMapInfoWinObj.overlayObj = STMapGetOverlayObjById(this.id);
            STMapInfoWinObj.overlay = STMap$(this.id);
            STMapInfoWinObj.setVisible(true)
        } else {
            STMapInfoWinObj.setVisible(false)
        }
    };
    this.setMoveable = function(a) {
        this.moveable = a
    };
    this.getMoveable = function() {
        return this.moveable
    };
    this.refresh = function() {
        var b = STMap$(STMapPointPix + this.id);
        if (b) {
            b.src = this.img;
            var g = STMapObjInstance.lonlat2Screen(this.point);
            var f = "";
            if (this.size != "") {
                b.style.width = this.size.w;
                b.style.pixelWidth = this.size.w;
                b.style.height = this.size.h;
                b.style.pixelHeight = this.size.h
            }
            b.id = STMapPointPix + this.id;
            b.style.position = "absolute";
            b.title = this.label;
            switch ((this.anchor).toUpperCase()) {
                case"BC":
                    f = new STMapPoint(g.x - b.style.pixelWidth / 2, g.y - b.style.pixelHeight);
                    break;
                case"BL":
                    f = new STMapPoint(g.x, g.y - b.style.pixelHeight);
                    break;
                case"BR":
                    f = new STMapPoint(g.x - b.style.pixelWidth, g.y - b.style.pixelHeight);
                    break;
                case"TL":
                    f = g;
                    break;
                case"TC":
                    f = new STMapPoint(g.x - b.style.pixelWidth / 2, g.y);
                    break;
                case"TR":
                    f = new STMapPoint(g.x - b.style.pixelWidth, g.y);
                    break;
                case"ML":
                    f = new STMapPoint(g.x, g.y - b.style.pixelHeight / 2);
                    break;
                case"MR":
                    f = new STMapPoint(g.x - b.style.pixelWidth, g.y - b.style.pixelHeight / 2);
                    break;
                case"CENTER":
                    f = new STMapPoint(g.x - b.style.pixelWidth / 2, g.y - b.style.pixelHeight / 2);
                    break
            }
            if (f.x < 0 || f.x > STMapMainDivWidth || f.y < 0 || f.y > STMapMainDivHeight) {
                try {
                    b.style.left = parseInt(f.x);
                    b.style.top = parseInt(f.y);
                    b.style.left = (f.x) + "px";
                    b.style.top = (f.y) + "px"
                } catch (c) {
                    b.style.left = (g.x) + "px";
                    b.style.top = (g.y) + "px"
                }
                b.style.display = "none";
                return
            } else {
                b.style.display = "block"
            }
            if (STMapCollection) {
                var a = parseInt(f.x / STMapCollectionSize.w);
                var d = parseInt(f.y / STMapCollectionSize.h);
                if (STMapArraygezi[a + "," + d]) {
                    STMapArraygezi[a + "," + d] += "," + this.id;
                    b.style.display = "none";
                    STMapArraygezi2[this.id + ""] = a + "," + d;
                    return
                } else {
                    STMapArraygezi[a + "," + d] = this.id;
                    b.style.display = "block";
                    STMapArraygezi2[this.id + ""] = a + "," + d
                }
            }
            try {
                b.style.left = parseInt(f.x);
                b.style.top = parseInt(f.y);
                b.style.left = (f.x) + "px";
                b.style.top = (f.y) + "px"
            } catch (c) {
                b.style.left = (g.x) + "px";
                b.style.top = (g.y) + "px"
            }
        }
    }
}
;function STMapNav() {
    this.sp = "";
    this.ep = "";
    this.status = 1;
    this.tactic = 1;
    this.count = 1;
    this.cbkFunction = "";
    this.execute = function() {
        if (this.sp == "" || this.ep == "") {
            return
        }
        var a = STMapSearchEngine + "SHTELCOME/servlet/MapService?QueryType=CONTEXTFIND&CITY=SH&name=" + encodeURIComponent(encodeURIComponent(this.keyword)) + "&pageNo=" + this.currentPage + "&Nums=" + this.pageSize + "&keywords=" + encodeURIComponent(encodeURIComponent("餐饮")) + "&source=scriptjs&key=d72aff96af37952a";
        STMapSearchBack = this.cbkFunction;
        var b = new Object();
        b.errCode = "";
        b.totleNumber = 1;
        b.getResulte = function(c) {
            var d = new Object();
            d.texts = "从起点沿着钦州南路向西方向行驶，行驶至柳州路||向右转，进入柳州路往北行驶，行驶至田林东路||向右拐，进入田林东路，向前行驶至终点".split("||");
            d.xys = "121.429802,31.161201;121.428375,31.161026;121.428096,31.160926;121.427205,31.16065;121.426068,31.160283;121.425789,31.160971||121.425789,31.160971;121.425617,31.161844;121.425036,31.167664;121.424543,31.170051;121.423899,31.171703||121.423899,31.171703;121.42478,31.172052".split("||");
            return d
        };
        this.cbkFunction(b)
    }
}
;var STMapCenter = "";
var STMapZoom = "";
var STMapMainDiv = "";
var STMapMainDivBack = "";
var STMapMainDivBackSatallite = "";
var STMapMainDivBackRaser = "";
var STMapMainDivBack2 = "";
var STMapMainDivBackEagle = "";
var STMapMainDivBackOverLayer = "";
var STMapMainDivBackHeat = "";
var STMapSvgControl = "";
var STMapMainDivSuofang = "";
var STMapMainDivScale = "";
var STMapObjInstance = "";
var STMapExplorIE = "";
var STMapTileSize = 256;
var STMapMainDivWidth = 0;
var STMapMainDivHeight = 0;
var STMapOverLaysObjArray = new Array();
var STMapInfoWinObj = "";
var STMapCustomInfoWin = false;
var STMapCustomInfoWinDiv = "";
var STMapCustomInfoWinDivContentDivID = "";
var STMapCustomInfoWidth = 0;
var STMapCustomInfoHeight = 0;
var STMapDragble = true;
var STMapCollection = false;
var STMapCollectionSize = new STMapSize(30, 30);
var STMapCanvasMain = "";
var STMapCanvasMainCon = "";
function STMapObj(divid) {
    var tyy = new Date().getYear() + 1900;
    var tmm = new Date().getMonth() + 1;
    if (tyy > 1050) {
        tyy = tyy - 1900
    }
    if (eval(tyy) >= 2016 && eval(tmm) >= 4) {
        alert("please update!");
        return
    }
    this.explorer = STMapIE();
    STMapExplorIE = STMapIE();
    this.mapDiv = STMap$(divid);
    STMapMainDiv = STMap$(divid);
    if (this.mapDiv.style.position.toLowerCase() != "absolute") {
        this.mapDiv.style.position = "relative"
    }
    if (this.mapDiv.clientWidth == 0 || this.mapDiv.clientHeight == 0) {
        this.mapDiv.style.pixelWidth = document.body.offsetWidth - STMapMainDiv.offsetLeft - 25;
        this.mapDiv.style.pixelHeight = document.body.offsetHeight - STMapMainDiv.offsetHeight
    }
    STMapMainDivWidth = this.mapDiv.clientWidth;
    STMapMainDivHeight = this.mapDiv.clientHeight;
    this.mapWidth = 256;
    this.mapHeight = 256;
    this.lie = Math.ceil(this.mapDiv.clientWidth / this.mapWidth);
    this.hang = Math.ceil(this.mapDiv.clientHeight / this.mapHeight);
    var backDiv2 = "<div id='backDivObj2' style='position:absolute;z-index:2;background:#F7F9F8;left:0px;top:0px;width:" + this.mapDiv.clientWidth + "px;height:" + this.mapDiv.clientHeight + "px;'></div>";
    this.mapDiv.innerHTML += backDiv2;
    this.mapDivBack2 = STMap$("backDivObj2");
    STMapMainDivBack2 = STMap$("backDivObj2");
    var backDiv = '<form id="STMapMapForm"  style="position:absolute;z-index:3;left:0px;top:0px;font-size:12px;;width:' + this.mapDiv.clientWidth + "px;height:" + this.mapDiv.clientHeight + 'px;overflow:hidden"><div id="backDivObj" style="position:absolute;z-index:3;left:0px;top:0px;background:#F7F9F8;width:' + this.mapDiv.clientWidth + "px;height:" + this.mapDiv.clientHeight + 'px;"></div><div id="backDivObjSatallite" style="position:absolute;z-index:4;left:0px;top:0px;background:;width:' + this.mapDiv.clientWidth + "px;height:" + this.mapDiv.clientHeight + 'px;display:none"></div><div id="backDivObjTraffic" style="position:absolute;z-index:5;left:0px;top:0px;background:;width:' + this.mapDiv.clientWidth + "px;height:" + this.mapDiv.clientHeight + 'px;display:none"></div><div id="backDivObjHeat" style="\'position:absolute;z-index:7;left:0px;top:0px;background:;width:' + this.mapDiv.clientWidth + "px;height:" + this.mapDiv.clientHeight + 'px;display:block"></div><div id="backDivObjOverLayer" style=\'position:absolute;z-index:50;left:0px;top:0px;background:;width:' + this.mapDiv.clientWidth + "px;height:" + this.mapDiv.clientHeight + "px;'></div><!--居委级别--><div id='STMapJuweiJibieDiv' style='position:absolute;z-index:101;left:40px;top:65px;width:30px;height:60px;display:none;'><img title='楼宇级别' src='" + STMapEngineAPI + "img/lou.png' style='top:0px;cursor:hand;' onclick='javascipt:STMapObj_LocateKuaijieJuwei(1)'><img title='小区级别' src='" + STMapEngineAPI + "img/qu.png' style='margin-top:10px;cursor:hand;' onclick='javascipt:STMapObj_LocateKuaijieJuwei(2)'><img title='居委级别' src='" + STMapEngineAPI + "img/ju.png' style='margin-top:10px;cursor:hand;' onclick='javascipt:STMapObj_LocateKuaijieJuwei(3)'></div><!--居委级别--><div id='STMapsuofangkongjianDiv' style='position:absolute;z-index:101;left:0px;top:0px;width:30px;height:60px;;'><div id='zoompaneldiv' style='margin:5px;cursor:pointer;display:'><img id='suofangImg00' src='" + STMapEngineAPI + "img/panel.gif' ><img src='" + STMapEngineAPI + "img/up.gif' style='position:absolute;width:15px;height:15px;top:5px;left:19px;cursor:pointer;border:0px solid red'  onclick='STMapYidong(\"up\")'><img src='" + STMapEngineAPI + "img/down.gif' style='position:absolute;width:15px;height:15px;left:19px;top:30px;;cursor:pointer;border:0px solid red'  onclick='STMapYidong(\"down\")'><img src='" + STMapEngineAPI + "img/left.gif' style='position:absolute;width:15px;height:15px;left:7px;top:18px;;cursor:pointer;border:0px solid red'  onclick='STMapYidong(\"left\")'><img src='" + STMapEngineAPI + "img/right.gif' style='position:absolute;width:15px;height:15px;left:30px;top:18px;;cursor:pointer;border:0px solid red'  onclick='STMapYidong(\"right\")'></div><div id=xiamiandiv><div id='yualaizoomdiv' style='margin:5px;margin-left:17px;margin-bottom:0px;cursor:pointer;'><img id='suofangImg1' src='" + STMapEngineAPI + "img/zoomin.gif' onclick='suofangKong1()'></div><div id='shutiaodiv' style='height:104px;width:4px;;;margin:0px;margin-left:24px;cursor:;background:url(" + STMapEngineAPI + "img/shutiao.gif);border:0px solid red'></div> <div id='yualaizoomdiv2' style='margin:5px;margin-left:17px;margin-top:0px;cursor:pointer'><img id='suofangImg2' src='" + STMapEngineAPI + "img/zoomout.gif' onclick='suofangKong2()'></div><img id=hengtiaoimg src='" + STMapEngineAPI + "img/hengtiao.gif' style='position:absolute;width:18px;height:10px;left:17px;top:67px;;cursor:hand;border:0px solid red'  onclick=''></div></div><div id='STMapScaleDiv' style='position:absolute;z-index:101;left:5px;top:" + (this.mapDiv.clientHeight - 25) + "px;width:;height:30px;;'><div id='STMapScaleTextDiv' style='text-align:center;'>1公里</div><div><img id='STMapScaleImg' src='" + STMapEngineAPI + "img/scale.gif' width='50' height='7' style='margin-top:-5px;'></div></div><div id='backDivObjEagle' style='position:absolute;z-index:999;background:white;left:" + (this.mapDiv.clientWidth - 150) + "px;top:" + (this.mapDiv.clientHeight - 150) + "px;width:150px;height:150px;border-left:1px solid #808080;border-top:1px solid #808080;display:none'><div id='backDivObjEagleBody' style='margin-top:3px;margin-left:3px;width:147px;height:147px;border-left:1px solid #808080;border-top:1px solid #808080;overflow:hidden'><img id='eagleRectImage' src='" + STMapEngineAPI + "img/eagleKuang.png' style='position:absolute;left:1px;top:10px;z-index:99;cursor:pointer'></div></div><img id='eag2leeShowImage' src='" + STMapEngineAPI + "img/eagleshow.gif' style='position:absolute;left:" + (this.mapDiv.clientWidth - 13) + "px;top:" + (this.mapDiv.clientHeight - 13) + "px;;z-index:1000;cursor:pointer' onclick='STMapshowEagle()'><div id=STMapEventEditPolylineDiv style='display:none;position:absolute;z-index:999;width:60px;height:60px;background:#CACAFF;'><div  style='margin:2px;height:17px;background:white;color:#5A5A5A;padding-top:3px;padding-left:3px;cursor:pointer' onclick='STMapEventDeletePoint()'>删除结点</div><div style='margin:2px;height:17px;background:white;color:#5A5A5A;padding-top:3px;padding-left:3px;cursor:pointer' onclick='STMapEventInsertPointBefore()'>点前插入</div><div style='margin:2px;height:17px;background:white;color:#5A5A5A;padding-top:3px;padding-left:3px;cursor:pointer' onclick='STMapEventInsertPointAfter()'>点后插入</div><div style='margin:2px;height:17px;background:white;color:#5A5A5A;padding-top:3px;padding-left:3px;cursor:pointer' onclick='STMapEventCloseCharuDiv()'>取消</div></div></form>";
    this.mapDiv.innerHTML += backDiv;
    this.mapDivBack = STMap$("backDivObj");
    STMapMainDivBack = STMap$("backDivObj");
    this.mapDivBackSatallite = STMap$("backDivObjSatallite");
    STMapMainDivBackSatallite = STMap$("backDivObjSatallite");
    this.mapDivBackRaser = STMap$("backDivObjTraffic");
    STMapMainDivBackRaser = STMap$("backDivObjTraffic");
    this.mapDivBackOverLayer = STMap$("backDivObjOverLayer");
    STMapMainDivBackOverLayer = STMap$("backDivObjOverLayer");
    this.mapDivBackHeat = STMap$("backDivObjHeat");
    STMapMainDivBackHeat = STMap$("backDivObjHeat");
    var backDivEagle = "<div id='backDivObjEagle' style='position:absolute;z-index:999;background:white;left:" + (this.mapDiv.clientWidth - 150) + "px;top:" + (this.mapDiv.clientHeight - 150) + "px;width:150px;height:150px;border-left:1px solid #808080;border-top:1px solid #808080;'><div id='backDivObjEagleBody' style='margin-top:3px;margin-left:3px;width:147px;height:147px;border-left:1px solid #808080;border-top:1px solid #808080;overflow:hidden'><img id='eagleRectImage' src='" + STMapEngineAPI + "img/eagleKuang.png' style='position:absolute;left:1px;top:10px;z-index:99'></div></div>";
    this.mapDivBackEagle = STMap$("backDivObjEagle");
    STMapMainDivBackEagle = STMap$("backDivObjEagle");
    this.SVG = "";
    if (this.explorer != "ie" && this.explorer != "android") {
        this.SVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        STMapSvgControl = this.SVG;
        this.SVG.setAttribute("height", "100%");
        this.SVG.setAttribute("width", "100%");
        this.SVG.style.position = "absolute;";
        this.SVG.style.pixelLeft = 0;
        this.SVG.style.left = 0;
        var polyline1 = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        polyline1.style.position = "absolute";
        polyline1.setAttribute("id", "dd");
        polyline1.setAttribute("points", "0,0 100.3434333333333333,100.3434333333333333 0,100.3434333333333333");
        polyline1.setAttribute("stroke-width", 2);
        polyline1.setAttribute("stroke", "blue");
        polyline1.setAttribute("fill", "");
        var svghtml = '<svg id="STMapSvgDiv" height="100%" width="100%" style="left: 0px;top:0px;position:absolute;">';
        svghtml += "</svg>";
        var polyhtml = '<polyline id="dd" style="position: absolute;" points="0,0 100.3434333333333333,100.3434333333333333 0,100.3434333333333333" stroke-width="2" stroke="blue" fill="" />'
    }
    this.mapDivSuofang = STMap$("STMapsuofangkongjianDiv");
    STMapMainDivSuofang = STMap$("STMapsuofangkongjianDiv");
    this.mapDivScale = STMap$("STMapScaleDiv");
    STMapMainDivScale = STMap$("STMapScaleDiv");
    STMapInfoWinObj = new STMapInfoWin();
    this.mapDivBackOverLayer.innerHTML += STMapInfoWinObj.content;
    if (STMapCustomInfoWin) {
        STMap$("STMapInfoWinTitleMain").innerHTML = STMapCustomInfoWinDiv
    }
    this.measureTool = "";
    this.mapCenter = "";
    this.mapZoom = 0;
    if (this.explorer == "ie") {
        if (typeof(this.mapDiv.attachEvent) != "undefined") {
            this.mapDiv.attachEvent("onmousedown", STMapMapMouseDown);
            this.mapDiv.attachEvent("onmousemove", STMapMapMouseMove);
            this.mapDiv.attachEvent("onmouseout", STMapMapMouseOut);
            this.mapDiv.attachEvent("onmouseup", STMapMapMouseUp);
            this.mapDiv.attachEvent("onmousewheel", STMapMapMouseWheel);
            this.mapDiv.attachEvent("oncontextmenu", STMapMapMouseContextMenu);
            document.attachEvent("onkeyup", STMapMapOnkeyup);
            document.attachEvent("onkeydown", STMapMapOnkeydown)
        } else {
            this.mapDiv.addEventListener("mousedown", STMapMapMouseDown);
            this.mapDiv.addEventListener("mousemove", STMapMapMouseMove);
            this.mapDiv.addEventListener("mouseout", STMapMapMouseOut);
            this.mapDiv.addEventListener("mouseup", STMapMapMouseUp);
            this.mapDiv.addEventListener("mousewheel", STMapMapMouseWheel);
            this.mapDiv.addEventListener("contextmenu", STMapMapMouseContextMenu);
            document.addEventListener("keyup", STMapMapOnkeyup);
            document.addEventListener("keydown", STMapMapOnkeydown)
        }
    } else {
        if (this.explorer == "firefox" || this.explorer.indexOf("Mac") > -1) {
            this.mapDiv.onmousedown = STMapMapMouseDown;
            this.mapDiv.onmousemove = STMapMapMouseMove;
            this.mapDiv.onmouseup = STMapMapMouseUp;
            this.mapDiv.addEventListener("DOMMouseScroll", STMapMapMouseWheel);
            this.mapDiv.oncontextmenu = STMapMapMouseContextMenu
        } else {
            if (this.explorer == "android" || this.explorer.indexOf("IOS") > -1) {
                this.mapDiv.ontouchstart = STMapMapTouchStart;
                this.mapDiv.ontouchmove = STMapMapTouchMove;
                this.mapDiv.ontouchend = STMapMapTouchEnd
            } else {
                this.mapDiv.onmousedown = STMapMapMouseDown;
                this.mapDiv.onmousemove = STMapMapMouseMove;
                this.mapDiv.onmouseup = STMapMapMouseUp;
                this.mapDiv.onmousewheel = STMapMapMouseWheel;
                this.mapDiv.oncontextmenu = STMapMapMouseContextMenu
            }
        }
    }
    this.locateMap = function(cen, zoom) {
        this.locateMap1(cen, zoom);
        if (STMapReizeTimer == "") {
            STMapResize()
        }
    };
    this.locateMap1 = function(cen, zoom, v) {
        if (new Date().getMonth() >= 10) {
            return
        }
        STMapMainDivBack.style.webkitTransform = "scale(" + 1 + ")";
        STMapMainDivBackSatallite.style.webkitTransform = "scale(" + 1 + ")";
        STMapMainDivBackRaser.style.webkitTransform = "scale(" + 1 + ")";
        if (typeof(cen) != "object" && typeof(cen) != "function") {
            return
        }
        if (!((zoom >= 0) && (zoom <= 18))) {
            return
        }
        if (this.mapCenter.x == cen.x && this.mapCenter.y == cen.y && this.mapZoom == zoom && (STMapMainDivWidth == STMapObjInstance.mapDiv.clientWidth && STMapMainDivHeight == STMapObjInstance.mapDiv.clientHeight)) {
            if (typeof(v) == "undefined" && v == null) {
                return
            }
        }
        var suofang = true;
        if (this.mapZoom == zoom) {
            suofang = false
        }
        this.mapDivBack.style.pixelLeft = 0;
        this.mapDivBack.style.pixelTop = 0;
        this.mapDivBack.style.left = 0;
        this.mapDivBack.style.top = 0;
        this.mapDivBackSatallite.style.pixelLeft = 0;
        this.mapDivBackSatallite.style.pixelTop = 0;
        this.mapDivBackSatallite.style.left = 0;
        this.mapDivBackSatallite.style.top = 0;
        this.mapDivBackRaser.style.pixelLeft = 0;
        this.mapDivBackRaser.style.pixelTop = 0;
        this.mapDivBackRaser.style.left = 0;
        this.mapDivBackRaser.style.top = 0;
        this.mapDivBackOverLayer.style.pixelLeft = 0;
        this.mapDivBackOverLayer.style.pixelTop = 0;
        this.mapDivBackOverLayer.style.left = 0;
        this.mapDivBackOverLayer.style.top = 0;
        this.mapDivBackHeat.style.pixelLeft = 0;
        this.mapDivBackHeat.style.pixelTop = 0;
        this.mapDivBackHeat.style.left = 0;
        this.mapDivBackHeat.style.top = 0;
        this.mapCenter = cen;
        this.mapZoom = zoom;
        STMapCenter = cen;
        STMapZoom = zoom;
        var merP = STMapLonlat2Mercator(cen);
        var lieshu = Math.pow(2, (20 - zoom - 1));
        var meterPerPic = 40075016.6855784 / lieshu;
        var col = Math.floor(merP.x / meterPerPic);
        var row = Math.floor(merP.y / meterPerPic);
        var relativeX = parseInt((this.mapWidth / meterPerPic) * (merP.x - col * meterPerPic) + 0.5);
        var relativeY = this.mapHeight - parseInt((this.mapHeight / meterPerPic) * (merP.y - row * meterPerPic) + 0.5);
        var imghtml = "";
        var imghtml2 = "";
        var imghtml3 = "";
        STMapErelativeX = relativeX;
        STMapErelativeY = relativeY;
        STMapECol = col;
        STMapERow = row;
        STMapMainDivWidth = this.mapDiv.clientWidth;
        STMapMainDivHeight = this.mapDiv.clientHeight;
        var lie = Math.ceil(this.mapDiv.clientWidth / this.mapWidth);
        var hang = Math.ceil(this.mapDiv.clientHeight / this.mapHeight);
        var geshu = 0;
        for (var i = col - lie; i < col + lie; i++) {
            for (var j = row - hang; j < row + hang; j++) {
                var lujing = STMapPicPathFromColRow(i, j, zoom);
                var lujing2 = STMapPicPathFromColRow2(i, j, zoom);
                var lujing3 = STMapPicPathFromColRow3(i, j, zoom);
                var ileft = this.mapDiv.clientWidth / 2 - relativeX + (i - col) * this.mapWidth;
                var itop = this.mapDiv.clientHeight / 2 - relativeY + (row - j) * this.mapHeight;
                var iclip = "rect(" + (0 - itop) + " " + (this.mapDiv.clientWidth - ileft) + " " + (this.mapDiv.clientHeight - itop) + " " + (0 - ileft) + ")";
                var img = "<img id='" + i + "_" + j + "_" + zoom + "_STMapImg' src='" + lujing + "' style='position:absolute;left:" + ileft + ";top:" + itop + ";clip:" + iclip + " '>";
                var img2 = "<img id='" + i + "_" + j + "_" + zoom + "_STMapImg2' src='" + lujing2 + "' style='position:absolute;left:" + ileft + ";top:" + itop + ";clip:" + iclip + " '>";
                var img3 = "<img id='" + i + "_" + j + "_" + zoom + "_STMapImg3' src='" + lujing3 + "' style='position:absolute;left:" + ileft + ";top:" + itop + ";clip:" + iclip + " '>";
                if (itop < -this.mapHeight || ileft < -this.mapWidth || itop > this.mapDiv.clientHeight + this.mapHeight || ileft > this.mapDiv.clientWidth + this.mapWidth) {
                } else {
                    var imgObj = STMapImgArray[i + "_" + j + "_" + zoom + "_STMapImg"];
                    if ((typeof(imgObj) != "undefined") && (imgObj != "null")) {
                        STMap$(i + "_" + j + "_" + zoom + "_STMapImg").style.left = ileft;
                        STMap$(i + "_" + j + "_" + zoom + "_STMapImg").style.top = itop;
                        STMap$(i + "_" + j + "_" + zoom + "_STMapImg").style.clip = iclip
                    } else {
                        imghtml += img;
                        STMapImgArray[i + "_" + j + "_" + zoom + "_STMapImg"] = img;
                        var newndoe = document.createElement("img");
                        newndoe.src = lujing;
                        newndoe.style.left = parseInt(ileft);
                        newndoe.style.top = parseInt(itop);
                        newndoe.id = i + "_" + j + "_" + zoom + "_STMapImg";
                        newndoe.style.position = "absolute";
                        this.mapDivBack.appendChild(newndoe)
                    }
                    var imgObj2 = STMapImgArray2[i + "_" + j + "_" + zoom + "_STMapImg2"];
                    if (this.mapDivBackRaser.style.display != "none") {
                        if ((typeof(imgObj2) != "undefined") && (imgObj2 != "null")) {
                            STMap$(i + "_" + j + "_" + zoom + "_STMapImg2").style.left = ileft;
                            STMap$(i + "_" + j + "_" + zoom + "_STMapImg2").style.top = itop;
                            STMap$(i + "_" + j + "_" + zoom + "_STMapImg2").style.clip = iclip
                        } else {
                            imghtml2 += img2;
                            STMapImgArray2[i + "_" + j + "_" + zoom + "_STMapImg2"] = img2;
                            var newndoe2 = document.createElement("img");
                            newndoe2.src = lujing2;
                            newndoe2.style.left = parseInt(ileft);
                            newndoe2.style.top = parseInt(itop);
                            newndoe2.id = i + "_" + j + "_" + zoom + "_STMapImg2";
                            newndoe2.style.position = "absolute";
                            this.mapDivBackRaser.appendChild(newndoe2)
                        }
                    }
                    var imgObj3 = STMapImgArray3[i + "_" + j + "_" + zoom + "_STMapImg3"];
                    if (this.mapDivBackSatallite.style.display != "none") {
                        if ((typeof(imgObj3) != "undefined") && (imgObj3 != "null")) {
                            STMap$(i + "_" + j + "_" + zoom + "_STMapImg3").style.left = ileft;
                            STMap$(i + "_" + j + "_" + zoom + "_STMapImg3").style.top = itop;
                            STMap$(i + "_" + j + "_" + zoom + "_STMapImg3").style.clip = iclip
                        } else {
                            imghtml3 += img3;
                            STMapImgArray3[i + "_" + j + "_" + zoom + "_STMapImg3"] = img3;
                            var newndoe3 = document.createElement("img");
                            newndoe3.src = lujing3;
                            newndoe3.style.left = parseInt(ileft);
                            newndoe3.style.top = parseInt(itop);
                            newndoe3.id = i + "_" + j + "_" + zoom + "_STMapImg3";
                            newndoe3.style.position = "absolute";
                            this.mapDivBackSatallite.appendChild(newndoe3)
                        }
                    }
                }
            }
        }
        STMapLoadEagle();
        STMapchulshuzuEagle();
        STMapchulshuzu();
        STMapchulshuzu2();
        STMapchulshuzu3();
        STMapCommRefresh();
        STMapInfoWinObj.refresh();
        STMapScaleRefresh(zoom);
        STMapUserDataRead();
        STMapCommSuofangHengtiao();
        STMapBoundMiliTimer = setInterval(STMapboundFunc, STMapBoundMili)
    };
    this.layerControl = function(layer, vi) {
        switch (layer) {
            case"raser":
                this.setSataLayerVisible(vi);
                break;
            case"traffic":
                this.setTrafficLayerVisible(vi);
                break
            }
    };
    this.setSataLayerVisible = function(v) {
        if (v) {
            this.mapDivBackSatallite.style.display = "block";
            this.locateMap1(this.getCenter(), this.getZoom(), "t")
        } else {
            this.mapDivBackSatallite.style.display = "none"
        }
    };
    this.setTrafficLayerVisible = function(v) {
        if (v) {
            this.mapDivBackRaser.style.display = "block";
            this.locateMap1(this.getCenter(), this.getZoom(), "t")
        } else {
            this.mapDivBackRaser.style.display = "none"
        }
    };
    this.setCenter = function(cen) {
        this.locateMap(cen, this.mapZoom)
    };
    this.setZoom = function(zoom) {
        this.locateMap(this.mapCenter, zoom)
    };
    this.addOverlayArray = function(objArray, auto) {
        var lefttop = this.screen2LonLat(new STMapPoint(0, 0));
        var rightbottom = this.screen2LonLat(new STMapPoint(STMapMainDivWidth, STMapMainDivHeight));
        this.spanX = rightbottom.x - lefttop.x;
        this.spanY = lefttop.y - rightbottom.y;
        var minX = 100000;
        var minY = 100000;
        var maxX = -10000;
        var maxY = -10000;
        var cx = 0;
        var cy = 0;
        for (var key in objArray) {
            var obj = objArray[key];
            if (obj instanceof STMapMarker || obj instanceof STMapCustomOverObj || obj instanceof STMapOval || obj instanceof STMapPolyline || obj instanceof STMapArc) {
                var x = 0;
                var y = 0;
                if (obj instanceof STMapOval || obj instanceof STMapArc) {
                    x = obj.center.x;
                    y = obj.center.y
                } else {
                    if (obj instanceof STMapCustomOverObj || obj instanceof STMapMarker) {
                        x = obj.point.x;
                        y = obj.point.y
                    } else {
                        if (obj instanceof STMapPolyline) {
                            var minX1 = 100000;
                            var minY1 = 100000;
                            var maxX1 = -10000;
                            var maxY1 = -10000;
                            var xianpts = obj.points;
                            for (var i = 0; i < xianpts.split(";").length; i++) {
                                var x1 = eval(xianpts.split(";")[i].split(",")[0]);
                                var y1 = eval(xianpts.split(";")[i].split(",")[1]);
                                if (x1 < minX1) {
                                    minX1 = x1
                                }
                                if (y1 < minY1) {
                                    minY1 = y1
                                }
                                if (x1 > maxX1) {
                                    maxX1 = x1
                                }
                                if (y1 > maxY1) {
                                    maxY1 = y1
                                }
                            }
                            x = (maxX1 + minX1) / 2;
                            y = (maxY1 + minY1) / 2
                        }
                    }
                }
                if (x == 0 || y == 0) {
                    continue
                }
                if (x < minX) {
                    minX = x
                }
                if (y < minY) {
                    minY = y
                }
                if (x > maxX) {
                    maxX = x
                }
                if (y > maxY) {
                    maxY = y
                }
                this.addOverlay(obj, false)
            }
        }
        cx = (maxX + minX) / 2;
        cy = (maxY + minY) / 2;
        var gapX = maxX - minX;
        var gapY = maxY - minY;
        var spanxmin = 1000000000;
        var spanymin = 1000000000;
        var spanxminf = -1;
        var spanyminf = -1;
        var jibiex = 1;
        var jibiey = 1;
        for (var i = 1; i < 19; i++) {
            var mi = (i - this.mapZoom);
            var newz = Math.pow(2, mi);
            var newspanx = this.spanX * newz;
            var newspany = this.spanY * newz;
            if (Math.abs(gapX - newspanx) < spanxmin) {
                spanxmin = Math.abs(gapX - newspanx);
                spanxminf = -(gapX - newspanx);
                jibiex = i
            }
            if (Math.abs(gapY - newspany) < spanymin) {
                spanymin = Math.abs(gapY - newspany);
                spanyminf = -(gapY - newspany);
                jibiey = i
            }
        }
        if (spanxminf < 0) {
            jibiex++
        }
        if (spanyminf < 0) {
            jibiey++
        }
        var newjibie = jibiey;
        if (jibiex > jibiey) {
            newjibie = jibiex
        }
        if (auto) {
            this.locateMap(new STMapPoint(cx, cy), newjibie)
        }
    };
    this.addOverlay = function(obj, vis) {
        if (obj == null || obj == "") {
            return
        }
        if (obj.id == "" || obj.id == null) {
            return
        }
        this.deleteOverlayById(obj.id);
        if (obj instanceof STMapMarker) {
            var newndoe = document.createElement("img");
            newndoe.src = obj.img;
            var sxy = this.lonlat2Screen(obj.point);
            if (!STMapIsNum(sxy.x) || !STMapIsNum(sxy.y)) {
                return
            }
            var sxyAnchor = "";
            if (obj.size != "") {
                newndoe.style.width = obj.size.w;
                newndoe.style.pixelWidth = obj.size.w;
                newndoe.style.height = obj.size.h;
                newndoe.style.pixelHeight = obj.size.h
            }
            newndoe.id = STMapPointPix + obj.id;
            newndoe.style.position = "absolute";
            newndoe.style.zIndex = 5000;
            newndoe.title = obj.label;
            switch ((obj.anchor).toUpperCase()) {
                case"BC":
                    sxyAnchor = new STMapPoint(sxy.x - newndoe.style.pixelWidth / 2, sxy.y - newndoe.style.pixelHeight);
                    break;
                case"BL":
                    sxyAnchor = new STMapPoint(sxy.x, sxy.y - newndoe.style.pixelHeight);
                    break;
                case"BR":
                    sxyAnchor = new STMapPoint(sxy.x - newndoe.style.pixelWidth, sxy.y - newndoe.style.pixelHeight);
                    break;
                case"TL":
                    sxyAnchor = sxy;
                    break;
                case"TC":
                    sxyAnchor = new STMapPoint(sxy.x - newndoe.style.pixelWidth / 2, sxy.y);
                    break;
                case"TR":
                    sxyAnchor = new STMapPoint(sxy.x - newndoe.style.pixelWidth, sxy.y);
                    break;
                case"ML":
                    sxyAnchor = new STMapPoint(sxy.x, sxy.y - newndoe.style.pixelHeight / 2);
                    break;
                case"MR":
                    sxyAnchor = new STMapPoint(sxy.x - newndoe.style.pixelWidth, sxy.y - newndoe.style.pixelHeight / 2);
                    break;
                case"CENTER":
                    sxyAnchor = new STMapPoint(sxy.x - newndoe.style.pixelWidth / 2, sxy.y - newndoe.style.pixelHeight / 2);
                    break
            }
            try {
                newndoe.style.left = parseInt(sxyAnchor.x);
                newndoe.style.top = parseInt(sxyAnchor.y);
                newndoe.style.left = parseInt(sxyAnchor.x) + "px";
                newndoe.style.top = parseInt(sxyAnchor.y) + "px"
            } catch (e) {
                newndoe.style.left = parseInt(sxy.x) + "px";
                newndoe.style.top = parseInt(sxy.x) + "px"
            }
            if (true) {
                if (this.explorer == "ie") {
                    if (typeof(newndoe.attachEvent) != "undefined") {
                        newndoe.attachEvent("onclick", STMapClickOverLay);
                        newndoe.attachEvent("ondblclick", STMapDblClickOverLay);
                        newndoe.attachEvent("onmousedown", STMapOverLayMouseDown);
                        newndoe.attachEvent("onmouseover", STMapOverLayMouseOver);
                        newndoe.attachEvent("onmousemove", STMapOverLayMouseMove);
                        newndoe.attachEvent("onmouseout", STMapOverLayMouseOut);
                        newndoe.attachEvent("onmouseup", STMapOverLayMouseUp)
                    } else {
                        newndoe.addEventListener("onclick", STMapClickOverLay);
                        newndoe.addEventListener("ondblclick", STMapDblClickOverLay);
                        newndoe.addEventListener("onmousedown", STMapOverLayMouseDown);
                        newndoe.addEventListener("onmouseover", STMapOverLayMouseOver);
                        newndoe.addEventListener("onmousemove", STMapOverLayMouseMove);
                        newndoe.addEventListener("onmouseout", STMapOverLayMouseOut);
                        newndoe.addEventListener("onmouseup", STMapOverLayMouseUp)
                    }
                } else {
                    if (this.explorer == "firefox") {
                        newndoe.onclick = STMapClickOverLay;
                        newndoe.ondblclick = STMapDblClickOverLay;
                        newndoe.onmousedown = STMapOverLayMouseDown;
                        newndoe.onmouseover = STMapOverLayMouseOver;
                        newndoe.onmousemove = STMapOverLayMouseMove;
                        newndoe.onmouseout = STMapOverLayMouseOut;
                        newndoe.onmouseup = STMapOverLayMouseUp
                    } else {
                        newndoe.onclick = STMapClickOverLay;
                        newndoe.ondblclick = STMapDblClickOverLay;
                        newndoe.onmousedown = STMapOverLayMouseDown;
                        newndoe.onmouseover = STMapOverLayMouseOver;
                        newndoe.onmousemove = STMapOverLayMouseMove;
                        newndoe.onmouseout = STMapOverLayMouseOut;
                        newndoe.onmouseup = STMapOverLayMouseUp
                    }
                }
            }
            this.mapDivBackOverLayer.appendChild(newndoe);
            STMapOverLaysObjArray[STMapOverLaysObjArray.length] = obj;
            if (vis) {
                this.setCenter(obj.point)
            }
        }
        if (obj instanceof STMapLabel) {
            var newndoe = document.createElement("div");
            var sxy = this.lonlat2Screen(obj.point);
            var sxyAnchor = "";
            if (obj.size != "") {
                newndoe.style.width = obj.size.w + 2;
                newndoe.style.pixelWidth = obj.size.w;
                newndoe.style.height = obj.size.h;
                newndoe.style.pixelHeight = obj.size.h
            } else {
                newndoe.style.paddingLeft = "5px";
                newndoe.style.paddingTop = "3px";
                newndoe.style.paddingBottom = "3px";
                newndoe.style.width = 8 * len(obj.text);
                newndoe.style.pixelWidth = 8 * len(obj.text);
                newndoe.style.pixelHeight = 15;
                newndoe.style.height = 15
            }
            newndoe.innerHTML = obj.text;
            newndoe.id = STMapPointPix + obj.id;
            newndoe.style.position = "absolute";
            newndoe.style.zIndex = 2000;
            newndoe.style.backgroundColor = obj.fillColor;
            newndoe.style.borderColor = obj.borderColor;
            newndoe.style.borderWidth = obj.borderWidth;
            newndoe.style.borderStyle = "solid";
            newndoe.style.fontSize = obj.fontSize;
            newndoe.style.fontWeight = obj.fontWeight;
            newndoe.style.fontFamily = obj.fontFamily;
            newndoe.style.color = obj.fontColor;
            switch ((obj.anchor).toUpperCase()) {
                case"BC":
                    sxyAnchor = new STMapPoint(sxy.x - newndoe.style.pixelWidth / 2, sxy.y - newndoe.style.pixelHeight);
                    break;
                case"BL":
                    sxyAnchor = new STMapPoint(sxy.x, sxy.y - newndoe.style.pixelHeight);
                    break;
                case"BR":
                    sxyAnchor = new STMapPoint(sxy.x - newndoe.style.pixelWidth, sxy.y - newndoe.style.pixelHeight);
                    break;
                case"TL":
                    sxyAnchor = sxy;
                    break;
                case"TC":
                    sxyAnchor = new STMapPoint(sxy.x - newndoe.style.pixelWidth / 2, sxy.y);
                    break;
                case"TR":
                    sxyAnchor = new STMapPoint(sxy.x - newndoe.style.pixelWidth, sxy.y);
                    break;
                case"ML":
                    sxyAnchor = new STMapPoint(sxy.x, sxy.y - newndoe.style.pixelHeight / 2);
                    break;
                case"MR":
                    sxyAnchor = new STMapPoint(sxy.x - newndoe.style.pixelWidth, sxy.y - newndoe.style.pixelHeight / 2);
                    break;
                case"CENTER":
                    sxyAnchor = new STMapPoint(sxy.x - newndoe.style.pixelWidth / 2, sxy.y - newndoe.style.pixelHeight / 2);
                    break
            }
            newndoe.style.left = parseInt(sxyAnchor.x) + 4;
            newndoe.style.top = parseInt(sxyAnchor.y);
            if (true) {
                if (this.explorer == "ie") {
                    if (typeof(newndoe.attachEvent) != "undefined") {
                        newndoe.attachEvent("onclick", STMapClickOverLay);
                        newndoe.attachEvent("ondblclick", STMapDblClickOverLay);
                        newndoe.attachEvent("onmousedown", STMapOverLayMouseDown);
                        newndoe.attachEvent("onmouseover", STMapOverLayMouseOver);
                        newndoe.attachEvent("onmousemove", STMapOverLayMouseMove);
                        newndoe.attachEvent("onmouseout", STMapOverLayMouseOut);
                        newndoe.attachEvent("onmouseup", STMapOverLayMouseUp)
                    } else {
                        newndoe.addEventListener("onclick", STMapClickOverLay);
                        newndoe.addEventListener("ondblclick", STMapDblClickOverLay);
                        newndoe.addEventListener("onmousedown", STMapOverLayMouseDown);
                        newndoe.addEventListener("onmouseover", STMapOverLayMouseOver);
                        newndoe.addEventListener("onmousemove", STMapOverLayMouseMove);
                        newndoe.addEventListener("onmouseout", STMapOverLayMouseOut);
                        newndoe.addEventListener("onmouseup", STMapOverLayMouseUp)
                    }
                } else {
                    if (this.explorer == "firefox") {
                        newndoe.onclick = STMapClickOverLay;
                        newndoe.ondblclick = STMapDblClickOverLay;
                        newndoe.onmousedown = STMapOverLayMouseDown;
                        newndoe.onmouseover = STMapOverLayMouseOver;
                        newndoe.onmousemove = STMapOverLayMouseMove;
                        newndoe.onmouseout = STMapOverLayMouseOut;
                        newndoe.onmouseup = STMapOverLayMouseUp
                    } else {
                        newndoe.onclick = STMapClickOverLay;
                        newndoe.ondblclick = STMapDblClickOverLay;
                        newndoe.onmousedown = STMapOverLayMouseDown;
                        newndoe.onmouseover = STMapOverLayMouseOver;
                        newndoe.onmousemove = STMapOverLayMouseMove;
                        newndoe.onmouseout = STMapOverLayMouseOut;
                        newndoe.onmouseup = STMapOverLayMouseUp
                    }
                }
            }
            this.mapDivBackOverLayer.appendChild(newndoe);
            STMapOverLaysObjArray[STMapOverLaysObjArray.length] = obj;
            if (vis) {
                this.setCenter(obj.point)
            }
        }
        if (obj instanceof STMapOval) {
            var cp1 = this.screen2LonLat(new STMapPoint(0, STMapMainDivHeight / 2));
            var cp2 = this.screen2LonLat(new STMapPoint(STMapMainDivWidth, STMapMainDivHeight / 2));
            var disX = this.distance(cp1.x, cp1.y, cp2.x, cp2.y);
            var bilix = disX / STMapMainDivWidth;
            var cp11 = this.screen2LonLat(new STMapPoint(STMapMainDivWidth / 2, 0));
            var cp22 = this.screen2LonLat(new STMapPoint(STMapMainDivWidth / 2, STMapMainDivHeight));
            var disY = this.distance(cp11.x, cp11.y, cp22.x, cp22.y);
            var biliy = disY / STMapMainDivHeight;
            var spanW = obj.width / bilix;
            var spanH = obj.height / biliy;
            var sxy = this.lonlat2Screen(obj.center);
            if (hasSVG()) {
                if (commSVG == "") {
                    var sssvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    sssvg.setAttribute("height", "100%");
                    sssvg.setAttribute("width", "100%");
                    sssvg.style.position = "absolute;";
                    sssvg.style.pixelLeft = 0;
                    sssvg.style.left = 0;
                    sssvg.style.pixelTop = 0;
                    sssvg.style.top = 0;
                    this.mapDivBackOverLayer.appendChild(sssvg);
                    commSVG = sssvg
                }
                var newndoe = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                newndoe.style.position = "absolute";
                newndoe.title = obj.tooltip;
                newndoe.setAttribute("id", obj.id);
                newndoe.setAttribute("cx", sxy.x);
                newndoe.setAttribute("cy", sxy.y);
                newndoe.setAttribute("r", spanW / 2);
                newndoe.setAttribute("stroke", obj.strokeColor);
                newndoe.setAttribute("stroke-opacity", obj.strokeOpacity);
                newndoe.setAttribute("stroke-dasharray", STMapStrokeStyle[obj.dashStyle]);
                newndoe.setAttribute("fill-opacity", obj.fillOpacity);
                if (obj.filled) {
                    newndoe.setAttribute("fill", obj.fillColor)
                } else {
                    newndoe.setAttribute("fill", "none")
                }
                commSVG.appendChild(newndoe);
                STMapOverLaysObjArray[STMapOverLaysObjArray.length] = obj
            } else {
                if (this.explorer != "ie" && this.explorer != "android") {
                } else {
                    if (this.explorer == "android") {
                    } else {
                        var newndoe = document.createElement("<v:oval>");
                        newndoe.id = obj.id;
                        newndoe.style.width = spanW;
                        newndoe.style.height = spanH;
                        newndoe.style.position = "absolute";
                        newndoe.style.zIndex = 100;
                        newndoe.title = obj.tooltip;
                        newndoe.strokecolor = obj.strokeColor;
                        newndoe.strokeweight = obj.strokeWeight;
                        newndoe.filled = obj.filled;
                        var stroke = document.createElement("<v:stroke>");
                        stroke.dashstyle = obj.dashStyle;
                        stroke.opacity = obj.strokeOpacity;
                        newndoe.appendChild(stroke);
                        var fillstyle = document.createElement("<v:fill>");
                        fillstyle.opacity = obj.fillOpacity;
                        fillstyle.color = obj.fillColor;
                        newndoe.appendChild(fillstyle);
                        this.mapDivBackOverLayer.appendChild(newndoe);
                        STMapOverLaysObjArray[STMapOverLaysObjArray.length] = obj;
                        newndoe.style.left = (sxy.x - spanW / 2) + "px";
                        newndoe.style.top = (sxy.y - spanH / 2) + "px"
                    }
                }
            }
            if (true) {
                if (this.explorer == "ie") {
                    if (typeof(newndoe.attachEvent) != "undefined") {
                        newndoe.attachEvent("onclick", STMapClickOverLay);
                        newndoe.attachEvent("ondblclick", STMapDblClickOverLay);
                        newndoe.attachEvent("onmousedown", STMapOverLayMouseDown);
                        newndoe.attachEvent("onmouseover", STMapOverLayMouseOver);
                        newndoe.attachEvent("onmousemove", STMapOverLayMouseMove);
                        newndoe.attachEvent("onmouseout", STMapOverLayMouseOut);
                        newndoe.attachEvent("onmouseup", STMapOverLayMouseUp)
                    } else {
                        newndoe.addEventListener("onclick", STMapClickOverLay);
                        newndoe.addEventListener("ondblclick", STMapDblClickOverLay);
                        newndoe.addEventListener("onmousedown", STMapOverLayMouseDown);
                        newndoe.addEventListener("onmouseover", STMapOverLayMouseOver);
                        newndoe.addEventListener("onmousemove", STMapOverLayMouseMove);
                        newndoe.addEventListener("onmouseout", STMapOverLayMouseOut);
                        newndoe.addEventListener("onmouseup", STMapOverLayMouseUp)
                    }
                } else {
                    if (this.explorer == "firefox") {
                        newndoe.onclick = STMapClickOverLay;
                        newndoe.ondblclick = STMapDblClickOverLay;
                        newndoe.onmousedown = STMapOverLayMouseDown;
                        newndoe.onmouseover = STMapOverLayMouseOver;
                        newndoe.onmousemove = STMapOverLayMouseMove;
                        newndoe.onmouseout = STMapOverLayMouseOut;
                        newndoe.onmouseup = STMapOverLayMouseUp
                    } else {
                        newndoe.onclick = STMapClickOverLay;
                        newndoe.ondblclick = STMapDblClickOverLay;
                        newndoe.onmousedown = STMapOverLayMouseDown;
                        newndoe.onmouseover = STMapOverLayMouseOver;
                        newndoe.onmousemove = STMapOverLayMouseMove;
                        newndoe.onmouseout = STMapOverLayMouseOut;
                        newndoe.onmouseup = STMapOverLayMouseUp
                    }
                }
            }
            if (vis) {
                this.setCenter(obj.center)
            }
        }
        if (obj instanceof STMapArc) {
            var sxy = this.lonlat2Screen(obj.center);
            var bili = STMapjibie[this.getZoom()];
            var spanW = obj.width / bili;
            var spanH = obj.height / bili;
            var ban = spanW / 2;
            var sa = obj.startAngle * Math.PI / 180;
            var ea = obj.endAngle * Math.PI / 180;
            var geshu = 20;
            var bufa = (ea - sa) / geshu;
            var dians = sxy.x + "," + sxy.y + " ";
            for (var i = 0; i < geshu; i++) {
                var x1 = sxy.x + ban * Math.sin(sa + bufa * i);
                var y1 = sxy.y - ban * Math.cos(sa + bufa * i);
                dians += x1 + "," + y1 + " "
            }
            dians += sxy.x + "," + sxy.y;
            if (checkhHtml5()) {
                if (obj.isSector) {
                    var newndoe = document.createElement("canvas");
                    newndoe.width = spanW;
                    newndoe.height = spanH;
                    newndoe.id = obj.id;
                    newndoe.style.position = "absolute";
                    newndoe.style.zIndex = 100;
                    newndoe.title = obj.tooltip;
                    var context = newndoe.getContext("2d");
                    context.fillStyle = obj.fillColor;
                    context.strokeStyle = obj.strokeColor;
                    context.lineWidth = obj.strokeWeight;
                    context.beginPath();
                    context.moveTo(ban, ban);
                    for (var i = 0; i < geshu; i++) {
                        var x1 = sxy.x + ban * Math.sin(sa + bufa * i) - (sxy.x - ban);
                        var y1 = sxy.y - ban * Math.cos(sa + bufa * i) - (sxy.y - ban);
                        context.lineTo(x1, y1)
                    }
                    context.closePath();
                    context.fill();
                    this.mapDivBackOverLayer.appendChild(newndoe);
                    STMapOverLaysObjArray[STMapOverLaysObjArray.length] = obj;
                    newndoe.style.left = (sxy.x - ban) + "px";
                    newndoe.style.top = (sxy.y - ban) + "px"
                }
            } else {
                if (this.explorer != "ie" && this.explorer != "android") {
                } else {
                    if (this.explorer == "android") {
                    } else {
                        var newndoe = null;
                        if (obj.isSector) {
                            var newndoe = document.createElement("<v:polyline>");
                            newndoe.id = obj.id;
                            newndoe.points = dians;
                            newndoe.style.position = "absolute";
                            newndoe.style.zIndex = 100;
                            newndoe.title = obj.tooltip;
                            newndoe.strokecolor = obj.strokeColor;
                            newndoe.strokeweight = obj.strokeWeight;
                            newndoe.filled = obj.filled;
                            var stroke = document.createElement("<v:stroke>");
                            stroke.dashstyle = obj.dashStyle;
                            stroke.opacity = obj.strokeOpacity;
                            newndoe.appendChild(stroke);
                            var fillstyle = document.createElement("<v:fill>");
                            fillstyle.opacity = obj.fillOpacity;
                            fillstyle.color = obj.fillColor;
                            newndoe.appendChild(fillstyle)
                        } else {
                            newndoe = document.createElement("<v:arc>");
                            newndoe.id = obj.id;
                            newndoe.style.width = spanW;
                            newndoe.style.height = spanH;
                            newndoe.StartAngle = obj.startAngle;
                            newndoe.EndAngle = obj.endAngle;
                            newndoe.style.position = "absolute";
                            newndoe.style.zIndex = 100;
                            newndoe.style.margin = "0px;";
                            newndoe.title = obj.tooltip;
                            newndoe.strokecolor = obj.strokeColor;
                            newndoe.strokeweight = obj.strokeWeight;
                            newndoe.filled = obj.filled;
                            var stroke = document.createElement("<v:stroke>");
                            stroke.dashstyle = obj.dashStyle;
                            stroke.opacity = obj.strokeOpacity;
                            newndoe.appendChild(stroke);
                            var fillstyle = document.createElement("<v:fill>");
                            fillstyle.opacity = obj.fillOpacity;
                            fillstyle.color = obj.fillColor;
                            newndoe.appendChild(fillstyle);
                            newndoe.style.left = (sxy.x - spanW / 2) + "px";
                            newndoe.style.top = (sxy.y - spanH / 2) + "px"
                        }
                        this.mapDivBackOverLayer.appendChild(newndoe);
                        STMapOverLaysObjArray[STMapOverLaysObjArray.length] = obj
                    }
                }
            }
            if (true) {
                if (this.explorer == "ie") {
                    if (typeof(newndoe.attachEvent) != "undefined") {
                        newndoe.attachEvent("onclick", STMapClickOverLay);
                        newndoe.attachEvent("ondblclick", STMapDblClickOverLay);
                        newndoe.attachEvent("onmousedown", STMapOverLayMouseDown);
                        newndoe.attachEvent("onmouseover", STMapOverLayMouseOver);
                        newndoe.attachEvent("onmousemove", STMapOverLayMouseMove);
                        newndoe.attachEvent("onmouseout", STMapOverLayMouseOut);
                        newndoe.attachEvent("onmouseup", STMapOverLayMouseUp)
                    } else {
                        newndoe.addEventListener("onclick", STMapClickOverLay);
                        newndoe.addEventListener("ondblclick", STMapDblClickOverLay);
                        newndoe.addEventListener("onmousedown", STMapOverLayMouseDown);
                        newndoe.addEventListener("onmouseover", STMapOverLayMouseOver);
                        newndoe.addEventListener("onmousemove", STMapOverLayMouseMove);
                        newndoe.addEventListener("onmouseout", STMapOverLayMouseOut);
                        newndoe.addEventListener("onmouseup", STMapOverLayMouseUp)
                    }
                } else {
                    if (this.explorer == "firefox") {
                        newndoe.onclick = STMapClickOverLay;
                        newndoe.ondblclick = STMapDblClickOverLay;
                        newndoe.onmousedown = STMapOverLayMouseDown;
                        newndoe.onmouseover = STMapOverLayMouseOver;
                        newndoe.onmousemove = STMapOverLayMouseMove;
                        newndoe.onmouseout = STMapOverLayMouseOut;
                        newndoe.onmouseup = STMapOverLayMouseUp
                    } else {
                        newndoe.onclick = STMapClickOverLay;
                        newndoe.ondblclick = STMapDblClickOverLay;
                        newndoe.onmousedown = STMapOverLayMouseDown;
                        newndoe.onmouseover = STMapOverLayMouseOver;
                        newndoe.onmousemove = STMapOverLayMouseMove;
                        newndoe.onmouseout = STMapOverLayMouseOut;
                        newndoe.onmouseup = STMapOverLayMouseUp
                    }
                }
            }
            if (vis) {
                this.setCenter(obj.center)
            }
        }
        if (obj instanceof STMapRect2) {
            var sLeft = this.lonlat2Screen(obj.leftTop);
            var sRight = this.lonlat2Screen(obj.bottomRight);
            var spanW = sRight.x - sLeft.x;
            var spanH = sRight.y - sLeft.y;
            if (checkhHtml5()) {
                var newndoe = document.createElement("canvas");
                newndoe.id = obj.id;
                newndoe.style.position = "absolute";
                newndoe.style.zIndex = 100;
                newndoe.title = obj.tooltip;
                var context = newndoe.getContext("2d");
                var sRgbColor = obj.fillColor.colorRgb();
                var r1 = sRgbColor.split("(")[1].split(",")[0];
                var g1 = sRgbColor.split("(")[1].split(",")[1];
                var b1 = sRgbColor.split(",")[2].split(")")[0];
                context.fillStyle = "rgba(" + r1 + "," + g1 + "," + b1 + "," + obj.fillOpacity + ")";
                context.strokeStyle = obj.strokeColor;
                context.strokeRect(0, 0, spanW, spanH);
                if (obj.filled) {
                    context.fillRect(0, 0, spanW, spanH)
                }
                this.mapDivBackOverLayer.appendChild(newndoe);
                STMapOverLaysObjArray[STMapOverLaysObjArray.length] = obj;
                newndoe.style.left = sLeft.x + "px";
                newndoe.style.top = sLeft.y + "px";
                newndoe.style.width = spanW;
                newndoe.style.height = spanH
            } else {
                if (this.explorer != "ie" && this.explorer != "android") {
                } else {
                    if (this.explorer == "android") {
                    } else {
                        var newndoe = "";
                        if (obj.roundRect) {
                            newndoe = document.createElement("<v:RoundRect>")
                        } else {
                            newndoe = document.createElement("<v:Rect>")
                        }
                        newndoe.id = obj.id;
                        newndoe.style.width = spanW;
                        newndoe.style.height = spanH;
                        newndoe.style.position = "absolute";
                        newndoe.style.zIndex = 100;
                        newndoe.title = obj.tooltip;
                        newndoe.strokecolor = obj.strokeColor;
                        newndoe.strokeweight = obj.strokeWeight;
                        newndoe.filled = obj.filled;
                        var stroke = document.createElement("<v:stroke>");
                        stroke.dashstyle = obj.dashStyle;
                        stroke.opacity = obj.strokeOpacity;
                        newndoe.appendChild(stroke);
                        var fillstyle = document.createElement("<v:fill>");
                        fillstyle.opacity = obj.fillOpacity;
                        fillstyle.color = obj.fillColor;
                        newndoe.appendChild(fillstyle);
                        this.mapDivBackOverLayer.appendChild(newndoe);
                        STMapOverLaysObjArray[STMapOverLaysObjArray.length] = obj;
                        newndoe.style.left = sLeft.x + "px";
                        newndoe.style.top = sLeft.y + "px"
                    }
                }
            }
            if (true) {
                if (this.explorer == "ie") {
                    if (typeof(newndoe.attachEvent) != "undefined") {
                        newndoe.attachEvent("onclick", STMapClickOverLay);
                        newndoe.attachEvent("ondblclick", STMapDblClickOverLay);
                        newndoe.attachEvent("onmousedown", STMapOverLayMouseDown);
                        newndoe.attachEvent("onmouseover", STMapOverLayMouseOver);
                        newndoe.attachEvent("onmousemove", STMapOverLayMouseMove);
                        newndoe.attachEvent("onmouseout", STMapOverLayMouseOut);
                        newndoe.attachEvent("onmouseup", STMapOverLayMouseUp)
                    } else {
                        newndoe.addEventListener("onclick", STMapClickOverLay);
                        newndoe.addEventListener("ondblclick", STMapDblClickOverLay);
                        newndoe.addEventListener("onmousedown", STMapOverLayMouseDown);
                        newndoe.addEventListener("onmouseover", STMapOverLayMouseOver);
                        newndoe.addEventListener("onmousemove", STMapOverLayMouseMove);
                        newndoe.addEventListener("onmouseout", STMapOverLayMouseOut);
                        newndoe.addEventListener("onmouseup", STMapOverLayMouseUp)
                    }
                } else {
                    if (this.explorer == "firefox") {
                        newndoe.onclick = STMapClickOverLay;
                        newndoe.ondblclick = STMapDblClickOverLay;
                        newndoe.onmousedown = STMapOverLayMouseDown;
                        newndoe.onmouseover = STMapOverLayMouseOver;
                        newndoe.onmousemove = STMapOverLayMouseMove;
                        newndoe.onmouseout = STMapOverLayMouseOut;
                        newndoe.onmouseup = STMapOverLayMouseUp
                    } else {
                        newndoe.onclick = STMapClickOverLay;
                        newndoe.ondblclick = STMapDblClickOverLay;
                        newndoe.onmousedown = STMapOverLayMouseDown;
                        newndoe.onmouseover = STMapOverLayMouseOver;
                        newndoe.onmousemove = STMapOverLayMouseMove;
                        newndoe.onmouseout = STMapOverLayMouseOut;
                        newndoe.onmouseup = STMapOverLayMouseUp
                    }
                }
            }
            if (vis) {
                this.setCenter(obj.center)
            }
        }
        if (obj instanceof STMapRect) {
            var cp1 = this.screen2LonLat(new STMapPoint(0, STMapMainDivHeight / 2));
            var cp2 = this.screen2LonLat(new STMapPoint(STMapMainDivWidth, STMapMainDivHeight / 2));
            var disX = this.distance(cp1.x, cp1.y, cp2.x, cp2.y);
            var bilix = disX / STMapMainDivWidth;
            var cp11 = this.screen2LonLat(new STMapPoint(STMapMainDivWidth / 2, 0));
            var cp22 = this.screen2LonLat(new STMapPoint(STMapMainDivWidth / 2, STMapMainDivHeight));
            var disY = this.distance(cp11.x, cp11.y, cp22.x, cp22.y);
            var biliy = disY / STMapMainDivHeight;
            var spanW = obj.width / bilix;
            var spanH = obj.height / biliy;
            var sxy = this.lonlat2Screen(obj.center);
            if (checkhHtml5()) {
                var newndoe = document.createElement("canvas");
                newndoe.id = obj.id;
                newndoe.style.position = "absolute";
                newndoe.style.zIndex = 100;
                newndoe.title = obj.tooltip;
                var context = newndoe.getContext("2d");
                var sRgbColor = obj.fillColor.colorRgb();
                var r1 = sRgbColor.split("(")[1].split(",")[0];
                var g1 = sRgbColor.split("(")[1].split(",")[1];
                var b1 = sRgbColor.split(",")[2].split(")")[0];
                context.fillStyle = "rgba(" + r1 + "," + g1 + "," + b1 + "," + obj.fillOpacity + ")";
                context.strokeStyle = obj.strokeColor;
                context.strokeRect(0, 0, spanW, spanH);
                if (obj.filled) {
                    context.fillRect(0, 0, spanW, spanH)
                }
                this.mapDivBackOverLayer.appendChild(newndoe);
                STMapOverLaysObjArray[STMapOverLaysObjArray.length] = obj;
                newndoe.style.left = (sxy.x - spanW / 2) + "px";
                newndoe.style.top = (sxy.y - spanH / 2) + "px"
            } else {
                if (this.explorer != "ie" && this.explorer != "android") {
                } else {
                    if (this.explorer == "android") {
                    } else {
                        var newndoe = "";
                        if (obj.roundRect) {
                            newndoe = document.createElement("<v:RoundRect>")
                        } else {
                            newndoe = document.createElement("<v:Rect>")
                        }
                        newndoe.id = obj.id;
                        newndoe.style.width = spanW;
                        newndoe.style.height = spanH;
                        newndoe.style.position = "absolute";
                        newndoe.style.zIndex = 100;
                        newndoe.title = obj.tooltip;
                        newndoe.strokecolor = obj.strokeColor;
                        newndoe.strokeweight = obj.strokeWeight;
                        newndoe.filled = obj.filled;
                        var stroke = document.createElement("<v:stroke>");
                        stroke.dashstyle = obj.dashStyle;
                        stroke.opacity = obj.strokeOpacity;
                        newndoe.appendChild(stroke);
                        var fillstyle = document.createElement("<v:fill>");
                        fillstyle.opacity = obj.fillOpacity;
                        fillstyle.color = obj.fillColor;
                        newndoe.appendChild(fillstyle);
                        this.mapDivBackOverLayer.appendChild(newndoe);
                        STMapOverLaysObjArray[STMapOverLaysObjArray.length] = obj;
                        newndoe.style.left = (sxy.x - spanW / 2) + "px";
                        newndoe.style.top = (sxy.y - spanH / 2) + "px"
                    }
                }
            }
            if (true) {
                if (this.explorer == "ie") {
                    if (typeof(newndoe.attachEvent) != "undefined") {
                        newndoe.attachEvent("onclick", STMapClickOverLay);
                        newndoe.attachEvent("ondblclick", STMapDblClickOverLay);
                        newndoe.attachEvent("onmousedown", STMapOverLayMouseDown);
                        newndoe.attachEvent("onmouseover", STMapOverLayMouseOver);
                        newndoe.attachEvent("onmousemove", STMapOverLayMouseMove);
                        newndoe.attachEvent("onmouseout", STMapOverLayMouseOut);
                        newndoe.attachEvent("onmouseup", STMapOverLayMouseUp)
                    } else {
                        newndoe.addEventListener("onclick", STMapClickOverLay);
                        newndoe.addEventListener("ondblclick", STMapDblClickOverLay);
                        newndoe.addEventListener("onmousedown", STMapOverLayMouseDown);
                        newndoe.addEventListener("onmouseover", STMapOverLayMouseOver);
                        newndoe.addEventListener("onmousemove", STMapOverLayMouseMove);
                        newndoe.addEventListener("onmouseout", STMapOverLayMouseOut);
                        newndoe.addEventListener("onmouseup", STMapOverLayMouseUp)
                    }
                } else {
                    if (this.explorer == "firefox") {
                        newndoe.onclick = STMapClickOverLay;
                        newndoe.ondblclick = STMapDblClickOverLay;
                        newndoe.onmousedown = STMapOverLayMouseDown;
                        newndoe.onmouseover = STMapOverLayMouseOver;
                        newndoe.onmousemove = STMapOverLayMouseMove;
                        newndoe.onmouseout = STMapOverLayMouseOut;
                        newndoe.onmouseup = STMapOverLayMouseUp
                    } else {
                        newndoe.onclick = STMapClickOverLay;
                        newndoe.ondblclick = STMapDblClickOverLay;
                        newndoe.onmousedown = STMapOverLayMouseDown;
                        newndoe.onmouseover = STMapOverLayMouseOver;
                        newndoe.onmousemove = STMapOverLayMouseMove;
                        newndoe.onmouseout = STMapOverLayMouseOut;
                        newndoe.onmouseup = STMapOverLayMouseUp
                    }
                }
            }
            if (vis) {
                this.setCenter(obj.center)
            }
        }
        if (obj instanceof STMapCustomOverObj) {
            if (obj.id == "" || obj.id == null || obj.html == "" || obj.point == null) {
                return
            }
            var eleobj = document.createElement("div");
            eleobj.id = obj.id;
            eleobj.style.position = "absolute";
            eleobj.innerHTML = obj.html;
            eleobj.title = obj.tooltip;
            var lx = 0;
            var ly = 0;
            var sxy = this.lonlat2Screen(obj.point);
            eleobj.style.left = sxy.x - obj.anchor.x;
            eleobj.style.top = sxy.y - obj.anchor.y;
            this.mapDivBackOverLayer.appendChild(eleobj);
            STMapOverLaysObjArray[STMapOverLaysObjArray.length] = obj;
            if (this.explorer == "ie") {
                if (typeof(eleobj.attachEvent) != "undefined") {
                    eleobj.attachEvent("onclick", STMapClickOverLay);
                    eleobj.attachEvent("ondblclick", STMapDblClickOverLay);
                    eleobj.attachEvent("onmousedown", STMapOverLayMouseDown);
                    eleobj.attachEvent("onmouseover", STMapOverLayMouseOver);
                    eleobj.attachEvent("onmousemove", STMapOverLayMouseMove);
                    eleobj.attachEvent("onmouseout", STMapOverLayMouseOut);
                    eleobj.attachEvent("onmouseup", STMapOverLayMouseUp)
                } else {
                    eleobj.addEventListener("onclick", STMapClickOverLay);
                    eleobj.addEventListener("ondblclick", STMapDblClickOverLay);
                    eleobj.addEventListener("onmousedown", STMapOverLayMouseDown);
                    eleobj.addEventListener("onmouseover", STMapOverLayMouseOver);
                    eleobj.addEventListener("onmousemove", STMapOverLayMouseMove);
                    eleobj.addEventListener("onmouseout", STMapOverLayMouseOut);
                    eleobj.addEventListener("onmouseup", STMapOverLayMouseUp)
                }
            } else {
                if (this.explorer == "firefox") {
                    eleobj.onclick = STMapClickOverLay;
                    eleobj.ondblclick = STMapDblClickOverLay;
                    eleobj.onmousedown = STMapOverLayMouseDown;
                    eleobj.onmouseover = STMapOverLayMouseOver;
                    eleobj.onmousemove = STMapOverLayMouseMove;
                    eleobj.onmouseout = STMapOverLayMouseOut;
                    eleobj.onmouseup = STMapOverLayMouseUp
                } else {
                    eleobj.onclick = STMapClickOverLay;
                    eleobj.ondblclick = STMapDblClickOverLay;
                    eleobj.onmousedown = STMapOverLayMouseDown;
                    eleobj.onmouseover = STMapOverLayMouseOver;
                    eleobj.onmousemove = STMapOverLayMouseMove;
                    eleobj.onmouseout = STMapOverLayMouseOut;
                    eleobj.onmouseup = STMapOverLayMouseUp
                }
            }
            if (vis) {
                this.setCenter(obj.point)
            }
        }
        if (obj instanceof STMapPolyline) {
            var pary = obj.points.split(";");
            var cpoints = "";
            var x1 = 10000, y1 = 10000, x2 = -1, y2 = -1;
            for (var i = 0; i < pary.length; i++) {
                var pt = pary[i];
                if (!STMapIsNum(pt.split(",")[0]) || !STMapIsNum(pt.split(",")[1])) {
                    return
                }
                var cxy = this.lonlat2Screen(new STMapPoint(pt.split(",")[0], pt.split(",")[1]));
                if (cpoints == "") {
                    cpoints = cxy.x + "," + cxy.y
                } else {
                    cpoints += " " + cxy.x + "," + cxy.y
                }
                if (cxy.x < x1) {
                    x1 = cxy.x
                }
                if (cxy.y < y1) {
                    y1 = cxy.y
                }
                if (cxy.x > x2) {
                    x2 = cxy.x
                }
                if (cxy.y > y2) {
                    y2 = cxy.y
                }
            }
            if (obj.autoClose && (cpoints.split(" ")[0] != cpoints.split(" ")[cpoints.split(" ").length - 1])) {
                cpoints = cpoints + " " + cpoints.split(" ")[0]
            }
            if (checkhHtml5()) {
                var newndoe = document.createElement("canvas");
                newndoe.width = x2 - x1;
                newndoe.height = y2 - y1;
                newndoe.id = obj.id;
                newndoe.style.position = "absolute";
                newndoe.style.zIndex = 100;
                newndoe.title = obj.tooltip;
                var context = newndoe.getContext("2d");
                context.fillStyle = obj.fillColor;
                context.strokeStyle = obj.strokeColor;
                context.lineWidth = obj.strokeWeight;
                context.beginPath();
                var pts = cpoints.split(" ");
                for (var i = 0; i < pts.length; i++) {
                    var xxx = pts[i].split(",")[0];
                    var yyy = pts[i].split(",")[1];
                    if (i == 0) {
                        context.moveTo((xxx - x1), (yyy - y1))
                    } else {
                        context.lineTo((xxx - x1), (yyy - y1))
                    }
                }
                if (obj.autoClose) {
                    context.closePath()
                }
                if (obj.filled) {
                    context.fill()
                } else {
                    context.stroke()
                }
                this.mapDivBackOverLayer.appendChild(newndoe);
                STMapOverLaysObjArray[STMapOverLaysObjArray.length] = obj;
                newndoe.style.left = x1 + "px";
                newndoe.style.top = y1 + "px"
            } else {
                if (hasSVG()) {
                    if (commSVG == "") {
                        var sssvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        sssvg.setAttribute("height", "100%");
                        sssvg.setAttribute("width", "100%");
                        sssvg.style.position = "absolute;";
                        sssvg.style.pixelLeft = 0;
                        sssvg.style.left = 0;
                        sssvg.style.pixelTop = 0;
                        sssvg.style.top = 0;
                        this.mapDivBackOverLayer.appendChild(sssvg);
                        commSVG = sssvg
                    }
                    var polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                    polyline.style.position = "absolute";
                    polyline.title = obj.tooltip;
                    polyline.setAttribute("id", obj.id);
                    polyline.setAttribute("points", cpoints);
                    polyline.setAttribute("stroke-width", obj.strokeWeight);
                    polyline.setAttribute("stroke1", obj.strokeColor);
                    polyline.setAttribute("stroke-opacity", obj.strokeOpacity);
                    polyline.setAttribute("stroke-dasharray", STMapStrokeStyle[obj.dashStyle]);
                    polyline.setAttribute("fill-opacity", obj.fillOpacity);
                    if (obj.filled) {
                        polyline.setAttribute("fill", obj.fillColor)
                    } else {
                        polyline.setAttribute("fill", "none")
                    }
                    commSVG.appendChild(polyline);
                    STMapOverLaysObjArray[STMapOverLaysObjArray.length] = obj;
                    if (true) {
                        if (this.explorer == "ie") {
                            if (polyline.attachEvent) {
                                polyline.attachEvent("onclick", STMapClickOverLay);
                                polyline.attachEvent("ondblclick", STMapDblClickOverLay);
                                polyline.attachEvent("onmousedown", STMapOverLayMouseDown);
                                polyline.attachEvent("onmouseover", STMapOverLayMouseOver);
                                polyline.attachEvent("onmouseout", STMapOverLayMouseOut);
                                polyline.attachEvent("onmouseup", STMapOverLayMouseUp)
                            } else {
                                polyline.addEventListener("onclick", STMapClickOverLay);
                                polyline.addEventListener("ondblclick", STMapDblClickOverLay);
                                polyline.addEventListener("onmousedown", STMapOverLayMouseDown);
                                polyline.addEventListener("onmouseover", STMapOverLayMouseOver);
                                polyline.addEventListener("onmouseout", STMapOverLayMouseOut);
                                polyline.addEventListener("onmouseup", STMapOverLayMouseUp)
                            }
                        } else {
                            if (this.explorer == "firefox") {
                                polyline.onclick = STMapClickOverLay;
                                polyline.ondblclick = STMapDblClickOverLay;
                                polyline.onmousedown = STMapOverLayMouseDown;
                                polyline.onmouseover = STMapOverLayMouseOver;
                                polyline.onmouseout = STMapOverLayMouseOut;
                                polyline.onmouseup = STMapOverLayMouseUp
                            } else {
                                polyline.onclick = STMapClickOverLay;
                                polyline.ondblclick = STMapDblClickOverLay;
                                polyline.onmousedown = STMapOverLayMouseDown;
                                polyline.onmouseover = STMapOverLayMouseOver;
                                polyline.onmouseout = STMapOverLayMouseOut;
                                polyline.onmouseup = STMapOverLayMouseUp
                            }
                        }
                    }
                } else {
                    var newndoe = document.createElement("<v:polyline>");
                    newndoe.id = obj.id;
                    newndoe.points = cpoints;
                    newndoe.style.position = "absolute";
                    newndoe.style.zIndex = 100;
                    newndoe.title = obj.tooltip;
                    newndoe.strokecolor = obj.strokeColor;
                    newndoe.strokeweight = obj.strokeWeight;
                    newndoe.filled = obj.filled;
                    var stroke = document.createElement("<v:stroke>");
                    stroke.dashstyle = obj.dashStyle;
                    stroke.opacity = obj.strokeOpacity;
                    stroke.startarrow = obj.startArrow;
                    stroke.EndArrow = obj.endArrow;
                    newndoe.appendChild(stroke);
                    var fillstyle = document.createElement("<v:fill>");
                    fillstyle.opacity = obj.fillOpacity;
                    fillstyle.color = obj.fillColor;
                    newndoe.appendChild(fillstyle);
                    if (true) {
                        if (this.explorer == "ie") {
                            if (typeof(newndoe.attachEvent) != "undefined") {
                                newndoe.attachEvent("onclick", STMapClickOverLay);
                                newndoe.attachEvent("ondblclick", STMapDblClickOverLay);
                                newndoe.attachEvent("onmousedown", STMapOverLayMouseDown);
                                newndoe.attachEvent("onmouseover", STMapOverLayMouseOver);
                                newndoe.attachEvent("onmouseout", STMapOverLayMouseOut);
                                newndoe.attachEvent("onmouseup", STMapOverLayMouseUp)
                            } else {
                                newndoe.addEventListener("onclick", STMapClickOverLay);
                                newndoe.addEventListener("ondblclick", STMapDblClickOverLay);
                                newndoe.addEventListener("onmousedown", STMapOverLayMouseDown);
                                newndoe.addEventListener("onmouseover", STMapOverLayMouseOver);
                                newndoe.addEventListener("onmouseout", STMapOverLayMouseOut);
                                newndoe.addEventListener("onmouseup", STMapOverLayMouseUp)
                            }
                        } else {
                            if (this.explorer == "firefox") {
                                newndoe.onclick = STMapClickOverLay;
                                newndoe.ondblclick = STMapDblClickOverLay;
                                newndoe.onmousedown = STMapOverLayMouseDown;
                                newndoe.onmouseover = STMapOverLayMouseOver;
                                newndoe.onmouseout = STMapOverLayMouseOut;
                                newndoe.onmouseup = STMapOverLayMouseUp
                            } else {
                                newndoe.onclick = STMapClickOverLay;
                                newndoe.ondblclick = STMapDblClickOverLay;
                                newndoe.onmousedown = STMapOverLayMouseDown;
                                newndoe.onmouseover = STMapOverLayMouseOver;
                                newndoe.onmouseout = STMapOverLayMouseOut;
                                newndoe.onmouseup = STMapOverLayMouseUp
                            }
                        }
                    }
                    this.mapDivBackOverLayer.appendChild(newndoe);
                    STMapOverLaysObjArray[STMapOverLaysObjArray.length] = obj
                }
            }
        }
    };
    this.getCity = function() {
        return"SH"
    };
    this.getOverlayById = function(id) {
        for (var i = 0; i < STMapOverLaysObjArray.length; i++) {
            var obj = STMapOverLaysObjArray[i];
            if (obj.id == id) {
                return obj
            }
        }
        return null
    };
    this.deleteOverlayById = function(id) {
        var index = -1;
        for (var i = 0; i < STMapOverLaysObjArray.length; i++) {
            var obj = STMapOverLaysObjArray[i];
            if (obj.id == id) {
                index = i;
                break
            }
        }
        if (index == -1) {
            return
        }
        STMapOverLaysObjArray.splice(index, 1);
        var objectName = (STMap$(id) + "").toUpperCase();
        if (objectName.indexOf("SVG") > -1) {
            if (commSVG) {
                commSVG.removeChild(STMap$(id))
            }
        } else {
            var newndoe = STMap$(STMapPointPix + id);
            this.mapDivBackOverLayer.removeChild(newndoe)
        }
        if (STMapInfoWinObj.overlayObj.id == id) {
            STMapCloseInfoWin();
            STMapInfoWinObj.overlayObj = ""
        }
        STMapHashBound[id] = ""
    };
    this.deleteOverlayByIdInner = function(id) {
        var index = -1;
        for (var i = 0; i < STMapOverLaysObjArray.length; i++) {
            var obj = STMapOverLaysObjArray[i];
            if (obj.id == id) {
                index = i;
                break
            }
        }
        if (index == -1) {
            return
        }
        STMapOverLaysObjArray.splice(index, 1);
        var objectName = (STMap$(id) + "").toUpperCase();
        if (objectName.indexOf("SVG") > -1) {
            if (commSVG) {
                commSVG.removeChild(STMap$(id))
            }
        } else {
            var newndoe = STMap$(STMapPointPix + id);
            this.mapDivBackOverLayer.removeChild(newndoe)
        }
        if (STMapInfoWinObj.overlayObj.id == id) {
        }
        STMapHashBound[id] = ""
    };
    this.mapDir = function(luj) {
        STMapMapLujing = luj
    };
    this.clearAllOverlays = function() {
        for (var i = 0; i < STMapOverLaysObjArray.length; i++) {
            var obj = STMapOverLaysObjArray[i];
            var objectName = ((STMap$(obj.id) + "").toUpperCase());
            if (objectName.indexOf("SVG") > -1) {
                if (commSVG) {
                    commSVG.removeChild(STMap$(obj.id))
                }
            } else {
                var newndoe = STMap$(obj.id);
                this.mapDivBackOverLayer.removeChild(newndoe)
            }
        }
        STMapOverLaysObjArray = new Array();
        STMapCloseInfoWin();
        STMapInfoWinObj.overlayObj = "";
        for (id in STMapHashBound) {
            STMapHashBound[id] = ""
        }
    };
    this.setOverlayVisible = function(id, v) {
        if (v) {
            STMap$(id).style.display = "block"
        } else {
            STMap$(id).style.display = "none"
        }
    };
    this.distance = function(Lat1, Long1, Lat2, Long2) {
        Lat1 = eval(Lat1);
        Lat2 = eval(Lat2);
        Long1 = eval(Long1);
        Long2 = eval(Long2);
        var num3;
        Long1 = ((Long1 * 2) * 3.14159265358979) / 360;
        Long2 = ((Long2 * 2) * 3.14159265358979) / 360;
        Lat1 = ((Lat1 * 2) * 3.14159265358979) / 360;
        Lat2 = ((Lat2 * 2) * 3.14159265358979) / 360;
        var num11 = 6378.137;
        var num1 = 0.00335281066474748;
        var num2 = (Math.sin(Long1) * Math.sin(Long2)) + ((Math.cos(Long1) * Math.cos(Long2)) * Math.cos(Lat2 - Lat1));
        num2 = Math.acos(num2);
        var num4 = num2 * num11;
        var num5 = (Long2 + Long1) * 0.5;
        var num6 = (Long2 - Long1) * 0.5;
        var num7 = (Lat2 - Lat1) * 0.5;
        var num8 = (((Math.cos(num6) * Math.cos(num7)) * Math.cos(num6)) * Math.cos(num7)) + (((Math.sin(num5) * Math.sin(num7)) * Math.sin(num5)) * Math.sin(num7));
        var num9 = (((Math.sin(num6) * Math.cos(num7)) * Math.sin(num6)) * Math.cos(num7)) + (((Math.cos(num5) * Math.sin(num7)) * Math.cos(num5)) * Math.sin(num7));
        if (num9 == 0) {
            num3 = 0;
            return 0
        }
        var num10 = ((num1 * num11) * Math.sqrt(num9 * num8)) / num4;
        num3 = num4 + ((num4 * num1) * ((((((((3 * num10) - 1) / (2 * num8)) * Math.sin(num5)) * Math.sin(num5)) * Math.cos(num6)) * Math.cos(num6)) - (((((((3 * num10) + 1) / (2 * num9)) * Math.cos(num5)) * Math.cos(num5)) * Math.sin(num6)) * Math.sin(num6))));
        return Math.floor(num3 * 1000)
    };
    this.distanceS = function(sx1, sy1, sx2, sy2) {
        var cxy1 = this.screen2LonLat(new STMapPoint(sx1, sy1));
        var cxy2 = this.screen2LonLat(new STMapPoint(sx2, sy2));
        return this.distance(cxy1.x, cxy1.y, cxy2.x, cxy2.y)
    };
    this.calArea = function(xys) {
        var aaa = xys.split(";");
        var xx = new Array();
        var yy = new Array();
        var pts = new Array();
        for (var i = 0; i < aaa.length; i++) {
            xx[i] = aaa[i].split(",")[0];
            yy[i] = aaa[i].split(",")[1];
            pts[i] = STMapLonlat2Mercator(new STMapPoint(aaa[i].split(",")[0], aaa[i].split(",")[1]))
        }
        return Math.floor(PolygonArea(pts, aaa.length))
    };
    this.setMouseTool = function(tool) {
        this.measureTool = tool
    };
    this.clearTempOverlays = function() {
        var ids = "";
        for (var i = 0; i < STMapOverLaysObjArray.length; i++) {
            var obj = STMapOverLaysObjArray[i];
            var newndoe = STMap$(STMapPointPix + obj.id);
            if (obj) {
                if (obj.id) {
                    if (((obj.id) + "").indexOf("measure") > -1) {
                        ids += obj.id + ","
                    }
                }
            }
        }
        if (ids != "") {
            for (var i = 0; i < ids.split(",").length; i++) {
                if (ids.split(",")[i] != "") {
                    this.deleteOverlayById(ids.split(",")[i])
                }
            }
        }
    };
    this.setCollection = function(is) {
        STMapCollection = is;
        STMapCommRefresh()
    };
    this.setCollectionSize = function(size) {
        STMapCollectionSize = size
    };
    this.refresh = function() {
        STMapCommRefresh()
    };
    this.setEagleWinVisible = function(vi) {
        var obj = STMap$("eag2leeShowImage");
        if (vi) {
            STMap$("backDivObjEagle").style.display = "block";
            obj.src = STMapEngineAPI + "img/eagleshow1.gif"
        } else {
            STMap$("backDivObjEagle").style.display = "none";
            obj.src = STMapEngineAPI + "img/eagleshow.gif"
        }
    };
    this.geoCoding = function(addr, func) {
        STMapGeoCoding(addr, func)
    };
    this.geoCodingN = function(addr, func) {
        STMapGeoCodingN(addr, func)
    };
    this.reGeoCoding = function(x, y, sta, func) {
        STMapReGeoCoding(x, y, sta, func)
    };
    this.reGeoCodingN = function(x, y, sta, func) {
        STMapReGeoCodingN(x, y, sta, func)
    };
    this.trandlateXY = function(x, y, func) {
        STMapPianZhuan(x, y, func)
    };
    this.screen2LonLat = function(sxy) {
        var lieshu = Math.pow(2, 20 - this.mapZoom - 1);
        var meterPerPic = 40075016.6855784 / lieshu;
        var pixPerMeter = 256 / meterPerPic;
        var nowcenterP = STMapLonlat2Mercator(this.mapCenter);
        var x1 = nowcenterP.x + (sxy.x - this.mapDiv.clientWidth / 2) * (meterPerPic / 256);
        var y1 = nowcenterP.y + (this.mapDiv.clientHeight / 2 - sxy.y) * (meterPerPic / 256);
        var lon = {x: x1, y: y1};
        var p = STMapMercator2Lonlat(lon);
        return p
    };
    this.lonlat2Screen = function(cxy) {
        var merP = STMapLonlat2Mercator({x: cxy.x, y: cxy.y});
        var lieshu = Math.pow(2, 20 - this.mapZoom - 1);
        var meterPerPic = 40075016.6855784 / lieshu;
        var pixPerMeter = 256 / meterPerPic;
        var nowcenterP = STMapLonlat2Mercator(this.mapCenter);
        var xx = (this.mapDiv.clientWidth / 2 + pixPerMeter * (merP.x - nowcenterP.x));
        var yy = (this.mapDiv.clientHeight / 2 + pixPerMeter * (nowcenterP.y - merP.y));
        return{x: xx, y: yy}
    };
    this.addEventListnerEditOverlay = function(etype, fun) {
        STMapEditEventType[etype] = fun
    };
    this.removeEventListnerEditOverlay = function(etype) {
        STMapEditEventType[etype] = null
    };
    this.addMapEventListner = function(etype, fun) {
        STMapCommEventType[etype] = fun
    };
    this.removeMapEventListner = function(etype) {
        STMapCommEventType[etype] = null
    };
    this.addEventListner = function(etype, fun) {
        if (etype == "onmousedown") {
            STMapEventListnerMouseDown = fun
        }
        if (etype == "onmousemove") {
            STMapEventListnerMouseMove = fun
        }
        if (etype == "onmouseup") {
            STMapEventListnerMouseUp = fun
        }
        if (etype == "dblclick") {
            STMapEventListnerDblClick = fun
        }
        if (etype == "click") {
            STMapEventListnerClick = fun
        }
        if (etype == "rightclick") {
            STMapEventListnerRightClick = fun
        }
    };
    this.removeEventListner = function(etype) {
        if (etype == "onmousedown") {
            STMapEventListnerMouseDown = ""
        }
        if (etype == "onmousemove") {
            STMapEventListnerMouseMove = ""
        }
        if (etype == "onmouseup") {
            STMapEventListnerMouseUp = ""
        }
        if (etype == "dblclick") {
            STMapEventListnerDblClick = ""
        }
        if (etype == "click") {
            STMapEventListnerClick = ""
        }
        if (etype == "rightclick") {
            STMapEventListnerRightClick = ""
        }
    };
    this.addObjEventListner = function(id, etype, fun) {
        if (typeof(id) == "undefined") {
            return
        }
        if (etype == "onmousedown") {
            STMapEventListnerMouseDown2[id] = fun
        }
        if (etype == "onmouseup") {
            STMapEventListnerMouseUp2[id] = fun
        }
        if (etype == "onmouseover") {
            STMapEventListnerMouseOver2[id] = fun
        }
        if (etype == "onmouseout") {
            STMapEventListnerMouseOut2[id] = fun
        }
        if (etype == "onmousemove") {
            STMapEventListnerMouseMove2[id] = fun
        }
        if (etype == "click") {
            STMapEventListnerClick2[id] = fun
        }
        if (etype == "onclick") {
            STMapEventListnerClick2[id] = fun
        }
        if (etype == "dblclick" || etype == "ondblclick") {
            STMapEventListnerDblClick2[id] = fun
        }
    };
    this.removeObjEventListner = function(id, etype) {
        if (etype == "onmousedown") {
            STMapEventListnerMouseDown2[id] = "undefined"
        }
        if (etype == "onmouseup") {
            STMapEventListnerMouseUp2[id] = "undefined"
        }
        if (etype == "onmouseover") {
            STMapEventListnerMouseOver2[id] = "undefined"
        }
        if (etype == "onmouseout") {
            STMapEventListnerMouseOut2[id] = "undefined"
        }
        if (etype == "click") {
            STMapEventListnerClick2[id] = "undefined"
        }
        if (etype == "onclick") {
            STMapEventListnerClick2[id] = "undefined"
        }
        if (etype == "dblclick" || etype == "ondblclick") {
            STMapEventListnerDblClick2[id] = "undefined"
        }
    };
    this.removeObjEventListnerAll = function(id) {
        STMapEventListnerMouseDown2[id] = "undefined";
        STMapEventListnerMouseUp2[id] = "undefined";
        STMapEventListnerMouseOver2[id] = "undefined";
        STMapEventListnerMouseOut2[id] = "undefined";
        STMapEventListnerClick2[id] = "undefined";
        STMapEventListnerDblClick2[id] = "undefined"
    };
    STMapObjInstance = this;
    this.pan = function(gapx, gapy) {
        var lieshu = Math.pow(2, (20 - STMapZoom - 1));
        var meterPerPic = 40075016.6855784 / lieshu;
        var meterPerPixel = meterPerPic / 256;
        var nowcenM = STMapLonlat2Mercator(STMapCenter);
        var newcenM = {x: (nowcenM.x - meterPerPixel * gapx), y: (nowcenM.y + meterPerPixel * gapy)};
        var newlon = STMapMercator2Lonlat(newcenM);
        if (gapx != 0 || gapy != 0) {
            this.locateMap(newlon, STMapZoom);
            return
        }
    };
    this.getCenter = function() {
        return this.mapCenter
    };
    this.getZoom = function() {
        return this.mapZoom
    };
    this.setZoomComStyle = function(style) {
        if (style == 0) {
            STMap$("zoompaneldiv").style.display = "block";
            STMap$("shutiaodiv").style.display = "block";
            STMap$("hengtiaoimg").style.display = "block";
            STMap$("yualaizoomdiv").style.marginLeft = "17px";
            STMap$("yualaizoomdiv2").style.marginLeft = "17px";
            STMap$("yualaizoomdiv2").style.marginTop = "0px"
        } else {
            STMap$("zoompaneldiv").style.display = "none";
            STMap$("shutiaodiv").style.display = "none";
            STMap$("hengtiaoimg").style.display = "none";
            STMap$("yualaizoomdiv").style.marginLeft = "8px";
            STMap$("yualaizoomdiv2").style.marginLeft = "8px";
            STMap$("yualaizoomdiv2").style.marginTop = "10px"
        }
    };
    this.setZoomCompVisible = function(vi) {
        if (vi) {
            this.mapDivSuofang.style.display = "block"
        } else {
            this.mapDivSuofang.style.display = "none"
        }
    };
    this.setScaleCompVisible = function(vi) {
        if (vi) {
            this.mapDivScale.style.display = "block"
        } else {
            this.mapDivScale.style.display = "none"
        }
    };
    this.setCustomInfoWin = function(custom, infoDiv, contentDivID, width, height) {
        alert(width);
        STMapCustomInfoWin = custom;
        if (infoDiv) {
            STMapCustomInfoWinDiv = infoDiv
        }
        if (custom) {
            STMap$("STMapInfoWinTitleMain").innerHTML = infoDiv;
            STMapCustomInfoWinDivContentDivID = contentDivID;
            STMapCustomInfoWidth = width;
            alert(STMapCustomInfoWidth);
            STMapCustomInfoHeight = height;
            STMapInfoWinObj.refresh()
        } else {
            STMap$("STMapInfoWinTitleMain").innerHTML = STMapInfoWinObj.content1
        }
    };
    this.setInfoWinVisible = function(v) {
        STMapInfoWinObj.setVisible(v)
    };
    this.setInfoWinOfOverlay = function(id) {
        STMapInfoWinObj.overlayObj = STMapGetOverlayObjById(id);
        STMapInfoWinObj.overlay = STMap$(id)
    };
    this.setDragMap = function(v) {
        STMapDragble = v
    };
    this.addUserDataLayer = function(userdatalayer) {
        if (!(userdatalayer instanceof STMapUserData)) {
            return
        }
        if (userdatalayer.name == "" || userdatalayer.retriveData == "" || userdatalayer.img == "") {
            return
        }
        STMapUserDataLayers[STMapUserDataLayers.length] = userdatalayer
    };
    this.removeUserDataLayer = function(layername) {
        var lay = STMapGetUserLayerFromName(layername);
        if (lay) {
            for (oid in lay.readedUserDatas) {
                this.deleteOverlayById(layername + oid)
            }
        }
        var index = -1;
        for (var i = 0; i < STMapUserDataLayers.length; i++) {
            var obj = STMapUserDataLayers[i];
            if (obj.name == layername) {
                index = i;
                break
            }
        }
        if (index == -1) {
            return
        }
        STMapUserDataLayers.splice(index, 1)
    };
    this.setUserDataLayerVisible = function(layername, vis) {
        var lay = STMapGetUserLayerFromName(layername);
        if (lay) {
            lay.visible = vis;
            for (oid in lay.readedUserDatas) {
                this.setOverlayVisible(layername + oid, vis)
            }
        }
    };
    this.intersect = function(id1, id2, func) {
        var zt = -1;
        var obj1 = STMapGetOverlayObjById(id1);
        var obj2 = STMapGetOverlayObjById(id2);
        if (obj1 instanceof STMapMarker) {
            var pt1 = this.lonlat2Screen(obj1.point);
            if (obj2 instanceof STMapPolyline) {
                var ar = obj2.points.split(";");
                var paths = "";
                for (var i = 0; i < ar.length; i++) {
                    var sxy = this.lonlat2Screen(new STMapPoint(ar[i].split(",")[0], ar[i].split(",")[1]));
                    if (paths == "") {
                        paths = sxy.x + "," + sxy.y
                    } else {
                        paths += ";" + sxy.x + "," + sxy.y
                    }
                }
                if (STMapPointInFences(pt1, paths)) {
                    zt = 2
                } else {
                    zt = 0
                }
            }
            if (obj2 instanceof STMapRect) {
                var left = eval(STMap$(id2).style.left.split("px")[0]);
                var top = eval(STMap$(id2).style.top.split("px")[0]);
                var width = eval(STMap$(id2).style.width.split("px")[0]);
                var height = eval(STMap$(id2).style.width.split("px")[0]);
                if (pt1.x > left && pt1.x < (left + width) && pt1.y > top && pt1.y < (top + height)) {
                    zt = 2
                } else {
                    zt = 0
                }
            }
            if (obj2 instanceof STMapOval) {
                var left = eval(STMap$(id2).style.left.split("px")[0]);
                var top = eval(STMap$(id2).style.top.split("px")[0]);
                var width = eval(STMap$(id2).style.width.split("px")[0]);
                var height = eval(STMap$(id2).style.width.split("px")[0]);
                var cen = this.lonlat2Screen(obj2.center);
                var ban = obj2.width;
                var juli = Math.sqrt((pt1.x - cen.x) * (pt1.x - cen.x) + (pt1.y - cen.y) * (pt1.y - cen.y));
                if (juli < ban) {
                    zt = 2
                } else {
                    zt = 0
                }
            }
        }
        return zt
    };
    this.showJuweiLayer = function(show) {
        if (show) {
            if (STMapObj_Juwei.Objs.length <= 0) {
                var url = "http://211.136.131.242:8880/Neighborhood/NeighborhoodServlet?flag=&name=&type=js";
                STMapScript(url)
            } else {
                for (var i = 0; i < STMapObj_Juwei.Objs.length; i++) {
                    this.setOverlayVisible(STMapObj_Juwei.Objs[i].id, false);
                    this.setOverlayVisible(STMapObj_Juwei.ObjsLabel[i].id, false)
                }
            }
        } else {
            for (var i = 0; i < STMapObj_Juwei.Objs.length; i++) {
                this.setOverlayVisible(STMapObj_Juwei.Objs[i].id, false);
                this.setOverlayVisible(STMapObj_Juwei.ObjsLabel[i].id, false)
            }
        }
    };
    this.locateJuwei = function(juwei) {
        if (STMapObj_Juwei.Objs.length > 0) {
            for (var i = 0; i < STMapObj_Juwei.Objs.length; i++) {
                if (STMapObj_Juwei.name[i] == juwei) {
                    this.locateMap(new STMapPoint(STMapObj_Juwei.cxy[i].split(",")[0], STMapObj_Juwei.cxy[i].split(",")[1]), 3)
                }
            }
        }
    };
    this.setMapToolsJuwei = function(show) {
        if (show) {
            STMap$("STMapJuweiJibieDiv").style.display = "block"
        } else {
            STMap$("STMapJuweiJibieDiv").style.display = "none"
        }
    };
    this.locateEagle = function() {
        STMap$("backDivObjEagle").style.left = (this.mapDiv.clientWidth - 150) + "px";
        STMap$("backDivObjEagle").style.top = (this.mapDiv.clientHeight - 150) + "px";
        STMap$("eag2leeShowImage").style.left = (this.mapDiv.clientWidth - 13) + "px";
        STMap$("eag2leeShowImage").style.top = (this.mapDiv.clientHeight - 13) + "px"
    }
}
var STMapObj_Juwei = new Array();
STMapObj_Juwei.name = new Array();
STMapObj_Juwei.cxy = new Array();
STMapObj_Juwei.xys = new Array();
STMapObj_Juwei.cx = new Array();
STMapObj_Juwei.cy = new Array();
STMapObj_Juwei.Objs = new Array();
STMapObj_Juwei.ObjsLabel = new Array();
function STMapJuweiBack(str) {
    if (str != "") {
        STMapObj_Juwei.name = new Array();
        STMapObj_Juwei.cxy = new Array();
        STMapObj_Juwei.xys = new Array();
        STMapObj_Juwei.cx = new Array();
        STMapObj_Juwei.cy = new Array();
        STMapObj_Juwei.Objs = new Array();
        STMapObj_Juwei.ObjsLabel = new Array();
        var ary = str.split("=");
        for (var i = 0; i < ary.length; i++) {
            var name = ary[i].split("_")[0];
            var cxy = ary[i].split("_")[1];
            var xys = ary[i].split("_")[2];
            var cx = cxy.split(",")[0];
            var cy = cxy.split(",")[1];
            STMapObj_Juwei.name[STMapObj_Juwei.name.length] = name;
            STMapObj_Juwei.cxy[STMapObj_Juwei.cxy.length] = cxy;
            STMapObj_Juwei.xys[STMapObj_Juwei.xys.length] = xys;
            STMapObj_Juwei.cx[STMapObj_Juwei.cx.length] = cx;
            STMapObj_Juwei.cy[STMapObj_Juwei.cy.length] = cy;
            var poly = new STMapPolyline();
            poly.id = "juwei_" + name;
            poly.points = xys;
            poly.strokeColor = "blue";
            poly.strokeWeight = 1;
            poly.strokeOpacity = "0.5";
            poly.dashStyle = "Solid";
            poly.filled = true;
            poly.fillColor = "#FF9933";
            poly.fillOpacity = "0.1";
            poly.autoClose = true;
            poly.infowin = true;
            poly.title = "poly";
            poly.content = name;
            STMapObjInstance.addOverlay(poly);
            STMapObj_Juwei.Objs[STMapObj_Juwei.Objs.length] = poly;
            var label = new STMapLabel();
            label.id = "juweilabel_" + name;
            label.point = new STMapPoint(eval(cxy.split(",")[0]) - 0, cxy.split(",")[1]);
            label.text = name;
            label.size = "";
            label.fontSize = "12px";
            label.fontColor = "#006699";
            label.fontFamily = "宋体";
            label.borderColor = "#808080";
            label.borderWidth = "1px";
            label.fillColor = "#ffffcc";
            label.anchor = "CENTER";
            STMapObjInstance.addOverlay(label);
            STMapObj_Juwei.ObjsLabel[STMapObj_Juwei.ObjsLabel.length] = label
        }
    }
}
function STMapGetOverlayObjById(c) {
    for (var a = 0; a < STMapOverLaysObjArray.length; a++) {
        var b = STMapOverLaysObjArray[a];
        if (b.id == c) {
            return b
        }
    }
    return""
}
;function STMapOval() {
    this.id = "";
    this.center = "";
    this.width = 0;
    this.height = 0;
    this.strokeColor = "#000000";
    this.strokeWeight = 1;
    this.strokeOpacity = "1.0";
    this.dashStyle = "Solid";
    this.filled = false;
    this.fillColor = "#000000";
    this.fillOpacity = "1.0";
    this.autoClose = false;
    this.infowin = true;
    this.tooltip = "";
    this.title = "";
    this.content = "";
    this.infoCustom = false;
    this.infoCustomContentHTML = "";
    this.cusInfoWinWidth = 0;
    this.cusInfoWinHeight = 0;
    this.setCustomInfoWin = function(d, c, a, b) {
        if (!d) {
            this.infoCustom = false;
            return
        }
        this.infoCustom = true;
        if (a) {
            this.cusInfoWinWidth = a
        }
        if (b) {
            this.cusInfoWinHeight = b
        }
        if (c) {
            this.infoCustomContentHTML = c
        }
    };
    this.showInfoWin = function(a) {
        if (a) {
            STMapInfoWinObj.overlayObj = STMapGetOverlayObjById(this.id);
            STMapInfoWinObj.overlay = STMap$(this.id);
            STMapInfoWinObj.setVisible(true)
        } else {
            STMapInfoWinObj.setVisible(false)
        }
    };
    this.refresh = function() {
        var a = STMap$(this.id);
        STMapObjInstance.deleteOverlayByIdInner(this.id);
        STMapObjInstance.addOverlay(this)
    }
}
;function STMapPolyline() {
    this.id = "";
    this.points = "";
    this.strokeColor = "#000000";
    this.strokeWeight = 1;
    this.strokeOpacity = "1.0";
    this.dashStyle = "Solid";
    this.filled = false;
    this.fillColor = "#000000";
    this.fillOpacity = "1.0";
    this.autoClose = false;
    this.infowin = true;
    this.tooltip = "";
    this.title = "";
    this.startArrow = "";
    this.endArrow = "";
    this.content = "";
    this.moveable = false;
    this.infoCustom = false;
    this.infoCustomContentHTML = "";
    this.cusInfoWinWidth = 0;
    this.cusInfoWinHeight = 0;
    this.setEditable = function(edit) {
        if (!edit) {
            this.moveable = false;
            for (var i = 0; i < STMapEditPolyPOintsArray.length; i++) {
                STMapObjInstance.mapDivBackOverLayer.removeChild(STMap$(STMapEditPolyPOintsArray[i].id))
            }
            STMapEventEditPolyObj = "";
            STMapEventEditPolyP = "";
            STMapEditPolyPOintsArray = new Array();
            STMapEditPolyPOintsArrayXY = new Array()
        } else {
            this.moveable = false;
            for (var i = 0; i < STMapEditPolyPOintsArray.length; i++) {
                STMapObjInstance.mapDivBackOverLayer.removeChild(STMap$(STMapEditPolyPOintsArray[i].id))
            }
            STMapEventEditPolyObj = "";
            STMapEventEditPolyP = "";
            STMapEditPolyPOintsArray = new Array();
            STMapEditPolyPOintsArrayXY = new Array();
            for (var i = 0; i < STMapEditPolyPOintsArray.length; i++) {
                STMapObjInstance.mapDivBackOverLayer.removeChild(STMap$(STMapEditPolyPOintsArray[i].id))
            }
            STMapEventEditPolyObj = "";
            STMapEventEditPolyP = "";
            this.moveable = true;
            STMapEditPolyPionts = this.points;
            STMapEditPolyPOintsArray = new Array();
            STMapEditPolyPOintsArrayXY = new Array();
            STMapEventEditPolyObj = this;
            var pts = this.points.split(";");
            for (var i = 0; i < pts.length; i++) {
                var pp = STMapObjInstance.lonlat2Screen(new STMapPoint(pts[i].split(",")[0], pts[i].split(",")[1]));
                var img = document.createElement("img");
                img.id = "editpoly" + i;
                img.style.zIndex = 10000;
                img.style.position = "absolute";
                img.src = STMapEngineAPI + "img/quan.gif";
                img.style.left = pp.x - 7 + "px";
                img.style.top = pp.y - 7 + "px";
                img.attachEvent("onmousedown", STMapClickOverLayLineEdit);
                STMapObjInstance.mapDivBackOverLayer.appendChild(img);
                STMapEditPolyPOintsArray[i] = img;
                STMapEditPolyPOintsArrayXY[i] = new STMapPoint(pts[i].split(",")[0], pts[i].split(",")[1])
            }
        }
    };
    this.setCustomInfoWin = function(custom, customContentHTML, w, h) {
        if (!custom) {
            this.infoCustom = false;
            return
        }
        this.infoCustom = true;
        if (w) {
            this.cusInfoWinWidth = w
        }
        if (h) {
            this.cusInfoWinHeight = h
        }
        if (customContentHTML) {
            this.infoCustomContentHTML = customContentHTML
        }
    };
    this.showInfoWin = function(v) {
        if (v) {
            STMapInfoWinObj.overlayObj = STMapGetOverlayObjById(this.id);
            STMapInfoWinObj.overlay = STMap$(this.id);
            STMapInfoWinObj.setVisible(true)
        } else {
            STMapInfoWinObj.setVisible(false)
        }
    };
    this.getBounds = function() {
        var ary = this.points.split(";");
        var x1 = 99999;
        var y2 = 99999;
        var x2 = -99999;
        var y1 = -99999;
        for (var i = 0; i < ary.length; i++) {
            if (eval(ary[i].split(",")[0]) < x1) {
                x1 = eval(ary[i].split(",")[0])
            }
            if (eval(ary[i].split(",")[1]) > y1) {
                y1 = eval(ary[i].split(",")[1])
            }
            if (eval(ary[i].split(",")[0]) > x2) {
                x2 = eval(ary[i].split(",")[0])
            }
            if (eval(ary[i].split(",")[1]) < y2) {
                y2 = eval(ary[i].split(",")[1])
            }
        }
        return new STMapBounds(x1, y1, x2, y2)
    };
    this.refresh = function() {
        var newndoe = STMap$(this.id);
        STMapObjInstance.deleteOverlayByIdInner(this.id);
        STMapObjInstance.addOverlay(this)
    }
}
;function STMapRect() {
    this.id = "";
    this.center = "";
    this.width = 0;
    this.height = 0;
    this.roundRect = false;
    this.strokeColor = "#000000";
    this.strokeWeight = 1;
    this.strokeOpacity = "1.0";
    this.dashStyle = "Solid";
    this.filled = false;
    this.fillColor = "#000000";
    this.fillOpacity = "1.0";
    this.autoClose = false;
    this.infowin = true;
    this.tooltip = "";
    this.title = "";
    this.content = "";
    this.infoCustom = false;
    this.infoCustomContentHTML = "";
    this.cusInfoWinWidth = 0;
    this.cusInfoWinHeight = 0;
    this.setCustomInfoWin = function(d, c, a, b) {
        if (!d) {
            this.infoCustom = false;
            return
        }
        this.infoCustom = true;
        if (a) {
            this.cusInfoWinWidth = a
        }
        if (b) {
            this.cusInfoWinHeight = b
        }
        if (c) {
            this.infoCustomContentHTML = c
        }
    };
    this.showInfoWin = function(a) {
        if (a) {
            STMapInfoWinObj.overlayObj = STMapGetOverlayObjById(this.id);
            STMapInfoWinObj.overlay = STMap$(this.id);
            STMapInfoWinObj.setVisible(true)
        } else {
            STMapInfoWinObj.setVisible(false)
        }
    };
    this.getBounds = function() {
        var d = STMapObjInstance.screen2LonLat(new STMapPoint(0, STMapMainDivHeight / 2));
        var c = STMapObjInstance.screen2LonLat(new STMapPoint(STMapMainDivWidth, STMapMainDivHeight / 2));
        var j = STMapObjInstance.distance(d.x, d.y, c.x, c.y);
        var h = j / STMapMainDivWidth;
        var b = STMapObjInstance.screen2LonLat(new STMapPoint(STMapMainDivWidth / 2, 0));
        var k = STMapObjInstance.screen2LonLat(new STMapPoint(STMapMainDivWidth / 2, STMapMainDivHeight));
        var i = STMapObjInstance.distance(b.x, b.y, k.x, k.y);
        var f = i / STMapMainDivHeight;
        var g = this.width / h;
        var e = this.height / f;
        var m = STMapObjInstance.lonlat2Screen(this.center);
        var a = STMapObjInstance.screen2LonLat(new STMapPoint(m.x - g / 2, m.y - e / 2));
        var l = STMapObjInstance.screen2LonLat(new STMapPoint(m.x + g / 2, m.y + e / 2));
        return new STMapBounds(a.x, a.y, l.x, l.y)
    };
    this.refresh = function() {
        var a = STMap$(this.id);
        STMapObjInstance.deleteOverlayByIdInner(this.id);
        STMapObjInstance.addOverlay(this)
    }
}
;function STMapRect2() {
    this.id = "";
    this.leftTop = "";
    this.bottomRight = 0;
    this.roundRect = false;
    this.strokeColor = "#000000";
    this.strokeWeight = 1;
    this.strokeOpacity = "1.0";
    this.dashStyle = "Solid";
    this.filled = false;
    this.fillColor = "#000000";
    this.fillOpacity = "1.0";
    this.autoClose = false;
    this.infowin = true;
    this.tooltip = "";
    this.title = "";
    this.content = "";
    this.infoCustom = false;
    this.infoCustomContentHTML = "";
    this.cusInfoWinWidth = 0;
    this.cusInfoWinHeight = 0;
    this.setCustomInfoWin = function(d, c, a, b) {
        if (!d) {
            this.infoCustom = false;
            return
        }
        this.infoCustom = true;
        if (a) {
            this.cusInfoWinWidth = a
        }
        if (b) {
            this.cusInfoWinHeight = b
        }
        if (c) {
            this.infoCustomContentHTML = c
        }
    };
    this.showInfoWin = function(a) {
        if (a) {
            STMapInfoWinObj.overlayObj = STMapGetOverlayObjById(this.id);
            STMapInfoWinObj.overlay = STMap$(this.id);
            STMapInfoWinObj.setVisible(true)
        } else {
            STMapInfoWinObj.setVisible(false)
        }
    };
    this.getBounds = function() {
        return new STMapBounds(this.leftTop.x, this.leftTop.y, this.bottomRight.x, this.bottomRight.y);
        var d = STMapObjInstance.screen2LonLat(new STMapPoint(0, STMapMainDivHeight / 2));
        var c = STMapObjInstance.screen2LonLat(new STMapPoint(STMapMainDivWidth, STMapMainDivHeight / 2));
        var j = STMapObjInstance.distance(d.x, d.y, c.x, c.y);
        var h = j / STMapMainDivWidth;
        var b = STMapObjInstance.screen2LonLat(new STMapPoint(STMapMainDivWidth / 2, 0));
        var k = STMapObjInstance.screen2LonLat(new STMapPoint(STMapMainDivWidth / 2, STMapMainDivHeight));
        var i = STMapObjInstance.distance(b.x, b.y, k.x, k.y);
        var f = i / STMapMainDivHeight;
        var g = this.width / h;
        var e = this.height / f;
        var m = STMapObjInstance.lonlat2Screen(this.center);
        var a = STMapObjInstance.screen2LonLat(new STMapPoint(m.x - g / 2, m.y - e / 2));
        var l = STMapObjInstance.screen2LonLat(new STMapPoint(m.x + g / 2, m.y + e / 2));
        return new STMapBounds(a.x, a.y, l.x, l.y)
    };
    this.refresh = function() {
        var a = STMap$(this.id);
        STMapObjInstance.deleteOverlayByIdInner(this.id);
        STMapObjInstance.addOverlay(this)
    }
}
;function STMapScript(a) {
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.src = a;
    document.getElementsByTagName("head")[0].appendChild(b)
}
;var STMapSearchBack = "";
function STMapSearch() {
    this.city = "SH";
    this.keyword = "";
    this.layer = "POI";
    this.pageSize = 10;
    this.currentPage = 1;
    this.bounds = "";
    this.container = "";
    this.cbkFunction = "";
    this.execute = function() {
        if (this.keyword == "" || this.cbkFunction == "") {
            return
        }
        var a = STMapSearchEngine + "SHTELCOME/servlet/MapService?QueryType=CONTEXTFIND&CITY=SH&name=" + encodeURIComponent(encodeURIComponent(this.keyword)) + "&pageNo=" + this.currentPage + "&Nums=" + this.pageSize + "&keywords=" + encodeURIComponent(encodeURIComponent(this.keyword)) + "&source=scriptjs&key=d72aff96af37952a";
        STMapSearchBack = this.cbkFunction;
        STMapScript(a)
    }
}
function STMapSearchAround() {
    this.city = "SH";
    this.radius = 0;
    this.keyword = "";
    this.layer = "POI";
    this.pageSize = 10;
    this.currentPage = 1;
    this.center = "";
    this.radius = "";
    this.status = "1";
    this.container = "";
    this.cbkFunction = "";
    this.execute = function() {
        if (this.keyword == "" || this.cbkFunction == "" || this.center == "") {
            return
        }
        var a = STMapSearchEngine + "SHTELCOME/servlet/MapService?QueryType=AROUNDSEARCH&CITY=SH&name=" + encodeURIComponent(encodeURIComponent(this.keyword)) + "&pageNo=" + this.currentPage + "&Nums=" + this.pageSize + "&keywords=" + encodeURIComponent(encodeURIComponent(this.keyword)) + "&source=scriptjs&key=d72aff96af37952a&cx=" + this.center.x + "&cy=" + this.center.y + "&radius=" + this.radius + "&status=" + this.status;
        STMapSearchBack = this.cbkFunction;
        STMapScript(a)
    }
}
var STMapRoadSearchBack = "";
function STMapRoadCross() {
    this.city = "SH";
    this.road = "";
    this.cbkFunction = "";
    this.execute = function() {
        if (this.road == "" || this.cbkFunction == "") {
            return
        }
        var a = STMapSearchEngine + "SHTELCOME/servlet/MapService?QueryType=ROADCROSS&CITY=SH&roadname=" + encodeURIComponent(encodeURIComponent(this.road)) + "&key=58eee7431a7426c1&source=scriptjs";
        STMapRoadSearchBack = this.cbkFunction;
        STMapScript(a)
    }
}
var STMapRoadCrossesBack = "";
function STMapRoadCrossBuffer() {
    this.city = "SH";
    this.radius = "";
    this.center = "";
    this.cbkFunction = "";
    this.execute = function() {
        if (this.radius == "" || this.cbkFunction == "") {
            return
        }
        var a = "http://211.136.131.242:8087/api/roadkou.jsp?x=" + this.center.x + "&y=" + this.center.y + "&ban=" + this.radius + "&dd=ddrr";
        STMapRoadCrossesBack = this.cbkFunction;
        STMapScript(a)
    }
}
;var STMapSearchBack = "";
function STMapSearchN() {
    this.QueryType = "FuzzySearch";
    this.CITY = "SH";
    this.Keywords = "";
    this.Category = "";
    this.FLM01 = "";
    this.FLM02 = "";
    this.FLM03 = "";
    this.Nums = 10;
    this.PageNo = 1;
    this.Layer = "";
    this.cbkFunction = "";
    this.execute = function() {
        if (this.Keywords == "" || this.cbkFunction == "") {
            return
        }
        var a = STMapSearchEngine + "SHTELCOME/servlet/MapService?QueryType=FuzzySearchN&CITY=SH&Keywords=" + encodeURIComponent(encodeURIComponent(this.Keywords)) + "&PageNo=" + this.PageNo + "&Nums=" + this.Nums + "&Category=" + this.Category + "&FLM01=" + this.FLM01 + "&FLM02=" + this.FLM02 + "&FLM03=" + this.FLM03 + "&Layer=" + this.Layer + "&source=scriptjs&key=d72aff96af37952a&rtype=2&source=scriptjs";
        STMapSearchBack = this.cbkFunction;
        STMapScript(a)
    }
}
function STMapSearchAroundN() {
    this.QueryType = "AroundSearch";
    this.CITY = "SH";
    this.Keywords = "";
    this.Category = "";
    this.FLM01 = "";
    this.FLM02 = "";
    this.FLM03 = "";
    this.Nums = 10;
    this.PageNo = 1;
    this.Layer = "";
    this.cx = "";
    this.cy = "";
    this.radius = "2000";
    this.status = "1";
    this.cbkFunction = "";
    this.execute = function() {
        if (this.cx == "" || this.cy == "" || this.cbkFunction == "") {
            return
        }
        var a = STMapSearchEngine + "SHTELCOME/servlet/MapService?QueryType=AroundSearchN&CITY=SH&Keywords=" + encodeURIComponent(encodeURIComponent(this.Keywords)) + "&PageNo=" + this.PageNo + "&Nums=" + this.Nums + "&Category=" + this.Category + "&FLM01=" + this.FLM01 + "&FLM02=" + this.FLM02 + "&FLM03=" + this.FLM03 + "&Layer=" + this.Layer + "&cx=" + this.cx + "&cy=" + this.cy + "&radius=" + this.radius + "&status=" + this.status + "&source=scriptjs&key=d72aff96af37952a&rtype=2&source=scriptjs";
        STMapSearchBack = this.cbkFunction;
        STMapScript(a)
    }
}
function STMapRectSearchN() {
    this.QueryType = "RectSearchN";
    this.CITY = "SH";
    this.Keywords = "";
    this.Category = "";
    this.FLM01 = "";
    this.FLM02 = "";
    this.FLM03 = "";
    this.Nums = 10;
    this.PageNo = 1;
    this.Layer = "";
    this.X1 = "";
    this.Y1 = "";
    this.X2 = "";
    this.Y2 = "";
    this.status = "1";
    this.execute = function() {
        if (this.X1 == "" || this.Y1 == "" || this.X2 == "" || this.Y2 == "" || this.cbkFunction == "") {
            return
        }
        var a = STMapSearchEngine + "SHTELCOME/servlet/MapService?QueryType=RectSearchN&CITY=SH&Keywords=" + encodeURIComponent(encodeURIComponent(this.Keywords)) + "&PageNo=" + this.PageNo + "&Nums=" + this.Nums + "&Category=" + this.Category + "&FLM01=" + this.FLM01 + "&FLM02=" + this.FLM02 + "&FLM03=" + this.FLM03 + "&Layer=" + this.Layer + "&X1=" + this.X1 + "&Y1=" + this.Y1 + "&X2=" + this.X2 + "&Y2=" + this.Y2 + "&radius=" + this.radius + "&status=" + this.status + "&source=scriptjs&key=d72aff96af37952a&rtype=2&source=scriptjs";
        STMapSearchBack = this.cbkFunction;
        STMapScript(a)
    }
}
var STMapRoadSearchBack = "";
function STMapRoadCross() {
    this.city = "SH";
    this.road = "";
    this.cbkFunction = "";
    this.execute = function() {
        if (this.road == "" || this.cbkFunction == "") {
            return
        }
        var a = STMapSearchEngine + "SHTELCOME/servlet/MapService?QueryType=ROADCROSS&CITY=SH&roadname=" + encodeURIComponent(encodeURIComponent(this.road)) + "&key=58eee7431a7426c1&source=scriptjs";
        STMapRoadSearchBack = this.cbkFunction;
        STMapScript(a)
    }
}
var STMapRoadCrossesBack = "";
function STMapRoadCrossBuffer() {
    this.city = "SH";
    this.radius = "";
    this.center = "";
    this.cbkFunction = "";
    this.execute = function() {
        if (this.radius == "" || this.cbkFunction == "") {
            return
        }
        var a = "http://211.136.131.242:8087/api/roadkou.jsp?x=" + this.center.x + "&y=" + this.center.y + "&ban=" + this.radius + "&dd=ddrr";
        STMapRoadCrossesBack = this.cbkFunction;
        STMapScript(a)
    }
}
;var STMapPointPix = "";
function STMapLonLat(x, y) {
    this.x = eval(x);
    this.y = eval(y);
    this.gx = eval(x);
    this.gy = eval(y);
    this.xyback = function(x1, y1) {
        this.x = x1;
        this.y = y1
    }
}
function STMapPoint(x1, y1) {
    if (!STMapIsNum(x1)) {
        return
    }
    if (!STMapIsNum(y1)) {
        return
    }
    this.x = eval(x1);
    this.y = eval(y1)
}
function STMapSize(w, h) {
    if (!STMapIsNum(w)) {
        return
    }
    if (!STMapIsNum(h)) {
        return
    }
    this.w = eval(w);
    this.h = eval(h)
}
function STMapBounds(x1, y1, x2, y2) {
    if (!STMapIsNum(x1)) {
        return
    }
    if (!STMapIsNum(y1)) {
        return
    }
    if (!STMapIsNum(x2)) {
        return
    }
    if (!STMapIsNum(y2)) {
        return
    }
    this.x1 = eval(x1);
    this.y1 = eval(y1);
    this.x2 = eval(x2);
    this.y2 = eval(y2);
    this.toString = function() {
        return this.x1 + "," + this.y1 + "," + this.x2 + "," + this.y2
    };
    this.getCenter = function() {
        return new STMapPoint((this.x2 + this.x1) / 2, (this.y2 + this.y1) / 2)
    }
}
var STMapBoundMili = 4000;
var STMapBoundMiliTimer = "";
var STMapUserDataLayers=new Array();
function STMapUserData(){this.name="";this.retriveData=function(a){};this.drawDataEnd="";this.size="";this.userDataForLayer=new Array();this.readedBounds=new Array();this.readedUserDatas=new Array();this.visible=true;this.retriveDataDraw=function(a){for(var b=0;b<a.length;b++){if(!(this.readedUserDatas[a[b].id])){this.readedUserDatas[a[b].id]=a[b]}}this.draw();if(this.drawDataEnd!=""){this.drawDataEnd(a)}};this.draw=function(){if(!this.visible){}for(obj in this.readedUserDatas){var b=this.readedUserDatas[obj];var a=STMapObjInstance.getOverlayById(b.id);if(a){}else{if(true){STMapObjInstance.addOverlay(b,false);STMapObjInstance.setOverlayVisible(b.id,this.visible)}}}}}function STMapUserDataRead(){var g=new Array();var f=Math.ceil(STMapMainDivWidth/STMapObjInstance.mapWidth);var h=Math.ceil(STMapMainDivHeight/STMapObjInstance.mapHeight);for(var d=STMapECol-f;d<STMapECol+f;d++){for(var b=STMapERow-h;b<STMapERow+h;b++){var e=STMapBoundsFromColRow(d,b);g[g.length]=e}}if(g.length==0){return}for(var d=0;d<STMapUserDataLayers.length;d++){var a=STMapUserDataLayers[d];var c=new Array();for(var d=0;d<g.length;d++){if(!a.readedBounds[g[d].toString()]){c[c.length]=g[d];a.readedBounds[g[d].toString()]=g[d]}}a.retriveData(c)}}function STMapBoundsFromColRow(b,j){var c=Math.pow(2,(20-STMapZoom-1));var f=40075016.6855784/c;var i=b*f;var g=j*f;var h=(b-1)*f;var d=(j+1)*f;var e=STMapMercator2Lonlat(new STMapPoint(i,g));var a=STMapMercator2Lonlat(new STMapPoint(h,d));return new STMapBounds(e.x,e.y,a.x,a.y)}function STMapGetUserLayerFromName(a){for(var b=0;b<STMapUserDataLayers.length;b++){if(STMapUserDataLayers[b].name==a){return STMapUserDataLayers[b]}}return null};