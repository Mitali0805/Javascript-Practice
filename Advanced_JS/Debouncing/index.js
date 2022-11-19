//debouncing in JS --> to optimize search and reduce unnecessary API calls
let counter = 0;
const getData = () => {
    console.log('fetching data ', counter++)
}

const debounce = function (fn, d) {
    let timer;
    return function () {
        let context = this,
            args = arguments;

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(context, args)
        }, d);
    }
}

// debounce fun only calls getData() when diff bet time interval bet two fun call is greater than the delay
const betterFunction = debounce(getData, 300)