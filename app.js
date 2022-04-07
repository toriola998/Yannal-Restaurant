const menuBtn = document.querySelector('#hamburger');
const links = document.querySelector('nav div');
const closeIcon = document.querySelector('#close-icon');
let navLinks = document.querySelectorAll('nav li');

//TOGGLE HAMBURGER MENU BTN
menuBtn.addEventListener('click', () => {
    if (links.classList.contains('show-links')) {
        links.classList.remove('show-links');
        menuBtn.setAttribute("aria-expanded", false)
    } else {
        links.classList.add('show-links');
        menuBtn.setAttribute("aria-expanded", true)
    }
})

//Close the side bar once the close icon gets clicked
//closeIcon.addEventListener('click', function(){
//    links.classList.remove('show-links');
      // menuBtn.setAttribute("aria-expanded", false)
//});

//CLOSE THE NAV-BAR ONCE A LINK IS CLICKED
navLinks.forEach(link => {  
  link.addEventListener('click', () => {
    links.classList.remove('show-links');
    menuBtn.setAttribute("aria-expanded", false)
  }); 
});

//UPDATE THE COPYRIGHT YEAR AUTOMATICALLY
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();