//Create a button that adds 1 to a botScore stored in localStorage 

if (!localStorage.getItem('botScore')) { //if botscore is there, don't do anything. If it's not there run the line (if we don't get a value back = if it's not null or false)
    localStorage.setItem('botScore', 0)// if there's not a botscore yet set it to 0
}

document.querySelector('button').addEventListener('click', addAnotherOne) //event listener, each time runs adds 1

function addAnotherOne() {
    let botScoreVal = Number(localStorage.getItem('botScore')) //get value and store to variable
    botScoreVal += 1 //when we click the button add 1 to variable
    localStorage.setItem('botScore', botScoreVal) //reset that score to whatever it was plus 1

}
