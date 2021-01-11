$(document).ready(function(){
   $(window).scroll(function(){
         if(this.scrollY > 20){
             $('.main').addClass("sticky");
         }   else{
             $('.main').removeClass("sticky")
         } 
   });   
   $('.menu-button').click(function(){
        $('.main .menu').toggleClass("active");
        $('.menu-button i').toggleClass("active");
   });
});