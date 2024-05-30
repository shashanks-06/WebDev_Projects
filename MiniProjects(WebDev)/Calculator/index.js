// Get reference to the display element
const display = document.querySelector(".display");

// Add event listener to all buttons
document.querySelectorAll(".buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent; // Get the text content of the clicked button

    // Update the display content based on the button clicked
    if (display.textContent === "0") {
      display.textContent = buttonText; // Replace "0" with the clicked button text
    } else {
      display.textContent += buttonText; // Append the clicked button's text to the display
    }
  });
});

// Function to evaluate the expression and display the result
function calculate(expression) {
  const trimmedExpression = expression.trim();
  if (trimmedExpression === "=") {
    // If the expression is just "=", return the current display value
    return parseFloat(display.textContent);
  } else if (/^[+-]?\d*\.?\d+$/.test(trimmedExpression)) {
    // If the expression consists of only a number, return that number
    return parseFloat(trimmedExpression);
  }

  const tokens = trimmedExpression.match(/\d+(\.\d+)?|[-+*/]/g);
  const stack = [];
  let operator = null;

  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseFloat(token));
    } else if (["+", "-", "*", "/"].includes(token)) {
      operator = token;
    }

    if (operator && stack.length >= 2) {
      const b = stack.pop();
      const a = stack.pop();

      switch (operator) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
        default:
          throw new Error(`Invalid operator: ${token}`);
      }
      operator = null;
    }
  }

  if (stack.length !== 1) {
    throw new Error("Invalid Expression");
  }

  return stack[0];
}

//Function to clear one character from the display
function clearOneCharacter() {
  const currentText = display.innerText;

  display.innerText = currentText.slice(0, -1);
}

// Clear the display
function clearDisplay() {
  display.textContent = "";
}

// Add event listeners for operators and special functions
document.querySelector(".equalsto").addEventListener("click", () => {
  try {
    const expression = display.textContent.trim();

    // Do nothing if the display is empty OR Check if there's no operator and the display contains only a number
    if (/^[+-]?\d*\.?\d+$/.test(expression)) {
      return;
    }

    const result = calculate(expression);
    display.textContent = result;
  } catch (error) {
    console.error(error);
    display.textContent = "Error";
  }
});

document
  .querySelector(".backspace")
  .addEventListener("click", clearOneCharacter);

document.querySelector(".all-clear").addEventListener("click", clearDisplay);
