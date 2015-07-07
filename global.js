var question1 = {question: "How many words are in this sentence?", possibleAnswers: "a. 1 b. 55 c. 345 d. 7 e. 4", answer: "d"};
var question2 = {question: "What about this sentence?", possibleAnswers: "a. 1 b. 55 c. 345 d. 7 e. 4", answer: "e"};
var question3 = {question: "And this sentence?", possibleAnswers: "a. 1 b. 55 c. 345 d. 7 e. 3", answer: "e"};
var question4 = {question: "What's your favorite letter.", possibleAnswers: "a. b. c. d. e.", answer: "b"};
var question5 = {question: "Is there a correct answer to this question?", possibleAnswers: "a. Yes b. No c. Not Sure d. Maybe", answer: "a"}

var questionsArray = [question1, question2, question3, question4, question5];

var userAnswer;

for (count = 0, score = 0; questionsArray[count]; count++) {
  console.log(questionsArray[count].question);
  userAnswer = prompt(questionsArray[count].question + "   " + questionsArray[count].possibleAnswers)
  console.log(userAnswer)
  
  if (userAnswer === questionsArray[count].answer) {
    score++
  }
  
}

alert("You scored " + (score/count)*100 + "%")