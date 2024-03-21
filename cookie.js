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