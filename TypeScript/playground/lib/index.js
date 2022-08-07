import { getSum } from './getSum';
import { getLowerCase } from './getLowerCase';
const test2 = getLowerCase('ONE');
const test = getSum('2', 2);
console.log(test2);
console.log(test);
const addresses = [1, 2, 3];
// const btnEl = document.getElementById('button')
// console.log(btnEl)
// btnEl?.addEventListener('click', (e) => clickHandler(e))
const a = 5.123;
const john = {
    name: 'john',
    address: 'asdf streeet',
    canDrink: true,
};
const bob = {
    name: 'bob',
    address: 'nunya business',
    canDrink: true,
};
const x = 1;
const order1 = 'A small espresso';
console.log(order1);
let foo = {};
// foo.bar = 123
// foo.baz = 'hi'
var Planets;
(function (Planets) {
    Planets[Planets["mercury"] = 1] = "mercury";
    Planets[Planets["venus"] = 2] = "venus";
    Planets[Planets["earth"] = 3] = "earth";
})(Planets || (Planets = {}));
const earthPos = Planets.mercury;
console.log('earthPos', earthPos);
