$(function () {
    var container, answers, tocs, pattern, filter, empty;

    container = $('.faq-container');
    answers = container.find('.faq-list').find('li');
    tocs = container.find('.faq-toc').find('li');
    empty = container.find('.faq-empty');

    $(".search").bind('input propertychange', function () {
        console.log($(this).val());
        filter = $(this).val();
        pattern = new RegExp(filter, 'i');

        answers.hide();
        tocs.hide();


        $.grep(answers.find('.faq-text'), function (input) {
            if (pattern.test($(input).text())) {
                console.log(tocs.eq(1));
                $(input).parents('li').show();

                var index = $(input).parents('li').index();
                tocs.eq(index).show();
            }
        });

        if (!answers.is(':visible')) {
            empty.show();
            tocs.hide();
        } else {
            empty.hide();
            // tocs.show();
        }
    });
});