function exeBikes(){
    let vet=[]
    let marcas=["CALOI", "SCOTT", "CANONDALE"]

    criarObj(vet, marcas);
    mediaPrecos(vet);
    bikeAntiga(vet);
    bikesCaloi(vet);
    aros29(vet);
    quadroMaior(vet);
    
    function criarObj(vet, marcas){
        for(let i=0; i<10; i++){
            let obj={
                marca: prompt(`Marca da bicicleta ${i+1}: `).toUpperCase(),
                modelo: prompt(`Modelo da bicicleta ${i+1}: `),
                quadro: Number(prompt(`Tamanho do quadro da bicicleta ${i+1}: `)),
                aro: Number(prompt(`Tamanho do aro da bicicleta ${i+1}: `)),
                ano: Number(prompt(`Ano da bicicleta ${i+1}: `)),
                preco: Number(prompt(`Preço da bicicleta ${i+1}: `))
            }
            while(!marcas.includes(obj.marca)){
                obj.marca = prompt(`Marca inválida, reinsira a marca da bicicleta ${i+1}: `).toUpperCase()
            }
            vet.push(obj)
            
        }
    }

    // media dos preços
    function mediaPrecos(vet){
        let soma = 0
        for(let i=0; i<vet.length; i++){
            soma = soma + vet[i].preco
        }
        alert(`A média de preço das bocicletas é ${soma/vet.length}`)
    }
    
    // bicicleta mais antiga
    function bikeAntiga(vet){
        let maisAntiga = vet[0]
        for(let i=0; i<vet.length; i++){
            if(vet[i].ano < maisAntiga.ano){
                maisAntiga = vet[i]
            }
        }
        alert(`A bicicleta mais antiga é ${maisAntiga}`)
    }

    // quais são da marca Caloi
    function bikesCaloi(vet){
        let caloi = []
        for(let i=0; i<vet.length; i++){
            if(vet.marca = "CALOI"){
                caloi.push(vet[i]) // adiciona no vetor
            }
        }
        alert(`Bicicletas da marca Caloi: ${caloi}`)
    }
    

    // bicicletas de aro 29
    function aros29(vet){
        let aro29 = 0
        for(let i=0; i<vet.length; i++){
            if(vet[i].aro == 29){
                aro29++
            }
        }
        alert(`Quantidade de bicicletas com aro 29: ${aro29}`)
    }
    

    // bicicleta com maior quadro
    function quadroMaior(vet){
        let maiorQuadro = vet[0]
        for(let i=0; i<vet.length; i++){
            if(vet[i].quadro < maiorQuadro){
                maiorQuadro = vet[i].quadro
            }
        }
        alert(`Bicicleta com o maior quadro: ${maiorQuadro}`)
    }
}
