import petsBase from "./pets-base.js";

/*<div class="slider-card slider-card-1" id="card-1"> 
    <div class="slider-card-foto slider-foto-1"  id="foto-1"></div>
    <div class="slider-card-name slider-name-1" id="name-1">Katrine</div>
    <div class="slider-card-button slider-button-1" id="info-button-1">Learn more</div>
</div>*/
//======================= fill card context =============================================


for (let i=1; i <= petsBase.length; i++){
    console.log(i);
  document.getElementById(`foto-${i}`).style.backgroundImage = `url(${petsBase[i-1].img})`;  
  document.getElementById(`name-${i}`).innerText = `${petsBase[i-1].name}`;  

  document.getElementById(`foto321-${i}`).style.backgroundImage = `url(${petsBase[i-1].img})`;  
  document.getElementById(`name321-${i}`).innerText = `${petsBase[i-1].name}`;  
}
console.log('length => '+petsBase.length);






//======================================dropdown menu begining ==================================

let drop = document.getElementById('nav-dropdown');
let closeBurger = document.getElementById('dropdown-burger-close');
let dropDownBlock = document.getElementById('dropdown-open');
let dropMainIco = document.getElementById('drop-ico');
let menuOpened = false;

let smallOpen = () => {
    if( window. innerWidth > 321) {
        dropDownBlock.style.width = '320px';
    } else {
        dropDownBlock.style.width = '100%';
    }
    dropMainIco.style.transform = "rotate(90deg)"
    setTimeout(() => closeBurger.style.transform = "rotate(90deg)", 400)
    
}

closeBurger.addEventListener('click',()=> {
    menuOpened = false;
    dropDownBlock.style.width = '0px';
    closeBurger.style.transform = "rotate(0deg)";
    setTimeout(() => dropMainIco.style.transform = "rotate(0deg)", 400);
});

dropDownBlock.addEventListener('click',()=> {
    menuOpened = false;
    dropDownBlock.style.width = '0px';
    closeBurger.style.transform = "rotate(0deg)";
    setTimeout(() => dropMainIco.style.transform = "rotate(0deg)", 400);
    
});

window.addEventListener('resize',()=>{
    
    if(menuOpened){
        smallOpen();
    }
});

drop.addEventListener('click',() =>{
    menuOpened = true;
    
    smallOpen();
});

//====================================== dropdown menu end ===========================================
let countClick = 0;
const sliderLeftButton = document.getElementById('slider-left-button');
const sliderRightButton = document.getElementById('slider-right-button');
const card1 = document.getElementById('card-1');
const scroller = document.getElementById('wrapper-carusel');

let itemWidth = card1.clientWidth;
let scrollerWidth = scroller.clientWidth;

window.addEventListener('resize',()=>{ 
    scrollerWidth = scroller.clientWidth;
    itemWidth = card1.clientWidth;
});

const nextBtn = document.getElementById('slider-left-button');
const prevBtn = document.getElementById('slider-right-button');

nextBtn.addEventListener('click', scrollToPrevItem);
prevBtn.addEventListener('click', scrollToNextItem);


function scrollToNextItem() {
    console.log('scrollLeft => '+scroller.scrollLeft);
    if(scroller.scrollLeft < ((scroller.scrollWidth/2+itemWidth )- itemWidth))
        scroller.scrollBy({left: scrollerWidth, top: 0, behavior:'smooth'});
    else
        scroller.scrollTo({left: 0, top: 0, behavior:'auto'});
 }
 function scrollToPrevItem() {
    console.log('scrollLeft <= '+scroller.scrollLeft)
    if(scroller.scrollLeft > 210) //!=0
    
        scroller.scrollBy({left: -scrollerWidth, top: 0, behavior:'smooth'});
    else
         scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'auto'});
 }

/*===============================================scroll 321px===========================================*/
 const scroller321 = document.getElementById('wrapper-carusel-321');
 const nextBtn321 = document.getElementById('slider-left-button-321');
 const prevBtn321 = document.getElementById('slider-right-button-321');

nextBtn321.addEventListener('click', scrollToNextItem321);
 prevBtn321.addEventListener('click', scrollToPrevItem321);
 
 let itemWidth321 = card1.clientWidth;
 let scrollerWidth321 = scroller321.clientWidth;

window.addEventListener('resize',()=>{
    scrollerWidth321 = scroller321.clientWidth;
    itemWidth321 = card1.clientWidth;
});


 function scrollToNextItem321() {
    console.log('scrollLeft => '+scroller321.scrollLeft);
    if((scroller321.scrollLeft+100)< ((scroller321.scrollWidth)-scrollerWidth321))
        scroller321.scrollBy({left: scrollerWidth321, top: 0, behavior:'smooth'});
    else
        scroller321.scrollTo({left: 0, top: 0, behavior:'auto'});
 }
 function scrollToPrevItem321() {
    console.log('scrollLeft <= '+scroller321.scrollLeft);
    if(scroller321.scrollLeft > 50)//!=100
        scroller321.scrollBy({left: -scrollerWidth321, top: 0, behavior:'smooth'});
    else
         scroller321.scrollTo({left: scroller321.scrollWidth, top: 0, behavior:'auto'});
 }