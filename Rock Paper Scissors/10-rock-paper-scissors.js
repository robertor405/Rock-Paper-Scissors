 // needs to be created outside the function so it doesnt restart
    let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      }

      upDateScoreElement();
    
      /*
    if(!score){
      score = {
        wins: 0,
        losses: 0,
        ties: 0

      }
    }*/

    function playGame(playerMove){

      const computerMove = pickComputerMove();
  // can access it through the console

      let result = '';// create the variable so it can be accessed outside

    if(playerMove === 'scissors') {
      if (computerMove === 'scissors'){
        result = 'Both Tie.';
      }else if(computerMove === 'rock'){
        result = 'You lose';
      }else if(computerMove ==='rock'){
        result = 'You win!';
      }

    }else if(playerMove === 'paper'){
      if (computerMove === 'paper'){
        result = 'Both Tie.';
      }else if(computerMove === 'scissors'){
        result = 'You lose';
      }else if(computerMove ==='rock'){
        result = 'You win!'
      }

    }else if(playerMove === 'rock'){
      if (computerMove === 'rock'){
        result = 'Both Tie.';
      }else if(computerMove === 'paper'){
        result = 'You lose';
      }else if(computerMove ==='scissors'){
        result = 'You win!'
      }
    }

    if(result === 'You win!'){
      score.wins += 1;
    }else if(result === 'You lose'){
      score.losses += 1;
    }else if(result === 'Both Tie.'){
      score.ties += 1; 
    }
    
    localStorage.setItem('score', JSON.stringify(score)); // local storage only supports strings
  
    upDateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
  <img src="images/${playerMove}-emoji.jpeg" class="move-icon"> 
  <img src="images/${computerMove}-emoji.jpeg" class="move-icon">
  Computer`;
  }
    function upDateScoreElement(){
      document.querySelector('.js-score')
      .innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    
    }
     //must set a variable for computerMove outside, (global variable)
    function pickComputerMove(){

    const randomNumber = Math.random();

    let computerMove = '';
  // Any variable we create inside the brackets will only exist inside the brackets
  if(randomNumber >= 0 && randomNumber < 1 / 3){
   computerMove = 'rock';
  }else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
   computerMove = 'paper';
  }else if(randomNumber >= 2 / 3 && randomNumber < 1){  // when its inside the curly braces it is a scope
   computerMove = 'scissors';  // scopes help us avoid naming conflicts,so it does not interact with the outside
  }
  //Return Statement let us get a value out of a function
  return computerMove

    }