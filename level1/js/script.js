// Script for Pop up
$('.container').css("display","none");
setTimeout(function(){
  $('.container').fadeIn();
  $('.container').css("display","block");
},3000);

function popup(){
  var blur=document.getElementById('blur');
  blur.classList.toggle('active');
  var pop=document.getElementById('popupAction');
  pop.classList.toggle('active');
  
  $('#levelOne').css("display","none");
  setTimeout(function(){
    $('#levelOne').fadeIn(500);
    $('#levelOne').css("display","block");
  },200);
  console.log('hello');
}













