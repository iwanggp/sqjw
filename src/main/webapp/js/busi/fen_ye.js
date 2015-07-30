
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
    getCS(hy, mc, p1);
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
        getCS(hy, mc, num);
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
        getCS(hy, mc, num);
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