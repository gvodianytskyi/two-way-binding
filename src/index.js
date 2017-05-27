import Binder from './binder';

let input = new Binder(document.getElementById("counter"), 1);

setInterval(() => input.change(+input.model + 1), 1000);