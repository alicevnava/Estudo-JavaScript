const distanciaMetros= [1000,  1500, 2000 , 2500, 3000, 3500, 4000];

//converter para km
//MAP - percorrer o array e salvar o resultado em um novo array
// distanciaMetros.map((distancia)=>{
//     const distanciaKM = distancia / 1000; //converter para km
//     console.log("Distância em KM:", distanciaKM);
//     return distanciaKM 
// })

//MAP -> salvando em uma variável
const distanciaKM = distanciaMetros.map(distancia => distancia/1000)
console.log("Distância em KM:", distanciaKM, 'km');


//FILTER - filtrar os valores do array
// const itensFiltrados = distanciaMetros.filter(distancia => {
//     if(distancia > 2000) return distancia
//     //retorna array com didtancias maiores que 2000
// }) 

//FILTER 
const itensFiltrados = distanciaMetros.filter(distancia => distancia > 2000)
console.log("Distância maiores que 2000m:", itensFiltrados);


//REDUCE - somar todos os valores do array e reduz em um só
const distanciaTotal = distanciaMetros.reduce((acumulador, distancia)=> {
    return acumulador + distancia
}, 0) //0 é o valor inicial do acumulador
console.log ('Distância total:', distanciaTotal, 'm');