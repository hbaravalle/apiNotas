require('dotenv').config();
const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const notesRouter = require('./routes/notes');

app.use('/', indexRouter);
app.use('/notes', notesRouter);

app.listen(3000, () => console.log("Servidor listo y corriendo en el puerto 3000"));