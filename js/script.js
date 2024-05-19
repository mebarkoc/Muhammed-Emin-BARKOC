

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



//İlgi Alanım Slider

const swiper1 = new Swiper('.ilgi-slider', {
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
const fullName = document.getElementById("isim");
const email = document.getElementById("email");
const konu = document.getElementById("konu");
const mess = document.getElementById("mesaj");


function sendEmail() {

    const bodyMessage = `İsim Soyisim: ${fullName.value}<br> Email: ${email.value}<br> Mesaj: ${mess.value}`;


    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "emin.barkoc@ogr.sakarya.edu.tr",
      Password : "F791A798072D9B5CFE467E1595D3945BF2B6",
      To : 'emin.barkoc@ogr.sakarya.edu.tr',
      From : "emin.barkoc@ogr.sakarya.edu.tr",
      Subject : konu.value,
      Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
          Swal.fire({
            title: "Başarılı",
            text: "Mesaj başarılı bir şekilde gönderilmiştir.",
            icon: "success"
          });
        }
      }      
    );
  
}


function kontrolInput() {

  const items = document.querySelectorAll(".item");

  for (const item of items){
    if (item.value == ""){
      item.classList.add("error");
      item.parentElement.classList.add("error");

    }

    item.addEventListener("keyup", () => {
      
      if(item.value != ""){
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }
      else{
        item.classList.remove("error");
        item.parentElement.classList.add("error");
      }

    });
      
  }
}

form.addEventListener("submit" , (e) => {

  e.preventDefault();

  kontrolInput();

  if(!fullName.classList.contains("error") && !email.classList.contains("error") && !konu.classList.contains("error"))
    {
      sendEmail();
    }
});



//İlgi alanlarım API

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://free-football-live-score.p.rapidapi.com/all-news',
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '9347b602demshe7516b271391df8p113321jsn43801c0447c0',
		'X-RapidAPI-Host': 'free-football-live-score.p.rapidapi.com'
	},
	processData: false,
	data: '{\r\n    "language": "tr",\r\n    "page_number": 1\r\n}'
};

$.ajax(settings).done(function (response) {
	console.log(response);
});


function getDataFromAPI() {
  const settings = {
      async: true,
      crossDomain: true,
      url: 'https://free-football-live-score.p.rapidapi.com/all-news',
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '9347b602demshe7516b271391df8p113321jsn43801c0447c0',
          'X-RapidAPI-Host': 'free-football-live-score.p.rapidapi.com'
      },
      processData: false,
      data: '{\r\n    "language": "en",\r\n    "page_number": 1\r\n}'
  };

  $.ajax(settings).done(function (response) {
      addImagesToSlider(response);
  });
}


function addImagesToSlider(data) {
  const swiperWrapper = $('.swiper-wrapper'); 

  data.forEach(function(item) {
      const imgUrl = item.imageUrl
      const nwUrl = item.page.url
      const newsTitle = item.title;


      const imgElement = $('<img>').attr('src', imgUrl);

      const slideElement = $('<div>').addClass('swiper-slide').append(
        $('<a>').attr('href', nwUrl).attr('target', '_blank').append(
            $('<div>').addClass('urun-icerik').append(
                imgElement,
                $('<h3>').text(newsTitle).css('color', 'white')
            )
        )
      );

      swiperWrapper.append(slideElement);
  });

}

getDataFromAPI();



