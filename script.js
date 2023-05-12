const btn = document.querySelector('#btn');
const price = document.querySelector('#price');
const height = document.querySelector('#height');
const width = document.querySelector('#width');
  pr = 0.5;
btn.addEventListener('click', function() {
  if (height.value != '' && width.value != '') {
    let sum = height.value * width.value * pr;
    if (isNaN(sum)) {
      alert('Введите числовое значение');
    } else {
      price.innerHTML = sum;
    }
  } else {
  alert('Введите высоту и ширину');
  }
});
