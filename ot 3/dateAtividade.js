let data = new Date();

let hora = data.getHours();
let min = data.getMinutes();

let saudacao;

if(hora <= 11){
    saudacao = "bom dia";
}else if(hora <= 17){
    saudacao = "boa tarde";
}else{
    saudacao = "boa noite";
}

console.log("Olá! "+saudacao);
console.log("Agora são "+hora+" horas e "+min+" minutos.")