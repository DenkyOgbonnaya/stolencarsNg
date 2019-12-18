const express = require('express');
const app = express();
const server = require('http').Server(app);
const next = require('next');
const carRouter = require("./server/cars/cars-route")
const vinRouter = require("./server/vin/vin-routes")
const connectDb = require("./server/database");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production' //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler() //part of next config


nextApp.prepare().then(() => {
    // express code here
    app.use(express.json());
    app.use("/api", carRouter);
    app.use("/api", vinRouter)
    app.get('*', (req,res) => {
        return handle(req, res) // for all the react stuff
    })
    connectDb();
    server.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`)
    })
})
