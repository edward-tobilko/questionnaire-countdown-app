/* Countdown App */

const newYear = "1 January 2023";

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("mins");
const secondsElement = document.getElementById("seconds");

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = mins;
  secondsElement.innerHTML = seconds;
}
countdown();

// Interval timer
setInterval(countdown, 1000);

/* Questionnaire App */

// Data
const questionnaireData = [
  {
    question: "Which of the following describes your responsiveness score?",
    a: "Your responsiveness score is based on how quickly you respond to (accept/decline) clients’ invitations to jobs",
    b: "All are true",
    c: "Your responsiveness score appears on your profile for clients to see",
    d: "All are false",
    correct: "b",
  },
  {
    question:
      "Which of the following statements about your Job Success Score on Upwork are true?",
    a: "Longer-term relationships are a plus and can help boost your score",
    b: "Jobs with higher earnings weigh more and will have a bigger impact on your score ",
    c: "Your Job Success Score measures your client’s satisfaction with your overall work history on Upwork",
    d: "All are true",
    correct: "d",
  },
  {
    question:
      "Which of the following statements about starting to work on a job is true?",
    a: "Start the work only once the client has sent you an offer, you have accepted the offer on the platform, and your contract appears in the My Jobs  All Contracts tab",
    b: "All are true",
    c: "Start the work as soon as the client has sent you a message through Upwork",
    d: "All are false",
    correct: "a",
  },
  {
    question:
      "To prevent falling victim to payment scams, which tips should you follow to protect yourself from suspicious activities?",
    a: "Share your bank information with your client",
    b: "Accept mailed checks from your client",
    c: "Contact Upwork’s customer support when a client offers to pay you directly via PayPal, Western Union, or another method outside of the Upwork payments system",
    d: "Accept a job where the client asks you to pay money to get a job",
    correct: "b",
  },
  {
    question:
      "Which are requirements to achieve Top Rated freelancer status on Upwork?",
    a: "$1,000 earnings in the past year",
    b: "100% complete profile",
    c: "Passed interview with an Upwork representative",
    d: "All are true",
    correct: "d",
  },
  {
    question:
      "What do you need to qualify for Upwork’s Payment Protection for hourly jobs?",
    a: "All are true",
    b: "You must have a client with a verified billing method",
    c: "Accept a job where the client asks you to pay money to get a job",
    d: "You must exceed the contract’s weekly time limit set by the client",
    correct: "a",
  },
  {
    question: "Which items help you create a 100% complete profile?",
    a: "A list of your top skills",
    b: "A portfolio of work",
    c: "All are true",
    d: "A professional-looking profile photo of yourself",
    correct: "c",
  },
  {
    question:
      "How does Upwork’s Payment Protection for fixed price jobs work (using Escrow)?",
    a: "You proactively begin working before the client has created and funded a milestone",
    b: "All are false",
    c: "The client deposits (pre-funds) a milestone payment into escrow before you begin working. upon receiving and approving the work, the client releases the payment to you",
    d: "All are true",
    correct: "c",
  },
  {
    question:
      "What are the best practices for submitting a winning proposal through Upwork?",
    a: "Outline how you would approach and complete the job",
    b: "Respond to any screening questions listed in the job post",
    c: "All are true",
    d: "Describe your relevant experience in key areas listed in the job post – demonstrate you’ve read it",
    correct: "c",
  },
  {
    question:
      "Which of the following statements about Upwork’s Terms of Service are true?",
    a: "Soliciting or accepting payment from an Upwork client off the platform is a violation of Upwork's of Service",
    b: "You commit to keeping client relationships on Upwork for at least 24 mounths, unless you or your client pays a convention free to take the relationship of the marketplace",
    c: "All are true",
    d: "You can only have one Upwork account. This one account gives you access to any account type you may need including: freelancer, client, agency",
    correct: "c",
  },
];

const questionEl = document.getElementById("question");
const newMessage = document.getElementById("questionnaire");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function questionnaireFunc() {
  getWrongResult(); // call wrongResult
  const currentQuestionnaireData = questionnaireData[currentQuestion]; // data
  questionEl.innerText = currentQuestionnaireData.question; // call data element
  a_text.innerText = currentQuestionnaireData.a; // call data element
  b_text.innerText = currentQuestionnaireData.b;
  c_text.innerText = currentQuestionnaireData.c;
  d_text.innerText = currentQuestionnaireData.d;
}

questionnaireFunc();

// Get right result
function getRightResult() {
  let answerEl = undefined;

  const answers = document.querySelectorAll(".answer");
  answers.forEach((answer) => {
    if (answer.checked) {
      answerEl = answer.id;
    }
  });
  return answerEl;
}

// Get wrong result
function getWrongResult() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// Get current rating
function getRating(rate) {
  if (rate > 7) {
    return "green";
  } else if (rate > 5) {
    return "orange";
  } else {
    return "red";
  }
}

submitBtn.addEventListener("click", () => {
  const answer = getRightResult();

  if (answer) {
    if (answer === questionnaireData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;

    if (currentQuestion < questionnaireData.length) {
      questionnaireFunc();
    } else {
      newMessage.innerHTML = `
            <h2>You answered correctly at <span class="${getRating(
              score,
            )}">${score}</span>/${questionnaireData.length} questions.</h2>
            <button type="button" onClick='location.reload()'>Reload</button>`;
    }
  }
});
