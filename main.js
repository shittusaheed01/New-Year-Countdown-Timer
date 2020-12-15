const countDownDate= new Date("Dec 31, 2020, 23:59:59").getTime();
//alert (countDownDate);
let x = setInterval(function() {
  let today= new Date().getTime();
  let final= countDownDate - today;

  let days = Math.floor(final/(1000 * 3600 *24))
  let hours = Math.floor((final % (1000 * 3600 *24)) / (1000 *60*60))
  let minutes = Math.floor((final % (1000 * 3600 *24)) / (1000 *60))
  let seconds = Math.floor((final % (1000 * 3600 *24)) / (1000))
  document.getElementById("days").innerHTML= days
  document.getElementById("hours").innerHTML= hours
  document.getElementById("minutes").innerHTML= minutes
  document.getElementById("second").innerHTML= seconds
  if(final<0){
    clearInterval(x);
    document.getElementById("days").innerHTML = "EX";
    document.getElementById("hours").innerHTML = "PI";
    document.getElementById("minutes").innerHTML = "RE";
    document.getElementById("second").innerHTML = "D.";
    document.getElementById("heading").innerHTML = "Happy New Year!";
  }
  
}, 1000)
