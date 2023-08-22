const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);


const questionEl = document.getElementById("question");
const formEl = document.getElementById("form-id");
const inputEl = document.getElementById("input-id");
const scoreEl = document.getElementById("score-id");


let score = JSON.parse(localStorage.getItem("score"));

if(!score){
  score = 0;
}

scoreEl.innerText = `score:${score}`;

questionEl.innerText = `What is ${num1} multiply of ${num2}`;


const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
  const userAns = +inputEl.value;
  if(userAns === correctAns){
    score++
    updatedLocalStorage();
  } else {
    score--
    updatedLocalStorage();
  }
});

function updatedLocalStorage(){
  localStorage.setItem("score", JSON.stringify(score));
}