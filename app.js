// Menu_active

$(document).ready(function() {
	
	$("body").css("display", "none");

    $("body").fadeIn(700);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(700, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});


// Upper_button

$(document).ready(function(){
    $(function (){   
    $("#back-top").hide();
   
    $(window).scroll(function (){
      if ($(this).scrollTop() > 500){
        $("#back-top").fadeIn();
      } else{
        $("#back-top").fadeOut();
      }
    });
     
    $("#back-top a").click(function (){
      $("body,html").animate({
        scrollTop:0
      }, 800);
      return false;
    });
  });  
});


// Burger_menu

$(document).ready(function() {
  $('.menu-burger_header').click(function() {
    $('.menu-burger_header').toggleClass('open-menu');
    $('.nav_nav').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
  });
});
