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

// July Quiz
{
type:"mc",
q:"ဇူလိုင်လမှာ ရက်ပေါင်း ဘယ်နှရက် ရှိသလဲ။",
a:["30 ရက်","31 ရက်","29 ရက်","28 ရက်"],
c:1
},

{
type:"mc",
q:"ဇူလိုင်လ (23) ရက်နောက်ပိုင်း မွေးဖွားသူများ၏ Zodiac Sign မှာ?",
a:["Cancer","Virgo","Leo","Libra"],
c:2
},

{
type:"mc",
q:"WWW ၏ အဓိပ္ပာယ်အပြည့်အစုံမှာ?",
a:["World Wide Web","Word Wide Web","Western Website Web","World Wide Window"],
c:0
},

{
type:"mc",
q:"တစ်နှစ်အတွင်း ရက်ပေါင်း (30) တိတိရှိသော လ စုစုပေါင်းမှာ?",
a:["4 လ","5 လ","6 လ","7 လ"],
c:0
},

{
type:"mc",
q:"ရေငွေ့တွေ စုစည်းပြီး မိုးတိမ်ဖြစ်ပေါ်လာစေတဲ့ ဖြစ်စဉ်ကို?",
a:["Evaporation","Reaction","Melting","Condensation"],
c:3
},

// Science
{
type:"mc",
q:"လူ့ခန္ဓာကိုယ်မှာ အကြီးဆုံး အင်္ဂါအစိတ်အပိုင်းက ဘာလဲ။",
a:["အသည်း","အရေပြား","ဦးနှောက်","အဆုတ်"],
c:1
},

{
type:"mc",
q:"H₂O ဆိုတာ ဘာကိုခေါ်သလဲ။",
a:["ဟိုက်ဒရိုဂျင်ပါအောက်ဆိုဒ်","ရေ","ဆားရည်","အက်ဆစ်"],
c:1
},

{
type:"mc",
q:"E = mc² ဆိုတဲ့ ညီမျှခြင်းက ဘာကို ရှင်းပြသလဲ။",
a:["Gravity","Mass-Energy Equivalence","Speed of Light","Quantum Physics"],
c:1
},

{
type:"mc",
q:"DNA ရဲ့ ပုံသဏ္ဍန်ကို ဘယ်လိုခေါ်သလဲ။",
a:["Alpha Helix","Double Helix","Beta Sheet","Triple Strand"],
c:1
},

{
type:"mc",
q:"ကမ္ဘာပေါ်မှာ လူဦးရေ အများဆုံး မြို့က ဘယ်မြို့လဲ။",
a:["Tokyo","Shanghai","Delhi","Mumbai"],
c:2
},

// Technology
{
type:"mc",
q:"CPU ဆိုသည်မှာ မည်သည်ကိုဆိုလိုသနည်း။",
a:["Central Processing Unit","Computer Processing Unit","Central Program Utility","Computer Program Unit"],
c:0
},

{
type:"mc",
q:"Windows Operating System ကို မည်သည့်ကုမ္ပဏီက တီထွင်ခဲ့သနည်း။",
a:["Apple","Google","Microsoft","Samsung"],
c:2
},

{
type:"mc",
q:"Wi-Fi သည် ဘာလုပ်ဆောင်နိုင်စေသနည်း။",
a:["စာရွက်စာတမ်း ပုံနှိပ်စေသည်","အင်တာနက်သို့ ကြိုးမဲ့ချိတ်ဆက်နိုင်စေသည်","ဖိုင်သိမ်းဆည်းစေသည်","ဘက်ထရီအားသွင်းစေသည်"],
c:1
},

{
type:"mc",
q:"Input Device တစ်ခုမှာ ဘယ်ဟာလဲ။",
a:["Monitor","Speaker","Printer","Keyboard"],
c:3
},

{
type:"mc",
q:"Antivirus Software ၏ အဓိကရည်ရွယ်ချက်မှာ?",
a:["Internet မြန်စေသည်","Website ဖန်တီးသည်","Virus နှင့် Malware မှ ကာကွယ်သည်","Storage တိုးစေသည်"],
c:2
},

// Politics & General Knowledge
{
type:"mc",
q:"ကမ္ဘာ့ပထမဆုံး အမျိုးသမီးသမ္မတ ဖြစ်လာသူမှာ?",
a:["Vigdís Finnbogadóttir","Corazon Aquino","Dilma Rousseff","Ellen Johnson Sirleaf"],
c:0
},

{
type:"mc",
q:"ဒီမိုကရေစီ (Democracy) ဆိုသော စကားလုံးသည် ဘယ်ဘာသာစကားမှ ဆင်းသက်လာသလဲ။",
a:["Latin","Greek","French","Sanskrit"],
c:1
},

{
type:"mc",
q:"ကမ္ဘာ့သမိုင်းတွင် ပထမဆုံး အမျိုးသမီး ဝန်ကြီးချုပ် ဖြစ်လာသူမှာ?",
a:["Margaret Thatcher","Indira Gandhi","Sirimavo Bandaranaike","Golda Meir"],
c:2
},

{
type:"mc",
q:"ကမ္ဘာ့အသက်အငယ်ဆုံး နိုင်ငံအဖြစ် အသိအမှတ်ပြုခံထားရသော နိုင်ငံမှာ?",
a:["Timor-Leste","South Sudan","Kosovo","Montenegro"],
c:1
},

{
type:"mc",
q:"Veto Power ကို အသုံးပြုနိုင်သော ကုလသမဂ္ဂ အဖွဲ့မှာ?",
a:["General Assembly","Security Council","International Court of Justice","UNESCO"],
c:1
}

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
