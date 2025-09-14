let display = document.getElementById('display');
  let buttons = document.querySelectorAll('button');
  let current = "";
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      let value = button.innerText;
  
      if (value === "AC") {
        current = "";
        display.value = "";
      } else if (value === "=") {
        try {
          display.value = eval(current);
          current = display.value;
        } catch {
          display.value = "Error";
          current = "";
        }
      } else if (value === "x²") {
        current = eval(current) ** 2;
        display.value = current;
      } else {
        current += value;
        display.value = current;
      }
    });
  });