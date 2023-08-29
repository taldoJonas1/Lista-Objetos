function exFarmacia(){
    let farmacia = []
    let remedio = []

    cadastroFarmacias(farmacia);
    cadastroRemedios(remedio);


    function cadastroFarmacias(vet){
        for(let i=0; i<5; i++){
            let obj = {
                codigoF: Number(prompt(`Insira o código da farmácia ${i+1}`)),
                nomeF: prompt(`Informe o nome da farmácia ${i+1}`).toUpperCase(),
                enderecoF: prompt(`Informe o endereço da farmacia ${i+1}`).toUpperCase()
            }
            while(farmacia.some((event) => event.codigo == farmacia.codigo)){
                farmacia.codigo = Number(prompt(`Insira o código da farmácia ${i+1}`))
            }
            vet.push(obj)
        }
    }

    function cadastroRemedios(rem){
        for(let i=0; i<5; i++){
            let obj2 = {
                codR: Number(prompt(`Insira o código do remédio ${i+1}`)),
                nomeR: Number(prompt(`Insira o nome do remédio ${i+1}`)).toUpperCase(),
                qtdF:,
                precoR:
            }
        }
    }
}
