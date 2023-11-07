# Train Ticket Price Calculator (Form)

This is a simple calculator that will output the price of a train ticket on the basis of the length of the journey (0.21€ per km) and the passenger's age (minors get a 20% discount, over 65s get a 40% discount). The data is inserted through input forms.

Milestone 1:

1. The script will ask for the passenger's age bracket and the length of their journey through input forms and it will save the data as variables
2. On click of the "Genera" button the rest of the script will be executed
3. The journey length string will be converted to a number using parseFloat()
4. The base price will be calculated by multiplying the length of the journey in kms times 0.21
5. We'll introduce conditional discounts for passengers that are minors or over 65s
6. We'll limit the result to two decimal places by using toFixed(2)
7. We'll use Number.isFinite() to check whether our final result is a finite number (excluding Infinity, -Infinity, and NaN)
8. If so, we are going to output the final price into the console

Milestone 2:

1. We'll add a visual output with a recap of the inserted data and the final price
2. We'll add an "Annulla" button that will hide the output (if present) and empty the input fields