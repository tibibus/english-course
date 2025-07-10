let question_field = document.querySelector('.question');
let q_num = 0
let answer1 = document.querySelector('.answer1');
let answer2 = document.querySelector('.answer2');
let answer3 = document.querySelector('.answer3');
let answer4 = document.querySelector('.answer4');
let rightAnswers = 0
let questions=[
    "What time do you usually _____ breakfast?",
    "My brother _____ play football very well.",
    "She _____ to the cinema last night.",
    "I have _____ apples than you.",
    "They _____ from Canada.",
    "What’s the opposite of “cold”?",
    "Can you _____ me, please?",
    "We _____ TV when she arrived.",
    "_____ you like some coffee?",
    "There aren’t _____ eggs left.",
    "If it rains, we _____ stay at home.",
    "I’ve lived here _____ five years.",
    "She’s the _____ student in the class.",
    "I was late _____ the traffic.",
    "The phone rang while I _____ dinner.",
    "He asked me where I _____.",
    "You _____ smoke here. It’s a hospital.",
    "How _____ money did you spend?",
    "They haven’t seen each other _____ last year.",
    "We’ll go out if it _____ raining.",
    "He denied _____ the window.",
    "Not only _____ the exam, but she also got the highest score.",
    "I regret _____ her about the party.",
    "It’s high time we _____.",
    "Had I known, I _____ earlier.",
    "He’s used to _____ under pressure.",
    "We need a solution, _____ we?",
    "Hardly _____ when it started to rain.",
    "She spoke English as if she _____ a native.",
    "The manager insisted that he _____ present."
];
let allAnswers = [
  "🅐have", "🅑has", "🅒having", "🅓had",
  "🅐can", "🅑cans", "🅒coulds", "🅓can to",
  "🅐go", "🅑goes", "🅒went", "🅓going",
  "🅐much", "🅑many", "🅒fewer", "🅓less",
  "🅐is", "🅑are", "🅒am", "🅓be",
  "🅐hot", "🅑cool", "🅒heat", "🅓warmly",
  "🅐helping", "🅑help", "🅒to help", "🅓helped",
  "🅐watched", "🅑were watching", "🅒watch", "🅓watching",
  "🅐Could", "🅑Would", "🅒Do", "🅓Are",
  "🅐any", "🅑some", "🅒much", "🅓many",
  "🅐would", "🅑will", "🅒do", "🅓must",
  "🅐for", "🅑since", "🅒from", "🅓during",
  "🅐intelligent", "🅑more intelligent", "🅒most intelligent", "🅓intelligenter",
  "🅐because", "🅑because of", "🅒due", "🅓thanks to",
  "🅐have", "🅑was having", "🅒had", "🅓am having",
  "🅐live", "🅑lived", "🅒had lived", "🅓am living",
  "🅐can’t", "🅑shouldn’t", "🅒don’t", "🅓mustn’t",
  "🅐many", "🅑much", "🅒more", "🅓less",
  "🅐since", "🅑for", "🅒during", "🅓from",
  "🅐stop", "🅑stops", "🅒will stop", "🅓stopping",
  "🅐to break", "🅑breaking", "🅒break", "🅓broke",
  "🅐she passed", "🅑passed she", "🅒did she pass", "🅓she did pass",
  "🅐tell", "🅑to tell", "🅒telling", "🅓told",
  "🅐leave", "🅑left", "🅒had left", "🅓are leaving",
  "🅐came", "🅑had come", "🅒would come", "🅓would have come",
  "🅐work", "🅑working", "🅒works", "🅓be working",
  "🅐don’t", "🅑aren’t", "🅒needn’t", "🅓won’t",
  "🅐had we left", "🅑we had left", "🅒we left", "🅓did we leave",
  "🅐was", "🅑were", "🅒is", "🅓would be",
  "🅐be", "🅑is", "🅒was", "🅓will be"
];
let allRightAnswers = ["🅐have", "🅐can", "🅒went", "🅒fewer", "🅑are", "🅐hot", "🅑help", "🅑were watching", "🅑Would", "🅐any", "🅑will", "🅐for", "🅒most intelligent", "🅑because of", "🅑was having", "🅑lived", "🅓mustn’t", "🅑much", "🅐since", "🅑stops", "🅑breaking", "🅒did she pass", "🅒telling", "🅑left", "🅓would have come", "🅑working", "🅐don’t", "🅐had we left", "🅑were", "🅐be"]

function checkAnswer(answer) {
    if (answer === allRightAnswers[q_num]) {
        q_num++;
        rightAnswers++;
        if (q_num == questions.length) {
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            answer3.innerHTML = "";
            answer4.innerHTML = "";
            if (rightAnswers >= 0 && rightAnswers <= 10) {
            question_field.innerHTML = ("Your english level is A1 "+rightAnswers+"/30");
            } else if (rightAnswers >= 11 && rightAnswers <= 17) {
                question_field.innerHTML = ("Your english level is A2 "+rightAnswers+"/30");
            } else if (rightAnswers >= 18 && rightAnswers <= 23) {
                question_field.innerHTML = ("Your english level is B1 "+rightAnswers+"/30");
            } else if (rightAnswers >= 24 && rightAnswers <= 28) {
                question_field.innerHTML = ("Your english level is B2 "+rightAnswers+"/30");
            } else if (rightAnswers >= 29 && rightAnswers <= 30) {
                question_field.innerHTML = ("Your english level is C1 "+rightAnswers+"/30");
            }
        }
    } else{
        q_num++;
        if (q_num === questions.length) {
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            answer3.innerHTML = "";
            answer4.innerHTML = "";
            if (rightAnswers >= 0 && rightAnswers <= 10) {
            question_field.innerHTML = ("Your english level is A1 "+rightAnswers+"/30");
            } else if (rightAnswers >= 11 && rightAnswers <= 17) {
                question_field.innerHTML = ("Your english level is A2 "+rightAnswers+"/30");
            } else if (rightAnswers >= 18 && rightAnswers <= 23) {
                question_field.innerHTML = ("Your english level is B1 "+rightAnswers+"/30");
            } else if (rightAnswers >= 24 && rightAnswers <= 28) {
                question_field.innerHTML = ("Your english level is B2 "+rightAnswers+"/30");
            } else if (rightAnswers >= 29 && rightAnswers <= 30) {
                question_field.innerHTML = ("Your english level is C1 "+rightAnswers+"/30");
            }
        }
    }
}

function showQuestion() {
    if (q_num < questions.length) {
        question_field.innerHTML = questions[q_num];
        answer1.innerHTML = allAnswers[q_num * 4];
        answer2.innerHTML = allAnswers[q_num * 4 + 1];
        answer3.innerHTML = allAnswers[q_num * 4 + 2];
        answer4.innerHTML = allAnswers[q_num * 4 + 3];
    }
}

answer1.addEventListener('click', function() { checkAnswer(answer1.innerHTML); showQuestion(); });
answer2.addEventListener('click', function() { checkAnswer(answer2.innerHTML); showQuestion(); });
answer3.addEventListener('click', function() { checkAnswer(answer3.innerHTML); showQuestion(); });
answer4.addEventListener('click', function() { checkAnswer(answer4.innerHTML); showQuestion(); });

showQuestion();