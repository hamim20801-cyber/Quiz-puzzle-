let category = localStorage.getItem("category")

let quizData = {

history:[

{
type:"mc",
q:"ပုဂံကို တည်ထောင်သူ ဘယ်သူလဲ?",
a:["အနော်ရထာ","အလောင်းဘုရား","ဘုရင့်နောင်","သီပေါ"],
c:0
},

{
type:"mc",
q:"မြန်မာနိုင်ငံ လွတ်လပ်ရေးရခဲ့တဲ့နှစ်?",
a:["1945","1946","1947","1948"],
c:3
},

{
type:"mc",
q:"ဘုရင့်နောင် ဘယ်ခေတ်က ဘုရင်လဲ?",
a:["ပုဂံ","တောင်ငူ","ကုန်းဘောင်","အင်းဝ"],
c:1
}

],

english:[

{
type:"mc",
q:"She ____ to school everyday.",
a:["go","goes","going","gone"],
c:1
},

{
type:"mc",
q:"Past tense of eat?",
a:["eat","ate","eated","eating"],
c:1
},

{
type:"mc",
q:"He ____ playing football.",
a:["like","likes","liking","liked"],
c:1
}

],

math:[

{
type:"mc",
q:"5 × 5 = ?",
a:["10","15","25","30"],
c:2
},

{
type:"mc",
q:"10 + 20 = ?",
a:["20","30","40","50"],
c:1
},

{
type:"mc",
q:"12 ÷ 3 = ?",
a:["2","3","4","6"],
c:2
}

],

yfssu:[

{
type:"mc",
q:"သွေးတိုးရောဂါကို ဆေးပညာအခေါ်အဝေါ်ဖြင့် ခေါ်ဆိုရာတွင် -",
a:["Hypotension","Hypertension","Hyperglycemia"],
c:1
},

{
type:"mc",
q:"ဒေါ်အောင်ဆန်းစုကြည် ရရှိခဲ့သော နိုဘယ်လ်ဆုအမျိုးအစားမှာ -",
a:["Literature","Science","Peace"],
c:2
},

{
type:"mc",
q:"Harry Potter စာအုပ်စီးရီးအား ရေးသားခဲ့သူမှာ -",
a:["J.K Rowling","George Orwell","Jane Austen"],
c:0
},

{
type:"mc",
q:"Mona Lisa ပန်းချီကားကို ရေးဆွဲခဲ့သူမှာ -",
a:["Claude Monet","Michelangelo","Leonardo da Vinci"],
c:2
},

{
type:"mc",
q:"National Animal of Myanmar -",
a:["ဒေါင်း","ဆင်","ခြင်္သေ့"],
c:0
},

{
type:"mc",
q:"ကမ္ဘာ့အကြီးဆုံး စာကြည့်တိုက်တည်ရှိရာနိုင်ငံမှာ -",
a:["China","Korea","USA"],
c:2
},

{
type:"text",
q:"မြန်မာနိုင်ငံ လွတ်လပ်ရေးရခဲ့သည့်နှစ်ကိုရေးပါ",
answer:"1948"
},

{
type:"mc",
q:"Titanic သင်္ဘောကြီး စတင်ထွက်ခွာခဲ့သည့် နိုင်ငံမှာ -",
a:["အင်္ဂလန်","ပြင်သစ်","အမေရိကန်"],
c:0
},

{
type:"mc",
q:"မြန်မာနိုင်ငံ၏ ပထမဆုံးသော သမ္မတမှာ -",
a:["ဗိုလ်ချုပ်အောင်ဆန်း","စဝ်ရွှေသိုက်","ဦးနု"],
c:1
}

]

}

let quiz = quizData[category]

quiz = quiz.sort(()=>Math.random()-0.5)

let index = 0
let score = 0

let time = 15

function load(){

time = 15

let q = quiz[index]

document.getElementById("question").innerHTML = q.q

if(q.type=="mc"){

document.getElementById("choices").style.display="block"
document.getElementById("textAnswer").style.display="none"

document.getElementById("a").innerHTML=q.a[0]
document.getElementById("b").innerHTML=q.a[1]
document.getElementById("c").innerHTML=q.a[2]
document.getElementById("d").innerHTML=q.a[3]

}else{

document.getElementById("choices").style.display="none"
document.getElementById("textAnswer").style.display="block"

}

}

function checkChoice(i){

if(i==quiz[index].c){
score++
}

next()

}

function submitAnswer(){

let userAnswer =
document.getElementById("answerInput").value

let correct =
quiz[index].answer

if(userAnswer.toLowerCase()==correct.toLowerCase()){
score++
}

next()

}

function next(){

index++

document.getElementById("answerInput").value=""

if(index<quiz.length){

load()

}else{

localStorage.setItem("score",score)

location.href="result.html"

}

}

setInterval(()=>{

time--

document.getElementById("timer").innerHTML =
"Time: "+time

if(time==0){
next()
}

},1000)

load()

function generateRandomMath(){

let a = Math.floor(Math.random()*20)
let b = Math.floor(Math.random()*20)

let answer = a + b

return {
q: a + " + " + b + " = ?",
a:[
answer-1,
answer,
answer+1,
answer+2
],
c:1
}

}
