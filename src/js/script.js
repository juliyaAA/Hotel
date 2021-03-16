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
    console.log(find);
    console.log(aside);

find.addEventListener('click', () => {
    aside.classList.toggle('aside_absolute');
});