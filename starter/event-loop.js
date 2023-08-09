const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => {
    console.log("Timer 1 finished"), 100
});

setImmediate(() =>
    console.log("Immediate 1 finished")
);

fs.readFile("test-file.txt", () => {
    console.log("I/O Finished");

    setTimeout(() => {
        console.log("Timer 2 finished from CALLBACK")
    }, 1000
    );

    setTimeout(() => {
        console.log("Timer 3 finished from CALLBACK")
    }, 3000
    );

    setImmediate(() =>
        console.log("Immediate 1 finished from CALLBACK")
    );

    process.nextTick(() => {
        console.log('Next tick')

    });

    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
        console.log(Date.now() - start, "Password encrypted");
    });

    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
        console.log(Date.now() - start, "Password encrypted");
    });

    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
        console.log(Date.now() - start, "Password encrypted");
    });
});

console.log("Hello from top level code");