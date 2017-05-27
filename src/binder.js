export default class Binder {
    constructor(element, data) {
        this.model = data;
        this.element = element;
        this.element.value = this.model;
        this.element.addEventListener("input", this);
    }

    handleEvent(event) {
        switch (event.type) {
            case "input":
                this.change(event.target.value);
        }
    }

    change(value) {
        if (!value) {
            return;
        }
        this.model = value;
        this.element.value = this.model;
    }
}