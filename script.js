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

  document.getElementById(`info321-button-${i}`).addEventListener('click',()=>{

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

