$(document).ready(function() {
    var romaji = [
        "a", "i", "u", "e", "o",
        "ka", "ki", "ku", "ke", "ko",
        "sa", "shi", "su", "se", "so",
        "ta", "chi", "tsu", "te", "to",
        "na", "ni", "nu", "ne", "no",
        "ha", "hi", "fu", "he", "ho",
        "ma", "mi", "mu", "me", "mo",
        "ra", "ri", "ru", "re", "ro",
        "wa", "wo", "n",
        "ga", "gi", "gu", "ge", "go",
        "za", "ji", "zu", "ze", "zo",
        "da", "ji", "zu", "de", "do",
        "ba", "bi", "bu", "be", "bo",
        "pa", "pi", "pu", "pe", "po",
        "ya", "yu", "yo",
        "kya", "kyu", "kyo",
        "sha", "shu", "sho",
        "cha", "chu", "cho",
        "nya", "nyu", "nyo",
        "hya", "hyu", "hyo",
        "mya", "myu", "myo",
        "rya", "ryu", "ryo",
        "gya", "gyu", "gyo",
        "ja", "ju", "jo",
        "bya", "byu", "byo",
        "pya", "pyu", "pyo"
    ];

    var hiragana = [
        "あ", "い", "う", "え", "お",
        "か", "き", "く", "け", "こ",
        "さ", "し", "す", "せ", "そ",
        "た", "ち", "つ", "て", "と",
        "な", "に", "ぬ", "ね", "の",
        "は", "ひ", "ふ", "へ", "ほ",
        "ま", "み", "む", "め", "も",
        "ら", "り", "る", "れ", "ろ",
        "わ", "を", "ん",
        "が", "ぎ", "ぐ", "げ", "ご",
        "ざ", "じ", "ず", "ぜ", "ぞ",
        "だ", "ぢ", "づ", "で", "ど",
        "ば", "び", "ぶ", "べ", "ぼ",
        "ぱ", "ぴ", "ぷ", "ぺ", "ぽ",
        "や", "ゆ", "よ",
        "きゃ", "きゅ", "きょ",
        "しゃ", "しゅ", "しょ",
        "ちゃ", "ちゅ", "ちょ",
        "にゃ", "にゅ", "にょ",
        "ひゃ", "ひゅ", "ひょ",
        "みゃ", "みゅ", "みょ",
        "りゃ", "りゅ", "りょ",
        "ぎゃ", "ぎゅ", "ぎょ",
        "じゃ", "じゅ", "じょ",
        "びゃ", "びゅ", "びょ",
        "ぴゃ", "ぴゅ", "ぴょ"
    ];

    var katakana = [
        "ア", "イ", "ウ", "エ", "オ",
        "カ", "キ", "ク", "ケ", "コ",
        "サ", "シ", "ス", "セ", "ソ",
        "タ", "チ", "ツ", "テ", "ト",
        "ナ", "ニ", "ヌ", "ネ", "ノ",
        "ハ", "ヒ", "フ", "ヘ", "ホ",
        "マ", "ミ", "ム", "メ", "モ",
        "ラ", "リ", "ル", "レ", "ロ",
        "ワ", "ヲ", "ン",
        "ガ", "ギ", "グ", "ゲ", "ゴ",
        "ザ", "ジ", "ズ", "ゼ", "ゾ",
        "ダ", "ヂ", "ヅ", "デ", "ド",
        "バ", "ビ", "ブ", "ベ", "ボ",
        "パ", "ピ", "プ", "ペ", "ポ",
        "ヤ", "ユ", "ヨ",
        "キャ", "キュ", "キョ",
        "シャ", "シュ", "ショ",
        "チャ", "チュ", "チョ",
        "ニャ", "ニュ", "ニョ",
        "ヒャ", "ヒュ", "ヒョ",
        "ミャ", "ミュ", "ミョ",
        "リャ", "リュ", "リョ",
        "ギャ", "ギュ", "ギョ",
        "ジャ", "ジュ", "ジョ",
        "ビャ", "ビュ", "ビョ",
        "ピャ", "ピュ", "ピョ"
    ];


    var numberOfAnswers = 4;
    var correctAnswer;
    var questionAlphabet = hiragana;
    var answerAlphabet = romaji;

    function setQuestionAlphabet(alphabet) {
        questionAlphabet = alphabet;
    }

    function setAnswerAlphabet(alphabet) {
        answerAlphabet = alphabet;
    }

    function renderQuestion() {
        populateQuestionAnswerFields();
        resetAnswerColors();
    }

    function populateQuestionAnswerFields() {
        var questionAndAnswers = getQuestionAndAnswers();
        var question = questionAndAnswers['question'];
        correctAnswer = questionAndAnswers['correctAnswer'];
        var answerArray = questionAndAnswers['arrayOfAnswers'];

        $('#mainContent').text(question);
        $('#answer_a').text(answerArray[0]);
        $('#answer_b').text(answerArray[1]);
        $('#answer_c').text(answerArray[2]);
        $('#answer_d').text(answerArray[3]);
    }

    function getQuestionAndAnswers() {
        var characterIndex = Math.floor(questionAlphabet.length * Math.random());
        var question = questionAlphabet[characterIndex];
        var correctAnswer = answerAlphabet[characterIndex];

        var unshuffledAnswers = generateArrayOfAnswers(characterIndex);
        var shuffledAnswers = shuffleAnswers(unshuffledAnswers);

        return {
            'question' : question,
            'correctAnswer' : correctAnswer,
            'arrayOfAnswers' : shuffledAnswers
        };
    }

    function generateArrayOfAnswers(characterIndex) {
        var iterator = 0;
        var answerArray = [];
        answerArray.push(answerAlphabet[characterIndex]);

        while (iterator < (numberOfAnswers - 1)) {
            randomWrongAnswersIndex = Math.floor(answerAlphabet.length * Math.random());

            if (randomWrongAnswersIndex === characterIndex) {
                continue;
            } else {
                wrongAnswer = answerAlphabet[randomWrongAnswersIndex];
                answerArray.push(wrongAnswer);
                iterator++;
            }
        }

        return answerArray;
    }

    /**
     * ShuffleAnswers -- logic borrowed from Chris Ferdinandi's website GoMakeThings.com
     * 
     * @param {Object[]} arrayOfAnswers 
     * @returns {Object[]}
     */
    function shuffleAnswers(arrayOfAnswers) {
        var currentIndex = arrayOfAnswers.length;
        var temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = arrayOfAnswers[currentIndex];
            arrayOfAnswers[currentIndex] = arrayOfAnswers[randomIndex];
            arrayOfAnswers[randomIndex] = temporaryValue;
        }

        return arrayOfAnswers;
    }

    /* Current Default - 3 Seconds */
    function moveToNextQuestion() {
        setTimeout( function() {
            renderQuestion();
        }, 3000)
    }

    function isCorrect(answer) {
        return( answer === correctAnswer );
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

    // Kick it off
    populateQuestionAnswerFields();
});