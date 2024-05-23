const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/exam5', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use(express.json());

app.use('/', route);

app.listen(3000, () => console.log('Serveur démarré sur le port 3000'));