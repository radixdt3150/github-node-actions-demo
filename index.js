import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 5000;

app.use(bodyParser.json())

app.get('/', (res) => {
    res.send("Root route")
})

app.listen(port, () => {
    console.log(`[Server]: at http://localhost:${port}`);
});