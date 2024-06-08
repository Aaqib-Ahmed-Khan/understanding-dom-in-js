// let a=6;
// console.log(a*a);
// let x= document.querySelector("h1");
// console.log(x);
// x.style.color="red";
// x.style.fontFamily="gill sans";
var h1= document.getElementById("ele1");
h1.addEventListener("click",function(){
h1.innerHTML="ahmed";
h1.style.color="green";
},3000
)
var h2=document.getElementById("ele2");
h2.addEventListener("mousemove",function()  {
    h2.innerHTML="im fine";
    h2.style.color="blue";

    
},4000 );
var h3=document.getElementById("ele3");
h2.addEventListener("click",function(){
    h3.innerhtml="ok shi";
    h3.style.color="purple";
});