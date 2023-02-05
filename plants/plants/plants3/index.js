const burgerMenuIcon=document.querySelector('.burger_menu');
const mobileHeaderMenu=document.querySelector('.mobile_header_menu');
const crossIcon=document.querySelector('.cross');
const navLinks=document.querySelectorAll('.nav_link');
const serviceType=document.querySelectorAll('.service_type');
const serviceTypes=document.querySelector('.service_types');
const gardenType=serviceTypes.querySelector('.gardens_type');
const lawnType=serviceTypes.querySelector('.lawn_type');
const plantingType=serviceTypes.querySelector('.planting_type');
const service=document.querySelector('.service');
const gardenCards=service.querySelectorAll('.garden_care');
const plantingCards=service.querySelectorAll('.planting_care');
const lawnCard=service.querySelector('.lawn_care');
const priceItem=document.querySelectorAll('.price_item');
const pricesItems=document.querySelector('.prices_types');
const priceCard=document.querySelectorAll('.price_card');
const priceOrderBtn=document.querySelectorAll('.price_order_button');
const contactsHref=document.querySelectorAll('.contacts-href');
const accordionBtn=document.querySelectorAll('.accordion_btn');
const cityCard=document.querySelectorAll('.city_card');
const selectCity=document.querySelectorAll('.select_c');
const select = document.querySelector('select');
const price=document.querySelector('.prices');
const priceAd=document.querySelector('.price_ad');

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

let activeBtnCounter=0;

for(let i=0; i<serviceType.length; i++){

serviceType[i].addEventListener('click', ()=>{
    
    if(serviceType[i]===serviceType[0] && serviceType[i].classList.contains('active')===true){
        serviceType[i].disabled=false;
        serviceType[i].classList.remove('active');
        plantingCards.forEach(item=>item.classList.remove('service_blue_effect'));
        lawnCard.classList.remove('service_blue_effect');
       
        if (activeBtnCounter===2 && gardenType.classList.contains('active')===false && lawnType.classList.contains('active')===true){
            gardenCards.forEach(item=>item.classList.add('service_blue_effect'));
            plantingCards.forEach(item=>item.classList.add('service_blue_effect'));
        }
        if (activeBtnCounter===2 && plantingType.classList.contains('active')===true && gardenType.classList.contains('active')===false){
            gardenCards.forEach(item=>item.classList.add('service_blue_effect'));
            lawnCard.classList.add('service_blue_effect');
        }
        activeBtnCounter--;  
    } else if(serviceType[i]===serviceType[0] && serviceType[i].classList.contains('active')===false){
        serviceType[i].disabled=false;
        serviceType[i].classList.add('active');
        serviceType[i].focus();
        plantingCards.forEach(item=>item.classList.add('service_blue_effect'))
        lawnCard.classList.add('service_blue_effect');
        gardenCards.forEach((item)=>item.classList.remove('service_blue_effect'));
        activeBtnCounter++;  
    };

    if(serviceType[i]===serviceType[1] && serviceType[i].classList.contains('active')===true){
        serviceType[i].disabled=false;
        serviceType[i].classList.remove('active');
        gardenCards.forEach((item=>item.classList.remove('service_blue_effect')));
        plantingCards.forEach((item=>item.classList.remove('service_blue_effect')));
        if (activeBtnCounter===2 && lawnType.classList.contains('active')===false && gardenType.classList.contains('active')===true){
            plantingCards.forEach(item=>item.classList.add('service_blue_effect'));
            lawnCard.classList.add('service_blue_effect');
        }
        if (activeBtnCounter==2 && lawnType.classList.contains('active')===false && plantingType.classList.contains('active')===true){
            lawnCard.classList.add('service_blue_effect');
            gardenCards.forEach((item)=>item.classList.add('service_blue_effect'));
        }
        activeBtnCounter--;
    } else if(serviceType[i]===serviceType[1] && serviceType[i].classList.contains('active')===false){
        serviceType[i].disabled=false;
        serviceType[i].classList.add('active');
        serviceType[i].focus();
        plantingCards.forEach(item=>item.classList.add('service_blue_effect'));
        gardenCards.forEach(item=>item.classList.add('service_blue_effect'));
        lawnCard.classList.remove('service_blue_effect');
        activeBtnCounter++; 
    }
   
    if( serviceType[i]===serviceType[2] && serviceType[i].classList.contains('active')===true){ 
        serviceType[i].disabled=false;
        serviceType[i].classList.remove('active');
        gardenCards.forEach((item=>item.classList.remove('service_blue_effect')));
        lawnCard.classList.remove('service_blue_effect');
        if(activeBtnCounter===2 && plantingType.classList.contains('active')===false && gardenType.classList.contains('active')===true){
            gardenCards.forEach((item)=>item.classList.remove('service_blue_effect'));
            plantingCards.forEach(item=>item.classList.add('service_blue_effect'));
            lawnCard.classList.add('service_blue_effect');
        };
        if(activeBtnCounter===2 && plantingType.classList.contains('active')===false && lawnType.classList.contains('active')===true){
            plantingCards.forEach(item=>item.classList.add('service_blue_effect'));
            gardenCards.forEach((item)=>item.classList.add('service_blue_effect'));
            lawnCard.classList.remove('service_blue_effect');
        }
        activeBtnCounter--;
    } else if (serviceType[i]===serviceType[2] && serviceType[i].classList.contains('active')===false){
        serviceType[i].disabled=false;
        serviceType[i].classList.add('active');
        serviceType[i].focus();
        gardenCards.forEach((item=>item.classList.add('service_blue_effect')));
        lawnCard.classList.add('service_blue_effect');
        plantingCards.forEach((item)=>item.classList.remove('service_blue_effect'));
        activeBtnCounter++;
    }
    
    if(activeBtnCounter===2 && serviceType[2].classList.contains('active')===false){
        plantingCards.forEach((item=>item.classList.add('service_blue_effect')));
        gardenCards.forEach((item=>item.classList.remove('service_blue_effect')));
        lawnCard.classList.remove('service_blue_effect');
    }

    if(activeBtnCounter===2 && serviceType[1].classList.contains('active')===false){
        lawnCard.classList.add('service_blue_effect');
        gardenCards.forEach((item=>item.classList.remove('service_blue_effect')));
         plantingCards.forEach((item=>item.classList.remove('service_blue_effect')));
    }
    if(activeBtnCounter===2 && serviceType[0].classList.contains('active')===false){
        gardenCards.forEach((item)=>item.classList.add('service_blue_effect'));
        lawnCard.classList.remove('service_blue_effect');
        plantingCards.forEach((item=>item.classList.remove('service_blue_effect')));
    }

    if(serviceType[0].classList.contains('active')===true && serviceType[1].classList.contains('active')===true){
      serviceType[2].disabled=true;
      serviceType[2].classList.add('disabled');
    } else{
        serviceType[2].disabled=false;
        serviceType[2].classList.remove('disabled');
    }
    if(serviceType[0].classList.contains('active')===true && serviceType[2].classList.contains('active')===true){
        serviceType[1].disabled=true; 
        serviceType[1].classList.add('disabled'); 
    }else{
        serviceType[1].disabled=false;
        serviceType[1].classList.remove('disabled');
    };
    if(serviceType[1].classList.contains('active')===true && serviceType[2].classList.contains('active')===true){
        serviceType[0].disabled=true; 
        serviceType[0].classList.add('disabled'); 
    }else{
        serviceType[0].disabled=false;
        serviceType[0].classList.remove('disabled');
    };
});
}

for(let i=0; i<priceItem.length; i++){
    priceOrderBtn[i].addEventListener('click',()=>{
        priceCard[i].classList.remove('hidden');
        priceCard[i].classList.add('visible');
    });
    
    priceItem[i].addEventListener('click',()=>{

        priceCard[i].classList.remove('hidden');
       if(priceCard[i-1]){
        priceCard[i-1].classList.add('hidden'); 
        priceCard[i-1].classList.remove('visible');
       };
       if(priceCard[i+1]){
        priceCard[i+1].classList.add('hidden');
        priceCard[i+1].classList.remove('visible');
       }
       if(priceCard[i]===priceCard[priceItem.length-1]){
        priceCard[0].classList.add('hidden');
        priceCard[0].classList.remove('visible');
        
       }
       if(priceCard[i]===priceCard[0]){
        priceCard[priceItem.length-1].classList.add('hidden');
        priceCard[priceItem.length-1].classList.remove('visible');
       }
       if(screen.width<=380){
        priceAd.classList.add('price_mobile_ad');
        }
    });
    priceCard[i].addEventListener('click', ()=>{
        priceCard[i].classList.add('hidden');
        if(screen.width<=380){
            priceAd.classList.remove('price_mobile_ad');
         }
    });

    accordionBtn[i].addEventListener('click',()=>{
        priceCard[i].classList.remove('visible');
        priceCard[i].classList.add('hidden');
        if(screen.width<=380){
            priceAd.classList.remove('price_mobile_ad');
         }
    })
}


for (let i=0; i<selectCity.length; i++){
    
   select.addEventListener('change',()=>{
    console.log(select.value)
    if(select.value==='Canandaigua, NY'){
        cityCard[0].classList.remove('hidden');
        cityCard[1].classList.add('hidden');
        cityCard[2].classList.add('hidden');
        cityCard[3].classList.add('hidden');
    } else if(select.value==='New York City'){
       cityCard[1].classList.remove('hidden');
       cityCard[0].classList.add('hidden');
       cityCard[2].classList.add('hidden');
       cityCard[3].classList.add('hidden');
    } else if(select.value==='Yonkers, NY'){
        cityCard[2].classList.remove('hidden');
        cityCard[0].classList.add('hidden');
        cityCard[1].classList.add('hidden');
        cityCard[3].classList.add('hidden');
    } else if(select.value==='Sherrill, NY'){
        cityCard[3].classList.remove('hidden');
        cityCard[0].classList.add('hidden');
        cityCard[1].classList.add('hidden');
        cityCard[2].classList.add('hidden');
    } else if(select.value='City'){
        cityCard[0].classList.add('hidden');
        cityCard[1].classList.add('hidden');
        cityCard[2].classList.add('hidden');
        cityCard[3].classList.add('hidden');
    }

   })
}