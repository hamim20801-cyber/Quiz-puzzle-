let category = localStorage.getItem("category")

let quizData = {

history:[

{ type:"mc", q:"ပုဂံကို တည်ထောင်သူ ဘယ်သူလဲ?", a:["အနော်ရထာ","အလောင်းဘုရား","ဘုရင့်နောင်","သီပေါ"], c:0 },
{ type:"mc", q:"မြန်မာနိုင်ငံ လွတ်လပ်ရေးရခဲ့တဲ့နှစ်?", a:["1945","1946","1947","1948"], c:3 },
{ type:"mc", q:"ဘုရင့်နောင် ဘယ်ခေတ်က ဘုရင်လဲ?", a:["ပုဂံ","တောင်ငူ","ကုန်းဘောင်","အင်းဝ"], c:1 }

],

english:[

{ type:"mc", q:"She ____ to school everyday.", a:["go","goes","going","gone"], c:1 },
{ type:"mc", q:"Past tense of eat?", a:["eat","ate","eated","eating"], c:1 },
{ type:"mc", q:"He ____ playing football.", a:["like","likes","liking","liked"], c:1 }

],

math:[

{ type:"mc", q:"5 × 5 = ?", a:["10","15","25","30"], c:2 },
{ type:"mc", q:"10 + 20 = ?", a:["20","30","40","50"], c:1 },
{ type:"mc", q:"12 ÷ 3 = ?", a:["2","3","4","6"], c:2 }

],

yfssu:[

// WORLD CAPITALS
{ type:"mc", q:"What is the capital of Canada?", a:["Toronto","Ottawa","Vancouver","Montreal"], c:1 },
{ type:"mc", q:"What is the capital of France?", a:["Lyon","Marseille","Nice","Paris"], c:3 },
{ type:"mc", q:"What is the capital of Australia?", a:["Sydney","Melbourne","Canberra","Perth"], c:2 },
{ type:"mc", q:"What is the capital of Egypt?", a:["Alexandria","Cairo","Giza","Luxor"], c:1 },

// FOOTBALL WORLD CUP
{ type:"mc", q:"ပထမဆုံး World Cup ကို ဘယ်နှစ်မှာ ကျင်းပခဲ့သလဲ?", a:["1934","1938","1926","1930"], c:3 },
{ type:"mc", q:"2002 World Cup အိမ်ရှင်နိုင်ငံတွေ?", a:["Japan & South Korea","China & Sri Lanka","Malaysia & Singapore","Qatar & Saudi Arabia"], c:0 },
{ type:"mc", q:"World Cup ဘယ်နှစ်နှစ်တစ်ကြိမ်?", a:["5","2","4","3"], c:2 },
{ type:"mc", q:"World Cup အိမ်ရှင်ထဲက အုပ်စုကနေထွက်ခဲ့တဲ့နိုင်ငံ?", a:["Japan","South Africa","Switzerland","USA"], c:1 },

// SCIENCE & GENERAL
{ type:"mc", q:"Romeo and Juliet က ဘာအမျိုးအစားလဲ?", a:["Novel","Play","Poetry","Essay"], c:1 },
{ type:"mc", q:"Light speed ရှင်းပြသူနာမည်ကြီးသူ?", a:["Newton","Darwin","Galileo","Einstein"], c:3 },
{ type:"mc", q:"Olympic ဘယ်နှစ်နှစ်တစ်ကြိမ်?", a:["2","3","4","5"], c:2 },
{ type:"mc", q:"Zero ကို ပထမအသုံးပြုသူတွေ?", a:["Indians","Greeks","Romans","Egyptians"], c:0 },

// SCIENCE
{ type:"mc", q:"Which organ pumps blood?", a:["Lung","Liver","Heart","Kidney"], c:2 },
{ type:"mc", q:"Gold symbol?", a:["Go","Gd","Ag","Au"], c:3 },
{ type:"mc", q:"Solar system center?", a:["Earth","Moon","Sun","Mars"], c:2 },
{ type:"mc", q:"Renewable energy?", a:["Coal","Gas","Solar","Oil"], c:2 },

// POLITICS
{ type:"mc", q:"Communist Manifesto authors?", a:["Lenin","Mao","Stalin","Marx & Engels"], c:3 },
{ type:"mc", q:"China system?", a:["Communism","Democracy","Socialism","Monarchy"], c:0 },
{ type:"mc", q:"Che Guevara revolution?", a:["France","Cuba","Russia","Industrial"], c:1 },
{ type:"mc", q:"Hitler system?", a:["Socialism","Capitalism","Nazi","Democracy"], c:2 }

]

}

// fallback
let quiz = quizData[category] || quizData.history

quiz = quiz.sort(() => Math.random() - 0.5)

let index = 0
let score = 0
let time = 15

let timer

function startTimer(){

clearInterval(timer)

timer = setInterval(() => {

time--

let t = document.getElementById("timer")
if(t) t.innerHTML = "⏰ Time : " + time

if(time <= 0){
next()
}

},1000)

}

function load(){

time = 15
startTimer()

let q = quiz[index]

document.getElementById("question").innerHTML = q.q

if(q.type == "mc"){

document.getElementById("choices").style.display = "block"
document.getElementById("textAnswer").style.display = "none"

document.getElementById("a").innerHTML = q.a[0]
document.getElementById("b").innerHTML = q.a[1]
document.getElementById("c").innerHTML = q.a[2]
document.getElementById("d").innerHTML = q.a[3]

}else{

document.getElementById("choices").style.display = "none"
document.getElementById("textAnswer").style.display = "block"

}

}

function checkChoice(i){

if(i == quiz[index].c){
score++
}

next()

}

function submitAnswer(){

let input = document.getElementById("answerInput")

if(!input) return

let userAnswer = input.value.trim()
let correct = quiz[index].answer || ""

if(userAnswer.toLowerCase() === correct.toLowerCase()){
score++
}

next()

}

function next(){

index++

let input = document.getElementById("answerInput")
if(input) input.value = ""

if(index < quiz.length){
load()
}else{
localStorage.setItem("score", score)
localStorage.setItem("total", quiz.length)

location.href = "result.html"
}

}

load()
