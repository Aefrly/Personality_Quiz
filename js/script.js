//Create object to store user answers
let userAnswers = {}

//Select all question blocks
let questions = document.querySelectorAll('.question-block'); 
//Loop through each question block
questions.forEach(function(questionBlock) {
    //Select all answer buttons within the question block
    let answers = questionBlock.querySelectorAll('.answer-btn');
    //Loop through each button
    answers.forEach(function(button) {
        button.addEventListener('click', function() {
            answers.forEach(function(btn) {
                btn.classList.remove('selected');
            });
            button.classList.add('selected');

            //Store answer in the userAnswers object
            let dataNum = button.dataset.num;
            let dataAnswer = button.dataset.answer;

            userAnswers[dataNum] = dataAnswer;
            console.log(userAnswers);
        });
    });
});    

//Function to display result based on user answers
function displayResult() {
    let answerScores = {
        A:1,
        B:2,
        C:3,
        D:4
    };

    let totalScore = 0;
    for(let question in userAnswers) {
        let answer = userAnswers[question];
        totalScore += answerScores[answer];
    }

    let resultText = document.getElementById('result-text');
    if (totalScore <= 5) {
        resultText.textContent = "You're book genre is Mystery/Thriller!";
    } else if (totalScore >= 6 && totalScore <= 10) {
        resultText.textContent = "You're book genre is Fantasy!";
    } else if (totalScore >= 11 && totalScore <= 15) {
        resultText.textContent = "You're book genre is Adventure!";
    } else {
        resultText.textContent = "You're book genre is Contemporary/Drama!";
    }
}

let resultButton = document.getElementById('result-container');
resultButton.addEventListener('click', displayResult);
