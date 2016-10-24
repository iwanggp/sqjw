
//分页的显示与隐藏
function xifenye() {
    $("#uljia").empty();
    $("#xab").toggle();
    //显示出的一共多少页
    var uljia = $("#uljia");
    var page = parseInt($("#xiye").html());//获取当前的页数
    var pages = parseInt($("#mo").html());//获取当前的总页数
    for (var i = 1; i <= pages; i++)
    {
        var H = "<li  onclick='fl(" + i + "," + pages + ")'>" + i + "</li>";//添加一共多少页和点击事件
        uljia.append(H);
    }
    scrolltop(page);
}
//点击分页显示的方法
function fl(p1, p2) {
    $("#xiye").empty();
    if (fylb == 'search_cs') {
        getCS(hy, mc, p1);
    } else if (fylb == 'search_zjh') {
        searchZjh(mph, dz, mc, p1);
    } else if (fylb == 'search_sp') {
        getSpCS(hy, mc, p1);
    } else if (fylb == 'search_jfss') {
        getJfss(sblx, sx, p1);
    } else if (fylb == 'search_jz') {
        getJZ(mc, p1);
    } else if (fylb == 'search_jqxx') {
        getJqxx(ajfl, sx, p1, kssj, jzsj);
    } else if (fylb == 'search_sq') {
        getSq(mc, p1);
    } else if (fylb == 'search_ajdq') {
        searchAjdq(sjxz, p1);
    }
    $("#xiye").html(p1);//给显示的页数赋值

}
//分页的的上一页和下一页
function topclick() {
    var v = document.getElementById("xiye");
    var num = v.innerHTML;
    $('#xab').hide();
    if (num > 1)
    {
        num--;
        v.innerHTML = num;
        var hei = 25 * num - 25;
        $("#xab").scrollTop(hei);
        if (fylb == 'search_cs') {
            getCS(hy, mc, num);
        } else if (fylb == 'search_zjh') {
            searchZjh(mph, dz, mc, num);
        } else if (fylb == 'search_sp') {
            getSpCS(hy, mc, num);
        } else if (fylb == 'search_jfss') {
            getJfss(sblx, sx, num);
        } else if (fylb == 'search_jqxx') {
            getJqxx(ajfl, sx, num, kssj, jzsj);
        } else if (fylb == 'search_jz') {
            getJZ(mc, num);
        } else if (fylb == 'search_sq') {
            getSq(mc, num);
        } else if (fylb == 'search_ajdq') {
            searchAjdq(sjxz, num);
        }
    }
}
function downclick() {
    var pages = parseInt($("#mo").html());//获取当前的总页数
    $('#xab').hide();
    var v = $("#xiye");
    var num = parseInt(v.html());
    if (num < pages) {
        num = ++num;
        v.html(num);
        scrolltop(num);
        if (fylb == 'search_cs') {
            getCS(hy, mc, num);
        } else if (fylb == 'search_zjh') {
            searchZjh(mph, dz, mc, num);
        } else if (fylb == 'search_sp') {
            getSpCS(hy, mc, num);
        } else if (fylb == 'search_jfss') {
            getJfss(sblx, sx, num);
        } else if (fylb == 'search_jqxx') {
            getJqxx(ajfl, sx, num, kssj, jzsj);
        } else if (fylb == 'search_jz') {
            getJZ(mc, num);
        } else if (fylb == 'search_sq') {
            getSq(mc, num);
        } else if (fylb == 'search_ajdq') {
            searchAjdq(sjxz, num);
        }
    }
}
//分页的的首页和未页
function first() {
    var v = document.getElementById("xiye");
    v.innerHTML = 1;
    scrolltop(v.innerHTML);
}
function last() {
    var v = document.getElementById("xiye");
    var l = document.getElementById("mo");
    v.innerHTML = l.innerHTML;
    scrolltop(v.innerHTML);
}
//滚动条
function scrolltop(top) {
    var hei = 25 * top - 25;
    $("#xab").scrollTop(hei);
}