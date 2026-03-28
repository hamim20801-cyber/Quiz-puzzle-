let category = localStorage.getItem("category")

let quizData = {

history:[

{
q:"ပုဂံကို တည်ထောင်သူ ဘယ်သူလဲ?",
a:["အနော်ရထာ","အလောင်းဘုရား","ဘုရင့်နောင်","သီပေါ"],
c:0
},

{
q:"မြန်မာနိုင်ငံ လွတ်လပ်ရေးရခဲ့တဲ့နှစ်?",
a:["1945","1946","1947","1948"],
c:3
},

{
q:"ဘုရင့်နောင် ဘယ်ခေတ်က ဘုရင်လဲ?",
a:["ပုဂံ","တောင်ငူ","ကုန်းဘောင်","အင်းဝ"],
c:1
}

],

english:[

{
q:"She ____ to school everyday.",
a:["go","goes","going","gone"],
c:1
},

{
q:"Past tense of eat?",
a:["eat","ate","eated","eating"],
c:1
},

{
q:"He ____ playing football.",
a:["like","likes","liking","liked"],
c:1
}

],

math:[

{
q:"5 × 5 = ?",
a:["10","15","25","30"],
c:2
},

{
q:"10 + 20 = ?",
a:["20","30","40","50"],
c:1
},

{
q:"12 ÷ 3 = ?",
a:["2","3","4","6"],
c:2
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

document.getElementById("question").innerHTML =
quiz[index].q

document.getElementById("a").innerHTML =
quiz[index].a[0]

document.getElementById("b").innerHTML =
quiz[index].a[1]

document.getElementById("c").innerHTML =
quiz[index].a[2]

document.getElementById("d").innerHTML =
quiz[index].a[3]

}

function check(i){

if(i == quiz[index].c){

score++

}

next()

}

function next(){

index++

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

if(time == 0){

next()

}

},1000)

load()
