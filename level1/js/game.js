var span = document.getElementById('time');
var penalty=0;
var countdown;
var timeTakenInSec=0;

window.addEventListener("beforeunload", function (e) {
 (e || window.event).returnValue = null;
  return null;
});

//StopWatch Code
  function Countdown(elem, seconds) {
      var that = {};
      
      that.elem = elem;
      that.seconds = seconds;
      that.totalTime = seconds * 100;
      that.usedTime = 0;
      that.startTime = +new Date();
      that.timer = null;
      
      that.count = function() {
        that.usedTime = Math.floor((+new Date() - that.startTime) / 10);
        var tt = that.totalTime - that.usedTime;
        if (tt <= 0) {
          that.elem.innerHTML = '00:00.00';
          clearInterval(that.timer);
        } else {
          var mi = Math.floor(tt / (60 * 100));
          var ss = Math.floor((tt - mi * 60 * 100) / 100);
          var ms = tt - Math.floor(tt / 100) * 100;
          if(mi==0 && ss==0 && ms==1){
            ms=0;
            clearInterval(that.timer);
            popup('timesUp');
          }
          that.elem.innerHTML = that.fillZero(mi) + ":" + that.fillZero(ss) + ":" + that.fillZero(ms);
        }
      };
      
      that.init = function() {
        if(that.timer){
          clearInterval(that.timer);
          that.elem.innerHTML = '00:00.00';
          that.totalTime = seconds * 100;
          that.usedTime = 0;
          that.startTime = +new Date();
          that.timer = null;
        }
      };
      
      that.start = function() {
        if(!that.timer){
          that.timer = setInterval(that.count, 1);
        }
      };
      that.stop = function() {
        timeTakenInSec = Math.floor(countdown.usedTime/100)+penalty;
        if (that.timer) clearInterval(that.timer);
      };
    
      that.fillZero = function(num) {
        return num < 10 ? '0' + num : num;
      };
      
      return that;
  }
//Function to start the stop watch
  function startCounter(){
      console.log("Start Counter Function");
      countdown = new Countdown(span,1800); //Will uncomment after completing game.html file
      countdown.start();
  }


// To stop page refersh
  $('.stopRefresh').on('click',function(e){
    e.stopPropagation();
    return false;
  })


// Exit Door popup
  function popup(param){
    var blur=document.getElementById('blur');
    
    // For Exit door
    if(param=="door"){
      var pop=document.getElementById('popupAction');
      blur.classList.toggle('active');
      pop.classList.toggle('active');
    }
    //For picture on Exit door
    else if(param == 'wallPicture'){
      var pop=document.getElementById('popupActionTwo');
      pop.classList.toggle('active');
      blur.classList.toggle('active');
    }
    else if(param=='WrongPicture'){
      var pop=document.getElementById('popupActionThree');
      pop.classList.toggle('active');
      setTimeout(function(){
        pop.classList.toggle('active');
      },1500);
      // pop.classList.toggle('popupActionThreeBack');
    }
    else if(param=='newsPaper'){
      var pop=document.getElementById('popupActionFive');
      pop.classList.toggle('active');
      blur.classList.toggle('active');
    }
    else if(param == 'paintBox'){
      var pop=document.getElementById('popupActionFour');
      pop.classList.toggle('active');
      blur.classList.toggle('active');
    }
    else if(param == 'torch'){
      var pop=document.getElementById('popupActionSix');
      pop.classList.toggle('active');
      // blur.classList.toggle('active');
    }
    else if(param == 'cartoon'){
      var pop=document.getElementById('popupActionSeven');
      pop.classList.toggle('active');
      blur.classList.toggle('active');
    }
    else if(param == 'phone'){
      var pop=document.getElementById('popupActionEight');
      pop.classList.toggle('active');
      blur.classList.toggle('active');
    }
    else if(param=='posterOne'){
      var pop=document.getElementById('popupActionNine');
      pop.classList.toggle('active');
      blur.classList.toggle('active');
    }
    else if(param=='jacket'){
      var pop=document.getElementById('popupActionTen');
      pop.classList.toggle('active');
      setTimeout(function(){
        pop.classList.toggle('active');
      },1500);
    }
    else if(param=='clocks'){
      var pop=document.getElementById('popupActionEleven');
      pop.classList.toggle('active');
      blur.classList.toggle('active');
      clockChange();
    }
    else if(param=='timesUp'){
      var pop=document.getElementById('popupActionTwelve');
      pop.classList.toggle('active');
      blur.classList.toggle('active');
    }

  }


// Checking the Exit Code
  var count=0,totalStrike=3;
  var temp = '<h2 class="popHeading">Did You get the Code?</h2><div class="inputContainer">  <p class="popUpEntry">Enter Here:</p> <input type="text" id="code" class="popUpBox" placeholder="Enter Code" required>  <br></div><div class="btnArrange">  <button onclick="submitClicked()" class="btn submit">Submit</button>  <button onclick="popup('+"'door'"+')" class="btn cancel">Cancel </button></div>';
  function submitClicked(){
    var code = document.getElementById("code").value;
    console.log(code);
    count++;
    code = code.toLowerCase();
    var code2=document.getElementById('popupAction');
    if(code=='exit')
    {    
      countdown.stop();
      var minTaken = Math.floor(timeTakenInSec/60);
      var secTaken = Math.floor(timeTakenInSec%60);
      var changeCode='<img src="images/right.png" alt="" srcset="" style="display:flex; width:100px; margin-left:40%;"><h2 class="popHeading">Hurray !! <br>Puzzle Completed Successfully</h2><br><h3 class="popHeading">Penalty(in sec):- '+penalty+' sec <br><br>Time taken:- '+minTaken+' min '+secTaken+' sec</h3><div class="btnArrange"><a href="index.html"><button onclick="popup()" class="btn cancel home">Home</button></a></div>';
      code2.innerHTML=changeCode;
      $('.btn').css("background-color",'#2a7088');
      $('.btn').css("justify-content",'center');
      $('.btn').css("align-item",'center');
      $('.btn').css("margin-left","0px");
      $('.btn').css("color","white");

      console.log(penalty);

      
    }
    else if(count>3){
      var rem=totalStrike-count;
      penalty+=30;
      var changeCode='<img src="images/wrong.png" alt="" style="display:flex; width:100px; margin-left:40%;"><h2 class="popHeading">You Entered the Wrong Code</h2><br><p  style="font-size: 20px;text-align: center;  color: #b00d0d;">Opps! You Got 30sec Penalty.<br>Total Penalty Time:'+penalty+'sec </p><div class="btnArrange"><button onclick="cancelChange()" class="btn cancel">Cancel</button></div>';
      code2.innerHTML=changeCode;
      $('.btn').css("background-color",'#2a7088');
      $('.btn').css("justify-content",'center');
      $('.btn').css("align-item",'center');
      $('.btn').css("margin-left","0px");
      $('.btn').css("color","white");
    }
    else
    {
      var rem=totalStrike-count;
      var changeCode='<img src="images/wrong.png" alt="" style="display:flex; width:100px; margin-left:40%;"><h2 class="popHeading">You Entered the Wrong Code</h2><br><p  style="font-size: 20px;text-align: center; color: #b00d0d;">Try Again! You have '+rem+' Strikes left</p><div class="btnArrange"><button onclick="cancelChange()" class="btn cancel">Cancel</button></div>';
      code2.innerHTML=changeCode;
      $('.btn').css("background-color",'#2a7088');
      $('.btn').css("justify-content",'center');
      $('.btn').css("align-item",'center');
      $('.btn').css("margin-left","0px");
      $('.btn').css("color","white");

    }
  }
  function cancelChange(){
    document.getElementById('popupAction').innerHTML=temp;
  }


// Function to Show image of People Leaving Which will be shown for 5 sec
  function showImage(){
        var img = '<img src="images/leave.jpg" alt="" srcset="" class="leaveImage">';
        document.getElementById('popupActionTwo').innerHTML = img;
        $('#popupActionTwo').css("width","400px");
        $('#popupActionTwo').css("padding","0px");
        
        setTimeout(function(){
          var wallPicture = "wallPicture";
          var Hint = '<h2 class="popHeading">Hint</h2><div class="inputContainer"><p class="popUpEntry" style="text-align: center;">Complete the word L _ _ V _ with only vowels and the Id of the word is number of vowels used.</p></div><div class="btnArrange"><button onclick="backToPictureStart()" class="btn cancel done">Done</button></div>';
          document.getElementById('popupActionTwo').innerHTML = Hint;
          $('#popupActionTwo').css("padding","15px 15px 30px 15px");
        },5000);
        
  }
  function backToPictureStart(){
        popup('wallPicture');
        setTimeout(function(){
          var originalPopupActionTwo='<h2 class="popHeading">You Got the right Picture</h2><div class="inputContainer"><p class="popUpEntry">Now another popup will appear for 5sec. So watch it carefully to Guess the next word.</p></div><div class="btnArrange"><button class="btn submit" onclick="showImage()">View</button><button onclick="popup('+"'wallPicture'"+')" class="btn cancel">Cancel </button></div>';
          document.getElementById('popupActionTwo').innerHTML = originalPopupActionTwo;
          $('#popupActionTwo').css("width","600px");
          $('#popupActionTwo').css("padding","50px");
        },1000);

  }

//For PaintBox memorizing
var c1=0;
var c2=0; 
  function showMemorizePicture()
  {
    c1++;
    if(c1>1)penalty+=10;
     var picOneHtml='<img src="images/memorize_1.png" alt="" srcset="" style="width:700px">';
     document.getElementById('popupActionFour').innerHTML=picOneHtml;
     $('#popupActionFour').css('padding','0px');
     $('#popupActionFour').css('width','700px');
     setTimeout(function(){
       var askQuestion='<p id="isRight" class="popUpEntry" style="text-align: center; color:rgb(29, 82, 29);font-weight: bold; font-size: 20px;"></p><p id="isWrong" class="popUpEntry" style="text-align: center; color:rgb(119, 16, 16);font-weight: bold; font-size: 20px;"></p><h2 class="popHeading">How many windows were there on the haunted house?</h2><div class="inputContainer"><p class="popUpEntry">Enter Here:</p><input type="number" id="hauntedCode" class="popUpBox" placeholder="Ex:- 1,2,3,4" required><br></div><div class="btnArrange"><button class="btn submit" onclick="checkWindowAnsImgOne()">Submit</button><button onclick="popup('+"'paintBox'"+')" class="btn cancel">Cancel </button><button onclick="showMemorizePicture()" class="btn cancel" style="background-color: #c01b01;">Retry</button></div>';
       document.getElementById('popupActionFour').innerHTML=askQuestion;
       $('#popupActionFour').css('padding','50px');
       $('#popupActionFour').css('width','600px');
      },10000);

  } 

  function checkWindowAnsImgOne()
  {
    var hauntedWindow=document.getElementById("hauntedCode").value;
    console.log(hauntedWindow);
    if(hauntedWindow==3)
    {
      document.getElementById('isWrong').innerHTML='';
      document.getElementById('isRight').innerHTML='Correct Answer.... Moving Forward....';  
      setTimeout(function(){
        showMemorizePictureTwo();
      },2000);  
    }
    else
    {
      document.getElementById('isRight').innerHTML='';
      document.getElementById('isWrong').innerHTML='Ooops!! Wrong Answer, Got penalty of 10sec';
      penalty+=10;
    }
  }

  function showMemorizePictureTwo(){
      c2++;
      if(c2>1)penalty+=10;
        var picTwoHtml='<img src="images/memorize_2.png" alt="" srcset="" style="width:700px">';
        document.getElementById('popupActionFour').innerHTML=picTwoHtml;
        $('#popupActionFour').css('padding','0px');
        $('#popupActionFour').css('width','700px');
        setTimeout(function(){
          var askQuestion='<p id="isRight" class="popUpEntry" style="text-align: center; color:rgb(29, 82, 29);font-weight: bold; font-size: 20px;"></p><p id="isWrong" class="popUpEntry" style="text-align: center; color:rgb(119, 16, 16);font-weight: bold; font-size: 20px;"></p><h2 class="popHeading">Which company laptop did you see in the picture?</h2><div class="inputContainer"><p class="popUpEntry">Enter Here:</p><input type="text" id="companyCode" class="popUpBox" placeholder="Ex:- HP, Dell, Apple" required><br></div><div class="btnArrange"><button class="btn submit" onclick="checkWindowAnsImgTwo()">Submit</button><button onclick="popup('+"'paintBox'"+')" class="btn cancel">Cancel </button><button onclick="showMemorizePictureTwo()" class="btn cancel" style="background-color: #c01b01;">Retry</button></div>';
          document.getElementById('popupActionFour').innerHTML=askQuestion;
          $('#popupActionFour').css('padding','50px');
          $('#popupActionFour').css('width','600px');
        },10000);
  }
  function checkWindowAnsImgTwo()
  {
    var companyLogo=document.getElementById("companyCode").value;
    companyLogo=companyLogo.toLowerCase();
    if(companyLogo=='apple')
    {
      document.getElementById('isWrong').innerHTML='';
      document.getElementById('isRight').innerHTML='Hurray!! You Completed this task';  
      setTimeout(function(){
        var guessedWord = '<h2 class="popHeading">Your word and its code is: </h2><div class="inputContainer"><p class="popUpEntry" style="font-size:22px; text-align: center;">Door, 5</p></div><div class="btnArrange"><button onclick="backToPaintBoxStart()" class="btn cancel done">Done</button></div>';
        document.getElementById('popupActionFour').innerHTML=guessedWord;
        
      },2000);
      
    }
    else{
      document.getElementById('isRight').innerHTML='';
      document.getElementById('isWrong').innerHTML='Ooops!! Wrong Answer, Got penalty of 10sec';
      penalty+=10;
    }
  }
  function backToPaintBoxStart()
  {
    popup('paintBox');
    // this code below will reset the puzzle of paint box after solving it once... for now we are not resetting the puzzle.
        // setTimeout(function(){
        //   var originalPaintBox='<h2 class="popHeading">Cool!! Follow these steps to guess the next word</h2><div class="inputContainer"><p class="popUpEntry" style="text-align: left;">1. After clicking on view button you will be shown 2 pictures one by one.<br>2. Each picture is associated with one question.<br>3. So watch the picture carefully and answer the question that follows. <br>4. If you want to see the previous picture again, then press "Retry" button but remember that you will be charged with 10sec Penalty. <br> <span style="color:rgb(110, 27, 27)">Note: Remember there is a penalty of 10sec for every wrong answer.</span></p></div><div class="btnArrange"><button class="btn submit" onclick="showMemorizePicture()">View</button><button onclick="popup('+"'paintBox'"+')" class="btn cancel">Cancel </button></div>';
        //   document.getElementById('popupActionFour').innerHTML = originalPaintBox;
        //   $('#popupActionTwo').css("width","600px");
        //   $('#popupActionTwo').css("padding","50px");
        // },1000);
  }

// For the cartoon code
  function checkNineLetterCode(){
  var cartooncode = document.getElementById('youCode').value;
  if(cartooncode=="GenBaseCo"){
    document.getElementById('popupActionSeven').innerHTML = '<h2 class="popHeading">Hurray! You found it..<br>Here are your Hints..</h2><div class="inputContainer"><p class="popUpEntry" style="text-align: left;">Word is defined by:- Ed Shereen was in the love with shape of whom?<br>Id is :- The jeresy number of Cristiano Ronaldo.</p></div><div class="btnArrange"><button class="btn submit" onclick="popup('+"'cartoon'"+')">Done</button></div>';
  }
  else{
    document.getElementById('incorrectCode').innerHTML='Uh Oh!! You got it wrong.. You got a penalty of 10sec.<br>Try Again...';
    setTimeout(function(){
      document.getElementById('incorrectCode').innerHTML="";
    },2000);
    penalty+=10;
  }
  }


// For Replacing the Audio
  function replaceAudio(){
    document.getElementById('audioText').innerHTML='The number of people you here in this audio is the id of word "makes".';
    document.getElementById('audioButton').innerHTML='<button class="btn submit" onclick="popup('+"'phone'"+')">Done</button>';
    document.getElementById('audioHeader').innerHTML='Your clue for the next word is';
    document.getElementById('audioNote').innerHTML='';
    $('#audioText').css("font-size","22px");

  }
  
// For Replacing the Clocks
  function clockChange(){
    var Imagearr = [1,6,5,2,7,3];
    var images = document.getElementById('clock');
    var imageNo=0;
    images.setAttribute('src','images/4.png');
    var interval = setInterval(() => {
      images.setAttribute('src','images/'+Imagearr[imageNo]+'.png');
      imageNo++;
      if(imageNo==6){
        setTimeout(function(){
          clearInterval(interval);
          var blur=document.getElementById('blur');
          var pop=document.getElementById('popupActionEleven');
          pop.classList.toggle('active');
          blur.classList.toggle('active');
        },1500);
      }
    }, 1500);
  }



