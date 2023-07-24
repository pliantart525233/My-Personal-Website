/*
// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
  //document.getElementById("FixedHeader").style.height = "70px";
  document.getElementById("FixedHeader").style.top = "0px";
    }
	else{
		//document.getElementById("FixedHeader").style.height = "0px";
    document.getElementById("FixedHeader").style.top = "-100px";
    }
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});*/

/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("FixedNavBar").style.fontSize = "20px";
  } else {
    document.getElementById("FixedNavBar").style.fontSize = "40px";
  }
}*/

window.onscroll = function() 
{
  
  scrollFunction()

};

function scrollFunction()

{

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
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