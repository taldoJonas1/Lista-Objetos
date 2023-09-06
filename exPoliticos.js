let exPoliticos = () => {
    let vetPartidos = []
    let vetPoliticos = []
    let opcao

    do{
        opcao = Number(prompt('Escolha \n1. Criar novo partido \n2. Adicionar político \n3. Iniciar votação\n4. Exibir mais votado\n5. Sair'))
        switch(opcao){
        case 1: novoPartido(vetPartidos)
            break
        case 2: addPolitico(vetPoliticos)
            break
        case 3: iniciarVotacao()
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
            nome: prompt(`Insira o nome do partido ${i}.`).toUpperCase,
            sigla: prompt(`Insira a sigla do partido ${i}.`).toUpperCase,
            presidente: prompt(`Insira o nome do presidente do partido ${i}.`),
            npoliticos: Number(prompt(`Insira o numero de politicos do partido ${i}.`)),
        }
        while(obj.nome.includes(obj.nome)){
            obj.nome = prompt(`Nome de partido já existente, insira um novo.`).toUpperCase
        }
        while(obj.sigla.includes(obj.sigla)){
            obj.sigla = prompt(`Sigla de partido já existente, insira uma nova.`).toUpperCase
        }
        vet.push(obj)
        i++
    }

    let addPolitico = (vet) => {
        let n
        n = Number(prompt('Insira a quantidade de politicos que vão ser adicionados.'))
        for(let i = 0; i < n; i++){
            let obj = {
                codigo: prompt(`Insira o código do partido que o político ${i+1} pertence.`),
                nome: prompt(`Insira o nome do politico ${i+1}.`),
                qtd: Number(prompt(`Insira a quantidade de votos na eleição atual do político ${i+1}`))
            }
            while(!vetPartidos.codigo.includes(obj.codigo)){

            }
        }
    }
}
