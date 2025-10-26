// Functions for Assignment 1 - Adding Two Numbers

function addNumbers() {
    // Get the input values
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    
    // Check if inputs are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        alert('Please enter valid numbers!');
        return;
    }
    
    // Perform calculations
    const sum = number1 + number2;
    const difference = number1 - number2;
    const product = number1 * number2;
    const quotient = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
    const remainder = number2 !== 0 ? number1 % number2 : 'Cannot divide by zero';
    
    // Display results
    document.getElementById('result1').innerHTML = `Sum: ${number1} + ${number2} = ${sum}`;
    document.getElementById('result2').innerHTML = `Difference: ${number1} - ${number2} = ${difference}`;
    document.getElementById('result3').innerHTML = `Product: ${number1} × ${number2} = ${product}`;
    document.getElementById('result4').innerHTML = `Quotient: ${number1} ÷ ${number2} = ${quotient}`;
    document.getElementById('result5').innerHTML = `Remainder: ${number1} % ${number2} = ${remainder}`;
}
