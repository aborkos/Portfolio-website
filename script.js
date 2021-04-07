const fr = document.querySelector('.fr')
const vid = document.querySelector('.vid')
const phot = document.querySelector('.phot')
const frontend = document.querySelector('.frontend')
const youtube = document.querySelector('.youtube')
const photography = document.querySelector('.photography')





$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({scrollTop: 0});
    });

    //toggle menu/navbar script
$('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active")
    $('.menu-btn i').toggleClass("active")
});

// animacja
var typed = new Typed(".typing", {
    strings: ["Inżynierem Budownictwa", "Filmmakerem / Fotografem", "Frontend Developerem, którego chcesz zatrudnić", ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Inżynierem Budownictwa", "Filmmakerem / Fotografem", "Frontend Developerem, którego chcesz zatrudnić", ],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});


vid.addEventListener('click', function () {
    vid.classList.toggle('active')
    fr.classList.remove('active')
    phot.classList.remove('active')
    frontend.classList.remove('active')
    youtube.classList.toggle('active')
    photography.classList.remove('active')
})

fr.addEventListener('click', function () {
    fr.classList.toggle('active')
    vid.classList.remove('active')
    phot.classList.remove('active')
    frontend.classList.toggle('active')
    youtube.classList.remove('active')
    photography.classList.remove('active')
})

phot.addEventListener('click', function () {
    phot.classList.toggle('active')
    fr.classList.remove('active')
    vid.classList.remove('active')
    frontend.classList.remove('active')
    youtube.classList.remove('active')
    photography.classList.toggle('active')
})


});