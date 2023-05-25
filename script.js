const btn = document.querySelector('#btn');
const price = document.querySelector('#price');
const height = document.querySelector('#height');
const width = document.querySelector('#width');
const form = document.querySelector('#form');
const cost = 0.5;
function getSum() {
  if (height.value != '' && width.value != '') {
    let sum = height.value * width.value * cost;
    if (isNaN(sum)) {
      alert('Введите числовое значение');
    } else {
      price.innerHTML = sum;
    }
  } else {
    alert('Введите высоту и ширину');
  }
}
btn.addEventListener('click', getSum);

form.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    getSum();
  }
});
