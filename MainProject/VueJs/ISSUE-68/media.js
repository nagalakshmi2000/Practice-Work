let inputvalue = document.querySelector('input').value;
function Addclass1() {
  var data = document.getElementById('main-div');
  let val = document.getElementById('input').value;
  if (val.trim() !== '') {
    data.classList.add(val);
  } else {
    alert('please enter class name');
  }
  data.classList.add('color-red');
}
function removeclass1() {
  let val = document.getElementById('input').value;

  var data = document.getElementById('main-div');
  data.classList.remove(val);
  data.classList.remove('color-red');
  document.querySelector('button').style.marginTop = '2em';
  document.querySelector('#input').style.marginTop = '3em';
}

// Using jQuery
$(document).ready(function () {
  $('#addbtn').click(function () {
    $('#data').addClass($('#inputName').val());
  });
  $('#removebtn').click(function () {
    $('#data').removeClass($('#inputName').val());
  });
});
