var isBlur = false;


$(".u-select-area input").on({
    // 区域输入框焦点， 点击显示下拉列表
    focus: function () {
        $(this).next().css("display", "block");
    },
    // 失去区域输入框焦点， 隐藏下拉列表
    blur: function () {
        if (isBlur === true) {
            return false;
        }
        $(this).next().css("display", "none");
    },
    // 按下按键输入
    keyup: function () {
        var uinput = $(this);
        $.ajax({
            url: "/tools/expectation/",
            type: "POST",
            data: {
                "name": $(this).val()
            },
            success: function (response) {
                var licontent = "";
                var uul = uinput.next();
                var dis_content = response.new_district_item;
                var area_content = response.area_item;
                if (dis_content.length !== 0) {
                    licontent = "";
                    $.each(dis_content, function (index, value) {
                        licontent += "<li>" + value + "</li>";
                    });
                    uul.html(licontent);
                    // $(".u-select-area ul li").on({
                    //     click: function () {
                    //         isBlur = false;
                    //         $(".u-input-area").val($(this).text());
                    //         $(this).parent().css("display", "none");
                    //         var uinput = $(this);
                    //         $.ajax({
                    //             url: "/tools/expectation/",
                    //             type: "POST",
                    //             data: {
                    //                 "name": $(this).text(),
                    //             },
                    //             success: function (response) {
                    //                 var licontent = "";
                    //                 var uul = uinput.parent();
                    //                 var dis_content = response.new_district_item;
                    //                 var area_content = response.area_item;
                    //                 if (dis_content.length !== 0) {
                    //                     licontent = "";
                    //                     $.each(dis_content, function (index, value) {
                    //                         licontent += "<li>" + value + "</li>";
                    //                     });
                    //                     uul.html(licontent);
                    //                     $(".u-select ul li").on({
                    //                         click: function () {
                    //                             isBlur = false;
                    //                             $(".u-input-area").val($(this).text());
                    //                             $(this).parent().css("display", "none");
                    //                             $.ajax({
                    //                                 url: "/tools/expectation/",
                    //                                 type: "POST",
                    //                                 data: {
                    //                                     "name": $(this).text()
                    //                                 },
                    //                                 success: function () {
                    //
                    //                                 }
                    //                             });
                    //                         },
                    //                         mouseenter: function () {
                    //                             isBlur = true;
                    //                         },
                    //                         mouseleave: function () {
                    //                             isBlur = false;
                    //                         }
                    //                     });
                    //                 }
                    //                 if (area_content.length !== 0) {
                    //                     licontent = "";
                    //                     $.each(area_content, function (index, value) {
                    //                         licontent += "<li>" + value + "</li>";
                    //                     });
                    //                     $(".u-select-road ul").html(licontent);
                    //                     $(".u-select-road ul li").on({
                    //                         click: function () {
                    //                             isBlur = false;
                    //                             $(".u-select-road input").val($(this).text());
                    //                             $(this).parent().css("display", "none");
                    //                             $.ajax({
                    //                                 url: "/tools/expectation/",
                    //                                 type: "POST",
                    //                                 data: {
                    //                                     "name": $(".u-select-area input").val()
                    //                                 },
                    //                                 success: function (response) {
                    //                                     var licontent = "";
                    //                                     var area_content = response.area_item;
                    //                                     if (area_content.length !== 0) {
                    //                                         licontent = "";
                    //                                         console.log(area_content);
                    //                                         $.each(area_content, function (index, value) {
                    //                                             licontent += "<li>" + value + "</li>";
                    //                                         });
                    //                                         $(".u-select-road ul").html(licontent);
                    //                                     }
                    //                                 }
                    //                             });
                    //                         },
                    //                         mouseenter: function () {
                    //                             isBlur = true;
                    //                         },
                    //                         mouseleave: function () {
                    //                             isBlur = false;
                    //                         }
                    //                     });
                    //                 }
                    //             }
                    //         });
                    //     },
                    //     mouseenter: function () {
                    //         isBlur = true;
                    //     },
                    //     mouseleave: function () {
                    //         isBlur = false;
                    //     }
                    // });
                }
                if (area_content.length !== 0) {
                    licontent = "";
                    $.each(area_content, function (index, value) {
                        licontent += "<li>" + value + "</li>";
                    });
                    $(".u-select-road ul").html(licontent);
                    // $(".u-select-road ul li").on({
                    //     click: function () {
                    //         isBlur = false;
                    //         $(".u-select-road input").val($(this).text());
                    //         $(this).parent().css("display", "none");
                    //         $.ajax({
                    //             url: "/tools/expectation/",
                    //             type: "POST",
                    //             data: {
                    //                 "name": uinput.val(),
                    //                 "area": $(".u-select-road").val()
                    //             },
                    //             success: function (response) {
                    //                 var licontent = "";
                    //                 var area_content = response.area_item;
                    //                 if (area_content.length !== 0) {
                    //                     licontent = "";
                    //                     $.each(area_content, function (index, value) {
                    //                         licontent += "<li>" + value + "</li>";
                    //                     });
                    //                     $(".u-select-road ul").html(licontent);
                    //                 }
                    //             }
                    //         });
                    //     },
                    //     mouseenter: function () {
                    //         isBlur = true;
                    //     },
                    //     mouseleave: function () {
                    //         isBlur = false;
                    //     }
                    // });
                }
            }
        });
    }
});

$(".u-select-area ul").on({
    click: function (e) {
        isBlur = false;
        var qq = $(e.target);
        $(".u-input-area").val(qq.text());
        $(this).css("display", "none");
        var uinput = $(this);
        $.ajax({
            url: "/tools/expectation/",
            type: "POST",
            data: {
                "name": qq.text()
            },
            success: function (response) {
                var licontent = "";
                var uul = uinput;
                var dis_content = response.new_district_item;
                var area_content = response.area_item;
                if (dis_content.length !== 0) {
                    licontent = "";
                    $.each(dis_content, function (index, value) {
                        licontent += "<li>" + value + "</li>";
                    });
                    uul.html(licontent);
                    // $(".u-select-area ul li").on({
                    //     click: function () {
                    //         isBlur = false;
                    //         $(".u-input-area").val($(this).text());
                    //         $(this).parent().css("display", "none");
                    //         var uinput = $(this);
                    //         $.ajax({
                    //             url: "/tools/expectation/",
                    //             type: "POST",
                    //             data: {
                    //                 "name": $(this).text()
                    //             },
                    //             success: function (response) {
                    //                 var licontent = "";
                    //                 var uul = uinput.parent();
                    //                 var dis_content = response.new_district_item;
                    //                 var area_content = response.area_item;
                    //                 if (dis_content.length !== 0) {
                    //                     licontent = "";
                    //                     $.each(dis_content, function (index, value) {
                    //                         licontent += "<li>" + value + "</li>";
                    //                     });
                    //                     uul.html(licontent);
                    //                     $(".u-select ul li").on({
                    //                         click: function () {
                    //                             isBlur = false;
                    //                             $(".u-input-area").val($(this).text());
                    //                             $(this).parent().css("display", "none");
                    //                             $.ajax({
                    //                                 url: "/tools/expectation/",
                    //                                 type: "POST",
                    //                                 data: {
                    //                                     "name": $(this).text()
                    //                                 },
                    //                                 success: function () {
                    //
                    //                                 }
                    //                             });
                    //                         },
                    //                         mouseenter: function () {
                    //                             isBlur = true;
                    //                         },
                    //                         mouseleave: function () {
                    //                             isBlur = false;
                    //                         }
                    //                     });
                    //                 }
                    //                 if (area_content.length !== 0) {
                    //                     licontent = "";
                    //                     console.log(area_content);
                    //                     $.each(area_content, function (index, value) {
                    //                         licontent += "<li>" + value + "</li>";
                    //                     });
                    //                     $(".u-select-road ul").html(licontent);
                    //                     $(".u-select-road ul li").on({
                    //                         click: function () {
                    //                             isBlur = false;
                    //                             $(".u-select-road input").val($(this).text());
                    //                             $(this).parent().css("display", "none");
                    //                             $.ajax({
                    //                                 url: "/tools/expectation/",
                    //                                 type: "POST",
                    //                                 data: {
                    //                                     "name": $(".u-select-area input").val(),
                    //                                     "area": $(".u-select-road").val()
                    //                                 },
                    //                                 success: function (response) {
                    //                                     var licontent = "";
                    //                                     var area_content = response.area_item;
                    //                                     if (area_content.length !== 0) {
                    //                                         licontent = "";
                    //                                         console.log(area_content);
                    //                                         $.each(area_content, function (index, value) {
                    //                                             licontent += "<li>" + value + "</li>";
                    //                                         });
                    //                                         $(".u-select-road ul").html(licontent);
                    //                                     }
                    //                                 }
                    //                             });
                    //                         },
                    //                         mouseenter: function () {
                    //                             isBlur = true;
                    //                         },
                    //                         mouseleave: function () {
                    //                             isBlur = false;
                    //                         }
                    //                     });
                    //                 }
                    //             }
                    //         });
                    //     },
                    //     mouseenter: function () {
                    //         isBlur = true;
                    //     },
                    //     mouseleave: function () {
                    //         isBlur = false;
                    //     }
                    // });
                }
                if (area_content.length !== 0) {
                    licontent = "";
                    $.each(area_content, function (index, value) {
                        licontent += "<li>" + value + "</li>";
                    });
                    $(".u-select-road ul").html(licontent);
                    // $(".u-select-road ul li").on({
                    //     click: function () {
                    //         isBlur = false;
                    //         $(".u-select-road input").val($(this).text());
                    //         $(this).parent().css("display", "none");
                    //         $.ajax({
                    //             url: "/tools/expectation/",
                    //             type: "POST",
                    //             data: {
                    //                 "name": $(".u-select-area input").val(),
                    //                 "area": $(".u-select-road").val()
                    //             },
                    //             success: function (response) {
                    //                 var licontent = "";
                    //                 var area_content = response.area_item;
                    //                 if (area_content.length !== 0) {
                    //                     licontent = "";
                    //                     $.each(area_content, function (index, value) {
                    //                         licontent += "<li>" + value + "</li>";
                    //                     });
                    //                     $(".u-select-road ul").html(licontent);
                    //                 }
                    //             }
                    //         });
                    //     },
                    //     mouseenter: function () {
                    //         isBlur = true;
                    //     },
                    //     mouseleave: function () {
                    //         isBlur = false;
                    //     }
                    // });
                }
            }
        });
    },
    mouseenter: function () {
        isBlur = true;
    },
    mouseleave: function () {
        isBlur = false;
    }
});

$(".u-select-road input").on({
    focus: function () {
        if ($(".u-select-road ul").children().length !== 0) {
            $(this).next().css("display", "block");
        }
    },
    blur: function () {
        if (isBlur === true) {
            return false;
        }
        $(this).next().css("display", "none");
    },
    keyup: function () {
        $.ajax({
            url: "/tools/expectation/",
            type: "POST",
            data: {
                "name": $(".u-select-area input").val(),
                "area": $(this).val()
            },
            success: function (response) {
            }
        });
    }
});

$(".u-select-road ul").on({
    click: function (e) {
        isBlur = false;
        var qq = $(e.target);
        $(".u-select-road input").val(qq.text());
        $(this).css("display", "none");
        $.ajax({
            url: "/tools/expectation/",
            type: "POST",
            data: {
                "name": $('.u-select-area input').val(),
                "area": qq.text()
            },
            success: function (response) {
                var licontent = "";
                var village_content = response.village_item;
                if (village_content.length !== 0) {
                    licontent = "";
                    console.log(village_content);
                    $.each(village_content, function (index, value) {
                        licontent += "<li>" + value + "</li>";
                    });
                    $(".u-sug ul").html(licontent);
                }
            }
        });
    },
    mouseenter: function () {
        isBlur = true;
    },
    mouseleave: function () {
        isBlur = false;
    }
});

$(".u-sug input").on({
    focus: function () {
        if ($(".u-sug ul").children().length !== 0) {
            $(this).next().css("display", "block");
        }
    },
    blur: function () {
        if (isBlur === true) {
            return false;
        }
        $(this).next().css("display", "none");
    },
    keyup: function () {
        $.ajax({
            url: "/tools/expectation/",
            type: "POST",
            data: {
                "name": $(".u-select-area input").val(),
                "area": $(".u-select-road input").val(),
                "village": $(this).val()
            },
            success: function (response) {
            }
        });
    }
});

$(".u-sug ul").on({
    click: function (e) {
        isBlur = false;
        var qq = $(e.target);
        $(".u-sug input").val(qq.text());
        $(this).css("display", "none");
        $.ajax({
            url: "/tools/expectation/",
            type: "POST",
            data: {
                "name": $('.u-select-area input').val(),
                "area": $(".u-select-road input").val(),
                "village": qq.text()
            },
            success: function (response) {
            }
        });
    },
    mouseenter: function () {
        isBlur = true;
    },
    mouseleave: function () {
        isBlur = false;
    }
});

$(".u-form input").on({
    focus: function () {
        $(this).next().css("display", "block");
    },
    blur: function () {
        if (isBlur === true) {
            return false;
        }
        $(this).next().css("display", "none");
    }
});

$(".u-form ul").on({
    click: function (e) {
        isBlur = false;
        var qq = $(e.target);
        $(".u-form input").val(qq.text());
        $(this).css("display", "none");
    },
    mouseenter: function () {
        isBlur = true;
    },
    mouseleave: function () {
        isBlur = false;
    }
});

$(".new_info").click(function () {
    let district = $(".u-input-area"),
        road = $(".u-select-road input"),
        village = $(".sugInput"),
        form = $(".u-form input"),
        size = $(".expe-size input"),
        direction = $(".expe-direction input"),
        item = $(".expe-item input");

    if (district.val().length === 0) {
        district.parent().css('border', '1px solid red');
    } else if (road.val().length === 0) {
        road.parent().css('border', '1px solid red');
    } else if (village.val().length === 0) {
        village.parent().css('border', '1px solid red');
    } else if (form.val().length === 0) {
        form.parent().css('border', '1px solid red');
    } else if (size.val().length === 0) {
        size.parent().css('border', '1px solid red');
    } else if (direction.val().length === 0) {
        direction.parent().css('border', '1px solid red');
    } else if (item.val().length === 0) {
        item.parent().css('border', '1px solid red');
    } else {
        district.parent().css('border', 'none');
        road.parent().css('border', 'none');
        village.parent().css('border', 'none');
        form.parent().css('border', 'none');
        size.parent().css('border', 'none');
        direction.parent().css('border', 'none');
        item.parent().css('border', 'none');
        $.ajax({
            url: "/tools/expectation/",
            type: "POST",
            data: {
                "name": district.val(),
                "area": road.val(),
                "village": village.val(),
                "form": form.val(),
                "size": size.val(),
                "direction": direction.val(),
                "item": item.val(),
                "check": true
            },
            success: function (response) {
                let y_price = $(".item-price em");
                y_price.text(response.price_exp);
            }
        })
    }

});

$(".btn-submit").click(function () {
    let district = $(".u-input-area"),
        road = $(".u-select-road input"),
        village = $(".sugInput"),
        form = $(".u-form input"),
        size = $(".expe-size input"),
        direction = $(".expe-direction input"),
        item = $(".expe-item input"),
        price = $(".main-price input");

    if (district.val().length === 0) {
        district.parent().css('border', '1px solid red');
    } else if (road.val().length === 0) {
        road.parent().css('border', '1px solid red');
    } else if (village.val().length === 0) {
        village.parent().css('border', '1px solid red');
    } else if (form.val().length === 0) {
        form.parent().css('border', '1px solid red');
    } else if (size.val().length === 0) {
        size.parent().css('border', '1px solid red');
    } else if (direction.val().length === 0) {
        direction.parent().css('border', '1px solid red');
    } else if (item.val().length === 0) {
        item.parent().css('border', '1px solid red');
    } else if (price.val().length === 0) {
        price.parent().css('border', '1px solid red');
    } else {
        district.parent().css('border', 'none');
        road.parent().css('border', 'none');
        village.parent().css('border', 'none');
        form.parent().css('border', 'none');
        size.parent().css('border', 'none');
        direction.parent().css('border', 'none');
        item.parent().css('border', 'none');
        price.parent().css('border', 'none');
        $.ajax({
            url: "/tools/release/",
            type: "POST",
            data: {
                "name": district.val(),
                "area": road.val(),
                "village": village.val(),
                "form": form.val(),
                "size": size.val(),
                "direction": direction.val(),
                "item": item.val(),
                "price": price.val(),
                "submit": true
            },
            success: function (response) {
                console.log(response.success);
                if (response.success === true) {
                    alert("提交成功");
                    $(location).attr('href', "/index/");
                }
            }
        })
    }

});