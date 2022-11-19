let count = 0;
const expensive = () => {
    console.log('Throttling Demo', count++)
}

const throttling = (fun, limit) => {
    let flag = true;
    return function () {
        const context = this;
        const arg = arguments;
        if (flag) {
            fun.apply(context, arg);
            flag = false;
            setTimeout(() => {
                flag = true
            }, limit);
        }
    }
}

const betterExperience = throttling(expensive, 5000);

window.addEventListener('resize', betterExperience);