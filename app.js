const title = document.querySelector("h2");
title.textContent = "Soccer Trivia"

const para = document.querySelectorAll("p");

para.forEach( e => 
  {
    e.classList.remove("font-weight-normal");
    e.classList.add("bold");
  });



const body = document.querySelector(".quiz");
body.classList.remove("bg-primary");

const bigText = document.querySelector("h2.my-5");
bigText.style.color = "black";

const formText = document.querySelectorAll(".form-check");
formText.forEach( e => 
  { e.classList.remove("text-white-50");
    e.style.color = "black";});


console.log(para);




const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
      score += 25;
    }
  });

  // show the result
  scrollTo(0, 0);
  result.classList.remove('d-none');

const percent = result.querySelector('span');

  let output = 0;
  const timer = setInterval(() => {
    percent.textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    } 
    else 
    {
      if(output <= 25){percent.style.color = "red";}
      else if(output > 25 && output <= 50){percent.style.color = "Orange";}
      else if(output > 50 && output <= 75){percent.style.color = "Lime";}
      else if(output > 75 && output <= 100){percent.style.color = "blue";}
      
      output++;
    }
  }, 10);

});