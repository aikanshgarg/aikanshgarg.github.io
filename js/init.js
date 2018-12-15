// (function($){
//   $(function(){

//     $('.sidenav').sidenav();

//   }); // end of document ready
// })(jQuery); // end of jQuery name space

// https://stackoverflow.com/questions/50295140/how-to-hide-sidenav-in-materialize-css-when-link-is-clicked


//paste this code under the head tag or in a separate js file.
  // Wait for window load
  $(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
  });

  

$(document).ready(function(){
    $('.sidenav')
        .sidenav()
        .on('click tap', 'li a', () => {
            $('.sidenav').sidenav('close');
        });
});


// PROJECTS BUILT COROUSEL
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });


// putting at last so that materialize.js works

// ScrollReveal library
// ScrollReveal().reveal('.heya', { delay: 900, reset: true, duration: 4000, origin: 'top' });

// ScrollReveal().reveal('#average-guy', { delay: 1000, reset: true });
// ScrollReveal().reveal('#index-banner', { delay: 600 });

// ScrollReveal().reveal('#info', { delay: 500, reset: true});
// ScrollReveal().reveal('#box-out', { delay: 300, reset: true });

// ScrollReveal().reveal('.carousel', { delay: 300, duration: 2000});
// ScrollReveal().reveal('.responsive-img', { delay: 600});
// ScrollReveal().reveal('.other-projects', { delay: 300});

// ScrollReveal().reveal('.page-footer', { delay: 200});
// ScrollReveal().reveal('.hand', { delay: 1500, scale: 0, reset: true, easing: 'cubic-bezier(1,0,0,1)', distance: '50px', duration: 950});



// new TypeIt('#stay', {
//   speed: 150,
//  // autoStart: true,
//   cursor: false,
//   startDelay: 200,
//   loop: true
// });

// new TypeIt('#after-stay', {
//   speed: 150,
//   //autoStart: true,
//   cursor: false,
//   startDelay: 5800
// });

new TypeIt('#nostay', {
  speed: 75,
  breakLines: false,
  autoStart: true,
  startDelay: 900,
  loopDelay: 3000,
  loop: true,
  lifeLike: true
});



// //--------------LOOP:true NOT WORKING------------

// new TypeIt('#nostay', {
//   speed: 100,
//   startDelay: 600,
//   //loop: true
// }).type('playing with CSS.')
// .pause(600)
// .options({speed: 200})
// .delete(17)
// .options({speed: 45})
// .pause(300)
// .type('JavaScrilt')
// .pause(600)
// .options({speed: 200})
// .delete(2)
// .options({speed: 45})
// .pause(300)
// .type('pt.')
// .pause(400)
// .options({speed: 200})
// .delete(24)
// .type('Ruby on Rails.')
// .pause(500)
// .options({speed: 45})
// .delete(14)
// .options({speed: 45})
// .pause(900)
// .type('Codeeng')
// .pause(800)
// .options({speed: 200})
// .delete(4)
// .options({speed: 200})
// .pause(300)
// .type('ing.')
// .pause(600)
// .options({speed: 100})
// .delete(24)
// .type('Zumba.')
// .pause(600)
// .options({speed: 200})
// .delete(1)
// .options({speed: 45})
// .pause(300)
// .type('!')



// TOOLTIP (on laptop image for desktops)
 $(document).ready(function(){
    $('.tooltipped').tooltip();
  });


// FOR SCROLLING SMOOTHLY ON CLICKING THAT SECTION's CLICK
$(document).ready(function(){
  // Add smooth scrolling to all links
  $('.scrolll').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});