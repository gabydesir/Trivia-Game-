//Created a class Question that has properties of question, choices & answer
//Use the class to create my questions, display the different choices & right answer
class Question{
  constructor(question,choices,answer){
    this.question = question,
    this.choices = choices,
    this.answer = answer
  }
}

let q1 = new Question('Sarajevo is the capital of which country?',
  ['Italy', 'Slovenia', 'Bosnia', 'Hungary'],'Bosnia')

let q2 = new Question('The largest English speaking country in the Caribbean?',
  ['Barbados', 'Martinique', 'Trinidad', 'Jamaica'], 'Jamaica')

let q3 = new Question('What is the capital of Bahrain?',
  ['Manama', 'Speightown', 'Shibuya', 'Victoria'],
  'Manama')
let q4 = new Question('The currency of Bangladesh is',
  ['Euro', 'Taka', 'Lira', 'Bangladesh Peso'],
  'Taka')
let q5 = new Question('The 2nd largest country in the world is',
  ['Russia', 'Brazil', 'United States', 'Canada'],
  'Canada')
let q6 = new Question('Zagreb is the capital of which country?',
  ['Ireland', 'Croatia', 'Guayana', 'Bulgaria'],
  'Croatia')
let q7 = new Question('Often call Gotham which city am I',
  ['New York', 'Philly', 'Los Angeles', 'Albany'],
  'New York')
let q8 = new Question('The capital of Turkey',
  ['Milan', 'Kingston', 'Ankara', 'Istanbul'],
  'Istanbul')

// created an array that contains all my questions
const quiz = [q1, q2, q3, q4, q5, q6, q7, q8];
// let currentQuestion = 0;
// let correctAnswer = 0;
// let quizOver = false;

var questionIndex = 0;
let answers = [];

function handleClickAnswer() {
  $(this).addClass('selected');
  let selectedAnswer = $(this).text();
  let isCorrect;
  console.log('selected ->', selectedAnswer);
  console.log('real answer -> ', quiz[questionIndex].answer)
  if(selectedAnswer == quiz[questionIndex].answer){
  isCorrect = true;
  } else isCorrect = false;
  let newLog = {
  question: quiz[questionIndex].question,
  answer: selectedAnswer,
  correct: isCorrect
  }
  answers.push(newLog);
  // remove all the listerners
  $('.choice').off('click');
  console.log('does it match?', isCorrect);
  console.log('answers array ->', answers);
}

// a function that displays the question & the choices in the
// first question
function buildGame() {
  console.log('BUILDGAME index-> ', 0);
    $('#question').text(quiz[0].question);
    let choiceArray = quiz[0].choices; // choices is still an array
    console.log('these are the choices', choiceArray);
    for(let i = 0; i < choiceArray.length; i++) {
      // grab choice and put in div with correct index
      let selector = '#choice' + i;
      console.log(selector);
      $(selector).text(choiceArray[i]);
      $(selector).on('click', handleClickAnswer)

      }
    }
// click event on next to render the following questions
    $('#next').text('Next');
    $('#next').on('click',function(){
      console.log('Please answer')
      questionIndex++;
      nextQuestion();
    });

buildGame();

function nextQuestion(){
    $('.selected').removeClass('selected');
    console.log('rendering next question ', questionIndex);
    // let classQuestion = $('#question').text(q2.question);
    $('#question').text(quiz[questionIndex].question);
    let choiceArray = quiz[questionIndex].choices; // choices is still an array
    console.log('these are the choices', choiceArray);
    for(let i = 0; i < choiceArray.length; i++) {
      // grab choice and put in div with correct index
      let selector = '#choice' + i;
      console.log(selector);
      $(selector).text(choiceArray[i])
      $(selector).on('click', handleClickAnswer);
    }
    if(questionIndex >= quiz.length-1) {
      console.log('end of quiz')
      // if it's equals or larger than length
      // remove listener
      $('#next').off('click');
      $('#next').text('Result');
      $('#next').on('click', showResults);


      // showResults ();
    }
}

function showResults () {
  console.log('inside results');
  $('.choice').remove();
  // add class
  let counter = 0;
  // walk all the answers and keep score
  for (let i = 0; i < answers.length; i++){
      // start creating a div element with result info
      console.log('creating element');
      // let responseContainer = $("div")
      // $('.choice').remove();
      // $('question').remove();
      // $("h1").text(answers[i].question).appendTo(responseContainer);
      // $("h2").text(answers[i].answer).appendTo(responseContainer);
      // $("h3").text(answers[i].correct).appendTo(responseContainer);
      // responseContainer.appendTo($('.question'));


    // if (correct === true && answers[i]){
    if (answers[i].correct == true){
      counter++

    }
  } // end forloop show results
  $('#question').text('You scored ' + counter + ' out of ' + quiz.length);
}

// Reset Game
$('#reset').on('click',function(){
    location.reload()
  })
