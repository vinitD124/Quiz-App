const quesitons =    [
    {quesiton:"which is largest animal in the world",

    answer:[
        {text:"Shark",correct:false},
        {text:"Blue whale",correct:true},
        {text:"Elephatn",correct:false},
        {text:"Giraffe",correct:false}
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
        {text:"Australia",correct:true},
        {text:"Arctic",correct:false},
        {text:"Africa",correct:true}
    ]

    }
]




const qustionElement = document.getElementById("Question")
const answerContainer = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn")


let currentQuestionIndex = 0;
let score = 0;





function StartQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}


function showQuestion(){
    resetState()
    let currentQuestion = quesitons[currentQuestionIndex]
    let quesitonNo = currentQuestionIndex + 1
    qustionElement.innerHTML = quesitonNo + ". " + currentQuestion.quesiton

    currentQuestion.answer.forEach(function(answer){
        const NewButton = document.createElement("button")
        NewButton.innerHTML = answer.text
        NewButton.classList.add("btn")
        answerContainer.appendChild(NewButton)

        if(answer.correct){
            NewButton.dataset.correct = answer.correct;
        }

        NewButton.addEventListener("click",selectAnswer)
    })
}


function resetState(){
    nextButton.style.display ="none"
    answerContainer.innerHTML = ""
    
}


function  selectAnswer(e){
    const selectbtn = e
    const isCorrect = selectbtn.dataset.correct = "true";

    if (isCorrect){
        selectbtn.classList.add("correct")
        score++
    }

    else{
        selectbtn.classList.add("incorrect")
    }
}





StartQuiz()