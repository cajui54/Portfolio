const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.header__nav');
let menuLink = new Array;
menuLink = document.querySelectorAll('.nav__listOption li a');

let menuOpen = false;

menuBtn.addEventListener('click', ()=>{
    showMenu();
});

menuLink.forEach((link)=>{
    link.addEventListener('click', (e)=>{
       showMenu();
    });
});

function showMenu(){
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuNav.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuNav.classList.remove('open');
        menuOpen = false;
    }
}
