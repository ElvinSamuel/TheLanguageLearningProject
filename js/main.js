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
    
    function disableAnswerChoice(answerChoiceID) {
        $(answerChoiceID).prop( "disabled", true );
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
        } else {
            turnChoiceRed(answerChoiceID);
        }
    }
});