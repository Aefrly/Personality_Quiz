let userAnswers = {}

let questions = document.querySelectorAll('.question-block'); {
    let answers = document.querySelectorAll('.answer-btn'); {
        answers.forEach(function(button) {
            button.addEventListener('click', function() {
                answers.forEach(function(btn) {
                    btn.classList.remove('selected');
                });    
                button.classList.add('selected');
            })
                let dataNum = button.dataset.num;
                let dataAnswer = button.dataset.answer;
                userAnswers[dataNum] = dataAnswer;
                console.log(userAnswers);
        }) 
    }
}
