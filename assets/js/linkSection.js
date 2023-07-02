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

  //Header
$(document).ready(function() {
  $('ul li a').click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
  });
});


  