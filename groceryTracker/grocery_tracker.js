function calculateTotal() {
    //Get the values from the input boxes
    let grocery1 = parseFloat(document.getElementById(`grocery1`).value) || 0;
    let grocery2 = parseFloat(document.getElementById(`grocery2`).value) || 0;
    let grocery3 = parseFloat(document.getElementById(`grocery3`).value) || 0;

    //calculate the total amount
    let totalAmount = grocery1 + grocery2 + grocery3;

    //Display  the total amount
    document.getElementById(`totalAmount`).textContent = totalAmount.toFixed(2);
}