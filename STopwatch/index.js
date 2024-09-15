window.onload=function(){
    let hour = 0;
    let min  = 0;
    let sec  = 0;
    let msec = 0;
    let interval;
  
  
 
    let appendhour = document.querySelector('#hour')
    let appendmin = document.querySelector('#min')
    let appendsec = document.querySelector('#sec')
    let appendmsec = document.querySelector('#msec')


    let startButton = document.querySelector('.start-time')
    let stopButton = document.querySelector('.stop-time')
    let resetButton = document.querySelector('.reset-time')


   const startTimer = () => {


        msec ++ 
        if (msec <= 9){
            appendmsec.innerHTML = '0' + msec;
        }

        if(msec > 9){
            appendmsec.innerHTML = msec;

        }

        if(msec > 99){
            sec++;
            appendsec.innerHTML = '0' + sec;
            msec = 0;
            appendmsec.innerHTML = '0'+ 0;

        }

        if(sec > 9 ){
            appendsec.innerHTML = sec;

        }

        if(sec > 59 ){
            min++
            appendmin.innerHTML = '0' + min;
            sec  =  0 ;
            appendsec.innerHTML = '0'+ 0;

        }
   }

     

       


    startButton.onclick = () => {
        clearInterval(interval)
        interval = setInterval(startTimer);

    }

    stopButton.onclick = () => {
        clearInterval(interval)
       
    }    

    resetButton.onclick = () => {
        clearInterval(interval)
        msec = '00';
        sec  = '00';
        min  = '00';

        appendmsec.innerHTML = msec;
        appendsec.innerHTML = sec;
        appendmin.innerHTML = min;
    }


}