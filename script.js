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

// History
{
type:"mc",
q:"ဒုတိယကမ္ဘာစစ်တုန်းက ဂျာမနီနိုင်ငံရဲ့ခေါင်းဆောင်ကဘယ်သူလဲ။",
a:["Winston Churchill","Joseph Stalin","Adolf Hitler","Franklin D. Roosevelt"],
c:2
},

{
type:"mc",
q:"မြန်မာသက္ကရာဇ် ၁၂၄၇ ခုနှစ်မှာ ဖြစ်ပွားခဲ့ပြီး မြန်မာ့ပဒေသရာဇ်စနစ် ချုပ်ငြိမ်းသွားစေခဲ့တဲ့ သမိုင်းဝင်ဖြစ်ရပ်က ဘာလဲ။",
a:["ပထမအင်္ဂလိပ်-မြန်မာစစ်ပွဲ","ဒုတိယအင်္ဂလိပ်-မြန်မာစစ်ပွဲ","တတိယအင်္ဂလိပ်-မြန်မာစစ်ပွဲ","ပုဂံပျက်စီးမှု"],
c:2
},

{
type:"mc",
q:"ပထမမြန်မာနိုင်ငံတော် အင်ပါယာကို ဘယ်သူတည်ထောင်ခဲ့သလဲ။",
a:["အနော်ရထာ","ဘုရင့်နောင်","အလောင်းဘုရား","မင်းတုန်းမင်း"],
c:0
},

{
type:"mc",
q:"ကုန်းဘောင်မင်းဆက်ကို ဘယ်သူတည်ထောင်ခဲ့သလဲ။",
a:["အနော်ရထာ","ဘုရင့်နောင်","အလောင်းဘုရား","သီပေါမင်း"],
c:2
},

{
type:"mc",
q:"မြန်မာနိုင်ငံ လွတ်လပ်ရေးရခဲ့တဲ့နေ့က ဘယ်နေ့လဲ။",
a:["ဇန်နဝါရီ ၄","ဖေဖော်ဝါရီ ၁၂","မတ်လ ၂၇","ဒီဇင်ဘာ ၂၅"],
c:0
},

// Science
{
type:"mc",
q:"Red Planet လို့ခေါ်တဲ့ ဂြိုဟ်ဟာ ဘာဂြိုဟ်လဲ။",
a:["Venus","Mars","Jupiter","Saturn"],
c:1
},

{
type:"mc",
q:"လူခန္ဓာကိုယ်မှာ အမာဆုံး အစိတ်အပိုင်းက ဘာလဲ။",
a:["ပေါင်ရိုး","ဦးခေါင်းခွံ","သွားကြွေလွှာ","လက်ရိုး"],
c:2
},

{
type:"mc",
q:"ကိုယ်ခံအားတိုးစေတဲ့ Vitamin က ဘယ်ဟာလဲ။",
a:["Vitamin A","Vitamin C","Vitamin D","Vitamin B"],
c:1
},

{
type:"mc",
q:"Lub-dub အသံက ဘယ်အစိတ်အပိုင်းက ထွက်တာလဲ။",
a:["ဦးနှောက်","လည်ချောင်း","နှလုံး","အသည်း"],
c:2
},

// Math
{
type:"mc",
q:"Prime Number ကိုရွေးပါ။",
a:["21","29","35","39"],
c:1
},

{
type:"mc",
q:"a² + b² = c² က ဘာသီအိုရမ်လဲ။",
a:["Binomial","Pythagorean","Quadratic","Algebra"],
c:1
},

{
type:"text",
q:"တြိဂံတစ်ခုမှာ အနား 3,4,5 ဆိုပြီးရှိတယ်။ အဲဒီ တြိဂံက ဘာတြိဂံလဲ။",
answer:"ထောင့်မှန်တြိဂံ"
},

// Geography
{
type:"mc",
q:"ကမ္ဘာပေါ်တွင် လူဦးရေအများဆုံး နိုင်ငံမှာ ဘယ်နိုင်ငံလဲ။",
a:["India","China","USA","Canada"],
c:0
},

{
type:"mc",
q:"မြန်မာနိုင်ငံတွင် အမြင့်ဆုံးတောင်မှာ ဘာတောင်လဲ။",
a:["ဇွဲကပင်","ခါကာဘိုရာဇီ","ပုပ္ပါး","နတ်မတောင်"],
c:1
},

{
type:"mc",
q:"ကမ္ဘာ့အရှည်ဆုံး မြစ်မှာ ဘယ်မြစ်လဲ။",
a:["Amazon","Nile","Yangtze","Mississippi"],
c:1
},

{
type:"mc",
q:"ကမ္ဘာ့အကြီးဆုံး သမုဒ္ဒရာမှာ ဘယ်ဟာလဲ။",
a:["Indian","Atlantic","Pacific","Arctic"],
c:2
},

// Literature
{
type:"mc",
q:"Romeo and Juliet ကို ဘယ်သူရေးခဲ့သလဲ။",
a:["William Shakespeare","Charles Dickens","Mark Twain","Tolstoy"],
c:0
},

// Riddle
{
type:"text",
q:"အဖေနှစ်ယောက် သားနှစ်ယောက်ဆိုပေမယ့် လူသုံးယောက်ပဲရှိတာ ဘာကြောင့်လဲ။",
answer:"အဘိုး အဖေ သား"
},

{
type:"text",
q:"၂၈ ရက်ရှိတဲ့လ ဘယ်နှလရှိသလဲ။",
answer:"12"
},

{
type:"text",
q:"Justin ရဲ့ အဖေမှာ သား ၅ ယောက်ရှိတယ်။ One Two Three Four နဲ့ ... ?",
answer:"Justin"
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

if(index < quiz.length){

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
