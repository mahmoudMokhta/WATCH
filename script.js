 var myResult = document.querySelector(".watch")



     



setInterval(()=>{
    var myDate = new Date()
        minutes  = myDate.getMinutes()
        seconds  = myDate.getSeconds()
        hours   = myDate.getHours()
        timeDay  = "AM"


if ( hours > 12 ) {

  hours = hours - 12 ;
  timeDay   = "PM"
            
 } 

//  add "0" to elements
if ( seconds < 10 ) {

    seconds = "0" + seconds 
}
if ( minutes < 10 ) {

    minutes = "0" + minutes 
}
if ( hours < 10 ) {

    hours = "0" + hours 
}

    myResult.innerHTML = hours + ":" + minutes + ":" + seconds + " " + timeDay
}, 1000)



    
             
 


    









  