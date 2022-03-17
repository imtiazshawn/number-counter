let decreament = document.querySelector('#decreament');
let increament = document.querySelector('#increament');
let counterValue = document.querySelector('#counter');

let counter = 0;

increament.addEventListener("click", ()=>{
    counter++;
    counterValue.innerText = counter;
});
decreament.addEventListener("click", ()=>{
    if(counter <= 0){
        counterValue.innerText = 'Error';
        console.log('hello');
    } else{
        counter--;
        counterValue.innerText = counter;
    }
});