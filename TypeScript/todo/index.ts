// type TodoId = { id: number }
// type TodoText = { text: string }

// interface CompletedTodo extends Omit<Todo, 'place'> {
//   place?: string
//   readonly done: true
// }

type CompletedTodo = Todo & {
  readonly done: true
}

const foo: Todo = {
  id: 1,
  text: 'study typescript',
  done: false,
}

const bar: Todo = {
  id: 2,
  text: 'laundry',
  done: false,
}

const laundry: Todo = {
  id: 2,
  text: 'laundry',
  done: false,
  place: 'home',
}

const eat: Todo = {
  id: 2,
  text: 'eat',
  done: false,
  place: 'work',
}

const shop: Todo = {
  id: 5,
  text: 'gap',
  done: false,
  place: { custom: 'outside' },
}

const testTodo: CompletedTodo = {
  id: 1,
  text: 'what',
  done: true,
}

type Place = 'work' | 'home' | { custom: string }

type TodoId = { id: number }
type TodoText = { text: string }

// type Todo = TodoId & TodoText & { done: boolean; place?: Place }

type Todo = Readonly<{
  id: number
  text: string
  done: boolean
  place?: Place
}>

// place = 'random'
function placeToString(place?: Place): string {
  if (place === 'home') {
    return '🏡 Home'
  }
  if (place === 'work') {
    return '💼 Work'
  }

  return `📍 ${place?.custom.toUpperCase()}`
}

function completeAll(todos: readonly Todo[]): CompletedTodo[] {
  return todos.map((todo) => {
    let temp: any = placeToString(todo.place)

    const result: CompletedTodo = { ...todo, place: temp, done: true }

    return result
  })
}

const testTodos: Todo[] = [foo, bar, eat, laundry, shop]
console.log(completeAll(testTodos))
