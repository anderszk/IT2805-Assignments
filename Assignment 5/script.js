/* Part 2 */
console.log('PART 2')

for (let i = 1; i <= 20; i++) {
    console.log(i)
  }


/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < numbers.length; i++){
    if(numbers[i]%15 == 0){
        console.log("Eplekake")
    }
    else if(numbers[i]%5 == 0){
        console.log("Kake")
    }
    else if (numbers[i]%3 == 0){
        console.log("Eple")
    }
    else{
        console.log(i)
    }
}

/* Part 4 */

const changeThis = document.getElementById('title');
changeThis.innerHTML = "Hello, JavaScript";


/* Part 5 */
function changeDisplay () {
    const box = document.getElementById("magic");
    box.style.display = "none"
}

function changeVisibility () {
    const box = document.getElementById("magic");
    box.style.visibility = "hidden";
    box.style.display = "block";
}

function reset () {
    const box = document.getElementById("magic");
    box.style.visibility = "visible";
    box.style.display = "block";
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

for(let i = 0; i < technologies.length; i++){
    var list = document.getElementById('tech');
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(technologies[i]));
    list.appendChild(node);
}
