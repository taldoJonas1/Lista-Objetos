let exPoliticos = () => {
    let vet = []
    let opcao

    do{
        opcao = Number(prompt('Escolha \n1. Criar novo partido \n2. Adicionar político \n3. Iniciar votação\n4. Exibir mais votado\n5. Sair'))
        switch(opcao){
        case 1: novoPartido()
            break
        case 2: addPolitico()
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
}
