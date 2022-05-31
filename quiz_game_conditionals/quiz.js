/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correct_answers = 0

// 2. Store the rank of a player

let player_rank = "blank"

// 3. Select the <main> HTML element

const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const question_1 = prompt("What is 2+2?")
const question_1_answer = 4

if ( +question_1 === question_1_answer) {console.log("this is correct"); correct_answers += 1 }


const question_2 = prompt("What is 2x4?")
const question_2_answer = 8

if ( +question_2 === question_2_answer) {console.log("this is correct"); correct_answers += 1 }


const question_3 = prompt("What is 3x4?")
const question_3_answer = 12

if ( +question_3 === question_3_answer) {console.log("this is correct"); correct_answers += 1 }


const question_4 = prompt("What is 5x4?")
const question_4_answer = 20

if ( +question_4 === question_4_answer) {console.log("this is correct"); correct_answers += 1 }


const question_5 = prompt("What is 6x4?")
const question_5_answer = 24

if ( +question_5 === question_5_answer) {console.log("this is correct"); correct_answers += 1 }



/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if ( correct_answers === 5 ) {
    player_rank = "Gold"} 
  else if ( correct_answers >= 3 ) {
    player_rank = "Silver"} 
  else if ( correct_answers >= 1 ) {
    player_rank = "Bronze" }
  else ( player_rank = "No Crown")
    



// 6. Output results to the <main> element
main.innerHTML = `
<h2> you got ${correct_answers} out of 5 questions. </h2> 
<p>Crown earned: ${player_rank} </p> `;
