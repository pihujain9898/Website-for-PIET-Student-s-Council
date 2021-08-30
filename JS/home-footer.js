var logoElement1 = $('footer .logo');
var logoElement2 = $('footer .home-footer-text');
var logoElement3 = $('footer .home-icon-container');

$(window).scroll(function() {
  
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
       $(logoElement1).addClass('show');   
       $(logoElement2).addClass('show');   
       $(logoElement3).addClass('show');   
   } else if($(logoElement1).hasClass('show') && $(logoElement2).hasClass('show') && $(logoElement3).hasClass('show') && $(window).scrollTop() + $(window).height() > $(document).height() - 150) {
      $(logoElement1).removeClass('show');
      $(logoElement2).removeClass('show');
      $(logoElement3).removeClass('show');
   }
});