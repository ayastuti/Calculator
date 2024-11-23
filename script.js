const resultField = document.getElementById('result');

function appendValue(value) {
  resultField.value += value;
}

function clearResult() {
  resultField.value = '';
}

function calculate() {
  try {
    resultField.value = eval(resultField.value);
  } catch {
    alert('Invalid input!');
    clearResult();
  }
}