let calc = document.getElementById('calc');
let operator = document.getElementById('opt').options;
let result = document.querySelector('span');
var ans;

calc.addEventListener('click', function() {
  let num1 = Number(document.getElementById('inputA').value);
  let num2 = Number(document.getElementById('inputB').value);

  if (operator.selectedIndex === 0){
    ans = num1 + num2;
    alert(ans)
    // result.innerHTML = ans;
  }

  else if (operator.selectedIndex === 1){
    ans = num1 - num2;
    alert(ans)
    // result.innerHTML = ans;
  }

  else if (operator.selectedIndex === 2){
    ans = num1 * num2;
    alert(ans)
    // result.innerHTML = ans;
  }

  else if (operator.selectedIndex === 3){
    ans = num1 / num2;
    alert(ans)
    // result.innerHTML = ans;
  }
  
})