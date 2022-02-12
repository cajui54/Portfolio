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

/*nav JS*/

const menuitems = document.querySelectorAll('.nav__listOption a');
const scrollToIdOnClick = (event) => {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    window.scroll({
        top: to - 115,
        behavior: "smooth",
    });
}
menuitems.forEach((item) =>{
    item.addEventListener('click', scrollToIdOnClick);
});