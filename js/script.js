

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