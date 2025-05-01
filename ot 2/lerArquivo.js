var fs = require("fs");

fs.appendFile("novo.txt","Olá NodeJS! Senai", function (err){
    if(err) throw err;
    console.log("Arquivo salvo!");
})

fs.writeFile("novo.txt","OláNodeJS! UNISENAI 2025", function (err){
    if(err) throw err;
    console.log("Arquivo salvo!");
});

fs.rename("novo.txt","ArquivoRenomeado.txt",function (err){
    if(err) throw err;
    console.log("Arquivo salvo!");
})