const fs = require("fs");

//Create server
const server = require("http").createServer();

//Requests for server
server.on("request", (req, res) => {
    //Solution 1: Read whole file
    // fs.readFile("test-file.txt", "utf-8", (err, data) => {
    //     if (err) {
    //         res.writeHead(500, { "Content-Type": "text/plain" });
    //         res.end("Internal Server Error");
    //         console.error(err);
    //     } else {
    //         res.writeHead(200, { "Content-Type": "text/plain" });
    //         res.end(data);
    //     }
    // });

    //Solution 2 : Read file on chunks
    const readStream = fs.createReadStream("test-file.txt");
    readStream.on("data",chunk => {
        res.write(chunk);
    });
    readStream.on("end", () => {
        res.end();
    });
    readStream.on("error", (err) => {
        res.statusCode=404;
        res.end("file not found ! ");
    })
});

//Listening on server
server.listen(8000, "127.0.0.1", () => {
    console.log("Listening.....");
});