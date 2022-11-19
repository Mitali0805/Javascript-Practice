//base64
console.log(Buffer.from('5WPSRP6QYPMUN3NB:/FTgujNfYsCk56yDHFMPw3grSqmtbKi4St4cqTcT+8MBKa7/W5JSXvcBpLHLNKXd').toString('base64'));

//ascii
console.log(Buffer.from("NVdQU1JQNlFZUE1VTjNOQjovRlRndWpOZllzQ2s1NnlESEZNUHczZ3JTcW10YktpNFN0NGNxVGNUKzhNQkthNy9XNUpTWHZjQnBMSExOS1hk", 'base64').toString('ascii'))

const buf = Buffer.from('hey');
console.log(buf)
console.log(buf[0]) //h
console.log(buf[1]) //e
console.log(buf[2]) //y

console.log(buf.length)


