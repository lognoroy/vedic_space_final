function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function myMenu()
  {
    document.getElementById("click").classList.remove("active")
    document.getElementById("all-item").classList.add("active")

  }
  function myBack()
  {
    document.getElementById("click").classList.add("active")
    document.getElementById("all-item").classList.remove("active")

  }
  function myCategories()
  {
    document.getElementById("click2").classList.remove("active")
    document.getElementById("click").classList.add("active")
    document.getElementById("all-item").classList.add("active")
  }
  function myBack2()
  {
    document.getElementById("click2").classList.add("active")
    document.getElementById("all-item").classList.remove("active")

  }
  function myChat()
  {
    document.getElementById("all-item").classList.add("active")
    document.getElementById("click").classList.add("active")

    document.getElementById("click2").classList.add("active")
    document.getElementById("message").classList.remove("active")

  }







  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  
  
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }