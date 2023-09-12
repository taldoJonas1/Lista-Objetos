let exPoliticos = () => {
    let vetPartidos = []
    let vetPoliticos = []
    let opcao

    do{
        opcao = Number(prompt('Escolha \n1. Criar novo partido \n2. Adicionar político \n3. Iniciar votação\n4. Exibir mais votado\n5. Sair'))
        switch(opcao){
        case 1: novoPartido(vetPartidos)
            break
        case 2: addPolitico(vetPoliticos, vetPartidos)
            break
        case 3: iniciarVotacao(vetPartidos, vetPoliticos)
            break
        case 4: resultadoVotacao()
            break
        case 5: alert('O programa foi encerrado.')
            break
        default: alert('Escolha uma das opções de 1 a 5')
        }
    }while(opcao != 5)

    let novoPartido = (vet) => {
        let i = 1
        let obj = {
            codigo: Number(prompt(`Insira o código do partido ${i}.`)),
            nome: prompt(`Insira o nome do partido ${i}.`).toUpperCase(),
            sigla: prompt(`Insira a sigla do partido ${i}.`).toUpperCase(),
            presidente: prompt(`Insira o nome do presidente do partido ${i}.`),
            npoliticos: Number(prompt(`Insira o numero de politicos do partido ${i}.`)),
        }
        while(obj.nome.includes(obj.nome)){
            obj.nome = prompt(`Nome de partido já existente, insira um novo.`).toUpperCase()
        }
        while(obj.sigla.includes(obj.sigla)){
            obj.sigla = prompt(`Sigla de partido já existente, insira uma nova.`).toUpperCase()
        }
        vet.push(obj)
        i++
    }

    let addPolitico = (vet, partidos) => {
        if(partidos.lenght == 0){
            alert('Antes de adicionar um candidato, insira um partido.')
        }
        else{
        let n
            n = Number(prompt('Insira a quantidade de candidatos que vão ser adicionados.'))
            for(let i = 0; i < n; i++){
                let obj = {
                    codigo: Number(prompt(`Insira o código do partido que o candidato ${i+1} pertence.`)),
                    nome: prompt(`Insira o nome do candidato ${i+1}.`).toUpperCase(),
                    qtd: 0,
                    cargo: prompt(`Insira o cargo do candidato ${i+1}.`).toUpperCase()
                }
                while(!vetPartidos.codigo.includes(obj.codigo)){
                    obj.codigo = prompt(`Código inválido, digite um código já existente.`)
                }
                vet.push(obj)
            }
        }
    }
    
    let iniciarVotacao = (partidos, politicos) =>{
        if(partidos.lenght == 0){
            alert('Antes de iniciar uma votação, insira um partido.')
        }
        else if(politicos.lenght == 0){
            alert('Antes de iniciar uma votação, adicione um candidato a um partido.')
        }
        else{
            alert('VOTAÇÃO INICIADA')
            let n = Number(prompt('Insira a quantidade de votos que serão realizados.'))
            let achou = false
            for(let i = 0; i < n; i++){
                let voto = Number(prompt(`Digite o código do candidato do ${i+1}° voto.`))
                let nomeVoto = prompt(`Digite o nome do candidato do ${i+1}° voto.`).toUpperCase()
                for(i = 0; i < politicos.lenght; i++){
                    if(politicos[i].codigo == voto && politicos[i].nome == nomeVoto){
                        politicos[i].qtd++
                        alert('Voto computado com sucesso.')
                        achou = true
                    }
                }
                if(!achou){
                    alert('Código ou nome do candidato inválido.')
                }
            }
        }
    }
}
