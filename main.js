import './style.css'
import viteLogo from '/logo.svg'
import { setupCounter } from './counter.js'
import 'boxicons'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
    <h2 class="head-title">Расчитать сумму</h2>
      <form action="" class="form" method="get" id="calculationForm">
        <input type="text" id="sum" class="from_input mask-money" placeholder="0">
        <input type="date" name="date" id="date" class="from_input">
        <button type="submit" id="sumbit" class="form_btn">Расчитать</button>
      </form>
      <div class="calculate_wrapper">
        <p id="valueDate" class="calculate_item">Колличество дней:</p>
        <p id="valueSum" class="calculate_item">Сумма в месяц:</p>
      </div>
   </div>
`

setupCounter();

$('.mask-money').mask('000.000.000.000.000', {
  reverse: true
});

