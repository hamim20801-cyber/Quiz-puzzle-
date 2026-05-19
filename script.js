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

// International Universities Quiz

{
type:"mc",
q:"University of Oxford ကို မည်သည့် ရာစုနှစ်တွင် စတင်တည်ထောင်ခဲ့သည်ဟု ယူဆရသနည်း။",
a:["8th century","11th century","15th century","18th century"],
c:1
},

{
type:"mc",
q:"Massachusetts Institute of Technology ၏ အတိုကောက်အမည်မှာ မည်သည့်အရာဖြစ်သနည်း။",
a:["MST","MTech","MIT","MTU"],
c:2
},

{
type:"mc",
q:"Ivy League universities group သည် မည်သည့်နိုင်ငံတွင်တည်ရှိသနည်း?",
a:["Canada","Australia","United Kingdom","United States"],
c:3
},

{
type:"mc",
q:"Stanford University သည် မည်သည့် technology area နှင့် နီးကပ်စွာတည်ရှိသနည်း။",
a:["Hollywood","Silicon Valley","Wall Street","Times Square"],
c:1
},

{
type:"mc",
q:"University of Cambridge တွင် ပညာသင်ကြားခဲ့သော scientist တစ်ဦးမှာ မည်သူဖြစ်သနည်း?",
a:["Isaac Newton","Albert Einstein","Nikola Tesla","Thomas Edison"],
c:0
},

// မြန်မာ့သမိုင်း

{
type:"mc",
q:"ပထမ အင်္ဂလိပ်-မြန်မာ စစ်ပွဲစတင်သောနှစ်မှာ?",
a:["1824","1885","1942","1752"],
c:0
},

{
type:"mc",
q:"မြန်မာဘုရင်များ၏ နောက်ဆုံးမြို့တော်မှာ ဘယ်မြို့လဲ?",
a:["ပုဂံ","အင်းဝ","မန္တလေး","တောင်ငူ"],
c:2
},

{
type:"mc",
q:"အနော်ရထာမင်းလက်ထက်တွင် ထေရဝါဒဗုဒ္ဓဘာသာကို အဓိက ဖြန့်ချိပေးခဲ့သူ?",
a:["ရှင်အရဟံ","ရှင်ဥတ္တမ","ရှင်မဟာသီလဝံသ","ရှင်နာဂသိန်"],
c:0
},

{
type:"mc",
q:"အနော်ရထာမင်း တည်ဆောက်ခဲ့သော နာမည်ကျော် စေတီမှာ?",
a:["ရွှေတိဂုံ","အာနန္ဒာဘုရား","ရွှေဆံတော်","ရွှေစည်းခုံ"],
c:3
},

{
type:"mc",
q:"အနော်ရထာမင်းသည် မြန်မာနိုင်ငံသမိုင်းတွင် မည်သို့သောသူမျိုးဖြစ်သနည်း?",
a:["ပထမဆုံး အင်္ဂလိပ်စာသင်ပေးသူ","မြန်မာနိုင်ငံကို စည်းလုံးအောင် ပြုလုပ်နိုင်သူ","ပင်လယ်ရေကြောင်း ဖွင့်လှစ်သူ","ကုန်သွယ်ရေးသာ တိုးတက်စေသူ"],
c:1
},

{
type:"mc",
q:"ပုဂံပြည်ထီးနန်းကို ကျန်စစ်သားမင်းမတိုင်ခင် ဆက်ခံခဲ့သူမှာ?",
a:["ဘုရင့်နောင်","အနော်ရထာ","စောလူးမင်း","နရပတိစည်သူ"],
c:2
},

{
type:"mc",
q:"တပင်ရွှေထီး၏ အယုံကြည်ရဆုံး စစ်သူကြီးမှာ?",
a:["မဟာဗန္ဓုလ","ဘုရင့်နောင်","ကျန်စစ်သား","အနော်ရထာ"],
c:1
},

{
type:"mc",
q:"တောင်ငူမင်းဆက်ကို စတင်တည်ထောင်သူ?",
a:["တပင်ရွှေထီး","ဘုရင့်နောင်","နဒ္ဒဘုရင်","မင်းကြီးညို"],
c:3
},

// ကမ္ဘာ့သမိုင်း

{
type:"mc",
q:"1805 ခုနှစ်တွင် Italy ၏ ဘုရင်အဖြစ် ကြေညာခံခဲ့ရသူ?",
a:["Alexander the Great","Julius Caesar","Napoleon Bonaparte","Louis XIV"],
c:2
},

{
type:"mc",
q:"World War II စတင်ခဲ့သောနှစ်?",
a:["1914","1939","1945","1960"],
c:1
},

{
type:"mc",
q:"လူသားများ ပထမဆုံး လပေါ်ဆင်းသက်နိုင်ခဲ့သော mission မှာ?",
a:["Apollo 13","Apollo 7","Apollo 11","Voyager 1"],
c:2
},

{
type:"mc",
q:"Napoleon Bonaparte သည် ဘယ်နိုင်ငံရဲ့ ဧကရာဇ်ဖြစ်ခဲ့လဲ?",
a:["Italy","Germany","French","Spain"],
c:2
},

{
type:"mc",
q:"ရှေးအီဂျစ် ယဉ်ကျေးမှု သည် ဘယ်မြစ်အနီးတွင် ဖွံ့ဖြိုးခဲ့သနည်း?",
a:["Amazon River","Nile River","Yangtze River","Mississippi River"],
c:1
},

{
type:"mc",
q:"Christopher Columbus နာမည်ကြီးရတဲ့အကြောင်း?",
a:["ဖုန်းတီထွင်ခဲ့လို့","အမေရိကတိုက်သို့ ခရီးရောက်ခဲ့လို့","လျှပ်စစ်တီထွင်ခဲ့လို့","ကားတီထွင်ခဲ့လို့"],
c:1
},

{
type:"mc",
q:"1885 ခုနှစ်တွင် ပထမဆုံး practical automobile ကို တီထွင်ခဲ့သူ?",
a:["Nikola Tesla","Henry Ford","Thomas Edison","Karl Benz"],
c:3
},

{
type:"mc",
q:"World War I စတင်ခဲ့သောနှစ်?",
a:["1914","1939","1945","1900"],
c:0
},

{
type:"mc",
q:"တရုတ်သမိုင်းတွင် ပထမဆုံး တရုတ်ဧကရာဇ်?",
a:["Kublai Khan","Qin Shi Huang","Sun Yat-sen","Emperor Taizong"],
c:1
},

{
type:"mc",
q:"တရုတ်မဟာတံတိုင်း စတင်တည်ဆောက်ခဲ့သောနှစ်?",
a:["476 BC","221 BC","1492 AD","1945 AD"],
c:1
},

// နိုင်ငံရေး

{
type:"mc",
q:"ဦးသန့်သည် မည်သည့်အဖွဲ့အစည်း၏ အထွေထွေအတွင်းရေးမှူးဖြစ်ခဲ့သနည်း?",
a:["ASEAN","UNESCO","United Nations","World Bank"],
c:2
},

{
type:"mc",
q:"1988 လူထုလှုပ်ရှားမှုကို ပိုမိုကြီးထွားစေခဲ့သော ဖြစ်စဉ်?",
a:["အာဏာသိမ်းမှုကြေညာခြင်း","ဖုန်းမော် အရေးအခင်း","ရွေးကောက်ပွဲကျင်းပခြင်း","စီးပွားရေးပိတ်ဆို့မှု"],
c:1
},

{
type:"mc",
q:"French Revolution သည် ဘယ်နိုင်ငံတွင် ဖြစ်ပွားခဲ့သနည်း?",
a:["England","China","Russia","France"],
c:3
},

{
type:"mc",
q:"ဦးသန့်အရေးအခင်းဖြစ်ပွားခဲ့သောခုနှစ်?",
a:["1972","1974","1976","1980"],
c:1
},

{
type:"mc",
q:"U Thant Island ဟု နာမည်ပေးထားသော ကျွန်းငယ်မှာ?",
a:["Liberty Island","Roosevelt Island","Belmont Island","Ellis Island"],
c:2
},

{
type:"mc",
q:"ဦးသန့်၏ ခေါင်းတလားကို ကြိုဆိုခဲ့သောကြောင့် ရာထူးမှ အနားပေးခံခဲ့ရသူ?",
a:["ဦးနု","ဦးသိန်းဖေမြင့်","ဦးနေဝင်း","ဦးအောင်ထွန်း"],
c:3
},

{
type:"mc",
q:"United Nations ကို စတင်တည်ထောင်ခဲ့သောခုနှစ်?",
a:["1919","1945","1955","1961"],
c:1
},

{
type:"mc",
q:"အမေရိကန်ပြည်ထောင်စု၏ ပထမဆုံး သမ္မတမှာ?",
a:["Abraham Lincoln","Thomas Jefferson","George Washington","John Adams"],
c:2
}

]

}

let quiz = quizData[category]

quiz = quiz.sort(()=>Math.random()-0.5)

let index = 0
let score = 0
let time = 15
let timer

function load(){

time = 15

let q = quiz[index]

document.getElementById("question").innerHTML = q.q

if(q.type=="mc"){

document.getElementById("choices").style.display="block"
document.getElementById("textAnswer").style.display="none"

document.getElementById("a").innerHTML = q.a[0]
document.getElementById("b").innerHTML = q.a[1]
document.getElementById("c").innerHTML = q.a[2]
document.getElementById("d").innerHTML = q.a[3]

}else{

document.getElementById("choices").style.display="none"
document.getElementById("textAnswer").style.display="block"

}

}

function checkChoice(i){

if(i == quiz[index].c){
score++
}

next()

}

function submitAnswer(){

let userAnswer =
document.getElementById("answerInput").value.trim()

let correct =
quiz[index].answer

if(userAnswer.toLowerCase() ==
correct.toLowerCase()){
score++
}

next()

}

function next(){

index++

document.getElementById("answerInput").value = ""

if(index < quiz.length){

load()

}else{

localStorage.setItem("score",score)
localStorage.setItem("total",quiz.length)

location.href = "result.html"

}

}

timer = setInterval(()=>{

time--

document.getElementById("timer").innerHTML =
"⏰ Time Left : " + time

if(time <= 0){
next()
}

},1000)

load()
```
