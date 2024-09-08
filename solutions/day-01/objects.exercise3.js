// let personAccount = {
//   firstName: 'John',
//   lastName: 'Doe',
//   incomes: {
//     salary: 5000,
//     freelance: 1200,
//     investments: 400,
//   },
//   expenses: {
//     rent: 1500,
//     groceries: 400,
//     utilities: 300,
//     transportation: 150,
//   },
//   totalIncome() {
//     let total = 0;
//     for (let income in this.incomes) {
//       total += this.incomes[income];
//     }
//     return total;
//   },
//   totalExpenses() {
//     let total = 0;
//     for (let expense in this.expenses) {
//       total += this.expenses[expense];
//     }
//     return total;
//   },
//   accountInfo() {
//     return `${this.firstName} ${this.lastName} has a balance of $${this.accountBalance()}`;
//   },
//   addIncome(key, val) {
//     this.incomes[key] = val;
//   },
//   addExpense(key, val) {
//     this.expenses[key] = val;
//   },
//   accountBalance() {
//     return this.totalIncome() - this.totalExpenses();
//   }
// };

// console.log(personAccount);
// personAccount.addIncome('bonus', 600);
// personAccount.addExpense('entertainment', 200);
// console.log(personAccount);
// console.log(personAccount.accountInfo());

// const users = [
//   {
//     _id: 'ab12ex',
//     username: 'Alex',
//     email: 'alex@alex.com',
//     password: '123123',
//     createdAt: '08/01/2020 9:00 AM',
//     isLoggedIn: false,
//   },
//   {
//     _id: 'fg12cy',
//     username: 'Asab',
//     email: 'asab@asab.com',
//     password: '123456',
//     createdAt: '08/01/2020 9:30 AM',
//     isLoggedIn: true,
//   },
//   {
//     _id: 'zwf8md',
//     username: 'Brook',
//     email: 'brook@brook.com',
//     password: '123111',
//     createdAt: '08/01/2020 9:45 AM',
//     isLoggedIn: true,
//   },
//   {
//     _id: 'eefamr',
//     username: 'Martha',
//     email: 'martha@martha.com',
//     password: '123222',
//     createdAt: '08/01/2020 9:50 AM',
//     isLoggedIn: false,
//   },
//   {
//     _id: 'ghderc',
//     username: 'Thomas',
//     email: 'thomas@thomas.com',
//     password: '123333',
//     createdAt: '08/01/2020 10:00 AM',
//     isLoggedIn: false,
//   },
// ];

// function generateId() {
//   const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//   let id = '';
//   for (let i = 0; i < 6; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     id += characters[randomIndex];
//   }
//   return id;
// }

// const signUp = (username, email, password) => {
//   const newUser = {
//     _id: generateId(),
//     username,
//     email,
//     password,
//     createdAt: new Date().toLocaleString(),
//     isLoggedIn: false,
//   };
//   users.push(newUser);
//   return newUser;
// };

// console.log(signUp('John', 'john@doe.com', '123456'));
// console.log(signUp('Alex', 'alex@alex.com', '123123'));

// const login = (email, pasword) => {
//   const user = users.find((user) => user.email === email);
//   if (!user) {
//     return 'User not found';
//   }
//   if (user.password !== pasword) {
//     return 'Incorrect password';
//   }
//   user.isLoggedIn = true;
//   return `${user.username} is logged in.`;
// };
// console.log(login('john@doe.com', '123457'));
// console.log(login('alex@alex.com', 'wrongpassword'));
// console.log(login('alex@alex.com', '123123'));

// const products = [
//   {
//     _id: 'eedfcf',
//     name: 'mobile phone',
//     description: 'Huawei Honor',
//     price: 200,
//     ratings: [
//       { userId: 'fg12cy', rate: 5 },
//       { userId: 'zwf8md', rate: 4.5 },
//     ],
//     likes: [],
//   },
//   {
//     _id: 'aegfal',
//     name: 'Laptop',
//     description: 'MacPro: System Darwin',
//     price: 2500,
//     ratings: [],
//     likes: ['fg12cy'],
//   },
//   {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{ userId: 'fg12cy', rate: 5 }],
//     likes: ['fg12cy'],
//   },
// ];

// const rateProduct = (productId, userId, rate) => {
//   const product = products.find(product => product._id === productId);
//   if (!product) {
//     return 'Product not found';
//   }
//   const rating = {userId, rate};
//   product.ratings.push(rating);
//   return product;
// }

// const likeProduct = (productId, userId) => {
//   const product = products.find(product => product._id === productId);
//   if (!product) {
//     return 'Product not found';
//   }
//   const likeUser = users.find(user => user._id === userId);
//   if (!likeUser) {
//     return 'User not found';
//   }
//   product.likes.push(likeUser._id);
//   return product;
// }

// console.log(rateProduct('eedfcf', 'ab12ex', 5));
// console.log(likeProduct('eedfcf', 'ab12ex'));

