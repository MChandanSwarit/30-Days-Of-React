const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
};

//regular access
// const getPersonInfo = (person) => {
//   return `${person.firstName} ${person.lastName} lives in ${
//     person.country
//   }. He is ${person.age} years old. He is an ${
//     person.job
//   }. He teaches ${person.skills
//     .slice(0, -1)
//     .join(', ') + ' and ' + person.skills[person.skills.length - 1]
//     }. He speaks ${
//     person.languages.slice(0, -1).join(', ') +
//     ' and a liitle bit of ' +
//     person.languages[person.languages.length - 1]
//   }.`;
// };

// console.log(getPersonInfo(person));

//destructuring
const getPersonInfo = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  return `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${
    skills.slice(0, -1).join(', ') + ' and ' + skills[skills.length - 1]
  }. He speaks ${
    languages.slice(0, -1).join(', ') +
    ' and a liitle bit of ' +
    languages[languages.length - 1]
  }.`;
};
console.log(getPersonInfo(person));
