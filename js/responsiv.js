$(function (){
    isNavBarHidden = true;
    $('#menu_icon').click(function (){
      if(isNavBarHidden){
          $('body > header .nav_bar').fadeIn("slow");
          isNavBarHidden = false;
      }
      else{
          $('body > header .nav_bar').fadeOut("slow");
          isNavBarHidden = true;
      }
   });
});