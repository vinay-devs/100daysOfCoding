const quizData = [
	{
		question: 'Which language runs in a web browser?',
		a: 'Java',
		b: 'C',
		c: 'Python',
		d: 'JavaScript',
		correct: 'd',
	},
	{
		question: 'What does CSS stand for?',
		a: 'Central Style Sheets',
		b: 'Cascading Style Sheets',
		c: 'Cascading Simple Sheets',
		d: 'Cars SUVs Sailboats',
		correct: 'b',
	},
	{
		question: 'What does HTML stand for?',
		a: 'Hypertext Markup Language',
		b: 'Hypertext Markdown Language',
		c: 'Hyperloop Machine Language',
		d: 'Helicopters Terminals Motorboats Lamborginis',
		correct: 'a',
	},
	{
		question: 'What year was JavaScript launched?',
		a: '1996',
		b: '1995',
		c: '1994',
		d: 'none of the above',
		correct: 'b',
	},
];

const answerEls=document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn=document.getElementById('submit');
const mode=document.getElementById('mode');
const quiz=document.querySelector('.quiz')

let currentQuiz=0;
let score=0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];
    a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}
function deselectAnswers(){
    answerEls.forEach((ans)=>(ans.checked=false))
}

function getSelected(){
    let answer;
    answerEls.forEach(ans=>{
        if(ans.checked){
            answer=ans.id;
        }
    })
    return answer;
}
submitBtn.addEventListener('click',()=>{
    const answer=getSelected();

    if(answer){
        if(answer==quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
            <h2>You answerd correctly at ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload</button>
            `;  
        }
    }
});

mode.addEventListener('click',()=>{
    document.body.classList.toggle('darkmode');
    if(document.body.classList.contains('Darkmode')){
        mode.innerHTML='Lightmode';
    }else{
        mode.innerHTML='Darkmode';
    }
})
