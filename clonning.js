const individual = {
    "rewardsmember": {
      "firstname": "johny",
      "middlename": "edard",
      "mailingaddress": [
        {
          "type": "mailing",
          "address1": "9433",
          "address2": "courtside dr",
          "city": "sfo",
          "state": "ca",
          "zip": "vpc96 293",
          "country":"UK"
        }
      ],
      "emailaddress": {
        "type": "security",
        "address": "nikhil100@gmail.com"
      },
      "createdby": "createuser"
    }
  }

  //spread 
//   const xyz = {...individual}
//   xyz.rewardsmember.mailingaddress[0].country = 'India'
//   xyz.rewardsmember.firstname = 'Mita'
//   xyz.rewardsmember.lastname = 'pawaskar'

//   console.log("individual",individual.rewardsmember.mailingaddress[0].country)
//   console.log("xyz",xyz.rewardsmember.mailingaddress[0].country)

//   console.log("individual",individual)
//   console.log("xyz",xyz.rewardsmember.firstname)

  ///deep clonning///
  const abc = JSON.parse(JSON.stringify(individual))   //deep clonning
  abc.rewardsmember.mailingaddress[0].country = 'India'
  console.log("individual",individual.rewardsmember.mailingaddress[0].country)
  console.log("abc",abc.rewardsmember.mailingaddress[0].country)

  abc.rewardsmember.firstname = 'Mitali'
  console.log("individual",individual.rewardsmember.firstname)
  console.log("abc",abc.rewardsmember.firstname)

////////////////////////////////////////

// spread operator doing the concat job//
// let arr = [1,2,3];
// let arr2 = [4,5];

// arr3 = [arr,arr2];
// console.log(arr); // [ [1, 2, 3],[4, 5] ]

// arr4 = [...arr,...arr2]
// console.log(arr4); // [ 1,2,3,4,5 ]

///////////////////////////////
let arr = ['a','b','c'];
let arr2 = arr;  

console.log(arr); // [ 'a', 'b', 'c' ]

arr2.push('d'); //inserting an element at the end of arr2 & arr as well to overcome this we can use spread operator

console.log(arr2); // [ 'a', 'b', 'c', 'd' ]
console.log(arr); // [ 'a', 'b', 'c' , 'd']

// spread operator for copying
let arr3 = [...arr];
arr3.push('e')

console.log(arr3); // [ 'a', 'b', 'c', 'd' ,'e']
console.log(arr); // [ 'a', 'b', 'c' , 'd']

/////////////////////
//spread in objects
const user1 = {
	name: 'Jen',
	age: 22,
};

const user2 = {
	name: "Andrew",
	location: "Philadelphia"
};

const mergedUsers = {...user1, ...user2};
console.log(mergedUsers)

const Users = {user1,user2};
console.log(Users)

///primitive assignment
const test = "test1"

let test2 = test
test2 = "test2"

console.log("test",test)
console.log("test2",test2)
