function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const input = document.getElementById('display').value;
        let result;
        if (input.includes('%')) {
            // Modulus calculation
            const values = input.split('%');
            if (values.length === 2) {
                result = parseFloat(values[0]) % parseFloat(values[1]);
            } else {
                throw new Error('Invalid input');
            }
        } else {
            // Regular calculation
            result = eval(input);
        }
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}