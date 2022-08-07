"use strict";
// type TodoId = { id: number }
// type TodoText = { text: string }
const foo = {
    id: 1,
    text: 'study typescript',
    done: false,
};
const bar = {
    id: 2,
    text: 'laundry',
    done: false,
};
const laundry = {
    id: 2,
    text: 'laundry',
    done: false,
    place: 'home',
};
const eat = {
    id: 2,
    text: 'eat',
    done: false,
    place: 'work',
};
const fap = {
    id: 5,
    text: 'gap',
    done: false,
    place: { custom: 'outside' },
};
const testTodo = {
    id: 1,
    text: 'what',
    done: true,
};
// type Todo = Readonly<{
//   id: number
//   text: string
//   done: boolean
//   place?: Place
// }>
// place = 'random'
function placeToString(place) {
    if (place === 'home') {
        return '🏡 Home';
    }
    if (place === 'work') {
        return '💼 Work';
    }
    return `📍 ${place?.custom.toUpperCase()}`;
}
function completeAll(todos) {
    return todos.map((todo) => {
        let temp = placeToString(todo.place);
        const result = { ...todo, place: temp, done: true };
        return result;
    });
}
const testTodos = [foo, bar, eat, laundry, fap];
console.log(completeAll(testTodos));
