/* scroll-Header 
function scrollHeader(){
    const top = document.querySelector(".top")
    if(this.scrollY >= 50) {
         top.classList.add("scroll-header");
    }
    else{
        top.classList.remove("scroll-header"); 
    }
}
window.addEventListener("scroll", scrollHeader);
*/

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




/*--------Dark/ Light Theme-------*/
let dayNight = document.querySelector(".theme");
dayNight.addEventListener('click', () => {
    dayNight.classList.toggle('fa-sun')
    dayNight.classList.toggle('fa-moon')
    document.body.classList.toggle('light');
});



/*------hero-------*/
const heroImg = document.querySelector('.hero-img');
let heroIcon = document.querySelector('.hero-icons');
let circle = document.querySelectorAll('.circle');

    
    circle.forEach((item) => {

    heroImg.addEventListener('click', () => {
    item.classList.add('active'); });

    heroImg.addEventListener('mouseover', () => {
    item.classList.toggle('active');});

    heroImg.addEventListener('mouseleave', () => {
    item.classList.remove('active');
    heroIcon.classList.remove('active');
    })});

    heroImg.addEventListener('click', () => {
    heroIcon.classList.toggle('active')});


/*------contact-------*/
const orb = document.getElementById('center');
let social = document.querySelectorAll('.social')
   social.forEach((item) => {
    orb.addEventListener('click', () => {
    item.classList.toggle('active');
})});




/*scroll sections active link */

const sections = document.querySelectorAll('section[id]');
  
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-list a[href*=' + sectionId + ']').classList.add('active');
        }
        else {
            document.querySelector('.nav-list a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
    
}
window.addEventListener("scroll", scrollActive)


/*scroll-up
function scrollUp(){
    const scrollup = document.getElementById('scroll-up');

    if(this.scrollY >= 350) {
        scrollup.classList.add('show-scroll');
   }
   else{
    scrollup.classList.remove('show-scroll');
   }
}
window.addEventListener("scroll", scrollUp);*/


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
sr.reveal('.about-content, .order, ', {origin: 'left'})  --*/  
