const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
//1
// products.forEach(({price}) => console.log(price));

//2
// products.forEach(({product, price}) => console.log(`The price of ${product} is Rs.${price}`));

//3
// const sumOfPrices = () => {
//   let total = 0;

//   products.forEach((product) => {
//     const price = parseFloat(product.price);
//     if (!isNaN(price)) {
//       total += price;
//     }
//   });
//   return total;
// };
// console.log(sumOfPrices());

//4
// const prices = products.map(product => product.price);
// console.log(prices);

//5
// const pricedProducts = products.filter((product) => {
//   const price = parseFloat(product.price);
//   if (!isNaN(price)) {
//     return price;
//   }
// });
// console.log(pricedProducts);

//6
// const sumOfPrices = (products) => {
//   const prices = products.map((product) => product.price);
//   const definedPrices = prices.filter((price) => {
//     const parsedPrice = parseFloat(price);
//     if (!isNaN(parsedPrice)) {
//       return parsedPrice;
//     }
//   });
//   const sum = definedPrices.reduce((acc, cur) => acc + cur);
//   return sum;
// };
// console.log(sumOfPrices(products));

//7
// const sumOfPrices = products.reduce((sum, product) => {
//   const price = parseFloat(product.price);
//   return !isNaN(price) ? sum + price : sum;
// }, 0);
// console.log(sumOfPrices);

//8
// console.log(products.find(product => isNaN(parseFloat(product.price))));

//9
// console.log(products.findIndex((product) => isNaN(parseFloat(product.price))));

//10
// console.log(products.some((product) => isNaN(parseFloat(product.price))));

//11
console.log(products.every((product) => !isNaN(parseFloat(product.price))));