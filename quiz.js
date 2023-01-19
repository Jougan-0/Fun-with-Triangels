const quizForm=document.querySelector('.quiz-form');
const submitbtn=document.querySelector('#submit-answer-btn');
const outputBox=document.querySelector('#Output-Box');

const correctAnswers=["90","right-angled"];

submitbtn.addEventListener('click',function calculteScore(){
    let score=0;
    let index=0;
    const formResults=new FormData(quizForm);
    for(let value of formResults.values())
    {
        if(value===correctAnswers[index])
        score++;
        index++;
    }
    outputBox.innerText="The score is "+score;
});