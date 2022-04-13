//Create a button that adds 1 to a botScore stored in localStorage 

if (!localStorage.getItem('botScore')) { //if it's not false then run the line
    localStorage.setItem('botScore', 0)// if there's not a botscore yet set it to 0
}

document.querySelector('button').addEventListener('click', addAnotherOne) //event listener, each time runs adds 1

function addAnotherOne() {
    let botScoreVal = Number(localStorage.getItem('botScore')) //get value and store to variable
    botScoreVal += 1 //ad 1 to variable
    localStorage.setItem('botScore', botScoreVal) //reset that score and adds 1

}
