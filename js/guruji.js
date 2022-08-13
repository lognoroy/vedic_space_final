

//typing starts

var i = 0;
var txt = ' personalized guidance for your life';
var speed = 55;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

  typeWriter()
 

//typing ends


//accordian starts

//accordian ends



//sticky nav starts


// window.addEventListener("scroll",function()
// {
// let elm=document.getElementById("menu-bar")

//   if(window.pageYOffset>=30)
//   {
//     elm.classList.add("sticky")
//   }
//   else
//   {
//     elm.classList.remove("sticky")

//   }
// })


//sticky nav ends








