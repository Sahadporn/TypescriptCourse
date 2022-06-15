var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var result = document.getElementById("sum");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    var res = add(+input1.value, +input2.value);
    console.log(res);
    result.innerHTML = res.toString();
});
