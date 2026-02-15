function addNumbers(a, b) {
    // Check for null or undefined values
    if (a === null || a === undefined || b === null || b === undefined) {
        throw new Error('Input values cannot be null or undefined');
    }

    // Check if both inputs are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both inputs must be numbers. Received: ' + typeof a + ' and ' + typeof b);
    }

    // Check for NaN values
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Input values cannot be NaN');
    }

    return a + b;
}

module.exports = addNumbers;