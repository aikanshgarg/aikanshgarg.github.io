// count-down timer logic

const completionDate = new Date("March 2, 2019 23:59:59").getTime();

// setInterval after every 1000ms(1s) to update the count like a clock, every one second
var x = setInterval(function () {

	var now = new Date().getTime(); // current time
	var diff = completionDate - now;

    // time calculation
	var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // displaying inside our circular divs
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;



     // If the count down is over, write some text 
    if (diff < 0) {
        
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hrs").innerHTML = "00";
    document.getElementById("mins").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    }

}, 1000);
