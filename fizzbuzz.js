//variables
const list = document.querySelector("ol");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
let change = true;

const noRemainder = (a,b) => ((a%b) == 0)? true: false;

//functions
function fizzBuzz(){

    list.replaceChildren()

    const limit = num.valueAsNumber;
    for (let i = 1; i <= limit; i++){
        let j = i

        if(noRemainder(j,3) && noRemainder(j,5)){
            j = 'FizzBuzz'
        } else if(noRemainder(j,3)){
            j = 'Fizz'
        } else if(noRemainder(j,5)){
            j = 'Buzz'
        }  

        const listItem = document.createElement('li');
        listItem.innerText = i + '. ' + j;
        list.appendChild(listItem)
        change = true;
    }
}

num.addEventListener('input', () => {
    change = false
})

//Button
btn.addEventListener('click', () => {
    if(change){
        list.classList.toggle('hidden')
        fizzBuzz();
    } else{fizzBuzz()}
})
console.log(limit)