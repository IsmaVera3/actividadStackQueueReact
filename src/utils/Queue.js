class Queue {
    constructor() {
        this.items = [];
    }

    // agregar numero al la cola
    enqueue(number) {
        this.items.push(number);
    }

    // quitando el numero del tope
    dequeue() {
        if (this.items.length === 0) 
            return "la cola esta vacia";
        return this.items.shift();
    }

    // viendo el numero del tope
    peek() {
        return this.items[0];
    }

    // chequeando si esta vacio
    isEmpty() {
        return this.items.length === 0;
    }

    // cuantos elementos contiene el stack
    size() {
        return this.items.length;
    }

    printQueue() {
        return this.items.toString();
    }
}



export default Queue();