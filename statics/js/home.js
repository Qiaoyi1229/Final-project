//判断数据是否为Null或者undefined或者为空字符串
function CheckIsNullOrEmpty(value) {
    //正则表达式用于判斷字符串是否全部由空格或换行符组成
    var reg = /^\s*$/;
    //返回值为true表示不是空字符串
    return (value != null && value != undefined && !reg.test(value));
};

$('.CLICKDATA').click(function () {
    var n = $(this).attr("data-type"),
        a = $(this).position().left + $(this).width() / 2 - 15;
    $(this).index() < 1 ? $(".left-i").css("left", "40px") : $(".left-i").css("left", a), n.indexOf("疑问") > 0 ? $(".home-ico").val("开始搜索") : $(".home-ico").val("开始找房");
    var i = $(this),
        s = i.index(),
        r = i.attr("data-type");

    $(this).addClass("check").siblings("li").removeClass("check");
    $(".searchBox .ditu-icon").addClass("none");
    var d = $(".searchBox .ditu-icon")[s];
    var o = $("#keyword-box");
    $(d).attr("href") && $(d).removeClass("none"), o.attr("placeholder", r), o.val("");
});

$('#findHouse').click(function () {
    var q = $(".check"),
        w = $("#keyword-box");
    console.log(q.attr("data-type"));
    console.log(w.val());
    if (CheckIsNullOrEmpty(w.val())) {
        console.log('ok');
        $(location).attr('href', '/index/?t='+w.val());
    } else {
        console.log('no');
        $(location).attr('href', '/index/');
    }
});

function sleep(d) {
    for (var t = Date.now(); Date.now() - t <= d;) {}
}

$(function () {
    var num = 0;
    var id = setInterval(function () {
        var li = $(".home-num ul li").eq(0);
        num = li.height() - 1;
        li.height(num);

        if (num < 0) {
            $(".home-num ul").append("<li style=\"height: 35px;\">" + li.text() + "</li>");
            li.remove();
            // sleep(2000);睡眠2秒，会造成些许卡顿
        }
    }, 50);

});