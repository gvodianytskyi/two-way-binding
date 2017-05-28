import Binder from './binder';

let intervalInput = document.getElementById("interval");
let intervalSeconds = intervalInput.value * 1000;
let timer;
let counterInput = new Binder(document.getElementById("counter"), 1);

timer = setTimeout(repeatIncrement, intervalSeconds);

intervalInput.onchange = (event) => {
    intervalSeconds = event.target.value * 1000;
    clearTimeout(timer);
    timer = setTimeout(repeatIncrement, intervalSeconds);
}

function repeatIncrement() {
    counterInput.change(+counterInput.model + 1) ;
    timer = setTimeout(repeatIncrement, intervalSeconds);
};

