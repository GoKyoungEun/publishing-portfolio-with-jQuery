// Trigger
$('.trigger').click(function () {
  $(this).toggleClass('active')
  $('.modal-gnb').fadeToggle()
})

// Audio Controls
const bgm = document.getElementById('myAudio')
bgm.volume = 0.2 // Audio volume 0~1