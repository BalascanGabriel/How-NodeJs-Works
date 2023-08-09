const EventEmitter = require("events");
const http = require("http");

//Create emitter
const myEmitter = new EventEmitter();

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

//Set up listener
//This are the observers
myEmitter.on('newSale', () => {
    console.log(`New sale!`);
});

myEmitter.on('newSale', () => {
    console.log('Customer name : Gabe');
});

myEmitter.on('newCustomer', (customerName) => {
    console.log(`Another customer arrived in store ${customerName}`);
});

myEmitter.on('newCustomerAlert', (customerName, customerId, customerScore) => {
    console.log(`Another customer JOINEEEED :Customer id -> ${customerId} ,Customer name -> ${customerName}, Customer score -> ${customerScore}`);
});

//This pattern is called observer
//This one emits
myEmitter.emit('newSale');
myEmitter.emit('newCustomer', 'Andrei');
myEmitter.emit('newCustomer', 'Matei');
myEmitter.emit('newCustomerAlert', 'Razvan', 1, 100);

////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log("Request received ! ");
    res.end("Request received ! ");
});

server.on('request', (req, res) => {
    console.log("Another request received ! ");
    //we cannot do this because we cannot send 2 responds to the same listener
    //It is needed to have  : res.end() is called only once and that you handle different response scenarios based on your conditions.
    // res.end("Another Request received ! ");
});

server.on('close', () => {
    console.log("Server closed");
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Waiting for requests......");
});