const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-kontainer');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let progressBar = document.getElementById("progressBar");
let progressMeter = document.getElementById("progressMeter");
let progressMeterText = document.getElementById("progressMeterText");
let shuffledQuestions, currentQuestionIndex;


    quizLength = 0,
    index = 0,

startButton.addEventListener('click', startGame);
progressBar.classList.add("hide");
progressBar.setAttribute("aria-valuemax", quizLength);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  index = 0;  
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide');
  setNextQuestion()
  progressBar.classList.remove("hide");  
   
  quizLength = questions.length;
  showProgress(index);

}

function showProgress(index) {
    ///update progress bar
  let increment = Math.ceil((index) / (quizLength) * 100);
   // let increment = index;
   progressMeter.style.width = (increment) + '%';
   progressMeterText.innerHTML = (index) + ' out of ' + quizLength;
   if (index === 0) {
       progressMeter.style.width = (20) + '%';
       progressMeter.style.background = "#ffffff";
      
   }
   else {
       progressMeter.style.background = "#689F38";
   }
}


function setNextQuestion() {
  index++;
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  showProgress(index);
  
}

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

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

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
    startButton.innerText = 'Uudestaan'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Paljonko on 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '5', correct: false },
      { text: '1', correct: false }
    ]
  },
  {
    question: 'Paljonko on 4 + 4?',
    answers: [
      { text: '8', correct: true },
      { text: '6', correct: false },
      { text: '7', correct: false },
      { text: '5', correct: false }
    ]
  },
  {
    question: 'Paljonko on 3 + 2?',
    answers: [
      { text: '2', correct: false },
      { text: '3', correct: false },
      { text: '5', correct: true },
      { text: '7', correct: false }
    ]
  },
  {
    question: 'Paljonko on 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true },
      { text: '2', correct: false },
      { text: '10', correct: false }
    ]
  },
  {
    question: 'Paljonko on 3 * 2?',
    answers: [
      { text: '4', correct: false },
      { text: '10', correct: false },
      { text: '2', correct: false },
      { text: '6', correct: true }
    ]
  },
]