let navbar = document.querySelector('.header-holder .navbar');
let searchForm = document.querySelector('.header-holder .search-form');
let loginForm = document.querySelector('.header-holder .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
};
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
};
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
};
document.querySelector('#info-btn').onclick = () =>{
     contactInfo.classList.add('active');
};
document.querySelector('#close-contact-info').onclick = () =>{
     contactInfo.classList.remove('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },  
});

var swiper = new Swiper(".blogs-slider", {
    loop:true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },  
});
var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        },
    },  
});

// send email from clients

function emailSend(){
    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;


    var messageBody = "Name: " + userName +
    "<br/> Phone Number: " + phone +
    "<br/> Email Address: " + email +
    "<br/> Message: " + message;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "newojunior@gmail.com",
        Password : "F8CCA9B7A3528E7D09C05672D2B92328AC24",
        To : 'newojunior@gmail.com',
        From : "newojunior@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
        message => alert(message)
    );
}