//JQuery
$( document ).ready(function() {

  $(".intro-text").animate({'opacity':'1'},1700);
 
  $("#hide-project-1").click(function() {
    $("#hide-1").toggle(300);
    $("#hide-button-1").toggleClass("rotate-on-click");
  });

  $("#hide-project-2").click(function() {
    $("#hide-2").toggle(300);
    $("#hide-button-2").toggleClass("rotate-on-click");
  });

  $("#hide-project-3").click(function() {
    $("#hide-3").toggle(300);
    $("#hide-button-3").toggleClass("rotate-on-click");
  });

  $("#hide-project-4").click(function() {
    $("#hide-4").toggle(300);
    $("#hide-button-4").toggleClass("rotate-on-click");
  });

  $(window).scroll(function(){
    // fade out hero triangle
    $(".triangle-hero").css("opacity", 1 - $(window).scrollTop() / 600);
   
 
    $('.wrapper-starter').fadeIn('slow');
    $('.section-header').each( function(i){
              
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > bottom_of_object ){
          
          $(this).animate({'opacity':'1'},1700);
              
      }
      
    }); 

    $('.header-border').each( function(i){
              
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      /* If the object is completely visible in the window, change width */
      if( bottom_of_window > bottom_of_object ){
          
          $(this).addClass('grow');
              
      }
      
    }); 

  });

});


