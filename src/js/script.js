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
    // Закрытие gallery
    jQuery(function($){
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".fotorama img"); // тут указываем ID элемента
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
