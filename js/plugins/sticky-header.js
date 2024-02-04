(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        //  menu sticky
        $(function () {
            //caches a jQuery object containing the header element
            var header = $(".landing-header");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 88) {
                    header.addClass("sticky");
                    var headerHeight = $('.landing-header').height() + 'px';
                    $('body').css('margin-top', headerHeight);
                } else {
                    header.removeClass("sticky");
                    $('body').css('margin-top', 0);
                }
            });
        });
        //  menu sticky
    });
}(jQuery));