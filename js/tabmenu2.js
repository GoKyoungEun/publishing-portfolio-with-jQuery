$('.btn li').click(function () {
  $(this).addClass('active')
  $(this).siblings().removeClass('active')

  // tab1 == $(this).attr('data-alt')
  let result = $(this).attr('data-alt')
  $('.tabs div').removeClass('active')
  $('#' + result).addClass('active')
})