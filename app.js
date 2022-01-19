var counter=document.querySelector('.count');
let orange=document.querySelector('.orange');
let green=document.querySelector('.green');
let red=document.querySelector('.red');
var greenTime=30, redTime=30;


function redligth(){
   if(greenTime<=30 && greenTime>5){
        counter.innerHTML=greenTime;
        /*red.style.backgroundColor='red';
        orange.style.backgroundColor='rgb(63, 51, 51)';
        green.style.backgroundColor='rgb(63, 51, 51)';*/
        orange.style.backgroundColor='rgb(63, 51, 51)';
        green.style.backgroundColor='green';
        red.style.backgroundColor='rgb(63, 51, 51)';
        greenTime--;
   }else if(greenTime<=5 && greenTime>=0){
        counter.innerHTML='';
        orange.style.backgroundColor='orange';
        red.style.backgroundColor='rgb(63, 51, 51)';
        green.style.backgroundColor='rgb(63, 51, 51)';
        greenTime--;
   }else if(redTime<=30 && redTime>=0){
       counter.innerHTML=red;
       /* orange.style.backgroundColor='rgb(63, 51, 51)';
        green.style.backgroundColor='green';
        red.style.backgroundColor='rgb(63, 51, 51)';*/
        counter.innerHTML=redTime;
        red.style.backgroundColor='red';
        orange.style.backgroundColor='rgb(63, 51, 51)';
        green.style.backgroundColor='rgb(63, 51, 51)'
        redTime--;
        if(redTime==0){
            greenTime=30;
            redTime=30;
        }
   }
}

setInterval(redligth,1000);