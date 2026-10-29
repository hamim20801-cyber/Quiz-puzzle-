// ========================================
// TIME FOR QUIZ - MAIN SCRIPT
// ========================================

let category = localStorage.getItem("category") || "history";

const quizData = {

  // ========================================
  // HISTORY
  // ========================================
  history: [
    {
      type: "mc",
      q: "ပုဂံကို တည်ထောင်သူ ဘယ်သူလဲ?",
      a: ["အနော်ရထာ", "အလောင်းဘုရား", "ဘုရင့်နောင်", "သီပေါ"],
      c: 0
    },
    {
      type: "mc",
      q: "မြန်မာနိုင်ငံ လွတ်လပ်ရေးရခဲ့တဲ့နှစ်?",
      a: ["1945", "1946", "1947", "1948"],
      c: 3
    },
    {
      type: "mc",
      q: "ဘုရင့်နောင် ဘယ်ခေတ်က ဘုရင်လဲ?",
      a: ["ပုဂံ", "တောင်ငူ", "ကုန်းဘောင်", "အင်းဝ"],
      c: 1
    }
  ],

  // ========================================
  // ENGLISH
  // ========================================
  english: [
    {
      type: "mc",
      q: "She ____ to school every day.",
      a: ["go", "goes", "going", "gone"],
      c: 1
    },
    {
      type: "mc",
      q: "What is the past tense of 'eat'?",
      a: ["eat", "ate", "eated", "eating"],
      c: 1
    },
    {
      type: "mc",
      q: "He ____ playing football.",
      a: ["like", "likes", "liking", "liked"],
      c: 1
    }
  ],

  // ========================================
  // MATH
  // ========================================
  math: [
    {
      type: "mc",
      q: "5 × 5 = ?",
      a: ["10", "15", "25", "30"],
      c: 2
    },
    {
      type: "mc",
      q: "10 + 20 = ?",
      a: ["20", "30", "40", "50"],
      c: 1
    },
    {
      type: "mc",
      q: "12 ÷ 3 = ?",
      a: ["2", "3", "4", "6"],
      c: 2
    }
  ],

  // ========================================
  // YFSSU QUIZ - NEW 25 QUESTIONS
  // ========================================
  yfssu: [

    // ENGLISH GRAMMAR (5)
    {
      type: "mc",
      q: '"I went to the store, but it was closed." ဝါကျထဲက "but" ဟာ ဘယ် Part of Speech လဲ?',
      a: ["Preposition", "Conjunction", "Adverb", "Noun"],
      c: 1
    },
    {
      type: "mc",
      q: '"___ three years" မှာ ဘယ်စကားလုံးကို သုံးရမလဲ?',
      a: ["Since", "For", "From", "At"],
      c: 1
    },
    {
      type: "mc",
      q: '"The cat sat on the mat." ဝါကျထဲက Verb က ဘယ်ဟာလဲ?',
      a: ["cat", "sat", "mat", "the"],
      c: 1
    },
    {
      type: "mc",
      q: 'ဘယ်စကားလုံးက Uncountable Noun ဖြစ်လဲ?',
      a: ["Information", "Book", "Student", "Chair"],
      c: 0
    },
    {
      type: "mc",
      q: '"If it rains tomorrow, I ___ stay at home."',
      a: ["would", "will", "am", "was"],
      c: 1
    },

    // GENERAL KNOWLEDGE (5)
    {
      type: "mc",
      q: "ကမ္ဘာပေါ်မှာ အကြီးဆုံးသမုဒ္ဒရာက ဘာလဲ?",
      a: [
        "Atlantic Ocean",
        "Pacific Ocean",
        "Indian Ocean",
        "Arctic Ocean"
      ],
      c: 1
    },
    {
      type: "mc",
      q: "ရေရဲ့ ဓာတုဖော်မြူလာက ဘာလဲ?",
      a: ["CO₂", "O₂", "H₂O", "NaCl"],
      c: 2
    },
    {
      type: "mc",
      q: "ကမ္ဘာပေါ်မှာ အကြီးဆုံးကုန်းနေသတ္တဝါက ဘာလဲ?",
      a: ["Giraffe", "Elephant", "Rhino", "Hippopotamus"],
      c: 1
    },
    {
      type: "mc",
      q: "နေကို ပတ်လည်လှည့်ပတ်တဲ့ ဂြိုဟ်တွေထဲမှာ ကမ္ဘာက ဘယ်နံပါတ်မြောက်လဲ?",
      a: ["2", "3", "4", "5"],
      c: 1
    },
    {
      type: "mc",
      q: "Romeo and Juliet ကို ရေးသားသူက ဘယ်သူလဲ?",
      a: [
        "William Shakespeare",
        "Charles Dickens",
        "Mark Twain",
        "Jane Austen"
      ],
      c: 0
    },

    // ANIMALS (5)
    {
      type: "mc",
      q: "အမြန်ဆုံးပြေးနိုင်တဲ့ မြေပြင်တိရစ္ဆာန်က ဘာလဲ?",
      a: ["Cheetah", "Horse", "Deer", "Kangaroo"],
      c: 0
    },
    {
      type: "mc",
      q: "Dolphin က ဘယ်အုပ်စုထဲမှာ ပါလဲ?",
      a: ["Fish", "Reptile", "Mammal", "Amphibian"],
      c: 2
    },
    {
      type: "mc",
      q: "ဘယ်တိရစ္ဆာန်ရဲ့ နှလုံးမှာ အခန်း ၃ ခန်းရှိလဲ?",
      a: ["Crocodile", "Frog", "Eagle", "Whale"],
      c: 1
    },
    {
      type: "mc",
      q: "Axolotl ရဲ့ ထူးခြားတဲ့ စွမ်းရည်က ဘာလဲ?",
      a: [
        "အရောင်ပြောင်းနိုင်ခြင်း",
        "ကိုယ်အင်္ဂါအစိတ်အပိုင်းအချို့ ပြန်လည်ဖြစ်ပေါ်နိုင်ခြင်း",
        "ရေမလိုဘဲ အသက်ရှင်နိုင်ခြင်း",
        "ပျံသန်းနိုင်ခြင်း"
      ],
      c: 1
    },
    {
      type: "mc",
      q: "အောက်ဆီဂျင်နဲ့ ပေါင်းစပ်တဲ့အခါ သွေးအပြာရောင်ဖြစ်နိုင်တဲ့ တိရစ္ဆာန်က ဘာလဲ?",
      a: ["Octopus", "Shark", "Dolphin", "Penguin"],
      c: 0
    },

    // ASTRONOMY & SPACE (5)
    {
      type: "mc",
      q: "နေအဖွဲ့အစည်းမှာ အကြီးဆုံးဂြိုဟ်က ဘယ်ဂြိုဟ်လဲ?",
      a: [
        "ကမ္ဘာဂြိုဟ်",
        "စနေဂြိုဟ်",
        "ကြာသပတေးဂြိုဟ်",
        "နက်ပကျွန်းဂြိုဟ်"
      ],
      c: 2
    },
    {
      type: "mc",
      q: "နေဟာ ဘယ်လိုကောင်းကင်အရာဝတ္ထုအမျိုးအစားလဲ?",
      a: ["ဂြိုဟ်", "ကြယ်", "ဂြိုဟ်တု", "ဂြိုဟ်သိမ်"],
      c: 1
    },
    {
      type: "mc",
      q: "ကမ္ဘာနဲ့ အနီးဆုံးကြယ်က ဘယ်ကြယ်လဲ?",
      a: [
        "ဆီးရီးယပ်စ်ကြယ်",
        "ပရောက်စီမာ စင်တော်ရီကြယ်",
        "နေ",
        "ပိုလာရစ်ကြယ်"
      ],
      c: 2
    },
    {
      type: "mc",
      q: "လပေါ်မှာ လူသား ပထမဆုံးခြေချခဲ့တဲ့နှစ်က ဘယ်နှစ်လဲ?",
      a: ["၁၉၅၉", "၁၉၆၅", "၁၉၆၉", "၁၉၇၅"],
      c: 2
    },
    {
      type: "mc",
      q: "နေကို တစ်ပတ်ပတ်ဖို့ အချိန်အကြာဆုံးယူရတဲ့ အဓိကဂြိုဟ်က ဘယ်ဂြိုဟ်လဲ?",
      a: [
        "အင်္ဂါဂြိုဟ်",
        "ယူရေးနပ်စ်ဂြိုဟ်",
        "စနေဂြိုဟ်",
        "နက်ပကျွန်းဂြိုဟ်"
      ],
      c: 3
    },

    // HISTORY, ECONOMICS & POLITICS (5)
    {
      type: "mc",
      q: "The Great Wall က ဘယ်နိုင်ငံမှာ တည်ရှိတာလဲ?",
      a: ["Japan", "China", "India", "South Korea"],
      c: 1
    },
    {
      type: "mc",
      q: '"GDP" ဆိုတာ ဘာကိုဆိုလိုတာလဲ?',
      a: [
        "Gross Domestic Product",
        "General Domestic Price",
        "Global Development Product",
        "Government Development Plan"
      ],
      c: 0
    },
    {
      type: "mc",
      q: 'Abraham Lincoln ရဲ့ "Gettysburg Address" မိန့်ခွန်းကို ဘယ်ကာလအတွင်း ပြောခဲ့တာလဲ?',
      a: [
        "American Civil War",
        "World War I",
        "American Revolution",
        "World War II"
      ],
      c: 0
    },
    {
      type: "mc",
      q: '"Renaissance" စတင်ပေါ်ပေါက်ခဲ့တဲ့ နိုင်ငံက ဘယ်နိုင်ငံလဲ?',
      a: ["Italy", "Germany", "Spain", "England"],
      c: 0
    },
    {
      type: "mc",
      q: "အစိုးရအာဏာကို အပိုင်းခွဲပြီး ခွဲဝေထားတဲ့ စနစ်ကို ဘယ်လိုခေါ်လဲ?",
      a: [
        "Separation of Powers",
        "Popular Vote",
        "Federal Tax",
        "Direct Democracy"
      ],
      c: 0
    }

  ]
};

// ========================================
// SELECT QUIZ
// ========================================

let quiz = quizData[category] || quizData.history;

// Shuffle questions without changing original data
quiz = [...quiz].sort(() => Math.random() - 0.5);

let index = 0;
let score = 0;
let time = 15;
let timer = null;
let answered = false;
let finished = false;

// ========================================
// TIMER
// ========================================

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    if (answered || finished) return;

    time--;

    const timerElement = document.getElementById("timer");

    if (timerElement) {
      timerElement.textContent = "⏰ Time: " + time;
    }

    if (time <= 0) {
      answered = true;
      clearInterval(timer);
      next();
    }
  }, 1000);
}

// ========================================
// LOAD QUESTION
// ========================================

function load() {
  if (index >= quiz.length || finished) {
    finishQuiz();
    return;
  }

  answered = false;
  time = 15;

  const q = quiz[index];

  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const textAnswerElement = document.getElementById("textAnswer");
  const timerElement = document.getElementById("timer");

  if (!questionElement || !choicesElement || !timerElement) {
    console.error("Quiz HTML elements are missing.");
    clearInterval(timer);
    return;
  }

  questionElement.textContent = q.q;
  timerElement.textContent = "⏰ Time: " + time;

  if (q.type === "mc") {
    choicesElement.style.display = "block";

    if (textAnswerElement) {
      textAnswerElement.style.display = "none";
    }

    const buttons = [
      document.getElementById("a"),
      document.getElementById("b"),
      document.getElementById("c"),
      document.getElementById("d")
    ];

    buttons.forEach((button, i) => {
      if (!button) return;

      button.textContent = q.a[i] ?? "";
      button.disabled = false;
    });

  } else {
    choicesElement.style.display = "none";

    if (textAnswerElement) {
      textAnswerElement.style.display = "block";
    }

    const input = document.getElementById("answerInput");

    if (input) {
      input.value = "";
      input.disabled = false;
    }
  }

  startTimer();
}

// ========================================
// MULTIPLE CHOICE ANSWER
// ========================================

function checkChoice(i) {
  if (answered || finished) return;

  const q = quiz[index];

  if (!q || q.type !== "mc") return;

  answered = true;
  clearInterval(timer);

  if (i === q.c) {
    score++;
  }

  next();
}

// ========================================
// TEXT ANSWER
// ========================================

function submitAnswer() {
  if (answered || finished) return;

  const input = document.getElementById("answerInput");

  if (!input) return;

  const userAnswer = input.value.trim();
  const correct = quiz[index].answer || "";

  answered = true;
  clearInterval(timer);

  if (
    userAnswer.toLowerCase() === correct.toLowerCase()
  ) {
    score++;
  }

  next();
}

// ========================================
// NEXT QUESTION
// ========================================

function next() {
  if (finished) return;

  clearInterval(timer);

  index++;

  if (index < quiz.length) {
    load();
  } else {
    finishQuiz();
  }
}

// ========================================
// FINISH QUIZ
// ========================================

function finishQuiz() {
  if (finished) return;

  finished = true;
  clearInterval(timer);

  localStorage.setItem("score", String(score));
  localStorage.setItem("total", String(quiz.length));
  localStorage.setItem("category", category);

  window.location.href = "result.html";
}

// ========================================
// START
// ========================================

load();
