let exeBikes = () => {
    let vet=[]
    let marcas=["CALOI", "SCOTT", "CANONDALE"]
    let opcao

    do{
        opcao = Number(prompt('Escolha uma opção \n1. Cadastrar bike \n2. Calcular media dos preços \n 3. Bike mais antiga \n4. Bikes da Caloi \n5. Qtd de bikes aro 29 \n6. Bike com o maior quadro \n7. Sair'))
        switch(opcao){
            case 1: criarObj(vet, marcas)
                break
            case 2: mediaPrecos(vet)
                break
            case 3: bikeAntiga(vet)
                break
            case 4: bikesCaloi(vet)
                break
            case 5: aros29(vet)
                break
            case 6: quadroMaior(vet)
                break
            case 7: alert('O programa foi encerrado.')
                break
            default: alert('Opção inválida.')
        }
    }while(opcao != 7)
    
    let criarObj = (vet, marcas) => {
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
    let mediaPrecos = (vet) => {
        let soma = 0
        for(let i=0; i<vet.length; i++){
            soma = soma + vet[i].preco
        }
        if(vet.length == 0){
            alert('Não há bicicletas cadastradas.')
        }
        else{
            alert(`A média de preço das bocicletas é ${soma/vet.length}`)
        }
    }
    
    // bicicleta mais antiga
    let bikeAntiga = (vet) => {
        let maisAntiga = vet[0]
        for(let i=0; i<vet.length; i++){
            if(vet[i].ano < maisAntiga.ano){
                maisAntiga = vet[i]
            }
        }
        if(vet.length == 0){
            alert('Não há bicicletas cadastradas.')
        }
        else{
            alert(`A bicicleta mais antiga é ${maisAntiga}`)
        }
    }

    // quais são da marca Caloi
    let bikesCaloi = (vet) => {
        let caloi = []
        for(let i=0; i<vet.length; i++){
            if(vet.marca = "CALOI"){
                caloi.push(vet[i]) // adiciona no vetor
            }
        }
        if(vet.length == 0){
            alert('Não há bicicletas cadastradas.')
        }
        else{
            alert(`Bicicletas da marca Caloi: ${caloi}`)
        }
    }
    

    // bicicletas de aro 29
    let aros29 = (vet) => {
        let aro29 = 0
        for(let i=0; i<vet.length; i++){
            if(vet[i].aro == 29){
                aro29++
            }
        }
        if(vet.length == 0){
            alert('Não há bicicletas Caloi.')
        }
        else{
            alert(`Quantidade de bicicletas com aro 29: ${aro29}`)
        }
    }
    

    // bicicleta com maior quadro
    let quadroMaior = (vet) => {
        let maiorQuadro = vet[0]
        for(let i=0; i<vet.length; i++){
            if(vet[i].quadro < maiorQuadro){
                maiorQuadro = vet[i].quadro
            }
        }
        if(vet.length == 0){
            alert('Não há bicicletas cadastradas.')
        }
        else{
            alert(`Bicicleta com o maior quadro: ${maiorQuadro}`)
        }
    }
}
