let drop = document.getElementById('nav-dropdown');
let dropIco = document.getElementById('drop-ico');

let openDrop = false;

drop.addEventListener('click',() =>{
    openDrop = !openDrop;
    if(openDrop){
    drop.className = 'header-nav-dropdown-open';
    
    drop.style.zIndex = '2';
    drop.style.backgroundImage = 'url(./images/start-screen-background2.jpg)';
    drop.style.backgroundPosition = 'right';
    dropIco.style.marginTop = '10vw';
    drop.style.color ='white';
    } else {
        drop.className = 'header-nav-dropdown-1280';  
        drop.style.backgroundImage = 'url(./images/start-screen-background2.jpg)';
        dropIco.style.marginTop = '0';
    }
});
//background-image: url('./images/icons/burger-close.png');