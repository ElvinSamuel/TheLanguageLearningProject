$(document).ready(function() {
    var sampleData = {
        'A' : ['A', 'B', 'C', 'D'],
        'B' : ['E', 'F', 'G', 'H'],
        'C' : ['I', 'J', 'K', 'L'],
        'D' : ['M', 'N', 'O', 'P']
    }

    function renderQuestion() {
        var questionAndAnswers = getRandomQuestionAndAnswersData();
        alert(questionAndAnswers['question']);
    }

    function getRandomQuestionAndAnswersData() {
        var allKeys = Object.keys(sampleData);
        var randomKey = allKeys[allKeys.length * Math.random() << 0];
        var randomKeyData =  sampleData[randomKey];

        return {
            'question' : randomKey,
            'answersArray' : randomKeyData
        };
    }

    /* Current Default - 3 Seconds */
    function moveToNextQuestion() {
        setTimeout( function() {
            renderQuestion();
        }, 3000)
    }

    function isCorrect(answer) {
        question = $('div#mainContent').text();
        return (answer === question);
    }

    function updateMessage(isCorrect) {
        if (isCorrect) {
            $('#messageContainer').html('<b>Good Work!</b>');
        } else {
            $('#messageContainer').html('<b>Keep Going!</b>');
        }
    }
    
    function turnChoiceRed(answerChoiceID) {
        $('#' + answerChoiceID).css({
            'background-color' : 'red',
            'color' : '#EEE',
            'opacity' : '.5'
        });
    }
    
    function turnChoiceGreen(answerChoiceID) {
        $('#' + answerChoiceID).css({
            'background-color' : 'green',
            'color' : '#EEE',
        });
    }
    
    function validateAnswerChoice(answer, answerChoiceID) {
        if ( isCorrect(answer) ) {
            turnChoiceGreen(answerChoiceID);
            updateMessage(true);
            moveToNextQuestion();
        } else {
            turnChoiceRed(answerChoiceID);
            updateMessage(false);
        }
    }

    /* Attach Event Handler to every answer choice */
    $('li.answerListItem').click(function() {
        var answer = $(this).text();
        var answerID = $(this).attr('id');
        validateAnswerChoice(answer, answerID);
    });
});