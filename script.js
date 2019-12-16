
let form = document.forms.times;
let minsput = form.elements.minutes;
let daysput = form.elements.days;
let hrsput = form.elements.hours;
let secput = form.elements.seconds;
let endhourput = form.elements.hourcountto;
let endminuteput = form.elements.minutecountto;
let endsecondput = form.elements.secondcountto;
let clock = document.getElementById("clock");
let local = document.getElementById("local");
let localmins = 0;
let localhrs = 0;
let localsec = 0;
let currentdate = new Date();
let checked = false;
let hrs = 0;
let mins = 0;
let sec = 0;
let endhour = 0;
let endminute = 0;
let endsecond = 0;
// end of very large list of variables I probably didn't even use all of

function ready() {
    console.log("ready");
    
// Gets local time
        setInterval(() => {
            currentdate = new Date();
            localmins = currentdate.getMinutes();
            localhrs = currentdate.getHours();
            localsec = currentdate.getSeconds();
            local.innerHTML = localhrs + ":" + localmins + ":" + localsec;
        }, 100);

// Start of main segment
    submit.onclick = function run() {
        checked = document.getElementById('box').checked;

        console.log(checked);
        
// Block of code that checks if the box is checked and sets variables accordingly
        if (checked) {
            endminute = Number(endminuteput.value);
            endhour = Number(endhourput.value);
            endsecond = Number(endsecondput.value);
            if (endminute == undefined || mins == 0) { mins = '00'; };
            if (endhour == undefined || hrs == 0) { hrs = "00"; };
            if (endsecond == undefined || sec == 0) { sec = '00'; };
            mins = endminute - localmins;
            console.log(`${endminute}` + '-' + `${localmins}` + '=' + `${mins}` + "minutes");
            sec = endsecond - localsec;
            console.log(`${endsecond}` + '-' + `${localsec}` + '=' + `${sec}` + "seconds");
            hrs = endhour - localhrs;
            console.log(`${endhour}` + '-' + `${localhrs}` + '=' + `${hrs}` + "hour");
            days = 00;
        } else {
// Block of code that sets variables if there is not a set end time
            mins = minsput.value;
            hrs = hrsput.value;
            sec = secput.value;
            days = daysput.value;
            if (minsput == undefined || mins == 0) { mins = '00';}
            if (hrsput == undefined || hrs == 0) { hrs = "00";}
            if (secput == undefined || sec == 0) { sec = '00';}
            if (daysput == undefined || days == 0) { days = '00';}
        }
    
// Converts time
        if (mins >= 60) { mins -= 60; hrs += 1; }
        if (hrs >= 24) { hrs -= 24; days += 1; }
        if (sec >= 60) { sec -= 60; mins += 1; }
           
        
// Counts down timer
        let i = setInterval(() => {
            sec = sec- 1;
            if (sec <= -1) { sec = 59; mins-= 1; };
            if (mins <= -1) { mins = 59; hrs-= 1; };
            if (hrs <= -1) { hrs = 23; days -= 1; };
            if (days <= -1) { window.location.href = 'party.html';days = 0;};
// Converts values to strings and adds 0 on the beginning if a number below 10 is displayed
            sec = `${sec}`;
            mins = `${mins}`;
            hrs = `${hrs}`;
            days = `${days}`
            if (sec.length == 1) {sec = '0' + sec;}
            if (mins.length == 1) {mins = '0' + mins;}              
            if (hrs.length == 1) {hrs = '0' + hrs;}               
            if (days.length == 1) {days = '0' + days;}
// Displays countdown
            clock.innerHTML = `${days}` + ":" + `${hrs}` + ":" + `${mins}` + ":" + `${sec}`;

        }, 1000);
    
// resets interval when start is clicked again
        submit.onclick = function() {
            clearInterval(i);
            run();
        };
    };
};



document.addEventListener("DOMContentLoaded", ready);