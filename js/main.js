'use strict';

// 1. The script will ask for the passenger's age bracket and the length of their journey through input forms and it will save the data as variables
// 2. On click of the "Genera" button the rest of the script will be executed

document.getElementById('submit-btn').addEventListener('click', function(event) {
    const passengerName = document.getElementById('passenger-name').value;
    const journeyLength = document.getElementById('journey-length').value;
    const passengerAge = document.getElementById('age-bracket').value;

    // 3. The journey length string will be converted to a number using parseFloat()
    // 4. The base price will be calculated by multiplying the length of the journey in kms times 0.21

    const pricePerKm = 0.21;
    const basePrice = parseFloat(journeyLength) * pricePerKm;

    // 5. We'll introduce conditional discounts for passengers that are minors or over 65s

    let discountedPrice = basePrice;
    const discountPercentageMinors = 20;
    const discountPercentageElderly = 40;

    if (passengerAge === 'minor') {
        discountedPrice = basePrice - ((basePrice / 100) * discountPercentageMinors);
    } else if (passengerAge === 'elderly') {
        discountedPrice = basePrice - ((basePrice / 100) * discountPercentageElderly);
    }

    // 6. We'll limit the result to two decimal places by using toFixed(2)

    const finalPrice = discountedPrice.toFixed(2);

    // 7. We'll use Number.isFinite() to check whether our final result is a finite number (excluding Infinity, -Infinity, and NaN)
    // 8. If so, we are going to output the final price into the console

    console.log(`Name: ${passengerName}`);
    console.log(`Journey length: ${journeyLength}km`);
    console.log(`Age bracket: ${passengerAge}`);

    if (Number.isFinite(discountedPrice)) {
        console.log(`The final price is ${finalPrice}€`);
    } else {
        console.log('The script encountered an error. Please reload the page.');
    }

    event.preventDefault();
});



/*

    document.getElementById('price').innerHTML = `${finalPrice}€`;
    document.getElementById('price').innerHTML = 'Si è verificato un errore, riprova';


*/