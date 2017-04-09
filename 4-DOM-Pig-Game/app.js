/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


WHAT TO LEARN: 

1) How to create our fundamental game variables;
2) How to generate a random number;
3) How to manipulate the DOM;
4) How to read from the DOM;
5) How to change CSS styles.

*/


/* dice variable takes random number between 1 and 6 each time it is defined. */
//dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

/* use querySelector to select #current-0 + whatever the activePlayer is (0 or 1) and change the text to equal dice variable. */

// textContent is only for plain text, while innerHTML requires a string because it accepts only HTML. 


//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// how to read content with this ID and store it into a variable. 
//var x = document.querySelector('#score-0').textContent;
//console.log(x);


var scores, roundscore, activePlayer, gamePlaying;

init();

var lastDice;

//DIE ROLL CLICK EVENT 
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceTwo = Math.floor(Math.random() * 6) + 1;
        
        //2. Display the result - change dice display to visible, update img src.
        var diceDOM = document.querySelector('.dice');
        var diceDOM_2 = document.querySelector('.dice-two');
        
        diceDOM.style.display = 'block';
        diceDOM_2.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        diceDOM_2.src = 'dice-' + diceTwo + '.png';
        
        //3. If player rolls two sixes in a row, they lose their entire score. 
        if (dice === 6 && lastDice === 6) {
            //Player loses score
            scores[activePlayer] = 0;
            roundScore = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1 && diceTwo !== 1) {
        //4. Update the round score IF the rolled number is NOT a 1. 
            //Add score 
            roundScore += (dice + diceTwo);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
        // each time dice is rolled, we store that variable in lastDice, in the next roll, we can then read that value and compare it with the current dice roll. 
        lastDice = dice;
    }
});

//HOLD CLICK EVENT
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        //Add CURRENT score to GLOBAL score 
        scores[activePlayer] += roundScore;
        //scores[activePlayer] = scores[activePlayer] + roundScore;

        //Update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var input = document.querySelector('#winScore').value;
        var winningScore;
        
        // Undefined, 0, null or "" are COERCED to false.
        // Anything else is COERCED to true
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100; 
        }

        //Check if player won game, set gamePlaying to false
        if (scores[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice-two').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next Player
            nextPlayer();
        }
    }
});

//Do Not Repeat Yourself! 
// NEXT PLAYER FUNCTION
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;

    //set roundScore in UI.
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //Once player changes, remove active class form player 0 panel, and add it to player 1
    //toggle - add class if its not there, and if its there then remove. 

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    //When a player rolls a 1, hide dice again. 
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-two').style.display = 'none';
}

// NEW GAME CLICK EVENT
document.querySelector('.btn-new').addEventListener('click', init); //if we called init here it would be immediately invoked

// INITIALIZE FUNCTION
function init() {
    gamePlaying = true;
    scores = [0,0];
    activePlayer = 0;    
    roundScore = 0;
    
    //change css of an element with 'style' method + property = 'value'.
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-two').style.display = 'none';

    //set all initial scores to 0.
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    //remove active class before adding it back to player 0 so its not duplicated.
    document.querySelector('.player-0-panel').classList.remove('active'); 
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active'); 
   
}

console.log(window);
console.log(document);

