const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
    console.log("Donasi masuk:");
    console.log(req.body);

    res.sendStatus(200);
});

app.get("/", (req, res) => {
    res.send("Webhook aktif!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
