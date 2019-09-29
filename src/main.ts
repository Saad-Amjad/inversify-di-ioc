import express from 'express';
import { Pizza } from "./pizza.class";
import { pizzaContainer } from "./inversify.config";

const pizza: Pizza = pizzaContainer.resolve<Pizza>(Pizza);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send();
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

