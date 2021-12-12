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
        if (compteurSeconds >= -1 && compteurMinutes >= -1 && compteurHours >= 0){
            compteARebours.innerHTML = '0' + compteurHours + ': ' + compteurMinutes + ': 0' + compteurSeconds;

        }


        compteurSeconds--;



        if (compteurSeconds === -1) {
            compteurMinutes--
            compteurSeconds = 60;
        }
        if (compteurMinutes === -1) {
            compteurHours--
            compteurMinutes = 60;
        }


        }, 1000)
}

let compteurHours;
let compteurMinutes;
let compteurSeconds;

startButton.addEventListener("click", () => {
    compteurHours = parseInt(document.querySelector("#heures").value);
    compteurMinutes = parseInt(document.querySelector("#minutes").value);
    compteurSeconds = parseInt(document.querySelector("#secondes").value);
    console.log(compteurHours);
})


startButton.addEventListener("click", () => {
    start()
})

pauseButton.addEventListener("click", () => {

})

resetButton.addEventListener("click", () => {

})
