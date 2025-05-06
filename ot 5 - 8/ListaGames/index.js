const express = require("express");
const app = express();

app.use(express.json());

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: "30"},
    {title: "The Witcher 3: Wild Hunt", studio: "CD Projekt Red", price: "70"},
    {title: "God of War", studio: "Santa Monica Studio", price: "300"},
    {title: "Minecraft", studio: "Mojang Studios", price: "90"},
    {title: "Halo", studio: "Microsoft", price: "100"},
    {title: "Red Dead Redemption 2", studio: "Rockstar Games", price: "120"},
    {title: "Elden Ring", studio: "FromSoftware", price: "250"},
    {title: "Cyberpunk 2077", studio: "CD Projekt Red", price: "110"},
    {title: "Horizon Zero Dawn", studio: "Guerrilla Games", price: "80"},
    {title: "FIFA 24", studio: "EA Sports", price: "150"}
];

app.listen(3080,() => {
    console.log("Servidor rodando");
});

app.get("/", (req, res) => {
    res.json(games);
})

app.post("/novogame", (req, res) => {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = {title, studio, price};
    games.push(newGame);
    
    res.send("OK");
})

app.put("/novogame/:index", (req, res) => {
    const {index} = req.params;

    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = {title, studio, price};

    return res.json(games);

})

app.delete("/:index", (req, res) => {
    const {index} = req.params;

    games.splice(index,1);

    return res.json({message: "O jogo foi deletado"})
})
