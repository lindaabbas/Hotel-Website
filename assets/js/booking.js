 //loading booking-screen
 let body = document.body
 body.style.overflow = 'hidden'
 document.querySelector('.booking-loading').style.opacity ='1'
 document.querySelector('.booking-loading').style.visibility ='visible'
 document.querySelector('.booking-loading').style.transition ='.8s'
 document.querySelector('.booking-top').style.opacity = '0'
 document.querySelector('.booking-top').style.visibility = 'hidden'
 
 window.addEventListener('load',function(){
     setTimeout(function(){
         document.querySelector('.booking-loading').style.opacity ='0'
         document.querySelector('.booking-loading').style.visibility ='hidden'
         document.querySelector('.booking-loading').style.transition ='.8s'
         document.querySelector('.booking-top').style.opacity = '1'
         document.querySelector('.booking-top').style.visibility = 'visible'
         body.style.overflow = 'auto'
     }, 500);
 }) 
 /* scroll to up */
document.querySelector('.booking-top').style.opacity = '0'
window.addEventListener('scroll',function(){
    console.log(window.scrollY )
    let addressPos = this.document.getElementById('form').offsetTop
    if(window.scrollY >addressPos){
        document.querySelector('.booking-top').style.opacity ='1'
        document.querySelector('.booking-top').style.transition = '.7s'
    }else{
        document.querySelector('.booking-top').style.opacity ='0'
        document.querySelector('.booking-top').style.transition = '.7s'
    }
});
let content = document.getElementById('header-content');
let form = document.getElementById('form');
window.addEventListener('load',function(){ 
        setTimeout(function(){
           
             content.classList.add('moveText');
             form.classList.add('blinkForm');
             content.style.opacity ='1'
             form.style.opacity ='1'
             document.querySelector('.header-content').style.visibility = 'visible'
             document.querySelector('.header-content').style.transition ='.8s'
             document.querySelector('.form-booking').style.visibility = 'visible'
             document.querySelector('.form-booking').style.transition ='.8s'
    }, 500);
});

