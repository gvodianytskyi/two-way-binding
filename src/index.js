import Binder from './binder';

let intervalInput = document.getElementById("interval");
let intervalSeconds = intervalInput.value * 1000; // dynamic interval
let timer; // current timeout id to clear
let counterInput = new Binder(document.getElementById("counter"), 1);

intervalInput.onchange = (event) => {
    intervalSeconds = event.target.value * 1000;
    clearTimeout(timer);
    setTimeout(repeat, intervalSeconds);
}

function increment() { 
    counterInput.change(+counterInput.model + 1) 
};

function repeat() {
    increment();
    timer = setTimeout(repeat, intervalSeconds);
};

setTimeout(repeat, intervalSeconds);