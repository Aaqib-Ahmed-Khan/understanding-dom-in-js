var s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter", function() {
    var r = Math.floor(Math.random() * 100000);
    s1.innerHTML = `<h1>${r}</h1>`;
});
s1.addEventListener("mouseleave", function() {
    s1.innerHTML = "<h1>1</h1>";
});

var s2 = document.getElementById("sq2");
var clr = "red";
s2.addEventListener("mouseenter", function() {
    if (clr == "green") {
        s2.style.backgroundColor = "yellow";
        clr = "red";
    } else if (clr == "red") {
        s2.style.backgroundColor = "red";
        clr = "blue";
    } else {
        s2.style.backgroundColor = "blue";
        clr = "green";
    }
});
s2.addEventListener("mouseleave", function() {
    s2.style.backgroundColor = "white";
});

var s3 = document.getElementById("sq3");
var s4 = document.getElementById("sq4");
s4.addEventListener("click", function() {
    s1.style.backgroundColor = "red";
    s2.style.backgroundColor = "blue";
    s3.style.backgroundColor = "green"; 
});
s4.addEventListener("mouseleave", function() {
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white"; 
});
