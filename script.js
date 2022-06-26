//changing navbar when scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>300);
})


//faq open

const faqs = document.querySelectorAll('.faq');






const closeAll = () => {
    faqs.forEach(faq => {
        faq.classList.remove('open');
      
    })
}



faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        
        faq.classList.toggle('open');
        //change icon

        const icon = faq.querySelector('.faq__icon i');

        if(icon.className === "uil uil-plus"){
            icon.className = "uil uil-minus"
        }
        else{
            icon.className = "uil uil-plus"
        }
        
    })
})




// TOGGLE MENU

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click' , () => {
    
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener("click",closeNav)

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  
    //when width > 600px
  
    breakpoints:{
      600:{
          slidesPerView: 2
      }
    }
  });
  