// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [
    ["what color is the sky?", "Blue"],
    ["What animals makes a moo sound?", 'Cow'],
    ['How many states in the US?', 50]
]


    

// 2. Store the number of questions answered correctly + correct and incorrect questions
let correct_answers = 0
const questions_correct = []
const questions_wrong = []


/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

    for (let i = 0; i < quiz.length; i++) {
         let question = quiz[i][0];
         let answer = quiz[i][1];
         let response = prompt(question);
        
         if (answer.toString().toLowerCase === response.toString().toLowerCase) {
             correct_answers++;
             questions_correct.push(quiz[i][0]);
         } else { questions_wrong.push(quiz[i][0]) }
}

// create ordered list of correct and incorrect questions

function listquestionsright(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}


// 4. Display the number of correct answers to the user
let html = `<h1> You got ${correct_answers} correct </h1>.
            <h2> You got these questions correct:</h2> <ol>${listquestionsright(questions_correct)}<ol>
            <h2> You got these questions wrong:</h2> <ol> ${listquestionsright(questions_wrong)}<ol>
`

document.querySelector('main').innerHTML = html;

