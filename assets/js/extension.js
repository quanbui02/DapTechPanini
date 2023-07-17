// menu mobile
$(function () {
    $("#icon-healthy").draggable();
    $(".close-icon").click(function () {
      $("#icon-healthy").hide();
    });
  });

$(document).ready(function() {
    $('.sidebarMenu .SMABody ul li a').click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href')
      $('.sidebarMenu li').removeClass('active');
      $(this).addClass('active');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800);
    });
  });

  // menu PC
$(document).ready(function() {
  $('ul li a').click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
  });
});

// open pop-up read news
$(document).ready(function() {
    $('.overlay').click(function() {
      hidePopup();
    });
  
    function showPopup(popupId) {
      $(popupId).addClass('show');
      $('.overlay').addClass('show');
    }
  
    function hidePopup() {
      $('.popup').removeClass('show');
      $('.overlay').removeClass('show');
    }
  
    $('.blog1').click(function() {
        showPopup('#popup1');
      });
    
      $('.blog2').click(function() {
        showPopup('#popup2');
      });
    
      $('.blog3').click(function() {
        showPopup('#popup3');
      });
  });

  // update img for Mobile
  function updateImageSrc() {
    var screenWidth = window.innerWidth;
    var images = document.querySelectorAll('.rev-slidebg');
    
    images.forEach(function(image) {
        var mobileSrc = image.getAttribute('data-mobile-src');
        var desktopSrc = image.getAttribute('data-desktop-tablet-src');
        
        if (screenWidth < 768 && mobileSrc) {
            image.src = mobileSrc;
        } else if (desktopSrc) {
            image.src = desktopSrc;
        }
    });
}
window.addEventListener('resize', updateImageSrc);
updateImageSrc();



  