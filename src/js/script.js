$(document).ready(function () {
    $(".slide-one").owlCarousel({
        items: 5,
        dots: false,
        loop: true,
        nav: true,
        navText: ["<img src='src/icons/prev.png'>", ""],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            700: {
                items: 3
            },
            1100: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
    $(".slide-two").owlCarousel({
        items: 5,
        dots: false,
        nav: true,
        loop: true,
        margin: 30,
        navText: ["<img src='src/icons/prev.png'>", ""],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            }
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
        .on('initialized.owl.carousel', function() {
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

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

    // Закрытие gallery
    jQuery(function($){
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".popup__slider"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $("#popup").hide(); // скрываем его
            }
        });
    });

});
// Menu
const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
});

// find
const find = document.querySelector('.find'),
    aside = document.querySelector('.aside');

find.addEventListener('click', () => {
    aside.classList.toggle('aside_absolute');
});

// gallery
const gallery = document.getElementById('gallery'),
    popup = document.getElementById('popup');

gallery.addEventListener('click', () => {
    popup.style.display = 'block';

});
// Закрытие gallery по кнопке Esc
window.addEventListener("keydown", (event) => {
    if ( event.keyCode == 27 ) {
        popup.style.display = 'none';
    } 
});
