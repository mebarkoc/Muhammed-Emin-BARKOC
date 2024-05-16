

const navToggle = document.querySelector(".navbar-toggle");
navToggle.addEventListener("click", function(){
document.querySelector(".portfolio-navbar").classList.toggle("show"); 
});



// Tab interface for different section of resume

const resumeHeading = document.querySelector(".resume-heading");
const resumeItems = document.querySelectorAll(".resume-item");
const resumeTabs = document.querySelectorAll(".resume-tab");

resumeHeading.onclick = (event) => {
  event.preventDefault();
  const clickedItemId = event.target.dataset.id;
  if (clickedItemId) {
    resumeItems.forEach((item) => {
      item.classList.remove("active");
    });
    event.target.parentElement.classList.add("active");

    resumeTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    const correspondingTab = document.getElementById(clickedItemId);
    correspondingTab.classList.add("active");
  }
};


function takipNav(){
  var headerHeight = document.querySelector("#about").offsetHeight / 2;
  var navbar = document.querySelector("header");
  var scrollValue = window.scrollY;

  if(scrollValue > headerHeight){
    navbar.classList.add("header-sticky");
  }
  else if (scrollValue < headerHeight){
    navbar.classList.remove("header-sticky");
  }
}

window.addEventListener("scroll", takipNav);




//Şehrim Slider

const swiper = new Swiper(".sehrim-slider",{

  //Default parameters
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  
  navigation:{
    nextEl: ".sonrakiOkBtn",
    precEl: ".oncekiOkBtn",
  },

  pagination:{
    el:"swiper-pagination",
    renderBullet:function(index, className){
      return'<li class="+className+"></li>' ;
    }
  },

  clickable:true,

  //Responsive breakpoints
  breakpoints:{
    576:{
      slidesPerView: 2,
    },
    
    768:{
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});




// Email Gönder 

(function() {
  emailjs.init({
    publicKey: "5B1APplzC8NRaFiPs",
  });
})();


window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_9vo73qn', 'template_zsc2cal', this)
          .then(() => {
              console.log('SUCCESS!');
          }, (error) => {
              console.log('FAILED...', error);
          });
  });
}