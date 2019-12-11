
let form = document.forms.times;
let minsput = form.elements.minutes;
let daysput = form.elements.days;
let hrsput = form.elements.hours;
let secput = form.elements.seconds;
let endmonth = form.elements.monthcountto;
let endday = form.elements.daycountto;
let endhour = form.elements.hourcountto;
let endminute = form.elements.minutecountto;
let endsecond = form.elements.secondcountto;
let endyear = form.elements.yearcountto;
let clock = document.getElementById("clock");
let local = document.getElementById("local");
let localmins = 0;
let localhrs = 0;
let localsec = 0;
let currentdate = new Date();
let checkbox = form.elements.toggledate;
let checked;


function ready() {
    console.log("ready");
    
    

        setInterval(() => {
            currentdate = new Date();
            localmins = currentdate.getMinutes();
            localhrs = currentdate.getHours();
            localsec = currentdate.getSeconds();
            local.innerHTML = localhrs + ":" + localmins + ":" + localsec;
        }, 100);

    submit.onclick = function run() {

        checked = document.getElementById('box').checked;

        if (checked == true) {
            mins = minsput.value;
        hrs = hrsput.value;
        sec = secput.value;
        days = daysput.value;
        if (minsput == undefined || mins == 0) { mins = '00'; };
        if (hrsput == undefined || hrs == 0) { hrs = "00"; };
        if (secput == undefined || sec == 0) { sec = '00'; };
        if (daysput == undefined || days == 0) { days = '00'; };
        console.log(checked);
        

        } else {


        mins = minsput.value;
        hrs = hrsput.value;
        sec = secput.value;
        days = daysput.value;
        if (minsput == undefined || mins == 0) { mins = '00'; };
        if (hrsput == undefined || hrs == 0) { hrs = "00"; };
        if (secput == undefined || sec == 0) { sec = '00'; };
        if (daysput == undefined || days == 0) { days = '00'; };


        }

        

        if (mins >= 60) { mins -= 60; hrs += 1; };
        if (hrs >= 24) { hrs -= 24; days += 1; };
        if (sec >= 60) { sec -= 60; mins += 1; };
            
        let i = setInterval(() => {
            sec = sec- 1;
            if (sec == -1) { sec = 59; mins = mins - 1; };
            if (mins == -1) { mins = 59; hrs = hrs - 1; };
            if (hrs == -1) { hrs = 23; days = days - 1; };
            if (days == -1) { window.location.href = 'party.html' ;days = 0;};
        
            clock.innerHTML = days + ":" + hrs + ":" + mins + ":" + sec;

        }, 1);
    
        submit.onclick = function() {
            clearInterval(i);
            run();
        };
    };
};



document.addEventListener("DOMContentLoaded", ready);