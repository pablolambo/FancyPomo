var interval = setInterval(function()
{
    var Time=new Date()
    var hour=Time.getHours()
    var minutes=Time.getMinutes()
    var seconds=Time.getSeconds()
    var amOrPm=0;

    if(hour>12)
    {
        hour=Time.getHours()-12
        amOrPm=1
    }

    if(hour<10) {hour="0"+hour}
    if(minutes<10) {minutes="0"+minutes}
    if(seconds<10) {seconds="0"+seconds}
    
    var Time=[hour,minutes,seconds,amOrPm]
    
    var digitDivs=Array.from(document.querySelectorAll(".digit"))
    var digitDivs=digitDivs.slice(0,digitDivs.length)
    
    var Time=Time.join("").split("")
    for(let i in Time){
    
        Array.from(digitDivs[i].querySelectorAll("li")).forEach((e)=>{e.style.top=-(parseInt(Time[i])*50)+"px"})
    }
    },100)

startFocusSession()
{
    clearInterval(interval);
    var Time = new Date()
    Time.setHours(0, 0, 0)

    var digitsDivs = Array.from(document.querySelectorAll(".digit"))

    digitsDivs.forEach(function(div) {
        div.innerHTML = "00:00:00"
    })
}

document.getElementsByClassName('.button').addEventListener('click', startFocusSession);