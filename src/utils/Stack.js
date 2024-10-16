class Stack {
    constructor() {
        this.items = [];
    }

    // agregar numero al stack
    push(number) {
        this.items.push(number);
    }

    // quitando el numero del tope
    pop() {
        if (this.items.length === 0) 
            return "Oops, the stack is empty!";
        return this.items.pop();
    }

    // viendo el numero del tope
    peek() {
        return this.items[this.items.length - 1];
    }

    // chequeando si esta vacio
    isEmpty() {
        return this.items.length === 0;
    }

    // cuantos elementos contiene el stack
    size() {
        return this.items.length;
    }

    printStack() {
        return this.items.toString();
    }
    
}



export default Stack();