import express from "express";
import {mainRoute} from "./routers/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use('/api/productos', mainRoute);


const server = app.listen(8080,()=>console.log(`server up on port ${server.address().port}`))
server.on('error', err => console.error(err))





