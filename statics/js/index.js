function changeURLArg(url, arg, arg_val) {
    /// <summary>
    /// url参数替换值
    /// </summary>
    /// <param name="url">目标url </param>
    /// <param name="arg">需要替换的参数名称</param>
    ///<param name="arg_val">替换后的参数的值</param>
    /// <returns>参数替换后的url </returns>
    var pattern = arg + '=([^&]*)';
    var replaceText = arg + '=' + arg_val;
    if (url.match(pattern)) {
        var tmp = '/(' + arg + '=)([^&]*)/gi';
        tmp = url.replace(eval(tmp), replaceText);
        return tmp;
    } else {
        if (url.match('[\?]')) {
            return url + '&' + replaceText;
        } else {
            return url + '?' + replaceText;
        }
    }
}

//判断数据是否为Null或者undefined或者为空字符串
function CheckIsNullOrEmpty(value) {
    //正则表达式用于判斷字符串是否全部由空格或换行符组成
    var reg = /^\s*$/;
    //返回值为true表示不是空字符串
    return (value != null && value != undefined && !reg.test(value));
}


$('.filter__district li a').click(function () {
    var w = $(this),
        href = window.location.href;
    href = href.replace('#', '');
    var newUrl = changeURLArg(href, 'district', w.text());
    $(location).attr('href', newUrl);
});

$('.filter__ul li a').click(function () {
    var w = $(this),
        href = window.location.href;
    href = href.replace('#', '');
    var newUrl = changeURLArg(href, 'form', w.text());
    $(location).attr('href', newUrl);
});

$('.filter__direction li a').click(function () {
    var w = $(this),
        href = window.location.href;
    href = href.replace('#', '');
    var newUrl = changeURLArg(href, 'direction', w.text());
    $(location).attr('href', newUrl);
});

$('.filter__money li a').click(function () {
    var w = $(this),
        href = window.location.href;
    href = href.replace('#', '');
    var newUrl = changeURLArg(href, 'money', w.text());
    $(location).attr('href', newUrl);
});


$('.filter__area li a').click(function () {
    var w = $(this),
        href = window.location.href;
    href = href.replace('#', '');
    var newUrl = changeURLArg(href, 'area', w.text());
    $(location).attr('href', newUrl);
});


$('.filter__size__button').click(function () {
    var lowSize = $('.filter__lowsize__input'),
        highSize = $('.filter__highsize__input'),
        href = window.location.href;
    href = href.replace('#', '');
    if (CheckIsNullOrEmpty(lowSize.val()) && CheckIsNullOrEmpty(highSize.val())) {
        var size = lowSize.val() + "-" + highSize.val() + "㎡";
        var newUrl = changeURLArg(href, 'area', size);
        $(location).attr('href', newUrl);
    } else {
        $(location).attr('href', href);
    }
});


$('.filter__price__button').click(function () {
    var lowPrice = $('.filter__lowprice__input'),
        highPrice = $('.filter__highprice__input'),
        href = window.location.href;
    href = href.replace('#', '');
    if (CheckIsNullOrEmpty(lowPrice.val()) && CheckIsNullOrEmpty(highPrice.val())) {
        var price = lowPrice.val() + "-" + highPrice.val() + "元";
        var newUrl = changeURLArg(href, 'money', price);
        $(location).attr('href', newUrl);
    } else {
        $(location).attr('href', href);
    }
});


$(".content__list--item").on({
    mouseenter: function () {
        let show_btn = $(this).children(".content__list--item--main").children(".listButtonContainer");
        if (show_btn.children(".followBtn").children().length === 0) {
            content = "<span class=\"follow-text\">关注</span>";
            show_btn.children(".followBtn").html(content);
        }
        show_btn.css("display", "block");
    },
    mouseleave: function () {
        let show_btn = $(this).children(".content__list--item--main").children(".listButtonContainer");
        show_btn.css("display", "none");
    }
});

$(".followBtn").on("click", "span", function () {
    let data_id = $(this).parent().attr("data-id");
    console.log(data_id);
    if ($(this).text() === "关注") {
            $(this).text("已关注");
            $.ajax({
                url: "/index/",
                type: "POST",
                data: {
                    "data_id": data_id,
                    "new": true
                },
                success: function (response) {
                }
            })
        } else if ($(this).text() === "已关注") {
            $(this).text("关注");
            $.ajax({
                url: "/index/",
                type: "POST",
                data: {
                    "data_id": data_id,
                    "new": false
                },
                success: function (response) {
                }
            })
        }
});
