const palindromes = function(input) {
    let remove = /[\W_]/g;
    let lowCase = input.toLowerCase().replace(remove, '');
    let reverse = lowCase.split('').reverse().join('');


    return reverse === lowCase;
}

module.exports = palindromes
