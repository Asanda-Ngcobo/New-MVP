'use strict'

    
    
               
           //cookie bunner
           const cookieContainer = document.querySelector(".cookie-container");
    const cookieButton = document.querySelector(".cookie-btn");
    
    cookieButton.addEventListener("click", () => {
        cookieContainer.classList.remove("active");
        localStorage.setItem("cookieBunnerDisplayed", "true");
    });
    
    setTimeout(()=> {
        if(!localStorage.getItem("cookieBunnerDisplayed")){
    cookieContainer.classList.add("active")
        }
    }, 4000);



const startNowBtn = document.querySelector('.mobile__header .material-icons.menu');
const links = document.querySelector('.nav__links');
const remove = document.querySelector('.remove');
const pages = document.querySelectorAll('.nav__link');
const subMenu = document.querySelector('.sub__menu-1');
const overlay = document.querySelector('.overlay');


const openModal = function (){
  links.classList.remove('notes')
  links.style.transitionDuration = '200ms';
  overlay.classList.remove("hide")
  // startNowBtn.classList.add("notes")

};

const closeModal = function (){
  links.classList.add('notes')
  links.style.transitionDuration = '200ms';
  overlay.classList.add("hide")
  // startNowBtn.classList.remove("notes")
}



startNowBtn.addEventListener('click', openModal, );

remove.addEventListener('click', closeModal);
   
for(let i = 0; i <pages.length; i++){
  pages[i].addEventListener('click', closeModal);
  
}

// const message = document.createElement('div'); //create a div elemetnt
// message.classList.add('announcement-message');

// message.innerHTML = `<p>Please note, this is still in beta, therefore if you find any errors, do let us know.
// </p>`;

// const header = document.querySelector('.header');

// //insert at the top
// header.prepend(message);

// if(navigator.geolocation){
//   navigator.geolocation.getCurrentPosition(
//     function(position){
//       const {latitude} = position.coords;
//       const {longitude} = position.coords;
//       console.log(latitude, longitude);
//       if(latitude < 30.9995 && longitude > 22.9375){
//         overlay.classList.add('hide')
//       }
//       console.log(`https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu`)
//     },
//     function(error){
//       error = alert('Could not get your location. Unfortunately, the application can not work without the location. refresh and try again');
//     }
//   );
// }

const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");
const section5 = document.querySelector(".section5");
const section6 = document.querySelector(".section6");
const section7 = document.querySelector(".section7");
const section8 = document.querySelector(".section8");
const section9 = document.querySelector(".section9");
const section10 = document.querySelector(".section10");
const section11 = document.querySelector(".section11");

let lessons = [
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10,
  section11,
];

//Section Click functionality
const section = document.querySelectorAll("#section");
const expandMore = document.querySelectorAll(".material-icons.expand_more");

for (let i = 0; i < section.length; i++) {
  section[i].addEventListener("click", () => {
    lessons[i].classList.remove("hide");
    

    section[i].style.height = "0vh";
    for (let i = 0; i < expandMore.length; i++) {
      expandMore[i].classList.add("hide");
    }
  });
}

const leave1 = document.querySelector(".leave1");
const leave2 = document.querySelector(".leave2");
const leave3 = document.querySelector(".leave3");
// const leave4 = document.querySelector(".leave4");
// const leave5 = document.querySelector(".leave5");
// const leave6 = document.querySelector(".leave6");
// const leave7 = document.querySelector(".leave7");
// const leave8 = document.querySelector(".leave8");
// const leave9 = document.querySelector(".leave9");
// const leave10 = document.querySelector(".leave10");
// const leave11 = document.querySelector(".leave11");

let theEscapes = [
  leave1,
  leave2,
  leave3,
 

];

//The Escape button functionality

for (let i = 0; i < theEscapes.length; i++) {
  theEscapes[i].addEventListener("click", () => {
    lessons[i].classList.add("hide");
    section[i].style.height = "10vh";
    for (let i = 0; i < expandMore.length; i++) {
      expandMore[i].classList.remove("hide");
    }
  });
}
