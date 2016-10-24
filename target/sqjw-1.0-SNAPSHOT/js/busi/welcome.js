/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$("#login-user").html(sessionStorage.username);
var words = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
$.ajax({
    url: ajaxUrl,
    data: 'service_code=S11002&_type=ajax', //获取用户权限
    success: function (data) {
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
    error: function (request, status, error) {
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
    complete: function (request, status) {
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
        $(rootNodes).each(function (i, n) {
            rootDom(n);
            //递归
            $(n.chidren).each(function (i, n) {
                var levelC = level + 1;
                cMenu(n, levelC)
            });
        });
    } else {
//子树权限
        if (data.m_type == 1) {
            cTreeDom(data);
            //递归
            $(data.chidren).each(function (i, n) {
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
        callback: function () {
            initEnv();
            $("#themeList").theme({themeBase: "themes"}); // themeBase 相对于index页面的主题base路径

            //为hphm加载一个keydown事件，自动把字母转大写
            $('#hphm').live('keypress ', function (e) {
                console.log(e.keyCode);
                if (e.keyCode >= 97 && e.keyCode <= 122) {
//a~z 触发
                    $(this).val($(this).val() + words[e.keyCode - 97]);
                    e.preventDefault();
                }
            });
            $("#welcome_logout").click(function () {
                var o = new AjaxOptions();
                o.put("service_code", "S11001"); //用户注销
                o.after = function () {
                    localStorage.removeItem('sqjw_user');
                    localStorage.removeItem('sqjw_pwd');
                    location.href = "index.html";
                };
                $.ajax(o);
            });
            var o = new AjaxOptions();
            o.put("service_code", "S10002"); //获取系统参数
            o.isPadBack = false;
            o.beforeSend = function () {
                this.data = this.data + "&_type=ajax";
                return true;
            };
            o.sus = function (data) {
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

var createMenu = function (menus, menuTag) {
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
    $.each($($("#xy_list-grid tbody tr", panel).eq(0)).find("td"), function (i, n) {
        page_widths[i] = $(n).css("width");
    });
}
//重绘，每次过滤完，重新设置首行不隐藏的宽度
function reSetWidths(panel, page_widths) {
    $.each($($("#xy_list-grid tbody tr:visible", panel).eq(0)).find("td"), function (i, n) {
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
UnloadConfirm.set = function (msg, fun) {
    window.onbeforeunload = function (e) {
        e = e || window.event;
        e.returnValue = msg;
        return msg
    };
    $(window).unbind('unload').unload(fun);
};
UnloadConfirm.clear = function () {
    window.onbeforeunload = function () {
    };
    window.onunload = function () {
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
    $(data).siblings().each(function () {
        var one = map.getOverlayById($(this).attr('name'));
        one.size = new STMapSize(30, 30);
        one.refresh();
    });
    var two = map.getOverlayById($(data).attr('name'));
    two.size = new STMapSize(40, 40);
    map.addOverlay(two, true);
}
//高亮显示坐标点
function clickSqLi(data) {
    $(data).siblings().each(function () {
        var one = map.getOverlayById($(this).attr('name'));
        one.size = new STMapSize(60, 60);
        one.refresh();
    });
    var two = map.getOverlayById($(data).attr('name'));
    two.size = new STMapSize(100, 100);
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
    o.sus = function (data) {
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
//获取商铺信息
function getSpCS(h, m, page) {
    mc = m;
    hy = h;
    var o = new AjaxOptions();
    o.isDialog = true; //为弹出窗口
    o.put("service_code", "S40001");
    o.put("mc", mc);
    o.put("hy", hy);
    o.put("page_size", 10);
    o.put("page", page);
    o.sus = function (data) {
        if (data.result.length > 0) {
            $.pdialog.closeCurrent();
            LocationPoint(data);
            $('#STMap_map').css({width: '85%', overflow: 'hidden'});
            $('#contentRight').css('display', 'block');
            $('#mo').text(data.page_count);
            showSPList(data);
        } else {
            map.clearAllOverlays();
            $('#STMap_map').css({width: '100%', overflow: 'hidden'});
            $('#contentRight').css('display', 'none');
        }
    };
    $.ajax(o);
}
//获取技防设施
/*
 * @param {type} one 设备类型
 * @param {type} two 属性
 * @param {type} page 页数
 * @returns {undefined}
 */
function getJfss(one, two, page) {
    sblx = one;
    sx = two;
    var o = new AjaxOptions();
    o.put('service_code', 'S44000');
    o.put("sblx", one);
    o.put("dl", two[0]);
    o.put("jg", two[1]);
    o.put("jzw", two[2]);
    o.put("page_size", 10);
    o.put("page", page);
    o.sus = function (data) {
        if (data.result.length > 0) {
            $.pdialog.closeCurrent();
            LocationPointJfss(data);
            $('#STMap_map').css({width: '85%', overflow: 'hidden'});
            $('#contentRight').css('display', 'block');
            $('#mo').text(data.page_count);
            showJfssList(data);
        } else {
            map.clearAllOverlays();
            $('#STMap_map').css({width: '100%', overflow: 'hidden'});
            $('#contentRight').css('display', 'none');
        }
    };
    $.ajax(o);
}

//获取警情信息
/*
 *
 * @param {type} one 案件分类
 * @param {type} two 属性
 * @param {type} page 页数
 * @param {type} ks 开始时间
 * @param {type} jz 截止时间
 * @returns {undefined}
 */
function getJqxx(one, two, page, ks, jz) {
    ajfl = one;
    sx = two;
    kssj = ks;
    jzsj = jz;
    var o = new AjaxOptions();
    o.put('service_code', 'S47000');
    o.put("ajfl", one);
    o.put("dl", two[0]);
    o.put("jg", two[1]);
    o.put("jzw", two[2]);
    o.put("kssj", ks);
    o.put("jzsj", jz);
    o.put("page_size", 10);
    o.put("page", page);
    o.sus = function (data) {
        if (data.result.length > 0) {
            $.pdialog.closeCurrent();
            LocationPointJqxx(data);
            $('#STMap_map').css({width: '85%', overflow: 'hidden'});
            $('#contentRight').css('display', 'block');
            $('#mo').text(data.page_count);
            showJqxxList(data);
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
        var img = '';
        var pt = new STMapMarker();
        //设置对象的唯一id，id要唯一，如果存在重复id，后添加的覆盖已经存在的对象
        if (data.result[i].hylb == 'za_sp') {
            pt.id = data.result[i].spid;
            img = 'images/shop_128px.png'
        }
        else {
            img = 'images/loc128.png';
            pt.id = data.result[i].id;
        }
        pt.point = new STMapPoint(data.result[i].jd, data.result[i].wd);
        //设置对象的图片URL
        pt.img = img;

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
        pt.title = '';
        //设置属性框的内容
        pt.content = "<div class='con'>名称：" + data.result[i].mc + "</div><div class='con'>地址：" + data.result[i].dz + "</div><div class='con'>详情：" + "<a class='det' onclick='detailCs($(this))' name='" + pt.id + "' >点击查看详情</a>" + "</div>";
        //将该对象添加到地图上
        //参数pt为marker对象，参数true表示是否自动调整视野，如果为true，则地图自动定位到该位置
        map.addOverlay(pt, true);
        pt.bound(1000);
    }
}
//添加标记点
function LocationPointDq(data) {
    //先清除之前的搜索结果
    map.clearAllOverlays();
    for (var i = 0; i < data.result.length; i++) {
        var img = '';
        var pt = new STMapMarker();
        pt.id = data.result[i].id;
        //设置对象的唯一id，id要唯一，如果存在重复id，后添加的覆盖已经存在的对象
        if (data.result[i].hylb == 'za_sp') {
            img = 'images/shop_128px.png'
        }
        else {
            img = 'images/loc128.png';
        }
        pt.point = new STMapPoint(data.result[i].jd, data.result[i].wd);
        //设置对象的图片URL
        pt.img = img;
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
        pt.title = '';
        //设置属性框的内容
        pt.content = "<div class='con'>名称：" + data.result[i].mc + "</div><div class='con'>地址：" + data.result[i].dz + "</div><div class='con'>详情：" + "<a class='det' onclick='detailAjdq($(this))' name='" + data.result[i].id + "' hylb='" + data.result[i].hylb + "' >点击查看详情</a>" + "</div>";
        //将该对象添加到地图上
        //参数pt为marker对象，参数true表示是否自动调整视野，如果为true，则地图自动定位到该位置
        map.addOverlay(pt, true);
        pt.bound(1000);
    }
}
function bringDialogToFront($dialog) {
    $("<input />")
            .attr({"id": "_temp_d", "type": "hidden"})
            .appendTo($dialog.find(".formBar"))
            .click(function () {
                $(this).remove();
            });
    setTimeout(function () {
        $('#_temp_d', $dialog).click();
    }, 100);
}
//添加住家户标记点
function LocationPointZjh(data) {
    //先清除之前的搜索结果
    map.clearAllOverlays();
    for (var i = 0; i < data.result.length; i++) {
        var img = '';
        var pt = new STMapMarker();
        //设置对象的唯一id，id要唯一，如果存在重复id，后添加的覆盖已经存在的对象
        pt.id = data.result[i].id;
        pt.point = new STMapPoint(data.result[i].jd, data.result[i].wd);
        img = 'images/loc128.png'
        //设置对象的图片URL
        pt.img = img;
        /*******以下为可选对象属性*******/
        //鼠标提示文字
        pt.label = data.result[i].mph;
        //设置对象尺寸,默认为图片本身尺寸
        pt.size = new STMapSize(30, 30); // 尺寸对象原型：STMapSize(长度,高度);
        //设置对象定位的锚点位置（相对于图片矩形）;取值范围：BC（下边中心点），BL（左下角），BR（右下角），TL（左上角），TC（上边中心点），TR（右上角），ML（左边中心点），MR（右边中心点），CENTER（图片中心点）
        pt.anchor = "CENTER";
        //设置是否点击显示信息窗口，默认为true。
        pt.infowin = true;
        //设置属性框的标题
        pt.title = '';
        //设置属性框的内容
        pt.content = "<div class='con'>名称：" + data.result[i].mph + "</div><div class='con'>地址：" + data.result[i].fzxm + "</div><div class='con'>详情：" + "<a class='det' onclick='detaiZjh($(this))' name='" + data.result[i].id + "'>点击查看详情</a>" + "</div>";
        //将该对象添加到地图上
        //参数pt为marker对象，参数true表示是否自动调整视野，如果为true，则地图自动定位到该位置
        map.addOverlay(pt, true);
        pt.bound(1000);
    }
}
//添加建筑标记点
function LocationPointJz(data) {
    //先清除之前的搜索结果
    map.clearAllOverlays();
    for (var i = 0; i < data.result.length; i++) {
        var img = '';
        var pt = new STMapMarker();
        //设置对象的唯一id，id要唯一，如果存在重复id，后添加的覆盖已经存在的对象
        pt.id = data.result[i].jzid;
        pt.point = new STMapPoint(data.result[i].jd, data.result[i].wd);
        img = 'images/loc128.png';
        //设置对象的图片URL
        pt.img = img;
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
        pt.title = '';
        //设置属性框的内容
        pt.content = "<div class='con'>名称：" + data.result[i].mc + "</div><div class='con'>地址：" + data.result[i].dz + "</div><div class='con'>详情：" + "<a class='det' onclick='detaiJz($(this))' name='" + data.result[i].jzid + "'>点击查看详情</a>" + "</div>";
        //将该对象添加到地图上
        //参数pt为marker对象，参数true表示是否自动调整视野，如果为true，则地图自动定位到该位置
        map.addOverlay(pt, true);
        pt.bound(1000);
    }
}
//添加建筑标记点
function LocationPointSq(data) {
    //先清除之前的搜索结果
    map.clearAllOverlays();
    for (var i = 0; i < data.result.length; i++) {
        var img = '';
        var pt = new STMapMarker();
        var oval = new STMapOval();
        oval.id = data.result[i].sqid + "yuan"; //【必选】对象id
        oval.center = new STMapPoint(data.result[i].jd, data.result[i].wd); //【必选】圆或椭圆的中心点，STMapPoint类型
        oval.width = data.result[i].fw; //【必选】图形的宽度（米）
        oval.height = data.result[i].fw; //【必选】图形的高度（米）
        oval.strokeColor = "red"; //【可选】边线的颜色
        oval.strokeWeight = 1;//【可选】边线宽度
        oval.strokeOpacity = "1.0";//【可选】边线透明度
        oval.dashStyle = "Solid";//【可选】边线线形
        oval.filled = true;//【可选】是否填充
        oval.fillColor = "red";//【可选】填充颜色
        oval.fillOpacity = "0.1";//【可选】填充透明度
        oval.autoClose = false; //【可选】是否自动闭合
        oval.infowin = false; //【可选】是否点击显示信息窗口，默认为true。
        oval.tooltip = ""; //【可选】鼠标提示。
        oval.title = data.result[i].sqmc; //【可选】属性信息库标题，支持html代码
        var sqlb = data.result[i].sqlb;
//        oval.content = "<div class='con'>名称：" + data.result[i].sqmc + "</div><div class='con'>地址：" + data.result[i].dz + "</div><div class='con'>详情：" + "<a class='det' onclick='detaiJz($(this))' name='" + data.result[i].sqid + "' jd='" + data.result[i].jd + "' wd='" + data.result[i].wd + "'>点击查看详情</a>" + "</div>";
        //设置对象的唯一id，id要唯一，如果存在重复id，后添加的覆盖已经存在的对象
        pt.id = data.result[i].sqid;
        pt.point = new STMapPoint(data.result[i].jd, data.result[i].wd);
        if (sqlb == '0') {
            img = 'images/Company_house.png';
        } else if (sqlb == "1") {
            img = 'images/house.png';
        } else if (sqlb == "3") {
            img = 'images/City_house.png';
        } else {
            img == 'images/building.png'
        }

        //设置对象的图片URL
        pt.img = img;
        /*******以下为可选对象属性*******/
        //鼠标提示文字
        pt.label = data.result[i].sqmc;
        //设置对象尺寸,默认为图片本身尺寸
        pt.size = new STMapSize(50, 50); // 尺寸对象原型：STMapSize(长度,高度);
        //设置对象定位的锚点位置（相对于图片矩形）;取值范围：BC（下边中心点），BL（左下角），BR（右下角），TL（左上角），TC（上边中心点），TR（右上角），ML（左边中心点），MR（右边中心点），CENTER（图片中心点）
        pt.anchor = "CENTER";
        //设置是否点击显示信息窗口，默认为true。
        pt.infowin = true;
        //设置属性框的标题
        pt.title = '';
        //设置属性框的内容
        pt.content = "<div class='con'>名称：" + data.result[i].sqmc + "</div><div class='con'>地址：" + data.result[i].dz + "</div><div class='con'>详情：" + "<a class='det' onclick='detaiSq($(this))' name='" + data.result[i].sqid + "' jd='" + data.result[i].jd + "'  wd='" + data.result[i].wd + "'>点击查看详情</a>" + "</div>";
        //将该对象添加到地图上
        //参数pt为marker对象，参数true表示是否自动调整视野，如果为true，则地图自动定位到该位置
        map.addOverlay(pt, true);
        map.addOverlay(oval, true);
        map.setZoom(8);
        pt.bound(1000);
    }
}
function LocationPointJqxx(data) {
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
        pt.label = '';
        //设置对象尺寸,默认为图片本身尺寸
        pt.size = new STMapSize(30, 30); // 尺寸对象原型：STMapSize(长度,高度);
        //设置对象定位的锚点位置（相对于图片矩形）;取值范围：BC（下边中心点），BL（左下角），BR（右下角），TL（左上角），TC（上边中心点），TR（右上角），ML（左边中心点），MR（右边中心点），CENTER（图片中心点）
        pt.anchor = "CENTER";
        //设置是否点击显示信息窗口，默认为true。
        pt.infowin = true;
        //设置属性框的标题
        pt.title = '';
        //设置属性框的内容
        pt.content = "<div class='con'>警情时间：" + data.result[i].jqsj + "</div><div class='con'>警情介绍：" + data.result[i].jqjs + "</div><div class='con'>详情：" + "<a class='det' onclick='detailJqxx($(this))' name='" + data.result[i].id + "'>点击查看详情</a>" + "</div>" + "</div>";
        //将该对象添加到地图上
        //参数pt为marker对象，参数true表示是否自动调整视野，如果为true，则地图自动定位到该位置
        map.addOverlay(pt, true);
        pt.bound(1000);
    }
}
function LocationPointJfss(data) {
    //先清除之前的搜索结果
    map.clearAllOverlays();
    for (var i = 0; i < data.result.length; i++) {
        var img = '';
        if (data.result[i].sblx == "0") {
            img = 'images/qiang.png';
        } else if (data.result[i].sblx == "1") {
            img = 'images/qiu.png';
        }
        var pt = new STMapMarker();
        //设置对象的唯一id，id要唯一，如果存在重复id，后添加的覆盖已经存在的对象
        pt.id = data.result[i].id;
        pt.point = new STMapPoint(data.result[i].jd, data.result[i].wd);
        //设置对象的图片URL
        pt.img = img;
        /*******以下为可选对象属性*******/
        //鼠标提示文字
        pt.label = data.result[i].azdm;
        //设置对象尺寸,默认为图片本身尺寸
        pt.size = new STMapSize(30, 30); // 尺寸对象原型：STMapSize(长度,高度);
        //设置对象定位的锚点位置（相对于图片矩形）;取值范围：BC（下边中心点），BL（左下角），BR（右下角），TL（左上角），TC（上边中心点），TR（右上角），ML（左边中心点），MR（右边中心点），CENTER（图片中心点）
        pt.anchor = "CENTER";
        //设置是否点击显示信息窗口，默认为true。
        pt.infowin = true;
        //设置属性框的标题
        pt.title = "";
        //设置属性框的内容
        pt.content = "<div class='con'>安装点：" + data.result[i].azdm + "</div><div class='con'>详情：" + "<a class='det' onclick='detailJfss($(this))' name='" + data.result[i].id + "'>点击查看详情</a>" + "</div>" + "</div>";
        //将该对象添加到地图上
        //参数pt为marker对象，参数true表示是否自动调整视野，如果为true，则地图自动定位到该位置
        map.addOverlay(pt, true);
        pt.bound(1000);
    }
}
function detailAjdq(data) {
    var url = '';
    var hylb = $(data).attr('hylb');
    if ("za_yl" == hylb) {
        url = 'page/za/za0002-yldetail.html';
    } else if ("za_sp" == hylb) {
        url = 'page/za/za0001-shopdetail.html';
    } else if ("za_wl" == hylb) {
        url = 'page/za/za0003-wldetail.html';
    } else if ("za_wb" == hylb) {
        url = 'page/za/za0005-wbdetail.html';
    } else if ("za_lg" == hylb) {
        url = 'page/za/za0006-lgdetail.html';
    } else if ("xb_xf" == hylb) {
        url = 'page/xb/xb0001-xfdetail.html';
    } else {
        url = 'page/za/za0007-csdetail.html';
    }
    $.pdialog.open(url, 'mydetail', "详情",
            {"width": 580, "height": 560, mask: true,
                param: {hylb: hylb, hyid: $(data).attr('name')},
                close: function (param) {
                    return true;
                }
            });

}
function detailCs(data) {
    var url = '';
    if ("za_yl" == hy) {
        url = 'page/za/za0002-yldetail.html';
    } else if ("za_sp" == hy) {
        url = 'page/za/za0001-shopdetail.html';
    } else if ("za_wl" == hy) {
        url = 'page/za/za0003-wldetail.html';
    } else if ("za_wb" == hy) {
        url = 'page/za/za0005-wbdetail.html';
    } else if ("za_lg" == hy) {
        url = 'page/za/za0006-lgdetail.html';
    } else if ("xb_xf" == hy) {
        url = 'page/xb/xb0001-xfdetail.html';
    } else {
        url = 'page/za/za0007-csdetail.html';
    }
    $.pdialog.open(url, 'mydetail', "详情",
            {"width": 580, "height": 560, mask: true,
                param: {hylb: hy, hyid: $(data).attr('name')},
                close: function (param) {
                    return true;
                }
            });

}
function  detaiZjh(data) {
    $.pdialog.open("page/za/za0009-zjhdetail.html", 'mydetail', "详情",
            {"width": 580, "height": 280, mask: false,
                param: {hyid: $(data).attr('name'), hylb: 'za_zjh'},
                close: function (param) {
                    return true;
                }
            });
}
function  detaiJz(data) {
    $.pdialog.open("page/add/add0001-loudetail.html", 'detailJz', "详情",
            {"width": 580, "height": 280, mask: false,
                param: {jzid: $(data).attr('name')},
                close: function (param) {
//                    map.getOverlayById($(data).attr('name')).moveable = false;//是否可以拖动
                    return true;
                }
            });
}
function  detaiSq(data) {
    STMapCloseInfoWin();//关闭对话框
    $.pdialog.open("page/add/add0001-sqdetail.html", 'detailSq', "详情",
            {"width": 580, "height": 450, mask: false,
                param: {sqid: $(data).attr('name'), jd: $(data).attr('jd'), wd: $(data).attr('wd')},
                close: function (param) {
                    return true;
                }
            });
}
function detailJfss(data) {
    $.pdialog.open("page/za/za0004-jfssdetail.html", 'detailJfss', "详情",
            {"width": 580, "height": 280, mask: true,
                param: {id: $(data).attr('name')},
                close: function (param) {
                    map.getOverlayById($(data).attr('name')).moveable = false;//是否可以拖动
                    return true;
                }
            });
}
function detailJqxx(data) {
    $.pdialog.open("page/za/za0007-jqxxdetail.html", 'detailJqxx', "详情",
            {"width": 580, "height": 320, mask: true,
                param: {id: $(data).attr('name')},
                close: function (param) {
                    map.getOverlayById($(data).attr('name')).moveable = false;//是否可以拖动
                    return true;
                }
            });
}
//显示场所查询结果
function showAjdqList(data) {
    var text = '';
    map.locateMap(new STMapPoint(data.result[0].jd, data.result[0].wd), 1);
    for (var i = 0; i < data.result.length; i++) {
        text += "<li onclick='clickLi($(this))' name='" + data.result[i].id + "'><p>" + data.result[i].mc + "-<a onclick='detailAjdq($(this))' name='" + data.result[i].id + "' hylb='" + data.result[i].hylb + "'>详情</a></p><p>地址：" + data.result[i].dz + "</p></li>";
    }
    $('#dataList').html(text);
}
//显示场所查询结果
function showList(data) {
    var text = '';
    map.locateMap(new STMapPoint(data.result[0].jd, data.result[0].wd), 1);
    for (var i = 0; i < data.result.length; i++) {
        text += "<li onclick='clickLi($(this))' name='" + data.result[i].id + "'><p>" + data.result[i].mc + "-<a onclick='detailCs($(this))' name='" + data.result[i].id + "'>详情</a></p><p>地址：" + data.result[i].dz + "</p></li>";
    }
    $('#dataList').html(text);
}
//显示建筑查询结果
function showSPList(data) {
    var text = '';
    map.locateMap(new STMapPoint(data.result[0].jd, data.result[0].wd), 1);
    for (var i = 0; i < data.result.length; i++) {
        text += "<li onclick='clickLi($(this))' name='" + data.result[i].spid + "'><p>" + data.result[i].mc + "-<a onclick='detailCs($(this))' name='" + data.result[i].spid + "'>详情</a></p><p>联系方式：" + data.result[i].lxfs + "</p></li>";
    }
    $('#dataList').html(text);
}
function searchZjh(omph, odz, m, page) {
    mph = omph;
    dz = odz;
    mc = m;
    fylb = 'search_zjh';
    var o = new AjaxOptions();
    o.isDialog = true; //为弹出窗口
    o.put("service_code", "S20012");
    o.put("mph", mph);
    o.put("dz", dz);
    o.put("fzxm", m);
    o.put("page_size", 10);
    o.put("page", page);
    o.sus = function (data) {
        if (data.result.length > 0) {
            $.pdialog.closeCurrent();
            LocationPointZjh(data);
            $('#STMap_map').css({width: '85%', overflow: 'hidden'});
            $('#contentRight').css('display', 'block');
            $('#mo').text(data.page_count);
            showZjhList(data);
        } else {
            map.clearAllOverlays();
            $('#STMap_map').css({width: '100%', overflow: 'hidden'});
            $('#contentRight').css('display', 'none');
        }
    };
    $.ajax(o);
}
//查询消防合格证过期日期
function searchAjdq(dqsj, page) {
    fylb = 'search_ajdq';
    var o = new AjaxOptions();
    o.isDialog = true; //为弹出窗口
    o.put("service_code", "P30010");
    o.put("dqsj", dqsj);
    o.put("page_size", 10);
    o.put("page", page);
    o.sus = function (data) {
        if (data.result.length > 0) {
            $.pdialog.closeCurrent();
            LocationPointDq(data);
            $('#STMap_map').css({width: '85%', overflow: 'hidden'});
            $('#contentRight').css('display', 'block');
            $('#mo').text(data.page_count);
            showAjdqList(data);
        } else {
            map.clearAllOverlays();
            $('#STMap_map').css({width: '100%', overflow: 'hidden'});
            $('#contentRight').css('display', 'none');
        }
    };
    $.ajax(o);
}
//显示建筑查询结果
function showZjhList(data) {
    var text = '';
    map.locateMap(new STMapPoint(data.result[0].jd, data.result[0].wd), 1);
    for (var i = 0; i < data.result.length; i++) {
        text += "<li onclick='clickLi($(this))' name='" + data.result[i].id + "'><p>" + data.result[i].mph + "-<a onclick='detaiZjh($(this))' name='" + data.result[i].id + "'>详情</a></p><p>联系方式：" + data.result[i].lxfs + "</p></li>";
    }
    $('#dataList').html(text);
}
//显示建筑查询结果
function showJZList(data) {
    var text = '';
    map.locateMap(new STMapPoint(data.result[0].jd, data.result[0].wd), 1);
    for (var i = 0; i < data.result.length; i++) {
        text += "<li onclick='clickLi($(this))' name='" + data.result[i].jzid + "'><p>" + data.result[i].mc + "-<a onclick='detaiJz($(this))' name='" + data.result[i].jzid + "'>详情</a></p><p>联系方式：" + data.result[i].lxfs + "</p></li>";
    }
    $('#dataList').html(text);
}
//显示建筑查询结果
function showSqList(data) {
    var text = '';
    map.locateMap(new STMapPoint(data.result[0].jd, data.result[0].wd), 1);
    for (var i = 0; i < data.result.length; i++) {
        text += "<li onclick='clickSqLi($(this))' name='" + data.result[i].sqid + "'><p>" + data.result[i].sqmc + "-<a onclick='detaiSq($(this))' name='" + data.result[i].sqid + "' jd='" + data.result[i].jd + "'  wd='" + data.result[i].wd + "'>详情</a></p><p>地址：" + data.result[i].dz + "</p></li>";
    }
    $('#dataList').html(text);
}

//显示技防设施结果
function showJfssList(data) {
    var text = '';
    for (var i = 0; i < data.result.length; i++) {
        text += "<li onclick='clickLi($(this))' name='" + data.result[i].id + "'><p>" + data.result[i].azdm + "-<a onclick='detailJfss($(this))' name='" + data.result[i].id + "'>详情</a></p></li>";
    }
    $('#dataList').html(text);
}
//显示警情信息结果
function showJqxxList(data) {
    var text = '';
    for (var i = 0; i < data.result.length; i++) {
        text += "<li onclick='clickLi($(this))' name='" + data.result[i].id + "'><p>" + data.result[i].jqsj + "-<a onclick='detailJqxx($(this))' name='" + data.result[i].id + "'>详情</a></p><p>联系方式：" + data.result[i].lxdh + "</p></li>";
    }
    $('#dataList').html(text);
}
//隐藏滚动条
function scroll() {
    $('#STMap_map').css('overflow', 'hidden');
}
//获取建筑场所列表
function getJZCS(h, page, rid) {
    hy = h;
    var o = new AjaxOptions();
    o.isDialog = true; //为弹出窗口
    o.put("service_code", "S20004");
    o.put("hy", hy);
    o.put("page_size", 10);
    o.put("rid", rid);
    o.put("page", page);
    o.sus = function (data) {
        if (data.result.length > 0) {
            $.pdialog.closeCurrent();
            LocationPoint(data);
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
var user = sessionStorage.user ? JSON.parse(sessionStorage.user) : {};
window.ssjws = user.ssjws;//定义一个用户所属警务室的全局变量
function myInitUi($page) {
    //于判断用户是否有修改权限,xgqx:0-无,1-仅修改,2-仅删除,3-修改+删除
    switch (user.xgqx) {
        case '1':
            $('._delete').hide();
            $('._update').show();
            break;
        case '2':
            $('._delete').show();
            $('._update').hide();
            break;
        case '3':
            $('._delete').show();
            $('._update').show();
            break;
        default:
            $('._delete,._update').hide();
            break;
    }
}


//全局变量：场所名称，所属行业,设备类型,分页类别,开始时间，截止时间,案件分类,建筑id,建筑经度，建筑维度，是否是搜索,是否查询
var mc, hy, sblx, fylb, gangjd, gangwd, poly, kssj, jzsj, ajfl, jzid, jzjd, jzwd, sjxz, isSearch = false, dz, mph, currentPage = 1, detail = false, currentsqid, currentjwq;
var sx = [];//属性点
//var ssjws = '';
AjaxOptions.prototype.url = BaseUrl + 'ajax-sqjw.do';         //修改ajax url

/**
 * 发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。XMLHttpRequest 对象是唯一的参数。
 * 这是一个 Ajax 事件。如果返回false可以取消本次ajax请求。
 * 类型： function(XMLHttpRequest)
 */
AjaxOptions.prototype.beforeSend = function (XMLHttpRequest) {
    if (this.$form && this.$form.length) {//判断表单是否为空
        this.data = this.$form.serialize() + '&' + this.data;
        if (!$.trim(this.data)) {
            this.data = this.$form.find("form").serialize() + '&' + this.data;
        }
    }
    var nowTime = getNowTime();
    console.debug("url:\t" + this.url + "\ndata:\t" + this.data.replace(/&/g, "\n\t") + "\ntype:\t" + this.type + "\ntime:\t" + nowTime);
    if (this.isAlert) {
//            showLoading();
    }
    return true;
};

var server_root = "sqjw_upload\\";