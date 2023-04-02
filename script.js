let drop = document.getElementById('nav-dropdown');
let closeBurger = document.getElementById('dropdown-burger-close');
let dropDownBlock = document.getElementById('dropdown-open');
let menuOpened = false;

let smallOpen = () => {
    if( window. innerWidth > 321) {
        dropDownBlock.style.width = '320px';
    } else {
        dropDownBlock.style.width = '100%';
    }
}

closeBurger.addEventListener('click',()=> {
    menuOpened = false;
    dropDownBlock.style.width = '0px';
});

dropDownBlock.addEventListener('click',()=> {
    menuOpened = false;
    dropDownBlock.style.width = '0px';
});

window.addEventListener('resize',()=>{
    console.log('in resize  '+menuOpened);
    if(menuOpened){
        smallOpen();
    }
});

drop.addEventListener('click',() =>{
    menuOpened = true;
    console.log('in open  ' + menuOpened)
    smallOpen();
});