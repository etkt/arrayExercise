/*This was my original js file to work throught the exercises
 * all actions are performed on the modified array but i think the instructions
 * intended them to all be done on a clean copy of the original
 * heavily commented to use file as a personal reference
 */
const newList = document.getElementById('new-list')

let people = [
  'Benjamin Franklin',
  'Thomas Edison',
  'Franklin Roosevelt',
  'Mahatma Gandhi',
  'Napoleon Bonaparte',
  'Abraham Lincoln'
]

const copy = people.slice()
// What is the index of Mahatma Gandhi in this list of people? Use indexOf.
console.log(copy.indexOf('Mahatma Gandhi'))
//----------------------------------------------------------------
// Add Winston Churchill and Albert Einstein to the start of the list.
// With unshift -- adds elements to the start of the array.
// With splice  -- array.splice(index, deleteCount, itemsToAdd)
// index is the position to start modifying the array.
// deleteCount is the number of items you want to delete.
// itemsToAdd is items you want to add, each separated by ,.
//------------------------------------------
//copy.unshift('Winston Churchill', 'Albert Einstein')
copy.splice(0, 0, 'Winston Churchill', 'Albert Einstein')
//----------------------------------------------------------------
// Add Charles Darwin and Walt Disney to the end of the list.
// With push --adds elements to the end of the array.
// With splice
//------------------------------------------
//copy.push('Charles Darwin', 'Walt Disney')
copy.splice(copy.length, 0, 'Charles Darwin', 'Walt Disney')
//----------------------------------------------------------------
// Add Pablo Picasso and Ludwig van Beethoven after Mahatma Gandhi. Use splice.
// console.log(copy.indexOf('Mahatma Gandhi'))
copy.splice(
  copy.indexOf('Mahatma Gandhi') + 1, // if you dont add 1 it will start in the index position of 'Mahatma Gandhi'
  0,
  'Pablo Picasso',
  'Ludwig Van Beethoven'
)
//----------------------------------------------------------------
// Remove Benjamin Franklin and Thomas Edison
// With shift --remove first element from array
// With splice
//-----------------------------------------
// copy.shift()
// copy.shift()
copy.splice(0, 2)
//----------------------------------------------------------------
// Remove Napoleon Bonaparte and Abraham Lincoln
// With pop
// With splice
//------------------------------------------
// copy.pop()
// copy.pop()
copy.splice(copy.indexOf('Napoleon Bonaparte'), 2)
//----------------------------------------------------------------
// Remove Mahatma Gandhi with splice
copy.splice(copy.indexOf('Mahatma Gandhi'), 1)
//----------------------------------------------------------------
console.log(copy)

copy.forEach((item) => {
  let li = document.createElement('li')
  li.innerText = item
  newList.appendChild(li)
})
