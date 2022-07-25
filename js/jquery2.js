$('.navi li').mouseenter(function () {
  let changeImage = $(this).attr('data-img')
  $('.photo').css({
    'background-image': 'url(' + changeImage + ')'
  })
})
$('.navi li').mouseleave(function () {
  $('.photo').css({
    'background-image': ''
  })
})

