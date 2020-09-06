
// Constantes


const playButton = document.getElementById('playButton');


// FUNCION PLAY 

playButton.addEventListener('click', function (e) {
    e.preventDefault()
    funLetsPlay();
})

function funLetsPlay() {

    let answerRight = "nose";
    let chance = 4;
    var success = false;
    var answer;

    while (chance > 0 && success == false) {
        chance--;
        answer = prompt("You have " + chance + " try to hit");
        if (answer == answerRight) {
            alert("Congratulations!! your answer is correct. You are a true fan of cats!!");
            success = true;
        }
        else {
            switch (chance) {
                case 3:
                    alert("Clue one: It's not the ears");
                    break;
                case 2:
                    alert("Clue two: It's not the whiskersista")

                    break;
                case 1:
                    alert("Clue three: Neither are their legs")
                    break;
                default:
                    alert("You lost your last chance, try again!");
            }
        }
    }
}


