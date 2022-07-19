$('.testimonial-pic img').click(function() {
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
  
  $('.testimonial .content').fadeOut('active')  
  // tab1 == $(this).attr('data-alt')
  $('#' + $(this).attr('data-alt')).fadeIn('active')
})