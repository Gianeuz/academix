import $ from "https://cdn.skypack.dev/jquery@3.6.3";

$(document).ready(function() {
  $(".has-child").each(function() {
    $(this).append(`<i class="fas fa-chevron-down"></i>`);
    $(this).click(function(event) {
      event.stopPropagation(); 
      $(this).children(".sub-menu").slideToggle();
      $(this).toggleClass("active");
      $(this).siblings().find(".sub-menu").slideUp();
      $(this).siblings().removeClass("active");
    });
    
    $(this).find(".sub-menu li").click(function(event) {
      event.stopPropagation(); 
    });
  });

  $(document).click(function(event) {
    $(".sub-menu").slideUp();
    $(".has-child").removeClass("active");
  });


  $(".hamburger").click(function(event) {
    event.stopPropagation(); 
    $(".nav-links").toggleClass("active");
    $(this).toggleClass("active");
  });
});

function scrollToAbout() {
  const aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
}

document.addEventListener("DOMContentLoaded", function(event) {
  var typewriter = document.getElementById("typewriter");
  var statements = [
      " " ,
      "E-Learning",
     " Innovative",
     " 'A little progress each day adds up to big results' - Satya Nani",
     " Transformative learning",
     " Accessible education",
     " 'The best way to predict the future is to create it' - Abraham Lincoln "
  ];
  var currentIndex = 0;
  var isDeleting = false;
  var typingSpeed = 150; 
  var deletingSpeed = 50; 

  function typeNextCharacter() {
    var currentText = typewriter.textContent;
    var targetText = statements[currentIndex];

    if (!isDeleting) {
      typewriter.textContent = targetText.substring(0, currentText.length + 1);
      if (currentText === targetText) {
        isDeleting = true;
        setTimeout(typeNextCharacter, deletingSpeed);
      } else {
        setTimeout(typeNextCharacter, typingSpeed);
      }
    } else {
      typewriter.textContent = targetText.substring(0, currentText.length - 1);
      if (currentText === "") {
        isDeleting = false;
        currentIndex++;
        currentIndex %= statements.length;
        setTimeout(typeNextCharacter, typingSpeed);
      } else {
        setTimeout(typeNextCharacter, deletingSpeed);
      }
    }
  }

  typeNextCharacter();
});

