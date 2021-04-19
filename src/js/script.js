$(document).ready(function () {
    $(".slide-one").owlCarousel({
        items: 5,
        dots: false,
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ["", "<img src='src/icons/prev.png'>"],
        responsive: {
            0: {
                items: 4
            },
            768: {
                items: 5
            },
            1000: {
                items: 6
            }
        }
    });
    $(".slide-two").owlCarousel({
        items: 4,
        dots: false,
        nav: true,
        loop: true,
        margin: 30,
        smartSpeed: 700,
        navText: ["", "<img src='src/icons/prev.png'>"],
        responsive: {
            0: {
                items: 1
            },
            685: {
                items: 2

            },
            1005: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });
    // menu
    $('.hamburger').on('click', function () {
        $('.menu').slideToggle();
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
        $('.menu__item').toggleClass('active');
        $('.menu__registr').slideToggle();
    });

    $('.menu__item').on('click', function () {
        $('.menu__item').removeClass('active');
        $(this).addClass('active');
    });
    $('.promo__info_list a').on('click', function () {
        $('.promo__info_list a').removeClass('active');
        $(this).addClass('active');
    });
    $('.navigation__ul_list a').on('click', function () {
        $('.navigation__ul_list a').removeClass('active');
        $(this).addClass('active');
    });
    // arrow 
    $('.wrapper__arrow').on('click', function () {
        $('.wrapper__arrow').toggleClass('active');
        $('.wrapper__flex').slideToggle();
    });
    $('#btn').on('click', function () {
        $('.wrapper__flex').slideToggle();
        $('.wrapper__arrow').removeClass('active');
        $('html, body').animate({
            scrollTop: $('.wrapper__title').offset().top - 200,
        }, 400);
    });

    // calendar
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Не',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    var date = new Date();
    date.setDate(date.getDate() + 1);

    $("#datepicker").datepicker({
        dateFormat: 'DD, dd MM yy',
        minDate: 0,
    });

    $("#datepicker").datepicker().datepicker('setDate', 'today');

    $("#datepicker-1").attr('disabled', 'disabled');

    $("#datepicker-3").attr('disabled', 'disabled');

    $("#datepicker-1").datepicker({
        dateFormat: 'DD, dd MM yy',
        minDate: 0,
    });

    $("#datepicker-2").datepicker({
        dateFormat: "dd.mm.yy",
        minDate: 0,
    });

    let tomorrow = new Date();

    $("#datepicker-1").datepicker().datepicker('setDate', tomorrow);

    $("#datepicker-2").datepicker().datepicker('setDate', 'today');


    $("#datepicker-3").datepicker({
        dateFormat: "dd.mm.yy",
        minDate: 0,
    });

    let tomorrow1 = new Date();

    $("#datepicker-3").datepicker().datepicker('setDate', tomorrow1);


    $("#datepicker").on('change', function () {
        onCheckin();
    });

    $("#datepicker-2").on('change', function () {
        onCheckin1();
    });

    function onCheckin() {
        if ($("#datepicker").val() !== '') {
            $("#datepicker-1").removeAttr('disabled');
            let dateMin = $("#datepicker").datepicker('getDate');
            let rMin = new Date(dateMin.getFullYear(), dateMin.getMonth(), dateMin.getDate() + 1);
            $("#datepicker-1").datepicker('option', 'minDate', new Date(rMin));
        } else {
            $("#datepicker-1").val('');
            $("#datepicker-1").attr('disabled', 'disabled');
        }
    }

    function onCheckin1() {
        if ($("#datepicker-2").val() !== '') {
            $("#datepicker-3").removeAttr('disabled');
            let dateMin = $("#datepicker-2").datepicker('getDate');
            let rMin = new Date(dateMin.getFullYear(), dateMin.getMonth(), dateMin.getDate() + 1);
            $("#datepicker-3").datepicker('option', 'minDate', new Date(rMin));
        } else {
            $("#datepicker-3").val('');
            $("#datepicker-3").attr('disabled', 'disabled');
        }
    }
    // aside select
    $('.box').on('click', function () {
        $('.box').toggleClass('active');
    });
    $('.min-2').on('click', function () {
        $('.min-2').toggleClass('active');
    });
    $('.min-1').on('click', function () {
        $('.min-1').toggleClass('active');
    });
    $('.select, .select-min').on('click', '.select__head, .select__head_min', function () {
        if ($(this).hasClass('open active')) {
            $(this).removeClass('open active');
            $(this).next().fadeOut();
        } else {
            $('.select__head, .select__head_min').removeClass('open active');
            $('.select__list, .select__list_min').fadeOut();
            $(this).addClass('open active');
            $(this).next().fadeIn();
        }
    });
    $('.select, .select-min').on('click', '.select__item, .select__item_min', '.box', function () {
        $('.select__head, .select__head_min').removeClass('open active');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
    $(document).click(function (e) {
        if (!$(e.target).closest('.select, .select-min').length) {
            $('.select__head, .select__head_min').removeClass('open active');
            $('.select__list, .select__list_min').fadeOut();
            $('.box').removeClass('active');
            $('.min-1').removeClass('active');
            $('.min-2').removeClass('active');
        }
    });
    //application calendar
    $('.parent, .children').on('click', '.parent__head, .children__head', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().fadeOut();
        } else {
            $('.parent__head, .children__head').removeClass('open active');
            $('.parent__list, .children__list').fadeOut();
            $(this).addClass('active');
            $(this).next().fadeIn();
        }
    });
    $('.parent, .children').on('click', '.parent__item, .children__item', function () {
        $('.parent__head, .children__head').removeClass('active');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
    $(document).click(function (e) {
        if (!$(e.target).closest('.parent, .children').length) {
            $('.parent__head, .children__head').removeClass('active');
            $('.parent__list, .children__list').fadeOut();
        }
    });
    // gallery
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4;
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<svg  viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606" /></svg>', '<svg  viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            margin: 10,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
    $('.promo__apartments img').on('click', function () {
        $('#popup').toggleClass('active');
        // $('body').css('position', 'fixed');
    });
    $('#gallery').on('click', function () {
        $('#popup').toggleClass('active');
        // $('body').css('position', 'fixed');
    });
    // Закрытие gallery
    jQuery(function ($) {
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $(".popup__slider"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $("#popup").removeClass('active'); // скрываем его
                // $('body').css('position', 'inherit');
            }
        });
    });
});
// Закрытие gallery по кнопке Esc
const popup = document.getElementById('popup');
window.addEventListener("keydown", (event) => {
    if (event.keyCode == 27) {
        popup.style.display = 'none';
    }
});