$(document).ready(function() {
    /* Attach Event Handler to every answer choice */
    $('li.answerListItem').click(function() {
        answer = $(this).text();
        answerID = $(this).attr('id');
        validateAnswerChoice(answer, answerID);
    });
    
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
        } else {
            turnChoiceRed(answerChoiceID);
            updateMessage(false);
        }
    }
});