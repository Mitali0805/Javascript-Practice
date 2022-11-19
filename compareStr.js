
// if('270'< 200 || '270' > 299){
//     console.log('if')
// }else{
//        console.log('else')
// }

let value = "asdf.@..gh&j"

  if (value.match(/@\./)) {
    console.log("true")
  }

  else{
    console.log("false")
  }

  const abc = [... value.matchAll(/@/g)]
  if (abc[1]?.index) {
    console.log("more than 1 @ not allowed")
    console.log("abc", abc)
  }


// let value = []

// if(!!value.length){
//     console.log("true")
// }


if(-1){
    console.log("if")
}