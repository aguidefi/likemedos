import express from 'express';
import cors from 'cors';
import routes from './routes/router.js';

const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
app.use(cors());

//Rutas
app.use('/',routes);

app.listen(PORT,() => console.log(`listening on port http://localhost:${PORT}`));