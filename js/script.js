document.querySelector('.ball').addEventListener('click', (e)=>{
  e.target.classList.toggle('ball-move');
  document.body.classList.toggle('dark');
});

function writeNumber(elementId) {
  var outputValueTo = document.getElementById('result-display');

  if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
    outputValueTo.value = elementId.textContent;
  } else {

    outputValueTo.value += elementId.textContent;
  }
}

function cleartxt() {
  document.getElementById('result-display').value = '0';
  document.getElementById('dec').disabled = false;
}

function setOperator(elementId) {
  var outputValueTo = document.getElementById('result-display');
  if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
    outputValueTo.value = '0';
  } else {
    outputValueTo.value += elementId.value;
    document.getElementById('dec').disabled = false;
  }
}

function setDecimal(elementId, status) {
  var outputValueTo = document.getElementById('result-display');
  outputValueTo.value += elementId.textContent;
  document.getElementById('dec').disabled = status;
}

function calculate() {

  try {

    var field1txt = document.getElementById('result-display');
    if (field1txt.value != '') {
      var calculateResult = eval(field1txt.value);
      field1txt.value = calculateResult;
    }
  } catch (err) {
    field1txt.value = 'Syntax error';

  }

}

function removeLastNumber() {

  var field1txt = document.getElementById('result-display');

  if (field1txt.value.length == 1 || field1txt.value == '0' || field1txt.value == 'Syntax error') {
    field1txt.value = '0';
    document.getElementById('dec').disabled = false;
  } else {
    field1txt.value = field1txt.value.substring(0, field1txt.value.length - 1);
  }
}