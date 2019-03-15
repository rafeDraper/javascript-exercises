const snakeCase =  (input) =>  {
    input = input.replace(/\.\./g, " ")

    if (input.indexOf(" ") < 0) {
        input = input.replace(/([A-Z])/g, " $1");
        console.log(input)
    }
    return input
        .trim()
        .toLowerCase()
        .replace(/[,\?\.]/g, "")
        .replace(/\-/g, " ")
        .split(" ")
        .join("_");
}


console.log(snakeCase("HOLAHOLAHolaRafaComoEstas"))

module.exports = snakeCase
