# Calculator-Project
Simple calculator developed with HTML, CSS, JavaScript

// HTML 
1. Normal structured html file containing only outer div having:
- containing calculator's display(dark green).
- containing button div having numerous buttons and arranged row wise.

// CSS
1. Outer div's display set to flex.
- arranged flex-direction as row(for row wise alignment of buttons).
2. Calculator display designed to avoid overflow of contents by text wrapping.
- Color setting and size alignment.
- Contents of display aligned to right side.
3. Buttons set with color, uniquely for "0" button and same for other button to replicate real-life calculator.
4. Hover effect created for all buttons to show effects like box-shadow, radial-gradient coloring.
5. On click setting button shadow to none for clicking effect.

//JavaScript
1. Extracting content through:
- getElementById
- querySelectorAll
2. Creating variable like operands and operator.
3. EventListener added on click of buttons.
4. Calculation is done through built in function "eval(operand1 + " " +operator+ " " + operand2)".
5. Evaluation is done using if else statements of different operators(can be improved to switch statements).
6. On click of AC button to clear content of display.