const birthday = new Date("October 21, 2026 00:00:00").getTime();

const countdown = document.getElementById("countdown");

setInterval(() => {

const now = new Date().getTime();

const distance = birthday - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

const seconds = Math.floor((distance % (1000 * 60)) / 1000);

countdown.innerHTML =
days + " Days " +
hours + " Hours " +
minutes + " Minutes " +
seconds + " Seconds";

if(distance < 0){
countdown.innerHTML = "🎉 HAPPY 18TH BIRTHDAY DAVID! 🎉";
}

},1000);