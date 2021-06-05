//Get the button:
topButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }
// Scroll to Top callable function
function topFunction() {
        window.scrollTo({top:0,behavior:"smooth"});
    }