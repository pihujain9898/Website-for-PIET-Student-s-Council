$(document).ready(function() {
  
    var curPage = 1;
    var numOfPages = $(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";
  
    function pagination() {
      scrolling = true;
      
      eventFrame[0].style.display = "none";

      $(pgPrefix + curPage).removeClass("inactive").addClass("active");
      $(pgPrefix + (curPage - 1)).addClass("inactive");
      $(pgPrefix + (curPage + 1)).removeClass("active");
  
      setTimeout(function() {
        scrolling = false;
      }, animTime);
    };
  
    function navigateUp() {
      if (curPage === 1) return;
      curPage--;
      pagination();
    };
  
    function navigateDown() {
      if (curPage === numOfPages) return;
      curPage++;
      pagination();
    };
  
    $(document).on("mousewheel DOMMouseScroll", function(e) {
      if (scrolling) return;
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else { 
        navigateDown();
      }
    });
  
    $(document).on("keydown", function(e) {
      if (scrolling) return;
      if (e.which === 38) {
        navigateUp();
      } else if (e.which === 40) {
        navigateDown();
      }
    });
  
  });

// ############################################################
// ############################################################
// ############################################################
// ############################################################

var slides = document.getElementsByClassName("skw-page__content");

showSlides1()

function showSlides1() {
  slides[0].style.background = "repeating-linear-gradient(rgba(107, 106, 106, 0.3), rgba(0, 0, 0, 0)), url('../Img/Activity 6.jpeg')";
  slides[0].style.backgroundSize = "cover";
  slides[0].style.backgroundPosition = "center";
  slides[0].style.backgroundRepeat = "no-repeat";

  slides[3].style.background = "repeating-linear-gradient(rgba(107, 106, 106, 0.3), rgba(0, 0, 0, 0)), url('../Img/Activity 6.jpeg')";
  slides[3].style.backgroundSize = "cover";
  slides[3].style.backgroundPosition = "center";
  slides[3].style.backgroundRepeat = "no-repeat";
  setTimeout(showSlides2, 2500); // Change image every 2.5 seconds
}
function showSlides2() {
  slides[0].style.background = "repeating-linear-gradient(rgb(107, 106, 106), rgba(0,0,0,0)), url('../Img/Activity 5.png')";
  slides[0].style.backgroundSize = "cover";
  slides[0].style.backgroundPosition = "center";
  slides[0].style.backgroundRepeat = "no-repeat";
  
  slides[3].style.background = "repeating-linear-gradient(rgb(107, 106, 106), rgba(0,0,0,0)), url('../Img/Activity 5.png')";
  slides[3].style.backgroundSize = "cover";
  slides[3].style.backgroundPosition = "center";
  slides[3].style.backgroundRepeat = "no-repeat";

  setTimeout(showSlides3, 2500); // Change image every 2.5 seconds
}
function showSlides3() {
  slides[0].style.background = "repeating-linear-gradient(rgb(107, 106, 106), rgba(0,0,0,0)), url('../Img/Activity 3.jpg')";
  slides[0].style.backgroundSize = "cover";
  slides[0].style.backgroundPosition = "center";
  slides[0].style.backgroundRepeat = "no-repeat";
  
  slides[3].style.background = "repeating-linear-gradient(rgb(107, 106, 106), rgba(0,0,0,0)), url('../Img/Activity 3.jpg')";
  slides[3].style.backgroundSize = "cover";
  slides[3].style.backgroundPosition = "center";
  slides[3].style.backgroundRepeat = "no-repeat";

  setTimeout(showSlides1, 2500); // Change image every 2.5 seconds
}

// ############################################################
// ############################################################
// ############################################################
// ############################################################

var eventFrame = document.getElementsByClassName("event-popup");
var chevorlate = document.getElementsByClassName("home-add-div");

function showupeventpage(variable){
  eventFrame[variable].style.display = "block";
  chevorlate[0].style.display = "none";
}

function initialpage(){
  eventFrame[0].style.display = "none";
  eventFrame[1].style.display = "none";
  chevorlate[0].style.display = "flex";
}

// ##########################################
// Increments the delay on each item.
$('.rolldown-list li').each(function () {
  var delay = ($(this).index() / 4) + 's';
  $(this).css({
    webkitAnimationDelay: delay,
    mozAnimationDelay: delay,
    animationDelay: delay
  });
});
