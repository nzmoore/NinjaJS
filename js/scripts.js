quiz = {
  "name": "Super Hero Name Quiz",
  "description": "How many super heroes can you name",
  "question": "What is the real name of ",
  "questions": [
     { "question": "Superman", "answer":  "Clark Kent" },
     { "question": "Wonderwoman", "answer":  "Dianna Prince" },
     { "question": "Batman", "answer":  "Bruce Wayne" }
  ]
  }

   
var score = 0;

play(quiz);

function play(quiz) {
  for ( var i = 0, question, answer, max=quiz.questions.length; i < max; i++) {
     question = quiz.questions[i].question;    
     answer = ask(question);
     check(answer);
     
  }     

  gameOver();
  
  function ask(question) {
   return prompt(quiz.question + question);
  }

  function check(answer)  {
    if ( answer === quiz.questions[i].answer) {
       score++;
    } else {
      alert("Wrong!");
    }
  }

  function gameOver() {
      alert('Game Over. You scored ' + score + ' points');
  }

}


