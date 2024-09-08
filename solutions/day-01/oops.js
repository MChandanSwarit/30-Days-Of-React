//1 and 2
// class Animal {
//   constructor(name, age, color) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
//   }
//   getFullDetails() {
//     let info = `${this.name} is ${this.age} years old and likes ${this.color}`;
//     return info;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, color, species) {
//     super(name, age, color);
//     this.species = species;
//   }
//   getFullDetails() {
//     let info = `My ${this.species} is called ${this.name}. He is ${this.age} years old and likes the color ${this.color}.`;
//     return info;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, color, species) {
//     super(name, age, color);
//     this.species = species;
//   }
//   getFullDetails() {
//     let info = `My ${this.species} is called ${this.name}. He is ${this.age} years old and likes the color ${this.color}.`;
//     return info;
//   }
// }
// const dog = new Dog('Donny', 4, 'blue', 'dog');
// const cat = new Cat('Emmanuel', 2, 'green', 'cat');
// console.log(dog.getFullDetails());
// console.log(cat.getFullDetails());

//3
class Statistics {
  constructor(nums) {
    this.nums = nums;
  }

  count() {
    return this.nums.length;
  }

  sum() {
    return this.nums.reduce((acc, cur) => acc + cur, 0);
  }

  min() {
    return Math.min(...this.nums);
  }

  max() {
    return Math.max(...this.nums);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    const sorted = [...this.nums].sort((a, b) => a - b);
    const mid = Math.floor(this.count() / 2);
    return this.count() % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  }

  mode() {
    const frequency = {};
    this.nums.forEach((num) => {
      frequency[num] = (frequency[num] || 0) + 1;
    });
    const maxCount = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency).filter(
      (key) => frequency[key] === maxCount
    ).map(Number);
    
    return { modes, count: maxCount };
  }

  variance() {
    const mean = this.mean();
    const squaredDiffs = this.nums.map((num) => (num - mean) ** 2);
    return squaredDiffs.reduce((a, b) => a + b, 0) / this.count();
  }

  std() {
    return Math.sqrt(this.variance());
  }

  freqDist() {
    const frequency = {};
    this.nums.forEach((num) => {
      frequency[num] = (frequency[num] || 0) + 1;
    });
    const total = this.count();
    return Object.entries(frequency)
      .map(([num, count]) => [(count / total) * 100, Number(num)])
      .sort((a, b) => b[0] - a[0]);
  }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);

console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ', statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ', statistics.variance());
console.log('Standard Deviation: ', statistics.std());
console.log('Frequency Distribution: ', statistics.freqDist());
