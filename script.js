
window.addEventListener("scroll", aniReveal);
function aniReveal() {
  var reveals = document.querySelectorAll(".SlideFromTheLeft");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
}

var reveals = document.querySelectorAll(".SlideFromTheRight");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
}

}

window.onscroll = function() 
{
  
  scrollFunction()

};

function scrollFunction()

{

  if (document.documentElement.scrollTop > 50) 
  {

    document.getElementById("FixedNavBar").style.backgroundColor = "#353535";
    document.getElementById("Title").style.color = "#D8D8D8";
    document.getElementsByClassName("AboutMeButton").style.backgroundColor = "#353535";

  }

  else
  {

    document.getElementById("FixedNavBar").style.backgroundColor = "#D8D8D8";
    document.getElementById("Title").style.color = "#353535";
    document.getElementsByClassName("AboutMeButton").style.backgroundColor = "#D8D8D8";
    document.getElementsByClassName("AboutMeButton").style.color = "#D8D8D8";

  }

}