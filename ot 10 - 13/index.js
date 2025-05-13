import express from 'express';
import colecaoUf from './dados.js';

const app = express();

const buscarPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
}

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf? buscarPorNome (nomeUf) : colecaoUf;
   
    if(resultado.length > 0){
        res.json(resultado)
    }else{
        res.status(404).send({"erro": "Nenhum Uf encontrado"});
    }
});
    

app.get('/ufs/:iduf', (req, res) => {
    const idUf = parseInt(req.params.iduf);
    let uf;
    let msgErro = '';


    if(!(isNaN(idUf))){
        uf = colecaoUf.find(u => u.id === idUf);
        if(!uf){
            msgErro = "Uf não encontrado";
        }
    }else{
        msgErro = "Requisição inválida";
    }
    
   if(uf){
    res.json(uf);
   }else{
    res.status(404).send({"erro": msgErro});
   }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});