
// Data for the technologies

var options = {
  responsive: true,
  showTooltips: false,
  animateScale: true,
  animateRotate: true,
  animation: true,
  animationEasing: "linear"
};

var DataJava = [{value: 30, color: "#46BFBD"}, {value: 70, color: "#EEEEEE"}];

var ChartJava = document.getElementById("JavaChart").getContext("2d");

new Chart(ChartJava).Doughnut(DataJava, options);

var DataPython = [{value: 14, color: "#46BFBD"}, {value: 86, color: "#EEEEEE"}];

var ChartPython = document.getElementById("PythonChart").getContext("2d");

new Chart(ChartPython).Doughnut(DataPython, options);

var DataCSharp = [{value: 8, color: "#46BFBD"}, {value: 92, color: "#EEEEEE"}];

var ChartCSharp= document.getElementById("CSharpChart").getContext("2d");

new Chart(ChartCSharp).Doughnut(DataCSharp, options);

var DataMySQL = [{value: 10, color: "#46BFBD"}, {value: 90, color: "#EEEEEE"}];

var ChartMySQL= document.getElementById("MySQLChart").getContext("2d");

new Chart(ChartMySQL).Doughnut(DataMySQL, options);

// Other Functions

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

  for (var i = 0; i < reveals.length; i++) {
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

  var reveals = document.querySelectorAll("#JavaChart");

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



