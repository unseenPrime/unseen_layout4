// Burger menu
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
}

// Attach an event handler to a click on the burger menu
document.querySelector('.burger').addEventListener('click', toggleMenu);
//Slider 1
$(document).ready(function(){
    var numOfItems = $('.course__item').length;
    var showDots = (numOfItems > 3);

    $('.course__content').slick({
        arrows: false,
        dots: showDots,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});