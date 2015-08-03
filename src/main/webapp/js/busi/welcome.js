/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$("#login-user").html(sessionStorage.username);
var words = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
$.ajax({
    url: ajaxUrl,
    data: 'service_code=S11002&_type=ajax', //获取用户权限
    success: function(data) {
        try {
            returnData = eval('(' + data + ')');       //把字符串转为json
        } catch (e) {
            returnData = {
                'head': {
                    response_code: '-1',
                    response_desc: '服务端返回的json解析异常'
                }
            };
        }
        if (returnData.head.response_code != "000000") {
            //异常处理
            console.debug("异常代码=" + returnData.head.response_code + "， 描述=" + returnData.head.response_desc);
            alert(returnData.head.response_desc);
            if (returnData.head.response_code == '200023') {
                location.href = BaseUrl;
            }
        } else {
            cMenu(returnData, 1);       //创建菜单
        }
    },
    error: function(request, status, error) {
        switch (status) {
            case "timeout":
                console.error("请求超时，请稍候检查操作是否成功！");
                error_msg = "请求超时，请稍候检查操作是否成功！";
                alert("请求超时，请稍候检查操作是否成功！");
                break;
            case "error":
            case "notmodified":
            case "parsererror":
                var error_msg = null;
                try {
                    if (request.status == 0 || request.status == 1 || request.status == 2 || request.status == 3) {
                        //0 (未初始化), 1 (正在装载), 2 (装载完毕), 3 (交互中), 4 (完成)
                        error_msg = "系统正在等待响应，请稍后。";
                    } else {
                        error_msg = _error_info[request.status];
                        if (!error_msg) {
                            error_msg = "错误代码未定义！";
                            console.error("错误代码未定义！");
                        }
                    }
                } catch (e) {
                    console.error("function : AjaxOptions.error()\nname : " + e.name + "\nmessage : " + e.message + "\n 错误信息未引入！");
                    error_msg = "错误代码未定义！";
                }
                console.error("(" + request.status + ")" + error_msg);
                //if(this.isAlert){
                alert(error_msg);
                //}
                break;
            default:
                console.error("服务器未响应！");
                error_msg = "服务器未响应！";
                //if(this.isAlert){
                alert("服务器未响应！");
                //}
                break;
        }
        if ($.isFunction(this.fal)) {
            console.error("开始执行自定义的异常回调函数！");
            this.fal(request.status, error_msg);
        }
        if ($.isFunction(this.after)) {
            console.error("开始执行finally函数");
            this.after(request.status, error_msg);
        }
    },
    complete: function(request, status) {
        if (returnData.head.response_code == "000000") {
            console.debug("开始执行initDWZ()");
            initDWZ();
            //身份证读卡器
//            CVR_IDCard = document.getElementById("CVR_IDCard");
        }
    }
});

//生成根权限dom
function rootDom(root) {
    $("#pl_menu").append($("<div />").attr({class: "accordionHeader"}).append($("<h2 />").html("<span>Folder</span>" + root.m_title)).after($("<div />").attr({class: "accordionContent"}).append($("<ul />").attr({class: "tree treeFolder", id: root.m_id}))));
}
//生成子树权限
function cTreeDom(cTree) {
    $("#" + cTree.m_super).append($("<li />").append($("<a />").html(cTree.m_name)).append($("<ul />").attr({id: cTree.m_id})));
}
//生成树叶权限
function leafDom(leaf) {
    if (leaf.width && leaf.height) {
        $("#" + leaf.m_super).append($("<li />").append($("<a />").attr({href: "page/" + leaf.m_url + ".html", target: "dialog", rel: leaf.m_id, width: leaf.width, height: leaf.height}).html(leaf.m_name)));
    } else {
        $("#" + leaf.m_super).append($("<li />").append($("<a />").attr({href: "page/" + leaf.m_url + ".html", target: "navTab", rel: leaf.m_id}).html(leaf.m_name)));
    }
}
function cMenu(data, level) {
    if (level == undefined || level == 1) {
//                                alert("根权限："+data.m_id)
//根权限
        var rootNodes = data.menus
        $(rootNodes).each(function(i, n) {
            rootDom(n);
            //递归
            $(n.chidren).each(function(i, n) {
                var levelC = level + 1;
                cMenu(n, levelC)
            });
        });
    } else {
//子树权限
        if (data.m_type == 1) {
            cTreeDom(data);
            //递归
            $(data.chidren).each(function(i, n) {
                var levelC = level + 1;
                cMenu(n, levelC)
            });
        } else {
//树叶权限
            leafDom(data);
        }
    }
}

function initDWZ() {
    DWZ.init("dwz.frag.xml", {
        loginUrl: "page/login_dialog.html", loginTitle: "登录", // 弹出登录对话框
        //		loginUrl:"login.html",	// 跳到登录页面
        statusCode: {ok: 200, error: 300, timeout: 301}, //【可选】
        pageInfo: {pageNum: "pageNum", numPerPage: "numPerPage", orderField: "orderField", orderDirection: "orderDirection"}, //【可选】
        debug: true, // 调试模式 【true|false】
        callback: function() {
            initEnv();
            $("#themeList").theme({themeBase: "themes"}); // themeBase 相对于index页面的主题base路径

            //为hphm加载一个keydown事件，自动把字母转大写
            $('#hphm').live('keypress ', function(e) {
                console.log(e.keyCode);
                if (e.keyCode >= 97 && e.keyCode <= 122) {
//a~z 触发
                    $(this).val($(this).val() + words[e.keyCode - 97]);
                    e.preventDefault();
                }
            });
            $("#welcome_logout").click(function() {
                var o = new AjaxOptions();
                o.put("service_code", "S11001"); //用户注销
                o.after = function() {
                    localStorage.removeItem('sqjw_user');
                    localStorage.removeItem('sqjw_pwd');
                    location.href = "index.html";
                };
                $.ajax(o);
            });
            var o = new AjaxOptions();
            o.put("service_code", "S10002"); //获取系统参数
            o.isPadBack = false;
            o.beforeSend = function() {
                this.data = this.data + "&_type=ajax";
                return true;
            };
            o.sus = function(data) {
                var list = data.st_para;
                for (var i = 0; i < list.length; i++) {
                    var key = list[i].table_name + "." + list[i].col_name;
                    if (!_paramets[key]) {
                        _paramets[key] = [list[i]];
                    } else {
                        _paramets[key].push(list[i]);
                    }

                }
//增加读取权限的相关代码

                $('#sidebar .toggleCollapse div').trigger('click'); //隐藏侧边栏
                init_map(); //加载地图
            };
            $.ajax(o);
        }
    });
}

var createMenu = function(menus, menuTag) {
    if (!menus)
        return; //为空时，退出
    var m, a, li, ul;
    for (var ind in menus) {
        m = menus[ind];
        if (m.m_type == '1') {      //如果是目录
            a = $("<a/>").attr("href", "#").html(m.m_name);
            ul = $("<ul/>").attr({
                id: m.m_id,
                m_super: $.trim(m.m_super) ? menuTag.attr("m_super") + "," + m.m_super : ""
            });
            li = $("<li/>").attr({
                type: "1",
                m_id: m.m_id,
                id: m.m_id
            }).append(a).append(ul);
            createMenu(m.chidren, ul);
            menuTag.prepend(li);
            menuTag.attr("id", ul.attr("id") + "," + m.m_id);
        } else if (m.m_type == '0') {       //如果是菜单
            a = $("<a/>").html(m.m_name).attr({
                href: BaseUrl + "_page/" + m.m_url + ".do",
                title: m.m_title,
                target: "work",
                m_super: menuTag.attr("m_super") + "," + m.m_super
            });
            li = $("<li/>").attr({
                id: m.m_id,
                "type": "0"
            }).append(a);
            menuTag.prepend(li);
            menuTag.attr("id", menuTag.attr("id") + "," + m.m_id);
        }
    }
//    alert(menuTag.html());
}

/**
 * 创建权限树菜单
 * @param {json} menus json对象
 * @param {Jquery} menuTag jquery对象
 */
function createBusiMenu(menus, menuTag) {
    if (!menus || !menus.length)
        return; //为空时，退出
    var busi, step, a, li, ul;
    for (var ind in menus) {
        busi = menus[ind];
        a = $("<a/>").attr({
            href: '#this',
            title: busi.intro
        }).html(busi.title);
        ul = $("<ul/>").attr({
            id: 'ul' + busi.busi_id
        });
        li = $("<li/>").attr({
            type: "1"
        }).append(a).append(ul);
        menuTag.append(li);
        for (var i in busi.steps) {
            step = busi.steps[i];
            a = $("<a/>").html(step.step_title).attr({
                title: step.step_intro,
                target: "work",
                m_super: menuTag.attr("m_super") + "," + busi.busi_id
            });
            li = $("<li/>").attr({
                id: busi.busi_id + '-' + step.step_id,
                "type": "0"
            }).append(a);
            ul.append(li);
            menuTag.attr("id", menuTag.attr("id") + "," + step.step_id);
        }

        menuTag.attr("id", ul.attr("id") + "," + busi.busi_id);
    }
}

//每次查询之后，存储单元格各个宽度，兼容过滤
function cacheWidths(panel, page_widths) {
    $.each($($("#xy_list-grid tbody tr", panel).eq(0)).find("td"), function(i, n) {
        page_widths[i] = $(n).css("width");
    });
}
//重绘，每次过滤完，重新设置首行不隐藏的宽度
function reSetWidths(panel, page_widths) {
    $.each($($("#xy_list-grid tbody tr:visible", panel).eq(0)).find("td"), function(i, n) {
        $(n).css("width", page_widths[i]);
    });
}


var UnloadConfirm = {}; //窗口关闭事件
/**
 * 设置窗口关闭事件
 * @param {type} msg 关闭的提示语
 * @param {type} fun 点击确定的回调函数
 * @returns {undefined}
 */
UnloadConfirm.set = function(msg, fun) {
    window.onbeforeunload = function(e) {
        e = e || window.event;
        e.returnValue = msg;
        return msg
    };
    $(window).unbind('unload').unload(fun);
};
UnloadConfirm.clear = function() {
    window.onbeforeunload = function() {
    };
    window.onunload = function() {
    };
//    fckDraft.delDraftById();
};
/**
 * 获取客户端保存的登录用户信息
 * @returns {undefined}
 */
function getSession() {
    if (sessionStorage.user) {
        return JSON.parse(sessionStorage.user);
    }
    alertMsg.error('登录超时，请重新登录');
    $.pdialog.open('page/login_dialog.html', 'login_dialog', '登录', {width: 500, height: 300});
}

//高亮显示坐标点
function clickLi(data) {
    $(data).siblings().each(function() {
        var one = map.getOverlayById($(this).attr('name'));
        one.size = new STMapSize(30, 30);
        one.refresh();
    });
    var two = map.getOverlayById($(data).attr('name'));
    two.size = new STMapSize(40, 40);
    map.addOverlay(two, true);
}
//获取场所列表
function getCS(h, m, page) {
    mc = m;
    hy = h;
    var o = new AjaxOptions();
    o.isDialog = true; //为弹出窗口
    o.put("service_code", "S40001");
    o.put("mc", mc);
    o.put("hy", hy);
    o.put("page_size", 10);
    o.put("page", page);
    o.sus = function(data) {
        if (data.result.length > 0) {
            $.pdialog.closeCurrent();
            LocationPoint(data);
            $('#STMap_map').css({width: '85%', overflow: 'hidden'});
            $('#contentRight').css('display', 'block');
            $('#mo').text(data.page_count);
            showList(data);
        } else {
            map.clearAllOverlays();
            $('#STMap_map').css({width: '100%', overflow: 'hidden'});
            $('#contentRight').css('display', 'none');
        }
    };
    $.ajax(o);
}

//添加标记点
function LocationPoint(data) {
    //先清除之前的搜索结果
    map.clearAllOverlays();
    for (var i = 0; i < data.result.length; i++) {
        var pt = new STMapMarker();
        //设置对象的唯一id，id要唯一，如果存在重复id，后添加的覆盖已经存在的对象
        pt.id = data.result[i].id;
        pt.point = new STMapPoint(data.result[i].jd, data.result[i].wd);
        //设置对象的图片URL
        pt.img = "images/loc128.png";
        /*******以下为可选对象属性*******/
        //鼠标提示文字
        pt.label = data.result[i].mc;
        //设置对象尺寸,默认为图片本身尺寸
        pt.size = new STMapSize(30, 30); // 尺寸对象原型：STMapSize(长度,高度);
        //设置对象定位的锚点位置（相对于图片矩形）;取值范围：BC（下边中心点），BL（左下角），BR（右下角），TL（左上角），TC（上边中心点），TR（右上角），ML（左边中心点），MR（右边中心点），CENTER（图片中心点）
        pt.anchor = "CENTER";
        //设置是否点击显示信息窗口，默认为true。
        pt.infowin = true;
        //设置属性框的标题
        pt.title = "";
        //设置属性框的内容
        pt.content = data.result[i].mc;
        //将该对象添加到地图上
        //参数pt为marker对象，参数true表示是否自动调整视野，如果为true，则地图自动定位到该位置
        map.addOverlay(pt, true);
        pt.bound(1000);
    }
}
function LocationPointJfss(data) {
    //先清除之前的搜索结果
    map.clearAllOverlays();
    for (var i = 0; i < data.jfss.length; i++) {
        var img = '';
        if (data.jfss[i].sx == "dl") {
            img = 'images/wl.png';
        } else if (data.jfss[i].sx == "jg") {
            img = 'images/yl.png';
        } else if (data.jfss[i].sx == "jzw") {
            img = 'images/shop.png';
        }
        var pt = new STMapMarker();
        //设置对象的唯一id，id要唯一，如果存在重复id，后添加的覆盖已经存在的对象
        pt.id = data.jfss[i].id;
        pt.point = new STMapPoint(data.jfss[i].jd, data.jfss[i].wd);
        //设置对象的图片URL
        pt.img = img;
        /*******以下为可选对象属性*******/
        //鼠标提示文字
        pt.label = data.jfss[i].azdm;
        //设置对象尺寸,默认为图片本身尺寸
        pt.size = new STMapSize(30, 30); // 尺寸对象原型：STMapSize(长度,高度);
        //设置对象定位的锚点位置（相对于图片矩形）;取值范围：BC（下边中心点），BL（左下角），BR（右下角），TL（左上角），TC（上边中心点），TR（右上角），ML（左边中心点），MR（右边中心点），CENTER（图片中心点）
        pt.anchor = "CENTER";
        //设置是否点击显示信息窗口，默认为true。
        pt.infowin = false;
        //设置属性框的标题
        pt.title = "";
        //设置属性框的内容
        pt.content = ""
        //将该对象添加到地图上
        //参数pt为marker对象，参数true表示是否自动调整视野，如果为true，则地图自动定位到该位置
        map.addOverlay(pt, true);
        pt.bound(1000);
    }
}
function detail(data) {
    var url = '';
    if ("za_yl" == hy) {
        url = 'page/za/za0002-yldetail.html';
    } else if ("za_sp" == hy) {
        url = 'page/za/za0001-shopdetail.html';
    } else if ("za_wl" == hy) {
        url = 'page/za/za0003-wldetail.html';
    }
    $.pdialog.open(url, 'detail', "详情",
            {"width": 580, "height": 560,
                param: {hy: hy, id: $(data).attr('name')},
                close: function(param) {
                    map.getOverlayById($(data).attr('name')).moveable = false;//是否可以拖动
                    return true;
                }
            });

}

//显示查询结果
function showList(data) {
    var text = '';
    for (var i = 0; i < data.result.length; i++) {
        text += "<li onclick='clickLi($(this))' name='" + data.result[i].id + "'><p>" + data.result[i].mc + "-<a onclick='detail($(this))' name='" + data.result[i].id + "'>详情</a></p><p>联系方式：" + data.result[i].lxfs + "</p></li>";
    }
    $('#dataList').html(text);
}

//隐藏滚动条
function scroll() {
    $('#STMap_map').css('overflow', 'hidden');
}

//全局变量：场所名称，所属行业
var mc, hy;
