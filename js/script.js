

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

const swiper = new Swiper('.sehrim-slider', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.geriOkButonu',
    prevEl: '.ileriOkButonu',
  },
  pagination: {
    el: '.swiper-pagination',
    renderBullet: function (index, className) {
      return '<li class="' + className + '"></li>';
    },

    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 576
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});


// Email Gönder 

const form = document.querySelector("form");
const fullName = document.getElementById("email");
const email = document.getElementById("isim");
const konu = document.getElementById("konu");
const mess = document.getElementById("mesaj");


function sendEmail() {

    const bodyMessage = 'Full Name: ${fullName.value}<br> Email: ${email.value} <br> Mesaj: ${mess.value}';


    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "emin.barkoc@ogr.sakarya.edu.tr",
      Password : "F791A798072D9B5CFE467E1595D3945BF2B6",
      To : 'emin.barkoc@ogr.sakarya.edu.tr',
      From : "emin.barkoc@ogr.sakarya.edu.tr",
      Subject : konu.value,
      Body : bodyMessage
    })
}

form.addEventListener("submit" , (e) => {

  e.preventDefault();

  sendEmail();

});