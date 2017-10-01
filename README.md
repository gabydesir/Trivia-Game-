
City Trivia is an informative trivia game, which tests the user's 
knowledge of countries and cities around the world. 

As a travel enthusiast, I love to encourage others to travel and learn more 
about cities and what makes them unique (landmarks, cultural 
or culinary tradition). The questions on the quiz are inspired by the different 
places that my classmates originated. Because we could all learn more about 
each other's countries to have a better understanding of who they are. 
This quiz includes places that the user probably never heard about. Let the 
learning begin! 


Technologies used HTML/CSS, Javascript Classes, jQuery. 

class Question {
  constructor(questions,choices,answer){
    this.question = question,
    this.choices = choices,
    this.answer = answer
  }
}

let q1 = new Question
        ('Sarajevo is the capital of which country?',
        ['Italy', 'Slovenia', 'Bosnia', 'Hungary'],
        'Bosnia'); 


Build Strategy 
I created a class of Question and gave it properties of questions, choicess and 
correct answer. Then I created div that holds the question and added the 
functionality of 'next' to it, in order to render the following questions. 
I then created helper functions to display the score. 

Future Improvements 
I would like to add an image to each question as a hint to the user. My goal is 
to help the user answer the questions accurately, more importantly have a visual 
representation of the potential location. 

