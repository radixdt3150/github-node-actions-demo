const express = require("express")
const bodyParser = require("body-parser")

const app = express();
const port = 5000;

app.use(bodyParser.json())

app.get('/', (_, res) => {
    res.send("Root route")
})

app.listen(port, () => {
    console.log(`[Server]: at http://localhost:${port}`);
});