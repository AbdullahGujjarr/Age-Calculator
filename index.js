
function GetValue(){
    const year = document.getElementById("input").value
    const days = year * 365;
    const Text_day = document.getElementById("t-days");
    Text_day.innerText = "You spent total " + days + " Days in Your Life!";
    const Text_hour = document.getElementById("t-hours");
    const hours = days * 24;
    Text_hour.innerText = "You spent total " + hours + " Hours in Your Life!";
    const Text_minute = document.getElementById("t-minutes");
    const minutes = hours * 60;
    Text_minute.innerText = "You spent total " + minutes + " Minutes in Your Life!";
    const Text_second = document.getElementById("t-seconds");
    const second = minutes * 60;
    Text_second.innerText = "You spent total " + second + " Seconds in Your Life!";
}
document.addEventListener("keypress", (event) => {
    console.log(event.key)
   if(event.key === "Enter") {

  GetValue();
   }

else if(event.key === "z"){
    window.location.reload();
}
});


