/*=============== SHOW MENU ===============*/
const navMenue = document.getElementById('nav-menu') 
const navToggle =document.getElementById('nav-toggle')
const navClose  = document.getElementById('nav-close')

if(navToggle ){
  navToggle.addEventListener('click',()=>{
    navMenue.classList.add("show-menu")
  })
}

if(navClose ){
  navClose.addEventListener('click',()=>{
    navMenue.classList.remove("show-menu")
  })
}
/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/
function imageGallery(){
  const mainImage= document.querySelector('.details-img'),
  smallImage = document.querySelectorAll('.details-small-img');

  smallImage.forEach(img => {
    img.addEventListener('click', function (){
      mainImage.src = this.src
    })
  }) 

}
imageGallery()

/*=============== SWIPER CATEGORIES ===============*/
 var swiper = new Swiper(".swiper-categories", {
    loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

       breakpoints: {
        350: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
      },
    });
/*=============== SWIPER PRODUCTS ===============*/
 var swiperProduct = new Swiper(".new-container", {
    loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

       breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 44,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      },
    });
/*=============== PRODUCTS TABS ===============*/

const tabs =document.querySelectorAll('[data-target]')

tabContant =document.querySelectorAll('[content]');

tabs.forEach((tab)=>{
  tab.addEventListener('click',()=> {

    const target=document.querySelector(tab.dataset.target);
    tabContant.forEach((tabContant) =>{
      tabContant.classList.remove('active-tab')
    })

    target.classList.add('active-tab')

    tabs.forEach((tab) =>{
      tab.classList.remove('active-tab')
    })

    tab.classList.add('active-tab')
 
 
  });
});