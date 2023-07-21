
/*
window.onscroll = function() {scrollFunction()};

var oldScrollY = window.scrollY;
function scrollFunction() {
  if (oldScrollY < window.scrollY) {
    document.getElementById("FixedHeader").style.height = "0px";
    document.getElementById("FixedHeader").style.top = "-50px";
  } else {
    document.getElementById("FixedHeader").style.height = "70px";
    document.getElementById("FixedHeader").style.top = "0px";

  }
}
*/
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
});

window.addEventListener("scroll", aniReveal);
function aniReveal() {
  var reveals = document.querySelectorAll(".Ani");

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

var reveals = document.querySelectorAll(".sliderdivtestdonttouch");

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
/*
function sliderReveal() {
  var reveals = document.querySelectorAll(".sliderdivtestdonttouch");

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
*/
window.addEventListener("scroll", apple);
function apple() {
  var apple = document.querySelectorAll(".Apple");
  var pear = document.querySelectorAll(".Pear");
  var pearPosTop = pear.offset().top;
  if(apple.offset().top < pearPosTop){
    document.apple.style.position = "relative";
  }
  else {
    document.apple.style.position = "fixed";
  }

}



