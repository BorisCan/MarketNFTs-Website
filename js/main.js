/*=================  Scroll header background change color ================= */
const scrollHeader = () =>{
    const header = document.getElementById('header')

     this.scrollY >= 50 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')

}

window.addEventListener('scroll' , scrollHeader)
/*================= scroll up click ================= */
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll" , () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
/*=================== popup login =====================*/

document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});


/*====================== Header Menu ======================== */
const navİtem = document.getElementById('nav-item')
const open = document.getElementById('nav-toggle')
const close = document.getElementById('nav-close')


if(open){
    open.addEventListener('click', () =>{
        navİtem.classList.add('active')
    })
}


if(close){
    close.addEventListener('click', ()=>{
        navİtem.classList.remove('active')
    })
}
/*====================== Swiper ======================== */
const swiper = new Swiper('.swiper-latest', {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    loopedSlides: 5,
    watchSlidesProgress: true,
    centerSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        310: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.5,
        },
        920: {
            slidesPerView: 2,
        },
        1120: {
            slidesPerView: 3.1,
        },
    },
});

/*============ DARK MODE ===============*/
var icon = document.getElementById("icon");
   icon.onclick = function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
          icon.src = "images/sun-fill.png";
      }else{
        icon.src = "images/moon-fill.png";
      } 
 }

  
 