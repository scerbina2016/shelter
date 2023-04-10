import petsBase from "./pets-base.js";


//======================= fill card context =============================================

const petsModalWin = document.getElementById('pets-modal-container');
const modalFoto = document.getElementById('modal-foto');
const modalName = document.getElementById('modal-name');
const modalTypeBreed = document.getElementById('modal-type-breed');
const modalDescription = document.getElementById('modal-description');
const modalAge = document.getElementById('modal-age');
const modalInocul = document.getElementById('modal-inocul');
const modalDiseases = document.getElementById('modal-diseases');
const modalParasites = document.getElementById('modal-parasites');


for (let i=1; i <= petsBase.length; i++){
    console.log(i);
  document.getElementById(`foto-${i}`).style.backgroundImage = `url(${petsBase[i-1].img})`;  
  document.getElementById(`name-${i}`).innerText = `${petsBase[i-1].name}`;  

if(document.title === 'Shelter'){
  document.getElementById(`foto321-${i}`).style.backgroundImage = `url(${petsBase[i-1].img})`;  
  document.getElementById(`name321-${i}`).innerText = `${petsBase[i-1].name}`;  

  document.getElementById(`card-${i}`).addEventListener('click',()=>{

    petsModalWin.style.display = 'flex';
    modalFoto.style.backgroundImage = `url(${petsBase[i-1].img})`;
    modalName.innerText = petsBase[i-1].name
    modalTypeBreed.innerText = `${petsBase[i-1].type} - ${petsBase[i-1].breed}`;
    modalDescription.innerText = petsBase[i-1].description;
    modalAge.innerHTML = `<span class="list-text"> <b>Age:</b> ${petsBase[i-1].age}</span>`;
    modalInocul.innerHTML = `<span class="list-text"><b>Inoculations:</b> ${petsBase[i-1].inoculations}</span>`;
    modalDiseases.innerHTML = `<span class="list-text"><b>Diseases:</b> ${petsBase[i-1].diseases}</span>`;
    modalParasites.innerHTML = `<span class="list-text"><b>Parasites:</b> ${petsBase[i-1].parasites}</span>`;

  })

}
  document.getElementById(`info-button-${i}`).addEventListener('click',()=>{

    petsModalWin.style.display = 'flex';
    modalFoto.style.backgroundImage = `url(${petsBase[i-1].img})`;
    modalName.innerText = petsBase[i-1].name
    modalTypeBreed.innerText = `${petsBase[i-1].type} - ${petsBase[i-1].breed}`;
    modalDescription.innerText = petsBase[i-1].description;
    modalAge.innerHTML = `<span class="list-text"> <b>Age:</b> ${petsBase[i-1].age}</span>`;
    modalInocul.innerHTML = `<span class="list-text"><b>Inoculations:</b> ${petsBase[i-1].inoculations}</span>`;
    modalDiseases.innerHTML = `<span class="list-text"><b>Diseases:</b> ${petsBase[i-1].diseases}</span>`;
    modalParasites.innerHTML = `<span class="list-text"><b>Parasites:</b> ${petsBase[i-1].parasites}</span>`;

  })
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

if(document.title === 'Shelter'){
let countClick = 0;
const sliderLeftButton = document.getElementById('slider-left-button');
const sliderRightButton = document.getElementById('slider-right-button');
const card1 = document.getElementById('card-1');
const scroller = document.getElementById('wrapper-carusel');

let itemWidth = card1.clientWidth;
let scrollerWidth = scroller.clientWidth;/*clientWidth*/

window.addEventListener('resize',()=>{ 
    scrollerWidth = scroller.clientWidth;
    itemWidth = card1.clientWidth;
    console.log('title => '+ document.title);

});

const nextBtn = document.getElementById('slider-left-button');
const prevBtn = document.getElementById('slider-right-button');

nextBtn.addEventListener('click', scrollToPrevItem);/* убрать 321*/
prevBtn.addEventListener('click', scrollToNextItem);


function scrollToNextItem() {
   
    let badabum = scrollerWidth;
    if (window.innerWidth > 1279){badabum = 100};
    console.log('badabum = ' + badabum)
    //if(scroller.scrollLeft < ((scroller.scrollWidth/2+itemWidth )- itemWidth))
    //  scroller.scrollBy({left: scrollerWidth+scrollerWidth/5, top: 0, behavior:'smooth'});
    if((scroller.scrollLeft+badabum) < ((scroller.scrollWidth)-scrollerWidth))/*/2  - itemWidth*/
        scroller.scrollBy({left: scrollerWidth, top: 0, behavior:'smooth'})
 else {
    
        scroller.scrollTo({left: 0, top: 0, behavior:'auto'})};
 }
 function scrollToPrevItem() {
    
    if(scroller.scrollLeft >100) //!=0
    
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
  
    if((scroller321.scrollLeft+100)< ((scroller321.scrollWidth)-scrollerWidth321))
        scroller321.scrollBy({left: scrollerWidth321, top: 0, behavior:'smooth'});
    else
        scroller321.scrollTo({left: 0, top: 0, behavior:'auto'});
 }
 function scrollToPrevItem321() {
   
    if(scroller321.scrollLeft > 50)//!=100
        scroller321.scrollBy({left: -scrollerWidth321, top: 0, behavior:'smooth'});
    else
         scroller321.scrollTo({left: scroller321.scrollWidth, top: 0, behavior:'auto'});
 }
}
//==========================================modal block=====================================

const modalCloseBut = document.getElementById('pets-modal-close-but');

modalCloseBut.addEventListener('click',()=>{
    petsModalWin.style.display = 'none';
})



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// slider wia grid======================================================
/*if(document.title === 'Shelter'){
const cardGrid1 = document.getElementById('card-1');
const cardGrid2 = document.getElementById('card-2');
const cardGrid3 = document.getElementById('card-3');
const cardGrid4 = document.getElementById('card-4');
const cardGrid5 = document.getElementById('card-5');
const cardGrid6 = document.getElementById('card-6');
const cardGrid7 = document.getElementById('card-7');
const cardGrid8 = document.getElementById('card-8');
const cardGrid9 = document.getElementById('card-8');
const cardGrid10 = document.getElementById('card-8');
const cardGrid11 = document.getElementById('card-8');


let countClick = 0;
const scroller = document.getElementById('wrapper-carusel');

let itemWidth = cardGrid1.clientWidth;
let scrollerWidth = scroller.clientWidth;/*clientWidth*/

/*window.addEventListener('resize',()=>{ 
    scrollerWidth = scroller.clientWidth;
    itemWidth = cardGrid1.clientWidth;
    console.log('title => '+ document.title);

});



const leftBtnExp = document.getElementById('slider-left-button');
const rightBtnExp = document.getElementById('slider-right-button');

leftBtnExp.addEventListener('click', scrollToPrevItemExp);/* убрать 321*/
/*rightBtnExp.addEventListener('click', scrollToNextItemExp);

let countAddBlock = 0;
function scrollToNextItemExp() {
   
    let badabum = scrollerWidth;
    if (window.innerWidth > 1279){badabum = 100};
    console.log('badabum = ' + badabum)
    //if(scroller.scrollLeft < ((scroller.scrollWidth/2+itemWidth )- itemWidth))
    //  scroller.scrollBy({left: scrollerWidth+scrollerWidth/5, top: 0, behavior:'smooth'});
    //if((scroller.scrollLeft+badabum) < ((scroller.scrollWidth)-scrollerWidth))/2  - itemWidth*/
        /*scroller.scrollBy({left: scrollerWidth, top: 0, behavior:'smooth'})
 else {
        countAddBlock++;

        /*cardGrid1.style.gridColumn = '9/10';/*1/2*/
        /*cardGrid2.style.gridColumn = '10/11';/*2/3*/
        //cardGrid3.style.gridColumn = '11/12';/*3/4*/
        //cardGrid4.style.gridColumn = '12/13';/*3/4*/
        //cardGrid5.style.gridColumn = '13/14';/*3/4*/
        //cardGrid6.style.gridColumn = '14/15';/*3/4*/
        //cardGrid7.style.gridColumn = '15/16';/*3/4*/
        //cardGrid8.style.gridColumn = '16/17';/*3/4*/
        /*console.log('grid transform ==== =====')
        scroller.insertAdjacentHTML("beforeend", `<div class="card slider-card slider-card-1" id="card-1"> 
        <div class="slider-card-foto slider-foto-1"  id="foto-1"></div>
        <div class="slider-card-name slider-name-1" id="name-1">Katrine</div>
        <div class="slider-card-button slider-button-1" id="info-button-1">Learn more</div>
    </div>
    <div class="card slider-card slider-card-2" id="card-2">
        <div class="slider-card-foto slider-foto-2" id="foto-2"></div>
        <div class="slider-card-name slider-name-2" id="name-2">Jennifer</div>
        <div class="slider-card-button slider-button-2 " id="info-button-2">Learn more</div>
    </div>
    <div class="card slider-card slider-card-3" id="card-3">
        <div class="slider-card-foto slider-foto-3" id="foto-3"></div>
        <div class="slider-card-name slider-name-3" id="name-3">Woody</div>
        <div class="slider-card-button slider-button-3" id="info-button-3">Learn more</div>
    </div>
    <div class="card slider-card slider-card-4" id="card-4">
        <div class="slider-card-foto slider-foto-4" id="foto-4"></div>
        <div class="slider-card-name slider-name-4" id="name-4">4</div>
        <div class="slider-card-button slider-button-4" id="info-button-4">Learn more</div>
    </div>
    <div class="card slider-card slider-card-5" id="card-5">
        <div class="slider-card-foto slider-foto-5" id="foto-5"></div>
        <div class="slider-card-name slider-name-5" id="name-5">5</div>
        <div class="slider-card-button slider-button-5" id="info-button-5">Learn more</div>
    </div>
    <div class="card slider-card slider-card-6" id="card-6">
        <div class="slider-card-foto slider-foto-6" id="foto-6"></div>
        <div class="slider-card-name slider-name-6" id="name-6">6</div>
        <div class="slider-card-button slider-button-6" id="info-button-6">Learn more</div>
    </div>
    <div class="card slider-card slider-card-7" id="card-7">
        <div class="slider-card-foto slider-foto-7" id="foto-7"></div>
        <div class="slider-card-name slider-name-7" id="name-7">7</div>
        <div class="slider-card-button slider-button-7" id="info-button-7">Learn more</div>
    </div>
    <div class="card slider-card slider-card-8" id="card-8">
        <div class="slider-card-foto slider-foto-8" id="foto-8"></div>
        <div class="slider-card-name slider-name-8" id="name-8">8</div>
        <div class="slider-card-button slider-button-8" id="info-button-8">Learn more</div>
    </div>
        `);


        //scroller.scrollTo({left: 0, top: 0, behavior:'auto'})
        scroller.scrollBy({left: scrollerWidth, top: 0, behavior:'smooth'})
    };
 }
 function scrollToPrevItemExp() {
    
    if(scroller.scrollLeft >100) //!=0
    
        scroller.scrollBy({left: -scrollerWidth, top: 0, behavior:'smooth'});
    else
         scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'auto'});
 }
}*/