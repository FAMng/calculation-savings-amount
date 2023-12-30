export function setupCounter() {
  document.getElementById('calculationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const sumValue = document.getElementById('sum').value.replace('.', '');
    const dateValue = document.getElementById('date').value;

    const selectedDate = new Date(dateValue);
    const currentDate = new Date();

    const differenceInMilliseconds = selectedDate - currentDate;
    const differenceInDays =  Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    function calculation (){
      let result = Math.floor(sumValue / differenceInDays);
      return result;
    }

    calculation();

    const valueDateElement = document.getElementById('valueDate');
    const valueSumElement = document.getElementById('valueSum');

    

    valueDateElement.textContent = `Колличество дней: ${differenceInDays}`;
    valueSumElement.textContent = `Сумма в месяц: ${calculation()}`;
    // const wrapper = document.querySelector('.calculate_wrapper');
    // wrapper.style.opacity = '1';
  });
}
