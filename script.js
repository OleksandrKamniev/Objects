// const person = {
//   name: 'Alex',
//   id: 10
// }
const person = {
  name: 'Alex',
  id: 10,
  age: 24,
  lastName: 'Code'

};

const entries = Object.entries(person);

for (const [key, val] of entries){
  console.log(`${key} : ${val}`)
}
