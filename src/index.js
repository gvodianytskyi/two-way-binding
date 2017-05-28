import Binder from './binder';

let intervalInput = document.getElementById("interval");
let intervalSeconds = intervalInput.value * 1000;
let timer;
let counterInput = new Binder(document.getElementById("counter"), 1);

intervalInput.onchange = (event) => {
    intervalSeconds = event.target.value * 1000;
    clearTimeout(timer);
    timer = setTimeout(repeat, intervalSeconds);
}

function repeat() {
    counterInput.change(+counterInput.model + 1) ;
    timer = setTimeout(repeat, intervalSeconds);
};
