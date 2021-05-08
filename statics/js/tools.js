$(".tools-img").on({
    mouseenter: function () {
        let img1 = $(this).children(":first"), img2 = img1.next();
        img1.css("display", "none");
        img2.css("display", "block");
        img2.css("transform", "scale(1.2)");
        img2.next().css("display", "block");
    },
    mouseleave: function () {
        let img1 = $(this).children(":first"), img2 = img1.next();
        img1.css("display", "block");
        img2.css("display", "none");
        img2.css("transform", "scale(1)");
        img2.next().css("display", "none");
    }
});

$(".H-tool-conten").on({
    mouseenter: function () {
        $(this).prev().css("transform", "scale(1.2)");
        $(this).css("display", "block")
    }
});