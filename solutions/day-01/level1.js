// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ];

// let len = webTechs.length;
// console.log(len);

// console.log(webTechs[0]);
// console.log(webTechs[Math.round(len / 2)]);
// console.log(webTechs[len - 1]);

// webTechs.forEach((tech) => {
//   console.log(tech);
// });

// const companies = [
//   'Facebook',
//   'Google',
//   'Microsoft',
//   'Apple',
//   'IBM',
//   'Oracle',
//   'Amazon',
// ];

// const filteredCompanies = companies.filter((company) => {
//   const count = company.split('').reduce((acc, char) => {
//     return char.toLowerCase() === 'o' ? acc + 1 : acc;
//   }, 0);
//   return count <= 1;
// });
// console.log(filteredCompanies);

let dog = {};
dog.name = 'Buddy';
dog.legs = 4;
dog.color = 'Brown';
dog.age = 3;
dog.bark = function () {
  return 'woof woof';
};
console.log(dog);
console.log(dog.bark());
dog.breed = 'Labrador';
dog.getDogInfo = function () {
  return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Breed: ${this.breed}`;
};
console.log(dog);
console.log(dog.getDogInfo());

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let loggedInCount = 0;
for (let user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }
}
console.log(`Number of logged in users: ${loggedInCount}`);

let pointsMore50 = 0;
for (let user in users) {
  if (users[user].points >= 50) {
    pointsMore50++;
  }
}
console.log(`Number of users with more than or equal to 50 points: ${pointsMore50}`);

let mernStackDevs = [];
for (let user in users) {
  const skills = users[user].skills;
  const isMern = ['MongoDB', 'Express', 'React', 'Node'].every(skill => skills.includes(skill));
  if (isMern) {
    mernStackDevs.push(user);
  }
}
console.log('MERN Stack Developers:', mernStackDevs);