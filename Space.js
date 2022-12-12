/* Functin for the countdown timer*/
function timer() {
    let btn = document.getElementById("Countdown");
  
  if(btn = true){
  
  timeleft = 50;
  
  var downloadTimer = setInterval(function(){
  
    /* Checks if timeleft is greater than or equal to zero*/
  
    if(timeleft <= 0){
      clearInterval(downloadTimer);
  
  /* Refrences the countdown Text */
  
      document.getElementById("Timer").innerHTML = "Blast Off!";
    } else {
  
      document.getElementById("Timer").innerHTML = timeleft + " seconds remaining";
    }
  
    /*subtracts 1 from timeleft then pauses the code for one second*/
    timeleft -= 1;
  }, 1000);
  }
  }