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

}