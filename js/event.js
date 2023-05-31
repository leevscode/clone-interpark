
let swEventsWrapper = document.querySelector(".sw-events .swiper-wrapper");
swEventsWrapper.innerHTML = swEventsHtml;
let EventsSwiper = new Swiper(".sw-events", {
    slidesPerView: 3,
    spaceBetween: 27,
    navigation: {
        nextEl: ".events .sw-next",
        prevEl: ".events .sw-prev",
    },
    breakpoints: {
        1280: {
            slidesPerView: 4,
        },
    },
});