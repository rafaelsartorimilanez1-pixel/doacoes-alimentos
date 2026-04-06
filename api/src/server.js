import express, { urlencoded } from 'express';
import cors from 'cors';
import router from './router/router.js';

const app = express();
const port = 4000;

app.use(express.json())

// Middlewares
app.use(cors()); // Permite requisições externas
app.use(express.json()); // Permite receber JSON
app.use(urlencoded({ extended: true })); // Permite form-data

// Rotas
app.use('/', router);

// Inicializa servidor
app.listen(port, () => {
    console.log(`Server working at port: ${port}`);
});