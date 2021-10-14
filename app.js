


// const CANNOT be modified

// const creates a constant reference to the JavaScript
//  element indicated when it is created. For strings and numbers,
//  the content cannot be altered, because the reference is to the content.
//  For arrays and objects, however, the content can be altered,
//  because the reference is to the container, not to the content.



const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const personObj = {
    name: 'Lernantino',
    age: 99
};

personObj.age = 100;
personObj.occupation = 'Developer';




const printProfileData = (profileDataArr) => {
    for (let i = 0; i < profileDataArr.length; i++){
        console.log(profileDataArr[i]);
    }

    console.log ('================');

    profileDataArr.forEach((profileItem) => {
        console.log(profileItem)
    });
};

printProfileData(profileDataArgs);


// // using function expression syntax
// const addNums = function(numOne, numTwo) {
//     return numOne + numTwo;
// };

// // using new arrow function syntax
// const addNums= (numOne, numTwo) => {
//     return numOne + numTwo;
// };



// const addNums = (numOne, numTwo) => numOne + numTwo;

// const sum = addNums (5,3);


// const addNums = (numOne, numTwo) => {
//     console.log(numOne, numTwo);
//     return numOne + numTwo;
//   };