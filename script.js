let drop = document.getElementById('nav-dropdown');
drop.addEventListener('click',() =>{

    drop.className = 'header-nav-dropdown-open';

    drop.style.zIndex = '2';
    drop.style.backgroundColor = 'black';
    drop.style.color ='white';
});