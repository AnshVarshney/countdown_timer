var dest=new Date("jan 1,2023 00:00:00").getTime();
function interval(){
    var curr=new Date().getTime();
    var diff=dest-curr;
    var d=Math.floor(diff/(60*60*24*1000));
    var hr=Math.floor((diff%(60*60*24*1000))/(60*60*1000));
    var min=Math.floor((diff%(60*60*1000))/(60*1000));
    var sec=Math.floor((diff%(60*1000))/(1000));
    document.getElementById("days").innerHTML=d;
    document.getElementById("hours").innerHTML=hr;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML=sec;
}
setInterval(interval,1000);