// W01 JS Practice

let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

// Changes H1 texts to the year variable.
document.querySelector('h1').textContent = year;

// Add HTML code using JavaScript.
document.querySelector('div').innerHTML = '<h2>Hello</h2>';

let newParagraph = document.createElement('p');
newParagraph.textContent = 'This is my paragraph.';
document.querySelector('div').appendChild(newParagraph);

document.querySelector('img').classList.add('add_border');

// Selection Statements

if (year == 2022){
    console.log('the year IS 2022');
}

// Functions

function addAYear(year) {
    console.log('it works!' + year);
}

addAYear(year);

// Repetition

function makeList(item){
    document.querySelector('div').innerHTML += `<li> ${item} </li>`
}

const myArray = ['CSE121b', 'WDD230', 'CIT111'];

myArray.forEach(makeList);





// Homework Notes

// Last Modified
let currentDate = document.lastModified;
document.querySelector('span').textContent = currentDate;