import express from 'express';
import  { edit, insert,trash,view } from '../controller/libraryContoller.js';

const app = express();

app.post('/add',insert);

app.get('/view',view);

app.delete('/trash',trash);

app.put('/edit',edit);

export default app;