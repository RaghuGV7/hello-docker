const express = require("express");
const { env } = require("process");
const port = env.port || 3050;
const app = new express();

app.get("/", (req, res) => { res.send("Hello"); });

app.get("/:name", (req, res) => { res.send(`Hello ${req.params.name}`); });


app.listen(port, () => console.log(`Listening at ${port}...`));