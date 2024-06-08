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
        clr = "yellow";
    } else {
        s2.style.backgroundColor = "green";
        clr = "green";
    }
});
s2.addEventListener("mouseleave", function() {
    s2.style.backgroundColor = "white";
});














var s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter", function() {
    var r = Math.floor(Math.random() * 100000);
    s3.innerHTML = `<h1>${r}</h1>`;
});
s3.addEventListener("mouseleave", function() {
    s3.innerHTML = "<h1>1</h1>";
});

