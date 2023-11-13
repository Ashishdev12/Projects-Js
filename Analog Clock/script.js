let hour = document.getElementById("hour");
let Minute = document.getElementById("min");
let seconds = document.getElementById("sec");


function displayTime(){
  let date = new Date();  //get the current hours, minutes and seconds

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

 let hourRotation = 30*hh + mm/2;
 let minuteRotation = 6*mm;
 let secondRotation = 6*ss;

 hour.style.transform = `rotate(${hourRotation}deg)`;
 Minute.style.transform = `rotate(${minuteRotation}deg)`;
 seconds.style.transform = `rotate(${secondRotation}deg)`;

}

setInterval(displayTime, 1000);