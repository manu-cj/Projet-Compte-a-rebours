let hours = document.getElementById('heures');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('secondes');

let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');

let compteARebours = document.getElementById('compteARebours');
let compteur = 0;

function start() {

    time = setInterval(() => {
        if (userSeconds >= 0){
            compteARebours.innerHTML = '00 : ' + userMinutes + ' : ' + userSeconds;
        }
        else if ( userMinutes >= 0) {
            compteARebours.innerHTML = '00 : ' + userMinutes + userSeconds;
        }
        userSeconds--
        if (userSeconds === 0) {
            userMinutes--
            userSeconds = 60;
        }
        }, 1000)
}

let userHours;
let userMinutes;
let userSeconds;

startButton.addEventListener("click", () => {
    userHours = parseInt(document.querySelector("#heures").value);
    userMinutes = parseInt(document.querySelector("#minutes").value);
    userSeconds = parseInt(document.querySelector("#secondes").value);
    console.log(userHours);
})


startButton.addEventListener("click", () => {
    start()
})

pauseButton.addEventListener("click", () => {

})

resetButton.addEventListener("click", () => {

})
