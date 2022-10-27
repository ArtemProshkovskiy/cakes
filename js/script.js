const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.button_select ');
    const caret = dropdown.querySelector('.sterlka');
    const menu = dropdown.querySelector('.dropdown_menu');
    const options = dropdown.querySelectorAll('.dropdown_menu li');
    const selected = dropdown.querySelector('.btn');

    select.addEventListener('click', () => {
        select.classList.toggle('check');
        caret.classList.toggle('rotate');
        menu.classList.toggle('menu_open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText
            select.classList.remove('check');
            caret.classList.remove('rotate');
            menu.classList.remove('menu_open');

            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

function ranger() {
    const range = document.getElementById('slider');
    const value_range = document.getElementById('slider_price');
    value_range.innerHTML = range.value;
}


new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const payments = document.querySelectorAll('.payment_button');
payments.forEach((payment) => {
    payment.addEventListener('click', function () {
        payments.forEach(payment => {
            payment.classList.remove('active');
        });
        payment.classList.add('active');
    });

});


const counters = document.querySelectorAll('[data-counter]');

if (counters) {
    counters.forEach(counter => {
        counter.addEventListener('click', e => {
            const target = e.target;
            let spanCount = target.closest('.counter').querySelector('span')

            if (target.closest('.counter__button')) {
                if (spanCount.innerText === '' && (target.classList.contains('counter__button_minus') || target.classList.contains('counter__button_plus'))) {
                    spanCount.innerText = 1
                }

                let value = parseInt(spanCount.innerText);

                if (target.classList.contains('counter__button_plus')) {
                    value++;
                } else {
                    --value;
                }

                if (value <= 0) {
                    value = 0;
                    target.closest('.counter').querySelector('.counter__button_minus').classList.add('disabled')
                } else {
                    target.closest('.counter').querySelector('.counter__button_minus').classList.remove('disabled')
                }

                spanCount.innerText = value + " шт";
            }
        })
    })
}

const button_popups = document.querySelectorAll('.offer');
const close_popup = document.querySelector('.close_button.phone')
const close_popup2 = document.querySelector('.continue_orders.phone')

if (window.innerWidth <= 1000) {
    const popupPhone = document.querySelector('.popup_phone');

    button_popups.forEach((button_popup) => {
        button_popup.addEventListener('click', function () {
            popupPhone.classList.add('open');
            document.body.style.overflow = "hidden";
        });
        close_popup.addEventListener('click', function () {
            popupPhone.classList.remove('open');
            document.body.style.overflow = "";
        });
        close_popup2.addEventListener('click', function () {
            popupPhone.classList.remove('open');
            document.body.style.overflow = "";
        });
    });
} else {
    const popup = document.querySelector('.popup');
    const close_popup = document.querySelector('.close_button')
    const close_popup2 = document.querySelector('.continue_orders')


    button_popups.forEach((button_popup) => {
        button_popup.addEventListener('click', function () {
            popup.classList.add('open');
            document.body.style.overflow = "hidden";
        });
        close_popup.addEventListener('click', function () {
            popup.classList.remove('open');
            document.body.style.overflow = "";
        });
        close_popup2.addEventListener('click', function () {
            popup.classList.remove('open');
            document.body.style.overflow = "";
        });
    });
}


new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next_second',
        prevEl: '.swiper-button-prev_second',
    },
});

const sale = document.querySelector('.giveme_sale');

sale.addEventListener('click', function (e) {
    alert('скидка отримана!');
});


const anchors = document.querySelectorAll('a[href^="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {

        e.preventDefault()
        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

const menu_burger = document.querySelector('.burger_menu');
const openBurger = document.querySelector('.menu_button');
const scrollBurger = document.querySelector('body');

openBurger.addEventListener('click', function () {
    menu_burger.classList.toggle('active');
    openBurger.classList.toggle('active');
    scrollBurger.classList.toggle('stopScroll')
});


const close_socials = document.querySelectorAll(".ph-header_item a");

for (let i of close_socials) {
    i.addEventListener("click", function (e) {
        if (e.target.closest('.ph-header_item a')) {
            menu_burger.classList.remove('active');
            openBurger.classList.remove('active');
            scrollBurger.classList.remove('stopScroll');
        }
    });
}

