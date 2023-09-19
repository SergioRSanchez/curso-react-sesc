const arrayFruits = [
  'Apple',
  'Orange',
  'Banana',
  'Mango'
]

arrayFruits.map((fruit) => {
  return (
    console.log(fruit)
  )
})

const arrayObjects = [
  {
    id: 1,
    name: 'Jose',
    age: 33
  },
  {
    id: 2,
    name: 'Maria',
    age: 30
  },
  {
    id: 3,
    name: 'Pedro',
    age: 38
  }
]

arrayObjects.map((person) => {
  return (
    console.log(`${person.name} tem ${person.age} anos`)
  )
})

const quantity = 5

const fruitResultFound = arrayFruits.find((fruit) => fruit.length === quantity)

console.log(fruitResultFound)

const fruitResultMultipleFound = arrayFruits.filter((fruit) => fruit.length === quantity)

console.log(fruitResultMultipleFound)

const arrayFruitsIncludes = arrayFruits.filter((fruits) => fruits.includes('e'))

console.log(arrayFruitsIncludes)