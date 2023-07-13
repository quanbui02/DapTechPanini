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
  