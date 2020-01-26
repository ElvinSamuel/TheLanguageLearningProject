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
            'font-color' : 'WhiteSmoke'
        });
    }
    
    function turnChoiceGreen(answerChoiceID) {
        $('#' + answerChoiceID).css({
            'background-color' : 'green',
            'font-color' : 'WhiteSmoke'
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