
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
var sliderr = document.getElementById("myRanger");
var outputr = document.getElementById("demor");
outputr.innerHTML = sliderr.value;

sliderr.oninput = function() {
  outputr.innerHTML = this.value;
}


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');
  
      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });
  
  });

  function show(){
    document.getElementById("youtube").style.display="none";
    document.querySelector("main").classList.remove("active")
  }
 function show2(){
  document.getElementById("youtube").style.display="none";
  document.getElementById("iovory").classList.remove("active")
 }
  
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById('number').value = value;
    }
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number').value = value;
    }

}

(function() {

  function addSeparator(nStr) {
      nStr += '';
      var x = nStr.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + '.' + '$2');
      }
      return x1 + x2;
  }

  function rangeInputChangeEventHandler(e){
      var rangeGroup = $(this).attr('name'),
          minBtn = $(this).parent().children('.min'),
          maxBtn = $(this).parent().children('.max'),
          range_min = $(this).parent().children('.range_min'),
          range_max = $(this).parent().children('.range_max'),
          minVal = parseInt($(minBtn).val()),
          maxVal = parseInt($(maxBtn).val()),
          origin = $(this).context.className;

      if(origin === 'min' && minVal > maxVal-5){
          $(minBtn).val(maxVal-5);
      }
      var minVal = parseInt($(minBtn).val());
      $(range_min).html(addSeparator(minVal*1000) + ' €');


      if(origin === 'max' && maxVal-5 < minVal){
          $(maxBtn).val(5+ minVal);
      }
      var maxVal = parseInt($(maxBtn).val());
      $(range_max).html(addSeparator(maxVal*1000) + ' €');
  }

$('input[type="range"]').on( 'input', rangeInputChangeEventHandler);
})();


function openNav() {
  document.getElementById("mySidebar").style.width = "450px";
  // document.getElementById("main").style.marginRight = "250px";
  document.getElementById("button4").style.left="72.5%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}
	