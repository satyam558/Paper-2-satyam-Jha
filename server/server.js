import express from 'express';
import dbConfig from './model/library.js';
import bookRoutes from './routes/libraryRoutes.js';
import cors from 'cors';
import dotenv from "dotenv";

const PORT = process.env.PORT || 4000;
const app = express();

dotenv.config();

dbConfig();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use('/library',bookRoutes);

app.listen(PORT,()=>console.log(`listen port number http://localhost:${PORT}`));
app.use(async(req,res)=>res.send('server is running'));