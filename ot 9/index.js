import express from 'express';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

let carros = [
    { nome: "Fiesta", preco: 25000, marca: "Ford" },
    { nome: "Saveiro", preco: 42000, marca: "Volkswagen" },
    { nome: "Civic", preco: 95000, marca: "Honda" },
    { nome: "Corolla", preco: 99000, marca: "Toyota" },
    { nome: "Uno", preco: 18000, marca: "Fiat" },
    { nome: "HB20", preco: 68000, marca: "Hyundai" }
];

app.listen(3000, () => {
    console.log("Servidor inciado.");
})

app.get("/cars",(req, res) => {
    return res.json(carros);
})

app.get("/cars/:id",(req, res) => {
    return res.json(carros[req.params.id]);
})

app.post("/cars", (req, res) => {
    const {nome, preco, marca} = req.body;
    carros.push({nome, preco, marca});
    res.json({mensagem: "Carro adicionado", carro: carros[carros.length-1]})
})

app.put("/cars/:id", (req, res) => {
    let id = req.params.id;
    const {nome, preco, marca} = req.body;
    if(carros[id]){
        carros[id] = {nome, preco, marca};
        res.json({mensagem: "Carro atualizado", carro: carros[id]});
    }else{
        res.status(404).json({erro: "Carro não encontrado"})
    }
});

app.delete("/cars/:id", (req, res) => {
    let id = req.params.id;
    if(carros[id]){
        carros.splice(id, 1);
        res.json({mensagem: "Carro removido"});
    }else{
        res.status(404).json({erro: "Carro não encontrado"})
    }
});


/*app.get('/', (req, res) => {
    res.send("<h3>Rotas no Express</h3><p>Rota</p> '/'");
})

app.get('/sobre', (req, res) => {
    res.send("<h3>Rota /sobre </h3>");
})


app.get('/user/:name', (req, res) => {
    res.send('Usuário: '+ req.params.name);
})

let carros = ['fiesta', 'saveiro'];
app.use(express.urlencoded({extended: true}))

app.post("/cars", (req, res) => {
    let name = req.body.name;
    carros[carros.length] = name;
    return res.json([carros[carros.length-1]]);

})

app.get("/cars/:id", (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]]);
    
})

app.put("/cars/update/:id", (req, res) => {
    let name = req.body.name;
    carros[req.params.id] = name;
    return res.json(carros[req.params.id]);
})


app.delete("/cars/delete/:id", (req, res) => {
    carros[req.params.id] = null;
    return res.json(carros[req.params.id]);
})*/