import express from 'express';

const PORT = 3000;
const app = express();

//pour récupérer les informations du formulaire
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

//fichiers statiques
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/index.html');
})

app.get('/panier', (req, res) => {
    console.log('Hello backend!');
    
    console.log(req.headers.cookie);
    
    
    res.setHeader('set-cookie', ['hono=lulu;', 'capitale=paris;']);

    res.end();
});

// connexion du serveur au réseau
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});