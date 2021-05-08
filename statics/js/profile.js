$(function () {
    $(".faq-tabbable").find("li").each(function () {
        var a = $(this).find("a:first")[0];
        if ($(a).attr("href") === location.pathname) {
            $(this).addClass("active");
        } else if (location.pathname === "/tools/expectation/" || location.pathname === "/tools/expectation/" || location.pathname === "/tools/release/") {
            if ($(a).attr("href") === "/tools/") {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        } else {
            $(this).removeClass("active");
        }
    });
});