(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        //  one page scroll
        $(function () {
            $('.page-scroll').on("click", function (e) {
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top - 71
                }, 1000);
                e.preventDefault();
            });
        });
        //  one page scroll
    });
}(jQuery));