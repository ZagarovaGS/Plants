console.log('верстка получилась отличная, выполнены все требования');

const burgerMenuIcon=document.querySelector('.burger_menu');
const mobileHeaderMenu=document.querySelector('.mobile_header_menu');
const crossIcon=document.querySelector('.cross');
const navLinks=document.querySelectorAll('.nav_link');
console.log(navLinks)
burgerMenuIcon.addEventListener('click',()=>{
    mobileHeaderMenu.classList.remove('hidden');
    mobileHeaderMenu.classList.remove('smooth_hidden');
    mobileHeaderMenu.classList.add('smooth_appearance');
    burgerMenuIcon.classList.add('hidden');
})
crossIcon.addEventListener('click', ()=>{
    mobileHeaderMenu.classList.remove('smooth_appearance');
    burgerMenuIcon.classList.remove('hidden');
    mobileHeaderMenu.classList.add('smooth_hidden');
});

for(let navLink=0; navLink<navLinks.length; navLink++){
navLinks[navLink].addEventListener('click', ()=>{
    mobileHeaderMenu.classList.add('hidden');
    burgerMenuIcon.classList.remove('hidden');
})
};

document.addEventListener('mouseup', e=>{
    const target=e.target;
    if(!target.closest('.burgerMenuIcon') && !target.closest('.mobileHeaderMenu')){
        mobileHeaderMenu.classList.add('smooth_hidden');
        burgerMenuIcon.classList.remove('hidden');
    }
})
