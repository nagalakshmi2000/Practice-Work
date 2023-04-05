let inputValue = document.querySelector("input").value;
let addClass=document.querySelector(".addBtn")
addClass.addEventListener("click",AddClass1)
function AddClass1() {
    var data = document.getElementById("main-div");
    let value = document.getElementById("input").value;
    if (value.trim() !== "") {
        data.classList.add(value);
    }
    else {
        alert("please enter class name");
    }
    data.classList.add("color-red");
}
let removeClass=document.querySelector(".removeBtn")
removeClass.addEventListener("click",removeClass1)
function removeClass1() {
    let value = document.getElementById("input").value;

    var data = document.getElementById("main-div");
    data.classList.remove(value);
    data.classList.remove("color-red");
    document.querySelector("button").style.marginTop = "2em";
    document.querySelector("#input").style.marginTop = "3em";
}

// Using jQuery
$(document).ready(function () {
    $("#add-btn").click(function () {
        $("#data").addClass($("#inputName").val());
    })
    $("#remove-btn").click(function () {
        $("#data").removeClass($("#inputName").val());
    })
})
