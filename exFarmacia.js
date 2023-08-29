function exFarmacia(){
    let farmacia = []
    let remedio = []

    cadastroFarmacias(farmacia);
    cadastroRemedios(remedio, farmacia);
    vendaRemedios(remedio)

    function cadastroFarmacias(farmacia){
        for(let i=0; i<5; i++){
            let objF = {
                codigoF: Number(prompt(`Insira o código da farmácia ${i+1}`)),
                nomeF: prompt(`Informe o nome da farmácia ${i+1}`).toUpperCase(),
                enderecoF: prompt(`Informe o endereço da farmacia ${i+1}`).toUpperCase()
            }
            while(farmacia.some((event) => event.codigo == farmacia.codigo)){
                farmacia.codigo = Number(prompt(`Insira o código da farmácia ${i+1}`))
            }
            farmacia.push(objF)
        }
    }

    function cadastroRemedios(remedio, farmacia){
        for(let i=0; i<5; i++){
            let objR = {
                codR: Number(prompt(`Insira o código do remédio ${i+1}`)),
                nomeR: Number(prompt(`Insira o nome do remédio ${i+1}`)).toUpperCase(),
                qtdR: Number(prompt(`Informe a quantidade em estoque do remédio ${i+1}`)),
                precoR: Number(prompt(`Informe o preço do remédio ${i+1}`))
            }
            while(!farmacia.some((farm) => farm.codigoF == remedio.codigoF)){
                remedio.codigoF = prompt(`Código da farmácia inválido, insira outro.`)
            }
            remedio.push(objR)
        }
    }

    function vendaRemedios(rem){
        for(let i=0; i<5; i++){
            let objV = {
                codigoV: Number(prompt("Informe o código da farmácia: ")),
                vendaR: prompt("Informe o remédio a ser vendido: "),
                qtdV: Number(prompt("Informe a quantidade desejada: "))
            }

            let achou = false

            for(i=0; i<rem.length; i++){
                if(rem[i].codigoF == objV.codigoV && rem[i].nomeR == objR.vendaR){
                    achou = true
                    if(rem[i].qtdR >= objV.qtdV){
                        rem[i].qtdR = rem[i].qtdR - objV.qtdV
                    }
                    else{
                        alert("Quantidade em estoque insuficiente.")
                    }
                }
            }
            if(!achou){
                alert("Produto não encontrado")
            }
        }
    }
}
