let Dialog = {
    print(msg) {
        console.log(`[ ${this.name} ]: ${msg}`);
    }
};

let Controller = {
    name: "Controller",
    interact() {
        this.print("Interacting...");
    }
};

Object.setPrototypeOf(Controller, Dialog);

Controller.interact();
