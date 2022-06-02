// better way to select li items?
const li1 = document.getElementById('li-1')
const li2 = document.getElementById('li-2')
const li3 = document.getElementById('li-3')
// get dynamically updated content divs
const newList = document.getElementById('new-list')
const originalList = document.getElementById('original-list')
const codeDesc = document.getElementById('code-used')
// i want to display the method code and couldnt figure out a better way than manually createing the codeArray added in order of li#
const codeArray = [
  "arr.splice(0, 0, 'Winston Churchill', 'Albert Einstein')",
  "arr.splice(arr.indexOf('Mahatma Gandhi') + 1,0,'Pablo Picasso','Ludwig Van Beethoven')",
  "arr.splice(arr.indexOf('Napoleon Bonaparte'), 2)"
]

let people = [
  'Benjamin Franklin',
  'Thomas Edison',
  'Franklin Roosevelt',
  'Mahatma Gandhi',
  'Napoleon Bonaparte',
  'Abraham Lincoln'
]

//const arr = people.slice()
// changed the slice to inside each click event to avoid stacking events

// display original arr in 1st column div (originalList)
people.forEach((item) => {
  let li = document.createElement('li')
  li.innerText = item
  originalList.appendChild(li)
})

//display modified arr in 3rd column div (newList)
li1.addEventListener('click', (e) => {
  const arr = people.slice()
  arr.splice(0, 0, 'Winston Churchill', 'Albert Einstein')
  updateList(arr)
  codeDesc.innerHTML = 'Code used: ' + codeArray[0] //displays code used from codeArray
})

li2.addEventListener('click', (e) => {
  const arr = people.slice()
  arr.splice(
    arr.indexOf('Mahatma Gandhi') + 1, // if you dont add 1 it will start in the index position of 'Mahatma Gandhi' resulting in inserting before
    0,
    'Pablo Picasso',
    'Ludwig Van Beethoven'
  )
  updateList(arr)
  codeDesc.innerHTML = 'Code used: ' + codeArray[1]
})

li3.addEventListener('click', (e) => {
  const arr = people.slice()
  arr.splice(arr.indexOf('Napoleon Bonaparte'), 2)
  updateList(arr)
  codeDesc.innerHTML = 'Code used: ' + codeArray[2]
})
// function to
const updateList = (arr) => {
  newList.innerHTML = '' //clear before updating list
  arr.forEach((item) => {
    let li = document.createElement('li')
    li.innerText = item
    newList.appendChild(li)
  })
}
