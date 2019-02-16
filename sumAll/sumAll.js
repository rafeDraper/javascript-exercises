 const sumAll = (_one, _two) => {
        if (typeof _one !== "number" || typeof _two !== "number" ) return "ERROR"
        if (_one < 0 || _two < 0) return "ERROR"

        let arr = [_one, _two]

        let max = Math.max(...arr);
        let min = Math.min(...arr);
    
        let result = 0;
        for (let i = min; i <= max; i++) {
           result += i;
        }
    
        return result;
        
    }
module.exports = sumAll
