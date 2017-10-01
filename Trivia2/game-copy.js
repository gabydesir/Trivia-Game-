// function that starts the game at the submit click
// and takes in user's name
function start() {
  $('#2page').removeClass('landing') // show game page
  $('#city').hide() // hide landing page
  let $name = $('#input').val() // takes in the user input
  $('#name').text($name) // show the input on game page
}

//Created a class Question that has properties of question, choices & answer
//Use the class to create my questions, display the different choices & right answer
class Question {
  constructor(question,choices,answer, image){
    this.question = question,
    this.choices = choices,
    this.answer = answer,
    this.image = image
  }
}

let q1 = new Question('Sarajevo is the capital of which country?',
  ['Italy', 'Slovenia', 'Bosnia', 'Hungary'],
  'Bosnia',
  'http://7tripson.com/images/landmarks/bosnia_and_herzegovina_stari_most_big.jpg')

let q2 = new Question('The largest English speaking country in the Caribbean?',
  ['Barbados', 'Martinique', 'Trinidad', 'Jamaica'],
  'Jamaica',
  'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/14302/SITours/luminous-lagoon-and-rose-hall-haunted-night-tour-from-montego-bay-in-montego-bay-272189.jpg')


let q3 = new Question('What is the capital of Bahrain?',
  ['Manama', 'Speightown', 'Shibuya', 'Victoria'],
  'Manama',
  'http://clickbahrain.com/sites/default/files/styles/bahrain_photos_big/public/Bahrain-World-Trade-Centre_0.jpg?itok=qUGyefOJ')

let q4 = new Question('The currency of Bangladesh is',
  ['Euro', 'Taka', 'Lira', 'Bangladesh Peso'],
  'Taka',
  'http://3.bp.blogspot.com/-PPnckeN5brs/TltZkSmS7jI/AAAAAAAAA48/-FVKCvArF5o/s1600/Dhaka_Lalbagh_Fort_DhakaCity_Bangladesh.jpg')

let q5 = new Question('The 2nd largest country in the world is',
  ['Russia', 'Brazil', 'United States', 'Canada'],
  'Canada',
  'http://www.cantechletter.com/wp-content/uploads/2012/07/toronto-cn-tower.jpg')

let q6 = new Question('Zagreb is the capital of which country?',
  ['Ireland', 'Croatia', 'Guayana', 'Bulgaria'],
  'Croatia',
  'http://dream-croatia.com/wp-content/gallery/zagreb/zagreb1.jpg?x25974')

let q7 = new Question('Often call Gotham which city am I',
  ['New York', 'Philly', 'Los Angeles', 'Albany'],
  'New York',
  'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg')

let q8 = new Question('The capital of Turkey',
  ['Milan', 'Kingston', 'Ankara', 'Istanbul'],
  'Istanbul',
  'https://blog.continentalcurrency.ca/wp-content/uploads/2016/01/turkey-hagia-sofia.jpg')


// created an array that contains all my questions
const quiz = [q1, q2, q3, q4, q5, q6, q7, q8];

// created an global variable questionIndex that will keep track of which
// question is being answered by the user
// created an empty array of answers that will hold the user's responses.
var questionIndex = 0;
let answers = [];

function handleClickAnswer() {
  // adding a selected class to each answer for user to click on
  $(this).addClass('selected');
  let selectedAnswer = $(this).text();
  let isCorrect;
  console.log('selected ->', selectedAnswer);
  console.log('real answer -> ', quiz[questionIndex].answer)
  // if the chosen answer is correct, turn green otherwise brown
  if(selectedAnswer == quiz[questionIndex].answer){
  isCorrect = true;
  $(this).addClass('correctAnswer');
  $('.choice').off('click'); // after the user has selected the
  // correct answer remove the selected class.
  $(this).parent().find('div').removeClass('selected');

  } else {
  isCorrect = false;
  // $(this).parent().find('div').removeClass('selected');

  }

  let newLog = {
  question: quiz[questionIndex].question,
  answer: selectedAnswer,
  correct: isCorrect
  }
  answers.push(newLog);
  // remove all the listerners
  console.log('does it match?', isCorrect);
  console.log('answers array ->', answers);
}

// a function that displays the question & the choices in the
// first question
function buildGame() {
  console.log('BUILDGAME index-> ', 0);
  // rendering 1st question
    $('#question').text(quiz[0].question);
  // rendering 1st image
    $('#image').html(`<img id='img' src=${quiz[0].image}>`);

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

function nextQuestion() {
  // goes through the questions and renders them on click
  // of the next button
    $('.selected').removeClass('selected');
    console.log('rendering next question ', questionIndex);
    // rendering the next questions
    $('#question').text(quiz[questionIndex].question);
    // rendering the next images with each question
    $('#image').html(`<img id='img' src=${quiz[questionIndex].image}>`);

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
    }
}

function showResults() {
  console.log('inside results');
  $('.choice').remove();
  $('#image').remove();
  $('#next').remove();

  // add class
  let counter = 0;
  // walk all the answers and keep score
  for (let i = 0; i < answers.length; i++){
      // start creating a div element with result info
      console.log('creating element');

   // the empty array that I created at the beginning now contains
   // all the answers that the user selected
   // this if statement compares the users answers with the correct one
   // in order to render a result
    if (answers[i].correct == true){
      counter++

// displays score to the user at the end of the questions
    }
  } // end loop show results
  $('#question').text('You scored ' + counter + ' out of ' + quiz.length);
}

// Reset button => reload the page, hence starts over the game
// using same questions
$('#reset').on('click',function(){
    location.reload()
  })
