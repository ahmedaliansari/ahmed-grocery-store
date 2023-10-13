/* <!-- /Code for Navbar Icon Toggle Animation / --> */

let searchForm = document.querySelector('.search-form');


document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');


document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');


document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/* <!-- /Code for Navbar Icon Toggle Animation / --> */



var swiper = new Swiper(".product-slider",{
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        786: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".slide",{
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        786: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });