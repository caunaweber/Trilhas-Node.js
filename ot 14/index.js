import express from 'express';
import { buscarPorId, buscarPorNome, buscarUfs } from './service/service.js';


const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf? buscarPorNome (nomeUf) : buscarUfs();
   
    if(resultado.length > 0){
        res.json(resultado)
    }else{
        res.status(404).send({"erro": "Nenhum Uf encontrado"});
    }
}); 
    

app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarPorId(req.params.iduf);
   if(uf){
    res.json(uf);
   }else if(isNaN(parseInt(req.params.iduf))){
    res.status(404).send({"erro": "Requisição inválida"});
   }else{
    res.status(404).send({"erro": "UF não encontrado"});
   }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});