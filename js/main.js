$(document).ready(function() {
    var hangul = [
        "ㄱ", "ㄴ", "ㄷ",
        "ㄹ", "ㅁ", "ㅂ",
        "ㅅ", "ㅇ", "ㅈ",
        "ㅊ", "ㅋ", "ㅌ",
        "ㅍ", "ㅎ", "ㄲ",
        "ㄸ", "ㅃ", "ㅆ",
        "ㅉ", "ㅏ", "ㅓ",
        "ㅗ", "ㅜ", "ㅡ",
        "ㅣ", "ㅐ", "ㅔ",
        "ㅚ", "ㅟ", "ㅢ",
        "ㅑ", "ㅕ", "ㅛ",
        "ㅠ", "ㅒ", "ㅖ",
        "ㅘ", "ㅝ", "ㅚ",
        "ㅟ", "ㅙ", "ㅞ"
    ];

    var hangulPronunciation = [
        "g/k", "n", "d",
        "r/l", "m", "b",
        "s", "-/ng", "j",
        "ch", "k", "t",
        "p", "h", "kk",
        "tt", "pp", "ss",
        "jj", "a", "eo",
        "o", "u", "eu",
        "i", "ae", "e",
        "oe", "wi", "ui",
        "ya", "yeo", "yo",
        "yu", "yae", "ye",
        "wa", "wo", "oe",
        "wi", "wae", "we"
    ];
    
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
    var timeUntilNextQuestion = 2000;
    var listOfAllAlphabets = {
        "Hiragana" : hiragana,
        "Katakana" : katakana,
        "Romaji" : romaji
    };

    function setQuestionAlphabet(alphabet) {
        questionAlphabet = alphabet;
    }

    function setAnswerAlphabet(alphabet) {
        answerAlphabet = alphabet;
    }

    $('#questionLanguage').on("change", function(){
        var alphabet = $(this).val();
        setQuestionAlphabet(listOfAllAlphabets[alphabet]);
        populateQuestionAnswerFields();
    });

    $('#answerLanguage').on("change", function(){
        var alphabet = $(this).val();
        setAnswerAlphabet(listOfAllAlphabets[alphabet]);
        populateQuestionAnswerFields();
    })

    function renderQuestion() {
        populateQuestionAnswerFields();
        hideMessage();
        resetAnswerColors();
    }

    function populateQuestionAnswerFields() {
        var questionAndAnswers = getQuestionAndAnswers();
        var question = questionAndAnswers['question'];
        correctAnswer = questionAndAnswers['correctAnswer'];
        var answerArray = questionAndAnswers['arrayOfAnswers'];
        hideMessage();

        $('#mainContent').text(question);
        $('#answer_a').text(answerArray[0]);
        $('#answer_b').text(answerArray[1]);
        $('#answer_c').text(answerArray[2]);
        $('#answer_d').text(answerArray[3]);
    }

    /**
     *  Get the question, correct answer, and list of answer options
     * 
     * @returns {Object[]}
     */
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

    /**
     * Generate an array of answers, including the correct answer.
     * 
     * @param {Object[]} characterIndex 
     */

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
     * Shuffle the answer order. 
     * 
     * (logic borrowed from Chris Ferdinandi's website GoMakeThings.com)
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
    
    function moveToNextQuestion() {
        setTimeout( function() {
            renderQuestion();
        }, timeUntilNextQuestion)
    }

    /**
     * Determine if the correct answer is chosen.
     * @param {String} answer 
     * @return {boolean}
     */
    function isCorrect(answer) {
        return( answer === correctAnswer );
    }

    /**
     * Update the container message text.
     * 
     * @param {boolean} isCorrect 
     */
    function updateMessage(isCorrect) {
        showMessage();
        if (isCorrect) {
            $('#messageContainer').html('<b>Correct!</b>');
        } else {
            $('#messageContainer').html('<b>Keep Going!</b>');
        }
    }
    
    function showMessage() {
        $('#messageContainer').show();
    }

    function hideMessage() {
        $('#messageContainer').hide();
    }
    
    /**
     * Change the answer choice to red & make it semi-transparent.
     * 
     * @param {String} answerChoiceID 
     */
    function turnChoiceRed(answerChoiceID) {
        $('#' + answerChoiceID).addClass('incorrectAnswer');
    }

    /**
     * Change the answer choice to green.
     * 
     * @param {String} answerChoiceID 
     */
    function turnChoiceGreen(answerChoiceID) {
        $('#' + answerChoiceID).addClass('correctAnswer');
    }

    /**
     * Reset the answer choice colors.
     * 
     * @param {String} answerChoiceID 
     */
    function resetAnswerColors() {
        $("li[id^='answer_']").removeClass('correctAnswer incorrectAnswer');
    }
    
    /**
     * When a user selects an answer choice this function controls the 
     * functions that update the interface. The container color change
     * and messaging happen here.
     * 
     * @param {String} answer user selected answer
     * @param {String} answerChoiceID id of the answer choice
     */
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

    // When the application fully loads, start off with a random question.
    populateQuestionAnswerFields();
});