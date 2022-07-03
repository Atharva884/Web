let bar = document.querySelector('.bar')
let bars = document.querySelector('.bars')
let navbar = document.querySelector('.navbar')

bar.addEventListener('click', ()=>{
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
          delay: 2500,
          disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    grabCursor: true,
});