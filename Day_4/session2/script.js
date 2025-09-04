function populateDiv() {
    // alert("Hello World");

    const input1 = document.getElementById("input-num1").value;
    const input2 = document.getElementById("input-num2").value;
    const result = document.getElementById("result");

    const sum = parseInt(input1) + parseInt(input2);

    result.textContent = `Sum is: ${sum}`;
}
function resetFields(){
    document.getElementById("input-num1").value = "";
    document.getElementById("input-num2").value = "";
    document.getElementById("result").textContent = "";

}