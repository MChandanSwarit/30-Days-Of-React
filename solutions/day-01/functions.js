//Level1
//1
// function fullName (firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// console.log(fullName('chandan', 'swarit'));

//2
// function addNumbers (a, b) {
//   return a + b;
// }

// console.log(addNumbers(3, 8));

//3
// function areaOfCircle (radius) {
//   return radius * radius * Math.PI;
// }
// console.log(areaOfCircle(7));

//4
// function celToFar(cel) {
//   return `${cel} in farenheit is ${((9 / 5) * cel) + 32}`;
// }
// console.log(celToFar(33));

//5
// function calculateBMI(w, h) {
//   let bmi = w / h**2;
//   if (bmi < 18.5) {
//     return `BMI is ${bmi} : Underweight`;
//   } else if (bmi < 24.9) {
//     return `BMI is ${bmi} : Normal weight`;
//   } else if (bmi < 29.9) {
//     return `BMI is ${bmi} : Overweight`;
//   } else {
//     return `BMI is ${bmi} : Obese`;
//   }
// }

// console.log(calculateBMI(69, 1.83));

//Level2
//1
// const solveQuadratic = (a = 0, b = 0, c = 0) => {
//   if (a === 0 && b === 0 && c === 0) {
//     return 0;
//   }
//   let d = b*b - 4*a*c;
//   if (d > 0) {
//     let r1 = (-b + Math.sqrt(d)) / (2*a);
//     let r2 = (-b - Math.sqrt(d)) / (2*a);
//     return `Two real roots: ${r1} and ${r2}`;
//   } else if (d === 0) {
//     let r = -b / (2*a);
//     return `One real root: ${r}`;
//   } else {
//     let realPart = -b / (2*a);
//     let imaginaryPart = Math.sqrt(-d) / (2*a);
//     return `Two complex roots: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`;
//   }
// }

// console.log(solveQuadratic(3,4,5));

//2
// const printArray = (array) => {
//   for (let element of array) {
//     console.log(element);
//   }
// }
// printArray([1, 'dog', {year: 2024}, -0.5]);

//3
// const showDateTime = () => {
//   const now  = new Date();

//   const month = String(now.getMonth() + 1).padStart(2, '0');
//   const day = String(now.getDate()).padStart(2, '0');
//   const year = now.getFullYear();

//   const hours = String(now.getHours()).padStart(2, '0');
//   const minutes = String(now.getMinutes()).padStart(2, '0');

//   const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}`;
//   return formattedDateTime;
// }
// console.log(showDateTime());

//4
// const reverseArray = (arr) => {
//   const n = arr.length;
//   let left = 0;
//   let right = n - 1;
//   while (right >= left) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];;
//     left ++;
//     right--;
//   }
//   return arr;
// }

// console.log(reverseArray([1,2,3,4,5,6]));

//Level3
//1
// const userIdGeneratedByUser = (numOfChars = 6, numOfIds = 5) => {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let ids = [];
//   for (let i = 0; i < numOfIds; i++) {
//     let id = '';
//     for (let j = 0; j < numOfChars; j++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       id += characters[randomIndex];
//     }
//     ids.push(id);
//   }
//   for (let id of ids) {
//     console.log(id);
//   }
// }

// userIdGeneratedByUser(32, 5);

//2
// const generateColors = (type = 'rgb', numOfColors = 5) => {
//   const characters =
//     '0123456789ABCDEF';
//   let colors = [];
//   for (let i = 0; i < numOfColors; i++) {
//     let color = '';
//     if (type === 'hex') {
//       color = '#';
//       for (let j = 0; j < 6; j++) {
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         color += characters[randomIndex];
//       }
//     } else {
//       let r = Math.floor(Math.random() * 256);
//       let g = Math.floor(Math.random() * 256);
//       let b = Math.floor(Math.random() * 256);
//       color = `rgb(${r}, ${g}, ${b})`;
//     }
//     colors.push(color);
//   }
//   for (let color of colors) {
//     console.log(color);
//   }
// };

// generateColors('hex', 5);

//3
// const shuffleAray = (arr) => {
//   let shuffledArray = [...arr];
//   for (let i=shuffledArray.length-1; i>0; i--) {
//     const randomIndex = Math.floor(Math.random() * (i+1));
//     [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
//   }
//   return shuffledArray;
// }
// console.log(shuffleAray([1,2,3,4,5,6]));