//loading screen
let body = document.body
body.style.overflow = 'hidden'
document.querySelector('.loading').style.opacity ='1'
document.querySelector('.loading').style.visibility ='visible'
document.querySelector('.loading').style.transition ='.8s'
document.querySelector('.top').style.opacity = '0'
document.querySelector('.top').style.visibility = 'hidden'

window.addEventListener('load',function(){
    setTimeout(function(){
        document.querySelector('.loading').style.opacity ='0'
        document.querySelector('.loading').style.visibility ='hidden'
        document.querySelector('.loading').style.transition ='.8s'
        document.querySelector('.top').style.opacity = '1'
        document.querySelector('.top').style.visibility = 'visible'
        body.style.overflow = 'auto';
    }, 1500);
})




/* scroll to up */
document.querySelector('.top').style.opacity = '0'
window.addEventListener('scroll',function(){
    let addressPos = this.document.getElementById('address').offsetTop
    if(window.scrollY >addressPos){
        document.querySelector('.top').style.opacity ='1'
        document.querySelector('.top').style.transition = '.7s'
    }else{
        document.querySelector('.top').style.opacity ='0'
        document.querySelector('.top').style.transition = '.7s'
    }
})

/*  animation */
let addressPos = this.document.getElementById('address');
let text =  this.document.getElementById('section1-span1');
let text2 =  this.document.getElementById('section1-span2');
let text01 =  this.document.getElementById('section01-span1');
let text02 =  this.document.getElementById('section01-span2');
let text3 =  this.document.getElementById('span-section');
let text03 =  this.document.getElementById('span07-section');
let textRoom =  this.document.getElementById('section2-titlee');

let img = document.getElementById('img1');
window.addEventListener('scroll',function(){
    if(window.scrollY >50){
  
        text.classList.add('moveSection');
        text.style.transition ='2s';
        text01.classList.add('moveSection');
        text01.style.transition ='2s';
        text2.classList.add('moveSection');
        text2.style.transition ='2s';
        text02.classList.add('moveSection');
        text02.style.transition ='2s';
        text3.classList.add('moveSection');
        text3.style.transition ='2s';
        text03.classList.add('moveSection');
        text03.style.transition ='2s';
        console.log("scroll"+scrollY)
    }
    else{
    
        text.classList.remove('moveSection');
        text.style.transition ='2s';
        text.style.display ='block';

        textRoom.classList.add('move');
        textRoom.style.transition ='2s';

        text02.classList.remove('moveSection');
        text02.style.transition ='2s';
        text02.style.display ='block';

        text03.classList.remove('moveSection');
        text03.style.transition ='2s';
        text03.style.display ='block';

        textRoom.classList.remove('move');
        textRoom.style.transition ='2s';
        textRoom.style.display ='block';

        text2.classList.remove('moveSection');
        text2.style.transition ='2s';
        text3.classList.remove('moveSection');
        text3.style.transition ='2s';
    }
   
})
window.addEventListener('scroll',function(){
    if(window.scrollY >=800){
        textRoom.classList.add('move');
        textRoom.style.transition ='2s';
    }
    else{
        addressPos.classList.remove('move');
        addressPos.style.transition ='2s';
        textRoom.style.display ='block';
    }
})

let section_03title2 =  this.document.getElementById('section3-title2');
let section_03title22 =  this.document.getElementById('section3-title22');
let section3pra =  this.document.getElementById('section3-pra');


window.addEventListener('scroll',function(){

    if(window.scrollY >=1290){
        section_03title2.classList.add('move');
        section_03title2.style.transition ='2s';
        section_03title22.classList.add('move');
        section_03title22.style.transition ='2s';
        section3pra.classList.add('blinker');
        section3pra.style.transition ='3s';
    }else{
        section_03title2.classList.remove('move');
        section_03title2.style.transition ='2s';
        section_03title2.style.display ='block';
        section_03title22.classList.remove('move');
        section_03title22.style.transition ='2s';
        section_03title22.style.display ='block';
        section3pra.classList.remove('blinker');
        section3pra.style.transition ='3s';
        section3pra.style.display ='block';
    }
})

window.addEventListener('scroll',function(){

    if(window.scrollY >=3500){
    addressPos.classList.add('move');
    addressPos.style.transition ='2s';
    }
    else{
        addressPos.classList.remove('move');
        addressPos.style.transition ='3s';
        addressPos.style.display ='block'; 
    }

})
/*  animation  item1/item2*/
let contentItem1 = this.document.getElementById('item1');
let contentItem2 = this.document.getElementById('item2')
window.addEventListener('scroll',function(){
    if(window.scrollY >3500){
        contentItem1.classList.add('moveitem');
        contentItem1.style.transition ='2s'
        contentItem2.classList.add('moveitem');
        contentItem2.style.transition ='2s'
    }
    else{
        contentItem1.classList.remove('moveitem');
        contentItem1.style.transition ='2s'
        contentItem2.classList.remove('moveitem');
        contentItem2.style.transition ='2s'
    }
})

let content = document.getElementById('header-content');
let form = document.getElementById('reg-form');
let para = document.getElementById('section3-pra');
//form.style.opacity ='0'
window.addEventListener('load',function(){ 
        setTimeout(function(){
           
             content.classList.add('moveText');
             form.classList.add('blinkForm');
             content.style.opacity ='1'
             form.style.opacity ='1'
        
        
             document.querySelector('.header-content').style.visibility = 'visible'
             document.querySelector('.header-content').style.transition ='.8s'
             document.querySelector('.form').style.visibility = 'visible'
             document.querySelector('.form').style.transition ='.8s'
        
             
             
    }, 1500);
})


let register = document.getElementById('registerPage');
let register2 = document.getElementById('registerPage2');
let registerPage = document.getElementById('register-page'); /// 
 
let registerimg = document.getElementById('register-img');
let footer =document.getElementById('footer');
let optionbtn =document.getElementById('option_btn');
let topbtn =document.getElementById('top-btn');
let overlay = document.getElementById('booking-overlay');
let regform = document.getElementById('reg-form');
register.addEventListener('click',function(){
    registerPage.style.display ='block';
    footer.style.display ='none';
    optionbtn.style.display ='none';
    topbtn.style.display ='none';
    regform.style.display ='none';
   
})
register2.addEventListener('click',function(){
    registerPage.style.display ='block';
    footer.style.display ='none';
    optionbtn.style.display ='none';
    topbtn.style.display ='none';
    regform.style.display ='none';
    
})

overlay.addEventListener('click',function(){
    registerPage.style.display ='none';
    footer.style.display ='block';
    optionbtn.style.display ='block';
    topbtn.style.display ='block';
    regform.style.display ='block';
})

let imagee = document.getElementById("img1");
let imagee2 = document.getElementById("img2");
let title = document.getElementById("title");
        
        imagee.addEventListener('mouseover' , function() {
            title.style.display ='block';
            title.innerHTML='relax spa'
           // title.classList.add('distortion_grid_item-title');
            document.querySelector('.distortion_grid_item-title').style.visibility = 'visible'
           // imagee.classList.add('moveText');
          
        })
        imagee2.addEventListener('mouseleave' , function() {
            title.style.display ='block';
        })

        $("#img1").hover(
            function () {
                 $(title).innerHTML='jjjjjj';
                 console.log("from imag2 hover")
            },
         
        );

    
let bookingicon = document.getElementById('booking-icon');
bookingicon.addEventListener('click',function(){
    registerPage.style.display ='none';
    footer.style.display ='block';
    optionbtn.style.display ='block';
    topbtn.style.display ='block';
    regform.style.display ='block';
})

$(document).ready(function(){
$('.carousel_02').owlCarousel({
    loop:true, 
    stagePadding: 0,
    margin:0,
    autoWidth:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2.25
        }
    }
})
$('.carousel_03').owlCarousel({
    loop:true, 
    stagePadding: 0,
    margin:0,
    autoWidth:false,
    //responsiveClass:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        766:{
            items:2
        },
        1000:{
            items:2.1
        }
    }
})
$('.carousel_04').owlCarousel({
    loop:false, 
    stagePadding: 0,
    margin:0,
    autoWidth:false,
    center: true,
    responsive:{
        0:{
            items:1
        },
        766:{
            items:1
        },
        1000:{
            items:2.1
        }
    }
})
});

/**scroll to up */
document.querySelector('.top').style.opacity = '0'
window.addEventListener('scroll',function(){
    let aboutPos = this.document.getElementById('header').offsetTop
    if(window.scrollY > aboutPos){
        document.querySelector('.top').style.opacity = '1'
        document.querySelector('.top').style.transition = '.7s'
    }
    else{
        document.querySelector('.top').style.opacity = '0'
        document.querySelector('.top').style.transition = '.7s'
    }
})

let topbtnn = document.querySelector('.top button')
topbtnn.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior: 'smooth'
    })
})
