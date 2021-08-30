var clubFrame = document.getElementsByClassName("club-div-all");
var allClubPage = document.getElementsByClassName("all-club-page");

var clubPage1 = document.getElementsByClassName("club-page1");
var clubPage2 = document.getElementsByClassName("club-page2");

function showclubpage(variable){
  clubFrame[0].style.display = "none";
  allClubPage[variable-1].style.display = "flex";
}
function initialpage(){
  clubFrame[0].style.display = "flex";
  for ( let i = 0; i < allClubPage.length; i++){
    allClubPage[i].style.display = "none";
  }
}