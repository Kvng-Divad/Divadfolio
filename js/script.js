/*value accordion */
const accordionItems = document.querySelectorAll('.services-accordion-item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.services-accordion-header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

     toggleItem(item)

     if(openItem && openItem!== item){
         toggleItem(openItem)
     }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.services-accordion-content')
  
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }
else{
    accordionContent.style.height = accordionContent.scrollHeight + "px"
    item.classList.add('accordion-open')
}
}


/* swiper */
var swiperReview = new Swiper (".review-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor: true,
    autoplay:{
        delay: 7500,
        disableOnInteraction:false,
    },
    breakpoints:{
        0: {
            slidesPerView: '1',
        },
        600: {
            slidesPerView: '2',
        },
    },
    centeredSlides:false,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },  
});




/*--------Dark/ Light Theme-------
let dayNight = document.querySelector("#theme-button");
dayNight.addEventListener('click', () => {
    dayNight.classList.toggle('fa-sun')
    dayNight.classList.toggle('fa-moon')
    document.body.classList.toggle('dark');
});


/*--------scroll- Reveal-------
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    //reset:true
})

sr.reveal('.home, .about, .dishes, .menu, .footer-container, .review, .order,.fast-food',)
sr.reveal('.dishes-box, .box', {interval:50, reset:true})
sr.reveal('.about-image', {origin: 'right'})
sr.reveal('.about-content, .order, ', {origin: 'left'})*/
