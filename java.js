var myH1 = document.getElementById("myH");
var nameCustmer = prompt("what is your name");

if(nameCustmer){
    myH1.innerHTML = "Hello " + nameCustmer;
} else if(nameCustmer === "") {
    myH1.innerHTML = "no name";
} else if(nameCustmer === null){
    myH1.innerHTML = "invalid value";
}
console.log(nameCustmer);

