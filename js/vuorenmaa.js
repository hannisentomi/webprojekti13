const aloitusNappi = document.getElementById('start-btn');
const seuraavaNappi = document.getElementById('next-btn');
const kysymysLaatikko = document.getElementById('question-kontainer');
const kysymys = document.getElementById('question');
const vastausNappi = document.getElementById('answer-buttons');

let laskuri = document.getElementById("progressBar");
let laskuriPalkki = document.getElementById("progressMeter");
let laskurinTeksti = document.getElementById("progressMeterText");
let randomKysymykset, kysymyksenIndex;


    quizLength = 0,
    index = 0,

aloitusNappi.addEventListener('click', aloitaPeli);
laskuri.classList.add("hide");
laskuri.setAttribute("aria-valuemax", quizLength);
seuraavaNappi.addEventListener('click', () => {
  kysymyksenIndex++
  setSeuraavaKysymys()
})

function aloitaPeli() {
  index = 0;  
  aloitusNappi.classList.add('hide')
  randomKysymykset = kysymykset.sort(() => Math.random() - .5)
  kysymyksenIndex = 0
  kysymysLaatikko.classList.remove('hide');
  setSeuraavaKysymys()
  laskuri.classList.remove("hide");  
   
  quizLength = kysymykset.length;
  laskeKysymykset(index);

}

function laskeKysymykset(index) {
    ///update progress bar
  let increment = Math.ceil((index) / (quizLength) * 100);
   // let increment = index;
   laskuriPalkki.style.width = (increment) + '%';
   laskurinTeksti.innerHTML = (index) + ' out of ' + quizLength;
   if (index === 0) {
    laskuriPalkki.style.width = (20) + '%';
    laskuriPalkki.style.background = "#ffffff";
      
   }
   else {
    laskuriPalkki.style.background = "#689F38";
   }
}


function setSeuraavaKysymys() {
  index++;
  nollaus()
  naytaKysymys(randomKysymykset[kysymyksenIndex]);
  laskeKysymykset(index);
  
}

function naytaKysymys(question) {
  kysymys.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', vastaus)
    vastausNappi.appendChild(button)
  })
}

function nollaus() {
  tyhjaaStatus(document.body)
  seuraavaNappi.classList.add('hide')   
  while (vastausNappi.firstChild) {
    vastausNappi.removeChild(vastausNappi.firstChild)
  }
}

function vastaus(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  tarkistus(document.body, correct)
  Array.from(vastausNappi.children).forEach(button => {
    tarkistus(button, button.dataset.correct)
  })
  if (randomKysymykset.length > kysymyksenIndex + 1) {
    seuraavaNappi.classList.remove('hide')  
  } else {
    aloitusNappi.innerText = 'Uudestaan'
    aloitusNappi.classList.remove('hide')
  }
}

function tarkistus(element, correct) {
  tyhjaaStatus(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function tyhjaaStatus(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const kysymykset = [
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