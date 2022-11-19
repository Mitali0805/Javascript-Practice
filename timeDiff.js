// function dateDiffToString(a, b){

    
//     diff = Math.abs(a - b);

//     ms = diff % 1000;
//     diff = (diff - ms) / 1000
//     ss = diff % 60;
//     diff = (diff - ss) / 60
//     mm = diff % 60;
//     diff = (diff - mm) / 60
//     hh = diff % 24;
//     days = (diff - hh) / 24

//     return days + ":" + hh+":"+mm+":"+ss;

// }

// var today = new Date()
// var yest = 1644778603*1000;
//     // yest = yest.setDate(today.getDate()-1)

// console.log(dateDiffToString(yest, today))


var d1 = new Date();
var d2 = 1644779698*1000;
var date = new Date(d2-d1);
var hour = date.getUTCHours();
var min = date.getUTCMinutes();
var sec = date.getUTCSeconds();
var day = date.getUTCDate() - 1;
console.log(day + ":" + hour + ":" + min + ":" + sec)

const timeDiff = day + ":" + hour + ":" + min + ":" + sec;
if(timeDiff === '0:0:0:0'){
    console.log('MFA Expired');
}