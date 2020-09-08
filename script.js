const people = [
    { name: 'Ivan', age: 26, country: 'UA' },
    { name: 'Dima', age: 9, country: 'GB' },
    { name: 'Vlad', age: 30, country: 'BG' }
]

 
// people.forEach(person => console.log(person)) 

// people.push('1994')
// console.log(peopleNew)

// for (let person of people) {
    // console.log(person)
// }

// for (let i = 0; people.length > i; i++) {
   // console.log (people[i])
// }

// const newPeople = people.map (person => person.age +)

// console.log(newPeople);

// const adults = []
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >=18)
//     adults.push(people[i])
// }
// console.log(adults)

// const adults = people.filter (person => person.age >= 18)

// console.log(adults)



// const sum = people.reduce((amount, person) => amount + person.age, 0)
// console.log(sum)

const searchIndex = people.findIndex (person => person.name === 'Ivan')
console.log(searchIndex)