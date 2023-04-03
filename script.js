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