'use strict';
const computerScore=document.getElementById('computer-score');
const userScore=document.getElementById('user-score');
let results='';

let cScore=0;
let pScore=0;

const gameStartContainer=document.getElementById('game-start');
 const gameResultContainer=document.querySelector('.game-result');

 const hands=document.querySelector('.hands')

 const btnGameStart=document.getElementById('btn-game-start');



 const computerChoice=document.getElementById('computer-choice')
 const userChoice=document.getElementById('user-choice')
 const result=document.getElementById('result')
// functions
// game start functions
const gameStart=function(){
    computerScore.innerText=cScore;
    userScore.innerText=pScore;

    gameResultContainer.classList.remove('hidden');
 gameStartContainer.classList.add('hidden');
 hands.classList.remove('hidden');
};

const gameLogic=function(userSelected,computerSelected){
    if(userSelected===computerSelected){
        results='DRAW'
        updateDOM(userSelected,computerSelected,results);
        return;
    }
    if(userSelected==='rock'){
        if(computerSelected==='paper'){
            results='LOST';
            cScore++;
            updateDOM(userSelected,computerSelected,results);
            return;
        }else{
            results='WON';
            pScore++;
            updateDOM(userSelected,computerSelected,results);
            return;
        }
    }
    if(userSelected==='paper'){
        if(computerSelected==='scissors'){
            results='LOST';
            cScore++;
            updateDOM(userSelected,computerSelected,results);
            return;
        }else{
            
            results='WON';
            pScore++;
            updateDOM(userSelected,computerSelected,results);
            return;
        }
    }
    if(userSelected==='scissors'){
        if(computerSelected==='rock'){
            results='LOST';
            cScore++;
            updateDOM(userSelected,computerSelected,results);
            return;
        }else{
            results='WON';
            pScore++;
            updateDOM(userSelected,computerSelected,results);
            return;
        }
    }

}
// updateDOM

const updateDOM=function(userSelected,computerSelected,results){
    computerScore.innerText=cScore;
    userScore.innerText=pScore;
    computerChoice.innerText='computer'
    userChoice.innerText='result'
     computerChoice.innerHTML=`computer Choose <strong> ${computerSelected.toUpperCase()}</strong>`;
     userChoice.innerHTML=`You Choose <strong> ${userSelected.toUpperCase()}</strong>`;
    result.innerText='results';
}

const check=function(input){
     
    const userSelected=input;
   const choices=['rock','paper','scissor'];
   const num=Math.trunc(Math.random()*3);
   const computerSelected=choices[num];
  gameLogic(userSelected,computerSelected);
};

btnGameStart.addEventListener('click',gameStart);
// calling functions
