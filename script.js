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

// =========================
// 👗 FASHION QUIZ
// =========================

{
type:"mc",
q:"Denim ဆိုတာ ဘယ်လိုအထည်အမျိုးအစားလဲ?",
a:["Silk","Cotton fabric","Wool","Linen"],
c:1
},

{
type:"mc",
q:"Monochrome outfit ဆိုတာ ဘာကိုဆိုလိုတာလဲ?",
a:[
"အရောင် ၃ မျိုးထက်ပိုဝတ်ခြင်း",
"Pattern တစ်မျိုးတည်းသုံးခြင်း",
"အရောင်တစ်ရောင်တည်း သို့မဟုတ် အရောင်တူညီတဲ့ tone များနဲ့ ဝတ်ခြင်း",
"အဖြူရောင်ပဲ ဝတ်ခြင်း"
],
c:2
},

{
type:"mc",
q:"Runway ကို Fashion မှာ ဘာအတွက်အသုံးပြုတာလဲ?",
a:[
"အဝတ်အစားရောင်းဖို့",
"Designer တွေရဲ့ collection ကို model တွေက ပြသဖို့",
"အထည်ချုပ်ဖို့",
"Fashion magazine ရိုက်ဖို့"
],
c:1
},

{
type:"mc",
q:"Le Smoking လို့ နာမည်ကြီးတဲ့ အမျိုးသမီးဝတ် tuxedo suit ကို 1966 ခုနှစ်မှာ ဘယ် Designer က မိတ်ဆက်ခဲ့တာလဲ?",
a:[
"Pierre Cardin",
"Yves Saint Laurent",
"Jean Paul Gaultier",
"Christian Lacroix"
],
c:1
},

{
type:"mc",
q:"ဘယ် Fashion House ရဲ့ အထင်ကရ motif တစ်ခုက Medusa ဖြစ်ပြီး Greek mythology ကို အခြေခံထားတာလဲ?",
a:[
"Versace",
"Valentino",
"Givenchy",
"Balmain"
],
c:0
},


// =========================
// 🍜 FOOD QUIZ
// =========================

{
type:"mc",
q:"ချင်းရိုးရာအစားအစာတွေမှာ သဘာဝအတိုင်း ရရှိတဲ့ ဘယ်အရာတွေကို အသုံးများတတ်သလဲ?",
a:[
"တောင်ပေါ်ဒေသထွက် ဟင်းသီးဟင်းရွက်နှင့် အပင်များ",
"ပင်လယ်စာများသာ",
"နို့ထွက်ပစ္စည်းများသာ",
"ဟင်းခတ်အမွှေးအကြိုင် ပစ္စည်းများ"
],
c:0
},

{
type:"mc",
q:"ရှမ်းထမင်းကို တခြားနာမည်တစ်ခုနဲ့ ဘယ်လိုခေါ်ကြလဲ?",
a:[
"ငါးထမင်း",
"ထမင်းချင်",
"ခေါက်ဆွဲ",
"မုန့်လင်မယား"
],
c:1
},

{
type:"mc",
q:"ကချင်ရိုးရာဟင်းလျာတွေမှာ အသားနဲ့ ဟင်းသီးဟင်းရွက်တွေကို ဘယ်လိုပုံစံနဲ့ ပြုလုပ်တာတွေ့ရများလဲ?",
a:[
"အရသာမထည့်ဘဲ ပြုတ်ခြင်း",
"ဟင်းခတ်အမွှေးအကြိုင်များနဲ့ ချက်ပြုတ်ခြင်း",
"သကြားနဲ့ကြော်ခြင်း",
"နို့နဲ့ချက်ခြင်း"
],
c:1
},

{
type:"mc",
q:"ရှမ်းခေါက်ဆွဲမှာ အဓိကအသုံးပြုတဲ့ ခေါက်ဆွဲက ဘာဖြစ်မလဲ?",
a:[
"ပဲခေါက်ဆွဲ",
"ဂျုံခေါက်ဆွဲ",
"ဆန်ခေါက်ဆွဲ",
"အာလူးခေါက်ဆွဲ"
],
c:2
},

{
type:"mc",
q:"တို့ဟူးနွေးဟာ ဘယ်တိုင်းရင်းသားအစားအစာနဲ့ အထူးဆက်စပ်သလဲ?",
a:[
"ဗမာ",
"ရှမ်း",
"ရခိုင်",
"ချင်း"
],
c:1
},

{
type:"mc",
q:"အောက်ပါအစားအစာနဲ့ ဒေသတွဲဖက်မှုတွေထဲမှာ မမှန်တာတစ်ခုကို ရွေးပါ။",
a:[
"ရှမ်း — တို့ဟူးနွေး",
"ရခိုင် — ရခိုင်မုန့်တီ",
"ဗမာ — မုန့်ဟင်းခါး",
"ချင်း — ရှမ်းခေါက်ဆွဲ"
],
c:3
},

{
type:"mc",
q:"ရခိုင်မုန့်တီမှာ အဓိကအသုံးပြုတဲ့ ပါဝင်ပစ္စည်းတစ်မျိုးက ဘာလဲ?",
a:[
"ကြက်ဥ",
"ငါးခြောက်",
"အမဲသား",
"ငါး"
],
c:3
},

{
type:"mc",
q:"မုန့်ဟင်းခါးမှာ အသုံးပြုတဲ့ ခေါက်ဆွဲ (မုန့်ဖတ်) က ဘာနဲ့လုပ်ထားတာလဲ?",
a:[
"ဂျုံ",
"ဆန်",
"ပြောင်း",
"ပဲ"
],
c:1
},


// =========================
// 🧪 GENERAL KNOWLEDGE
// =========================

{
type:"mc",
q:"ရွှေရဲ့ Chemical Symbol က ဘာလဲ?",
a:[
"Ag",
"Go",
"Au",
"Gd"
],
c:2
},

{
type:"mc",
q:"အိုလံပစ်အားကစားပြိုင်ပွဲရဲ့ သင်္ကေတမှာ စက်ဝိုင်းဘယ်နှစ်ခု ပါလဲ?",
a:[
"4",
"5",
"6",
"7"
],
c:1
},

{
type:"mc",
q:"3, 3, 6, 9, 15, 24, 39, ?",
a:[
"54",
"60",
"63",
"66"
],
c:2
},

{
type:"mc",
q:"မြန်မာနိုင်ငံရဲ့ အမျိုးသားအားကစားက ဘာလဲ?",
a:[
"ဘောလုံး",
"ခြင်းလုံး",
"လက်ဝှေ့",
"လှေလှော်"
],
c:1
},

{
type:"mc",
q:"မြန်မာ့ရိုးရာ ဆိုင်းဝိုင်းမှာပါတဲ့ အဓိကတူရိယာတွေထဲက တစ်ခုက ဘာလဲ?",
a:[
"ပတ်ဝိုင်း",
"စောင်း",
"ပလွေ",
"တယော"
],
c:0
},

{
type:"mc",
q:"မြန်မာ့ရိုးရာ ပန်းဆယ်မျိုးထဲမှာ မပါတဲ့တစ်ခုက ဘာလဲ?",
a:[
"ပန်းပု",
"ပန်းချီ",
"ပန်းတိမ်",
"ပန်းရံ"
],
c:2
},


// =========================
// 🎭 ART & CULTURE QUIZ
// =========================

{
type:"mc",
q:"Kabuki ဟာ ဘယ်နိုင်ငံရဲ့ ရိုးရာပြဇာတ်အနုပညာလဲ?",
a:[
"China",
"Japan",
"Korea",
"India"
],
c:1
},

{
type:"mc",
q:"“Swan Lake” ဟာ ဘယ်အနုပညာအမျိုးအစားနဲ့ သက်ဆိုင်သလဲ?",
a:[
"Opera",
"Ballet",
"Theatre",
"Painting"
],
c:1
},

{
type:"mc",
q:"“Guernica” ပန်းချီကားကို ဘယ်သူရေးဆွဲခဲ့သလဲ?",
a:[
"Pablo Picasso",
"Leonardo da Vinci",
"Andy Warhol",
"Rembrandt"
],
c:0
},

{
type:"mc",
q:"“The Persistence of Memory” ပန်းချီကားမှာ ထင်ရှားတဲ့ ပျော့ပျောင်းနေတဲ့ နာရီတွေကို ဘယ်သူရေးဆွဲခဲ့သလဲ?",
a:[
"Picasso",
"Van Gogh",
"Monet",
"Salvador Dalí"
],
c:3
},

{
type:"mc",
q:"Taj Mahal ဟာ ဘယ်နိုင်ငံမှာ တည်ရှိသလဲ?",
a:[
"Nepal",
"Pakistan",
"India",
"Bangladesh"
],
c:2
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
