let exProva = () => {
    let vetAlbum = []
    let vetFigurinha = []
    let venda = []
    let opcao

    do{
        opcao = Number(prompt('Escolha \n1. Cadastrar novo album \n2. Cadastrar nova figurinha \n3. Comprar uma figurinha \n4. Trocar uma figurinha \n5. Figurinhas disponíveis pra troca \n6. Figurinha mais popular \n7. Sair'))
        switch(opcao){
        case 1: novoAlbum(vetAlbum)
            break
        case 2: novaFigurinha(vetFigurinha, vetAlbum)
            break
        case 3: comprarFigurinha(vetFigurinha, venda)
            break
        case 4: trocarFigurinha(vetFigurinha)
            break
        case 5: figurinhasTroca()
            break
        case 6: figurinhaMaisPop()
            break
        case 7: alert('O programa foi encerrado.')
            break
        default: alert('Escolha uma das opções de 1 a 7')
        }
    }while(opcao != 7)

    let novoAlbum = (vet) => {
        let i = 1
        let obj = {
            id: Number(prompt(`Informe o ID do álbum ${i}.`)),
            nome: prompt(`Insira o nome do álbum ${i}.`).toUpperCase(),
            empresa: prompt(`Insira o nome da empresa que faz o álbum ${i}.`).toUpperCase()
        }
        while(obj.id.includes(obj.id)){
            obj.id = Number(prompt(`ID de álbum já existente, insira um novo.`))
        }
        while(obj.nome.includes(obj.nome)){
            obj.nome = prompt(`Nome de álbum já existente, insira um novo.`).toUpperCase()
        }
        vet.push(obj)
        alert(`Álbum ${i} inserido com sucesso.`)
        i++
    }

    let novaFigurinha = (vet, album) => {
        let obj = {
            nro: Number(prompt(`Insira o número no verso da figurinha.`)),
            nome: prompt(`Insira o nome do jogador na figurinha.`).toUpperCase(),
            time: prompt(`Insira o nome do time da figurinha.`).toUpperCase(),
            qtd: Number(prompt('Informe a quantidade em estoque da figurinha.')),
            id: Number(prompt(`Informe o ID do álbum que a figurinha pertence.`))
        }
        while(obj.nro.includes(obj.nro)){
            obj.nro = Number(prompt(`Figurinha já cadastrada, insira uma nova.`))
        }
        while(!album.id.includes(obj.id)){
            obj.id = Number(prompt(`ID de álbum inexistente, insira um que já exista ou cadastre um novo álbum.`))
        }
        vet.push(obj)
    }

    comprarFigurinha = (figurinha, venda) => {
        let figCompra = Number(prompt('Informe quantas figurinhas DIFERENTES deseja comprar'))
        if(figCompra <= 0){
            figCompra = Number(prompt('Valor menor ou igual a 0, insira no mínimo 1.'))
        }
        else{
            for(let i = 0; i < figCompra; i++){
                let obj = {
                    id: Number(prompt('Insira o ID do álbum que a figurinha pertence.')),
                    nro: Number(prompt('Informe o número da figurinha.')),
                    qtd: Number(prompt('Informe a quantidade desta figurinha que deseja comprar.'))
                }
                venda.push(obj)
            }
        }
        let achou = false
        for(let i = 0; i < figurinha.lenght; i++){
            if(figurinha[i].id == obj.id && figurinha[i].nro == obj.nro){
                achou = true
                if(figurinha[i].qtd >= obj.qtd){
                    figurinha[i].qtd = figurinha[i].qtd - obj.qtd
                    alert('Compra realizada com sucesso!')
                }
                else{
                    alert('Quantidade em estoque insuficiente.')
                }
            }
        }
        if(!achou){
            alert('Figurinha não encontrada.')
        }
    }

    trocarFigurinha = (figurinha) => {
        let obj = {
            id1: Number(prompt('Informe o ID do álbum que sua figurinha pertence.')),
            nro1: Number(prompt('Informe o número da sua figurinha.')),
            id2: Number(prompt('Informe o ID do álbum que a figurinha desejada pertence.')),
            nro2: Number(prompt('Inform o número da figurinha desejada.'))
        }
        for(let i = 0; i < figurinha.lenght; i++){
            if(figurinha[i].id == obj.id2 && figurinha[i].nro == obj.nro2){
                achou = true
                if(figurinha[i].qtd >= obj.qtd){
                    figurinha[i].qtd = figurinha[i].qtd - 1
                    alert('Troca realizada com sucesso!')
                }
                else{
                    alert('Quantidade em estoque insuficiente.')
                }
            }
        }
        if(!achou){
            alert('Figurinha não encontrada.')
        }
    }
}
