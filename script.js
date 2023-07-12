

function checkUserLogin(){
    // var email = document.getElementById('email').value;
    // var pass = document.getElementById('password').value;
    // console.log(email+pass);
    // if(email=='cp2002@gmail.com'){
    //     if(pass == 'pp'){
    //         return true;
    //     }
    // }
    // document.getElementById('invalidUser').innerHTML ='Invalid Email or Password';
    // $('.form-box').css('height','500px');
    // setTimeout(function(){
    //     document.getElementById('invalidUser').innerHTML="";
    //     $('.form-box').css('height','450px');
    // },2000);
    return true;
}
function checkAdminLogin(){
  var email = document.getElementById('emailAdmin').value;
  var pass = document.getElementById('passwordAdmin').value;
  console.log(email+pass);
  if(email=='admin123@gmail.com'){
      if(pass == 'admin'){
          return true;
      }
  }
  document.getElementById('invalidAdmin').innerHTML ='Invalid Email or Password';
  $('.form-box').css('height','500px');
  setTimeout(function(){
      document.getElementById('invalidAdmin').innerHTML="";
      $('.form-box').css('height','450px');
  },2000);
  return false;
}

$("#adminlogin").css("display", "none");
$("#register").css("display", "none");

$("#login_one").click(function () {
  $("#adminlogin").css("display", "flex");
  $("#userlogin").css("display", "none");
  $("#register").css("display", "none");
});
$(".login_two").click(function () {
  $("#adminlogin").css("display", "none");
  $("#userlogin").css("display", "flex");
  $("#register").css("display", "none");
});
$("#login_three").click(function () {
  $("#register").css("display", "flex");
  $("#adminlogin").css("display", "none");
  $("#userlogin").css("display", "none");
});


