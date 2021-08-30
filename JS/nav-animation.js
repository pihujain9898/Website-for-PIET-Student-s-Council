$(window).scroll(function(event){

  var yOffset = window.pageYOffset;
  var breakpoint = 200;
  if (yOffset > breakpoint){
    $("nav").addClass('active');
    $("nav img").removeClass('nav-img');
    
  }else{
    $("nav").removeClass('active');
    $("nav img").addClass('nav-img');
  }

});