import { getSum } from './getSum'
import { getLowerCase } from './getLowerCase'
import { clickHandler } from './clickHandler'

const test2 = getLowerCase('ONE')
const test = getSum('2', 2)
console.log(test2)
console.log(test)

const addresses: number[] = [1, 2, 3]

// const btnEl = document.getElementById('button')
// console.log(btnEl)
// btnEl?.addEventListener('click', (e) => clickHandler(e))

const a = 5.123

interface Person {
  name: string
  address: string
  canDrink: boolean
}

const john: Person = {
  name: 'john',
  address: 'asdf streeet',
  canDrink: true,
}

const bob: Person = {
  name: 'bob',
  address: 'nunya business',
  canDrink: true,
}

const x: unknown = 1
// let y: number = x // type unknown cannot be assigned to any other type other than unknown

// const add = x + 1 // can't perform operations on type unknown

type OrderSize = 'regular' | 'large' | 'small' | 'venti'
type OrderItem = 'coffee' | 'drip' | 'espresso'
type Order = `A ${OrderSize} ${OrderItem}`

const order1: Order = 'A small espresso'
console.log(order1)

let foo = {}
// foo.bar = 123
// foo.baz = 'hi'

enum Planets {
  mercury = 1,
  venus = 2,
  earth = 3,
}

const earthPos: Planets = Planets.earth
console.log('earthPos', earthPos)

interface bruit {
  name: string
  color: string
  weight: number
}

type Fruit = { name: string; color: string; weight: number }

const apple: Fruit = {
  name: 'apple',
  color: 'red',
  weight: 1,
}

console.log(apple)
