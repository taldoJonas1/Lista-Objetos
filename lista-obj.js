function exe1(){
    let obj = {
        a: Number(prompt(`Informe o lado A do triângulo: `)),
        b: Number(prompt(`Informe o lado B do triângulo: `)),
        c: Number(prompt(`Informe o lado C do triângulo: `)),
        delta: 0
    }
    obj.delta = (obj.b **2) - (4 * obj.a * obj.b)

    alert(`O valor do Delta é ${obj.delta}`) 
}

function exe2(){
    let somaMedias = 0
    for(let i = 0; i > 10; i++){
        let obj = {
        cod: Number(prompt(`Informe o codigo do aluno: `)),
        nome: (prompt(`Informe o nome do aluno: `)),
        p1: Number(prompt(`Informe a nota da prova 1 do aluno: `)),
        p2: Number(prompt(`Informe a nota da prova 2 do aluno: `)),
        media: 0
        }
        obj.media = (obj.p1 + obj.p2) / 2
        alert(`O aluno ${obj.nome} tem média ${obj.media}`)
        somaMedias = somaMedias + obj.media
    }
    alert(`A média da turma é ${somaMedias/10}`)
}
