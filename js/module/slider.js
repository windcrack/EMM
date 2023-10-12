export function slider(){
    const options = {
        hero:{
            navigation: {
                nextEl: ".js-btn-hero-next",
                prevEl: ".js-btn-hero-prev",
            },
        },
        news: {
            slidesPerView: 3,
            spaceBetween: 30,
            autoHeight: true,
            navigation: {
                nextEl: ".js-btn-hero-next",
                prevEl: ".js-btn-hero-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                800: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        }
    }
    // Слайдер на главной
    const sliderHero = new Swiper('.js-hero-slider-body', options.hero);
    // Слайдер на главной для новостей
    const sliderNews = new Swiper('.js-home-news-body', options.news);
}