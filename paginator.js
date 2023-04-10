import petsBase from "./pets-base.js";

/*window.addEventListener('resize',()=>{ 
    scrollerWidth = scroller.clientWidth;
    itemWidth = card1.clientWidth;
    console.log('title => '+ document.title);

});*/
const blockInbase = petsBase.length; 
let blockOnPage;
let numberPage = 1;
let maxPage =1;
console.log('mpb = '+maxPage);
const butLeftEnd = document.getElementById('but-left-2');
const butLeftPage = document.getElementById('but-left-1');
const butCentral = document.getElementById('but-center');
const butRightPage = document.getElementById('but-right-1');
const butRightEnd = document.getElementById('but-right-2');
const butCentralInner = document.getElementById('but-center-inner');
const scroller = document.querySelector('.our-pets-pet-content-card-container');
let scrollerWidth = scroller.clientWidth;
let scrollerHight = scroller.clientHeight;

const scrollUp = (timeout) => {
    setTimeout(() => {
        window.scrollTo({left: 0, top: -scrollerHight, behavior:'smooth'})
     }, timeout);

}



const styleNavButton = (numberPage,maxPage) =>{

if((numberPage === 1) && (numberPage != maxPage)){
butLeftEnd.style.borderColor = '#CDCDCD';
butLeftEnd.style.color = '#CDCDCD';
butLeftEnd.style.cursor = 'default';

butLeftPage.style.borderColor = '#CDCDCD';
butLeftPage.style.color = '#CDCDCD';
butLeftPage.style.cursor = 'default';

butRightPage.style.borderColor = '#F1CDB3 ';
butRightPage.style.color = '#292929';
butRightPage.style.cursor = 'pointer';

butRightEnd.style.borderColor = '#F1CDB3 ';
butRightEnd.style.color = '#292929';
butRightEnd.style.cursor = 'pointer';

}

if((numberPage > 1) && (numberPage < maxPage)){
    butLeftEnd.style.borderColor = '#F1CDB3';
butLeftEnd.style.color = '#29292';
butLeftEnd.style.cursor = 'pointer';

butLeftPage.style.borderColor = '#F1CDB3';
butLeftPage.style.color = '#29292';
butLeftPage.style.cursor = 'pointer';

butRightPage.style.borderColor = '#F1CDB3 ';
butRightPage.style.color = '#292929';
butRightPage.style.cursor = 'pointer';

butRightEnd.style.borderColor = '#F1CDB3 ';
butRightEnd.style.color = '#292929';
butRightEnd.style.cursor = 'pointer';
}

if((numberPage == maxPage)&&(maxPage > 1)){
butLeftEnd.style.borderColor = '#F1CDB3';
butLeftEnd.style.color = '#29292';
butLeftEnd.style.cursor = 'pointer';

butLeftPage.style.borderColor = '#F1CDB3';
butLeftPage.style.color = '#29292';
butLeftPage.style.cursor = 'pointer';

butRightPage.style.borderColor = '#CDCDCD';
butRightPage.style.color = '#CDCDCD';
butRightPage.style.cursor = 'default';

butRightEnd.style.borderColor = '#CDCDCD ';
butRightEnd.style.color = '#CDCDCD';
butRightEnd.style.cursor = 'default';
}

}




const startButtonSet = () => {
    console.log('in this ================');
    scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
    numberPage = 1;
    butCentralInner.innerText=numberPage

    maxPage = Math.ceil(blockInbase/blockOnPage);
    styleNavButton(numberPage , maxPage);
    numberPage = butCentral.innerText;
    console.log('start number page = ' + numberPage);/*=========================*/
    scrollerWidth = scroller.clientWidth;
    if(window.innerWidth > 1279){
        blockOnPage = petsBase.length;
        butLeftEnd.style.cursor = 'default';

        butLeftPage.style.cursor = 'default';
        
        butRightPage.style.borderColor = '#CDCDCD';
        butRightPage.style.color = '#CDCDCD';
        butRightPage.style.cursor = 'default';


        butRightEnd.style.borderColor = '#CDCDCD';
        butRightEnd.style.color = '#CDCDCD';
        butRightEnd.style.cursor = 'default';;

    } else {
        blockOnPage = 6;
        console.log('bloc on page 768 = ' +blockOnPage)
        if (window.innerWidth < 768){blockOnPage=3;};

        maxPage = Math.ceil(blockInbase/blockOnPage);
        styleNavButton(numberPage , maxPage);
        console.log('maxPage = '+maxPage);
        numberPage = butCentral.innerText;
        scrollerWidth = scroller.clientWidth;

        butRightPage.style.borderColor = '#F1CDB3 ';
        butRightPage.style.color = '#292929';
        butRightPage.style.cursor = 'pointer';

        butRightEnd.style.borderColor = '#F1CDB3 ';
        butRightEnd.style.color = '#292929';
        butRightEnd.style.cursor = 'pointer';

        butLeftEnd.style.cursor = 'pointer';;

        butLeftPage.style.cursor = 'pointer';
    }

}
startButtonSet();
window.addEventListener('resize',startButtonSet);


butLeftEnd.addEventListener('click',()=>{
scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
if(numberPage != 1){scrollUp(500)};
numberPage = 1;
styleNavButton(numberPage , maxPage);
butCentralInner.innerText=numberPage
});
butLeftPage.addEventListener('click',()=>{
scroller.scrollBy({left: -scrollerWidth, top: 0, behavior:'smooth'});
if(numberPage != 1){scrollUp(500)};
if(numberPage >1){numberPage -=1; butCentralInner.innerText=numberPage;
    styleNavButton(numberPage , maxPage)};
});

butCentral.addEventListener('click',()=>{
    console.log('max page = '+ maxPage);
    if(window.innerWidth >1279)(maxPage=1);
butCentralInner.innerText=`${numberPage}/${maxPage}`;
 setTimeout(() => {
    butCentralInner.innerText=numberPage;
 }, 1000);  
 scrollUp(1100)

});
butRightPage.addEventListener('click',()=>{
scroller.scrollBy({left: scrollerWidth, top: 0, behavior:'smooth'});
if(numberPage != maxPage){scrollUp(500)};
if(numberPage <= maxPage-1){
    numberPage++; 
    butCentralInner.innerText=numberPage;
    styleNavButton(numberPage , maxPage);
}
});
butRightEnd.addEventListener('click',()=>{
console.log('>> + maxPage ='+maxPage);
scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'smooth'});
if(numberPage != maxPage){scrollUp(500)};
numberPage = maxPage;
butCentralInner.innerText=numberPage;
styleNavButton(numberPage , maxPage);
});
