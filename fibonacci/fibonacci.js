const fibonacci = (input) => {
    if (input < 0) return "oh shit"
    let a = 0;
    let b = 1;
    for (let i = 1; 1 < input; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

module.exports = fibonacci
