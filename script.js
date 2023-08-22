
// Data for the technologies

var options = {

  responsive: true,
  
  showTooltips: false,
  
  animateScale: true,
  
  animateRotate: true,
  
  animation: true,
  
  animationEasing: "linear"

};

var DataJava = [{value: 0, color: "#46BFBD"}, {value: 1, color: "#FFAB00"}];

var ChartJava = document.getElementById("JavaChart").getContext("2d");

new Chart(ChartJava).Doughnut(DataJava, options);

var DataPython = [{value: 0, color: "#46BFBD"}, {value: 1, color: "#FFFA00"}];

var ChartPython = document.getElementById("PythonChart").getContext("2d");

new Chart(ChartPython).Doughnut(DataPython, options);

var DataCSharp = [{value: 0, color: "#46BFBD"}, {value: 1, color: "#BA009F"}];

var ChartCSharp = document.getElementById("CSharpChart").getContext("2d");

new Chart(ChartCSharp).Doughnut(DataCSharp, options);

var DataMySQL = [{value: 0, color: "#46BFBD"}, {value: 1, color: "#0046FF"}];

var ChartMySQL = document.getElementById("MySQLChart").getContext("2d");

new Chart(ChartMySQL).Doughnut(DataMySQL, options);



var DataHTML = [{value: 0, color: "#46BFBD"}, {value: 1, color: "#FF5500"}];

var ChartHTML = document.getElementById("HTMLChart").getContext("2d");

new Chart(ChartHTML).Doughnut(DataHTML, options);

var DataCSS = [{value: 0, color: "#46BFBD"}, {value: 1, color: "#0011C2"}];

var ChartCSS = document.getElementById("CSSChart").getContext("2d");

new Chart(ChartCSS).Doughnut(DataCSS, options);

var DataJavaScript = [{value: 0, color: "#46BFBD"}, {value: 1, color: "#FFFD00"}];

var ChartJavaScript = document.getElementById("JavaScriptChart").getContext("2d");

new Chart(ChartJavaScript).Doughnut(DataJavaScript, options);

var DataJSP = [{value: 0, color: "#46BFBD"}, {value: 1, color: "#000000"}];

var ChartJSP= document.getElementById("JSPChart").getContext("2d");

new Chart(ChartJSP).Doughnut(DataJSP, options);

// Other Functions

//Prevent mobile device from swapping screen to scroll

/*function preventTouch(event) 
{
  
  if (event.touches.length > 1) 
  
  {

    event.preventDefault();

  }
  
}

document.addEventListener('touchmove', preventTouch, { passive: false }); */

var MyButton = document.getElementsByClassName("AboutMeButton");

window.addEventListener("scroll", aniReveal);

function aniReveal() {

  var reveals = document.querySelectorAll(".SlideFromTheLeft");

  for (var i = 0; i < reveals.length; i++) 
  {

    var windowHeight = window.innerHeight;

    var elementTop = reveals[i].getBoundingClientRect().top;

    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) 
    {

      reveals[i].classList.add("active");

    } 
    
    else 
    {

      reveals[i].classList.remove("active");

    }

}

var reveals = document.querySelectorAll(".SlideFromTheRight");

  for (var i = 0; i < reveals.length; i++) 
  {
    
    var windowHeight = window.innerHeight;
    
    var elementTop = reveals[i].getBoundingClientRect().top;
    
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) 
    {

      reveals[i].classList.add("active");

    } 
    
    else 
    {

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

    for(var i = 0; i < MyButton.length; i++)
    {

      MyButton[i].style.backgroundColor = "#353535";

      MyButton[i].style.color = "#A9A9A9";

    }

  }

  else
  {

    document.getElementById("FixedNavBar").style.backgroundColor = "#D8D8D8";

    document.getElementById("Title").style.color = "#353535";

    for(var i = 0; i < MyButton.length; i++)
    {

      MyButton[i].style.backgroundColor = "#D8D8D8";

      MyButton[i].style.color = "#565656";

    }

  }

}
