$(function () {

  $('.modus-img, .modus-img-my').imgLiquid ();

  var myModal = document.getElementById('myModal')
  var myInput = document.getElementById('myInput')

  myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
  });

  

});




