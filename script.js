const quesitons =    [
    {quesiton:"Who was the first Prime Minister of India?",

    answer:[
        {text:"Indira Gandhi",correct:false},
        {text:"Jawaharlal Nehru",correct:true},
        {text:"Narendra Modi",correct:false},
        {text:"Rajiv Gandhi",correct:false}
    ]

    },

    {quesiton:"which is smallest country in the world",

    answer:[
        {text:"Vatican city",correct:true},
        {text:"Bhutan",correct:false},
        {text:"Nepal",correct:false},
        {text:"Sri Lanka",correct:false}
    ]

    },

    {quesiton:"which is Largest Desert in the world",

    answer:[
        {text:"Kalahari",correct:false},
        {text:"Gabi",correct:false},
        {text:"Sahara",correct:false},
        {text:"Antarctica",correct:true}
    ]

    },


    {quesiton:"which is Smallest Continent in the world",

    answer:[
        {text:"Asia",correct:false},
        {text:"Australia",correct:false},
        {text:"Arctic",correct:false},
        {text:"Africa",correct:true}
    ]

    }
]


const qustionElement = document.getElementById("Question")
const answerButton = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn")


let currenQuestionIndex = 0;
let score = 0;


function StartQuiz(){
    currenQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}   

function showQuestion(){
    resetState()
    let currenQuestion = quesitons[currenQuestionIndex];
    let quesitonNo = currenQuestionIndex + 1;
    qustionElement.innerHTML = quesitonNo + ".  " + currenQuestion.quesiton;
    
    currenQuestion.answer.forEach(function(answer){
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        console.log(button)
        button.addEventListener("click",selectAnswer)   
    })
}


function resetState(){  
    nextButton.style.display ="none"
    answerButton.innerHTML = ""
}

function selectAnswer(e){   
    const selectBtn = e.target
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect){
        selectBtn.classList.add("correct")
        score++
    }

    else{
        selectBtn.classList.add("incorrect")
    }

    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
            
        }
        else{
            button.disabled = true
        }
    
    })
    
    nextButton.style.display = "block"
}


function showScore(){
    resetState();
    qustionElement.innerHTML = `Your scored ${score} out of ${quesitons.length}`
    nextButton.innerHTML  = "Play Again"
    nextButton.style.display = "block"
}


function handelNextButton(){
    currenQuestionIndex = currenQuestionIndex  + 1
    if(currenQuestionIndex < quesitons.length){
        showQuestion();
    }
    else{
        showScore();
    }
    
}

nextButton.addEventListener("click",()=>{
    if(currenQuestionIndex < quesitons.length){
        handelNextButton()
    }
    else{
        StartQuiz()
    }
})

StartQuiz()
