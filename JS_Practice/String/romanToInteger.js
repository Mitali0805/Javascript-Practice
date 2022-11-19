function romanToInteger(roman) {
    const map = {
        I: 1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }

    let result = 0;
    for(let i=0; i< roman.length; i++){
      if(map[roman[i]] < map[roman[i+1]]){
        result += map[roman[i+1]] - map[roman[i]]
        i++;
      } else {
        result = map[roman[i]]
      }
    }
    return result;
}

integer = romanToInteger('XL');
console.log(integer)

