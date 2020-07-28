// GRABBING ALL THE ELEMENTS AND SETTING THEM IN A CONST
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex
// SETTING THE EVENT LISTENERS TO EXECUTE FUNCTIONS ON A MOUSE CLICK. 
startButton.addEventListener('click', startGame);
startButton.addEventListener('click', startTimer);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
// THIS FUNCTION BEGINS A 30 SECOND TIMER. 
function startTimer(){
  let counter = 30;
  setInterval(function(){
    counter--;
    if(counter >= 0){
      id = document.getElementById("count");
      id.innerHTML = counter;
    }
    if (counter === 0 ){
      id.innerHTML = "TIMES UP!!!";
    }
  }, 1000);
};
// PRIMARY FUNCTION THAT STARTS THE QUIZ BY HIDING ELEMENTS AND SENDING QUESTIONS
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
// NEXT QUESTION FUNCTION LINKED TO EVENT LISTENER 
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
// SHOW QUESTION FUNCTION THAT GOES THROUGH AN ARRAY OF QUESTIONS AND ANSWERS THEN CREATES ELEMENTS
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
// FUNCTION THAT RESETS THE DIV WHERE THE QUESTIONS ARE RENDERED. BY HIDING ELEMENTS
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
// ADDING STYLING TO THE BODY WHEN USER CLICKS ON EITHER CORRECT OR INCORRECT ANSWER. 
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}
// ADDING STYLING TO THE QUESTIONS DIV WHEN USER CLICKS ON EITHER CORRECT OR INCORRECT ANSWER. 
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}
// CLEARING QUESTIONS DIV OF PREVIOUS STYLING. 
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
// QUESTIONS ARRAY WITH ITS ANSWERS. 
const questions = [
    {
      question: 'what is the deadliest animal on earth?',
      answers: [
        { text: 'mosquito', correct: true },
        { text: 'dog', correct: false },
        { text: 'snakes', correct: false },
        { text: 'snails', correct: false },
      ]
    },
    {
      question: 'where is the biggest stadium in the world?',
      answers: [
        { text: 'Mexico', correct: false },
        { text: 'North Korea', correct: true },
        { text: 'India', correct: false },
        { text: 'United States', correct: false },
      ]
    },
    {
      question: 'where is the biggest city in the world?',
      answers: [
        { text: 'Mexico', correct: false },
        { text: 'Japan', correct: true }, 
        { text: 'India', correct: false },
        { text: 'China', correct: false },
      ]
    },
    {
      question: 'what is the biggest building in the world?',
      answers: [
        { text: 'One World Trade (USA)', correct: false },
        { text: 'Shanghai Tower (Shanghai)', correct: false },
        { text: 'Burj Khalifa (Dubai)', correct: true },
        { text: 'Lotte Tower (South Korea)', correct: false },
      ]
    }];















   