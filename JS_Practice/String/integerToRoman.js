function integerToRoman(num) {
    const map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let result = '';
    for(key in map){
         result += key.repeat(Math.floor(num/map[key]));    // String.repeat(count) -> will repeat the string by count times
         num = num%map[key]
         if(num === 0) break;
    }
    return result;
}

roman = integerToRoman(5000);
console.log(roman)

