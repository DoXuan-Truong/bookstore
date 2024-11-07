// document.querySelector('.demo').innerHTML = "Đoạn demo"
// /*
// function test() {
//     document.querySelector('.demo2').innerHTML = "Hello Demo2"
//     document.querySelector('.demo3').innerHTML = "Hello Demo3"
// }
// test()
// */
// document.querySelector(".myButton").onclick = function () {
//   var username = (document.querySelector(".myInput").value);
//   document.querySelector(".myH1").innerHTML = `Hello ${username}`;
// };
var countLable = document.querySelector(".countLable")
var count = 0;

var btnDecrease = document.querySelector(".btnDecrease").onclick = function () {
    count--;
    countLable.innerHTML = count;
};
var btnReset = document.querySelector(".btnReset").onclick = function () {
    count = 0;
    countLable.innerHTML = count;
};
var btnIncrease = document.querySelector(".btnIncrease").onclick = function () {
    count++;
    countLable.innerHTML = count;
};
var max = 100, min = 50;
var rondomNumber = Math.floor(Math.random() * max);
console.log(rondomNumber);
