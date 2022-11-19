var a = 10;
console.log(a);

//var has function scope
function test() {
    var a = 20
    console.log(a);
    if(true) {
        var a = 30;
        console.log(a)
    }
    console.log(a)
}

test();
console.log(a)
