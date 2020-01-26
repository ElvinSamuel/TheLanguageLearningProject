$(document).ready(function() {
    var sampleData = {
        '彼' : ['機', '器', '装', '彼'],
        '赤' : ['炎', '尖', '赤', '輪'],
        '郭' : ['郭', '翼', '気', '付'],
        '置' : ['帰', '置', '孤', '独']
    }

    function renderQuestion() {
        populateQuestionAnswerFields();
        resetAnswerColors();
    }

    function populateQuestionAnswerFields() {
        var questionAndAnswers = getRandomQuestionAndAnswersData();
        var question = questionAndAnswers['question'];
        var answerArray = questionAndAnswers['answersArray']; 

        $('#mainContent').text(question);
        $('#answer_a').text(answerArray[0]);
        $('#answer_b').text(answerArray[1]);
        $('#answer_c').text(answerArray[2]);
        $('#answer_d').text(answerArray[3]);
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

    function resetAnswerColors() {
        $("li[id^='answer_']").css({
            'background-color' : '#DDD',
            'color' : '#000',
            'opacity' : '1.0'
        })
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