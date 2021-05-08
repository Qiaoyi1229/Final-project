let col_none = $(".coll-store-none"), col_show = $(".coll-store-show");
let removeColl, addColl, addContent, pages, currentPage = 1;

$(".update-item").click(function () {
    let update_item = "ok";
    $.ajax({
        url: "/price/",
        type: "GET",
        data: {
            "update_item": update_item
        },
        success: function (response) {
            let item = response.new_contact_list;
            let content = "";
            $.each(item, function (i, val) {
                content += "<div class=\"plan-container store-none\">"
                    + "<div class=\"plan\"><div class=\"plan-header\"><div class=\"plan-title\">"
                    + val[4] + "<span class=\"follow-text-col\" data-id=" + val[0] + ">关注</span></div><div class=\"plan-price\">"
                    + "<span class=\"note\">￥</span>" +
                    val[10] + "<span class=\"term\">每月</span>" + "</div></div><div class=\"plan-features\">"
                    + "<ul><li><strong>" + val[5] + "</strong> 类型</li>" + "<li><strong>" + val[9] + "</strong></li>"
                    + "<li><strong>朝向</strong>" + val[8] + "</li><li><strong>毗邻</strong>" + val[6] + "</li>"
                    + "<li><strong>" + val[7] + "</strong></li></ul></div><div class=\"plan-actions\">" +
                    "<a href=\"javascript:;\" class=\"btn\">购买</a></div></div></div>";
            });
            $(".coll-store-none").html(content);
        }
    })
});


$(".switch-btn").click(function () {
    if ($(this).text() === "我的收藏") {
        $(this).text("价格推荐");
        $(".update-item").parent().css("display", "block");
        $(".update-next").css("display", "none");
        $(".update-up").css("display", "none");
        col_show.css("display", "none");
        col_none.css("display", "block");
    } else {
        $(this).text("我的收藏");
        $(".update-item").parent().css("display", "none");
        $(".update-next").css("display", "block");
        $(".update-up").css("display", "block");
        col_show.css("display", "block");
        col_none.css("display", "none");
    }
});


col_none.on("mouseenter mouseleave", ".plan", function (e) {
    switch (e.type) {
        case "mouseenter": {
            $(this).find("span").eq(0).css("display", "block");
            break;
        }
        case "mouseleave": {
            $(this).find("span").eq(0).css("display", "none");
            break;
        }
        default:
            break;
    }
});

col_none.on("click", ".follow-text-col", function () {
    let data = $(this).parents(".plan"),
        data_id = $(this).attr("data-id");
    if ($(this).text() === "已关注") {
        $(this).text("关注");
        data.removeClass("orange");
        data.parent().removeClass("addCol");
        $.ajax({
            url: "/price/",
            type: "POST",
            data: {
                "data_id": data_id,
                "new": false
            },
            success: function (response) {
            }
        })
    } else {
        $(this).text("已关注");
        data.addClass("orange");
        data.parent().addClass("addCol");
        addColl = col_none.find(".addCol");
        $.ajax({
            url: "/price/",
            type: "POST",
            data: {
                "data_id": data_id,
                "new": true
            },
            success: function (response) {
                if (addColl.length > 0) {
                    $.each(addColl, function (i, val) {
                        addContent = "<div class=\"plan-container store-show\" style=\"display: block\">" + val.innerHTML + "<\div>";
                        $(".coll-store-show").append(addContent);
                        addColl.removeClass("addCol");
                    });
                }
            }
        })
    }
});

col_show.on("mouseenter mouseleave", ".plan", function (e) {
    switch (e.type) {
        case "mouseenter": {
            $(this).find("span").eq(0).css("display", "block");
            break;
        }
        case "mouseleave": {
            $(this).find("span").eq(0).css("display", "none");
            break;
        }
        default:
            break;
    }
});

col_show.on("click", ".follow-text-col", function () {
    let data = $(this).parents(".plan"),
        data_id = $(this).attr("data-id");
    if ($(this).text() === "已关注") {
        $(this).text("关注");
        data.removeClass("orange");
        data.parent().addClass("removeCol");
        removeColl = $(".coll-store-show").children(".removeCol");
        if (removeColl.length > 0) {
            removeColl.remove();
        }
        $.ajax({
            url: "/price/",
            type: "POST",
            data: {
                "data_id": data_id,
                "new": false
            },
            success: function (response) {
            }
        })
    } else {
        $(this).text("已关注");
        data.addClass("orange");
        data.parent().removeClass("removeCol");
        $.ajax({
            url: "/price/",
            type: "POST",
            data: {
                "data_id": data_id,
                "new": true
            },
            success: function (response) {
            }
        })
    }
});

$(".update-next").click(function () {
    pages = col_show.children().length;
    pages = Math.ceil(pages / 3);
    if (pages > currentPage) {
        if (pages > 1) {
            currentPage++;
            $.each(col_show.children(), function (i, val) {
                val.hidden = !((3 * (currentPage - 1) <= i) && (i < 3 * currentPage));
            })
        }
    }
});

$(".update-up").click(function () {
    pages = col_show.children().length;
    pages = Math.ceil(pages / 3);
    if (1 < currentPage) {
        if (pages > 1) {
            currentPage--;
            $.each(col_show.children(), function (i, val) {
                val.hidden = !((3 * (currentPage - 1) <= i) && (i < 3 * currentPage));
            })
        }
    }
});

