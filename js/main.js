(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        // selfie-carousel starts //
        $('#selfie-carousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: '<i class="fas fa-chevron-right next"></i>',
            prevArrow: '<i class="fas fa-chevron-left left"></i>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow:1,
                        slidesToScroll: 1
                    }
                },
            ]
        });
        // selfie-carousel ends //
        // header search mobile
        $(function(){
            $(".search-open").on("click", function(){
                $("#header-area .search-area").addClass("open");
            });
            $(".search-area .close").on("click", function () {
                $("#header-area .search-area").removeClass("open");
            });
        });
        // header search mobile
        // select value change
        $(function(){
            $('#section1 .top-part .dropdown-menu a').click(function () {
                $('#selected,#selected1').text($(this).text());
            });
        });
        // select value change
        // selfie upload image name
        var input = document.getElementById('selfieupload');
        var infoArea = document.getElementById('file-upload-filename');
        if (infoArea, input){
            input.addEventListener('change', showFileName);
        }
        function showFileName(event) {
            var input = event.srcElement;
            var fileName = input.files[0].name;
            infoArea.textContent = fileName;
        }
        // selfie upload image name
        // datepicker 
        $(function () {
            var autoupdate = false;
            function date1() {
                $('#datepicker').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                autoApply: true,
                autoUpdateInput: autoupdate,
                locale: {
                    format: 'DD-MM-YYYY'
                }
            }, function (chosen_date) {
                $('#datepicker').val(chosen_date.format('DD-MM-YYYY'));
            });
        };
        date1();
            $('#datepicker').on('apply.daterangepicker', function (ev, picker) {
                if ($('#datepicker').val().length == 0) {
                    autoupdate = true;
                    date1();
                };
                var departpicker = $('#datepicker').val();
            });
        });
        // datepicker
        // search content
        $(function () {
            $("#search-d").focus(function () {
                $('#search-content').show();
            });
            $('#search-d').blur(function () {
                if (!$(this).val()) {
                    $('#search-content').hide();
                }
            });
        });
        // search content
    });
}(jQuery));