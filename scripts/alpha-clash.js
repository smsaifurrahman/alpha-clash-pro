// function play() {
//     // Step-1: hide the home screen,
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)
//     // show the play ground
//     const playGroundSection = document.getElementById('play-ground');
//     // console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;

    console.log('player pressed',playerPressed);
    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escaped') {
        gameOver();
    }
    // console.log('player pressed',playerPressed);    
    //get the key expected to be pressed
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
   



    if(playerPressed === expectedAlphabet) {
        console.log('You got a point');
        console.log('You have pressed correctly', expectedAlphabet);
        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score',updateScore);


        
        
        l
        // update score
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const currentScore = getTextElementValueById('current-score');
        // // 2. increase the score by1
        // const newScore = currentScore +1;
        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed ');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0) {
            console.log('game over');
            gameOver();
            
        }

        // step 1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerHTML;
        // const currentLife = parseInt(currentLifeText);

        // // step 2: reduce the xife count
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
        // step 3: display the updated life count
    }
}
document.addEventListener('keyup' ,handleKeyboardButtonPress);

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // display the randomly generated letter
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet)
}

function play() {
    // hide everything and show only the playground
    hidElementById('home-screen');
    hidElementById('final-score');
    showElementById('play-ground');
    // reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver () {
    hidElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1.get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);
    // clear the last selected alphabet hight light
    
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}