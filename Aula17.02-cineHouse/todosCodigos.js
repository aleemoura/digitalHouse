let catalogo = [
    {
        codigo: 1,
        titulo: 'Titanic',
        duracao: 3.5,
        atores: ['Leonardo Dicaprio','Kate Winslet'],
        anoDeLancamento: 1997,
        emCartaz:false
    },
     {
        codigo: 2,
        titulo: 'Encanto',
        duracao: 2,
        atores: ['Mirabel Madrigal','bruno Madrigal'],
        anoDeLancamento: 2021,
        emCartaz:true

    }
]


//Fiz dessa forma pro usuário não precisar escrever o objeto literal sempre que rodar a function. Funcionou. 

function adicionarFilmes(codigo,titulo,duracao,atores,anoDeLancamento,emCartaz){
    let novoFilme = {
        Codigo: null,
        Titulo: null,
        Duracao: null,
        Atores: null,
        AnoDeLancamento: null,
        emCartaz: null,
    } 
    novoFilme.Codigo = codigo;
    novoFilme.Titulo = titulo;
    novoFilme.Duracao = duracao;
    novoFilme.Atores = atores;
    novoFilme.AnoDeLancamento = anoDeLancamento;
    novoFilme.emCartaz = emCartaz;
    catalogo.push(novoFilme);
    return catalogo;
    }

    
    //Adicionar um novo elemento na array

let adicionarFilme = filme => catalogo.push(filme)

adicionarFilme(
    {
        codigo: 3,
        titulo: 'Eternos',
        duracao: 3,
        atores: ['Starfox','Thena'],
        anoDeLancamento: 2021,
        emCartaz:true 
    }
)

console.log(catalogo)


let buscarFilme = codigo => {
    for(let i = 0; i < buscarFilme.length; i++) {
        if(catalogo[i].codigo === codigo){
            return catalogo[i]
        }
    }
}


let buscarFilme = codigo => {
    for(let i = 0; i < catalogo.length; i++) {
        if(catalogo[i].codigo === codigo){
            return catalogo[i]
        }
    }
}

console.log(buscarFilme(2))


let catalogo = [
    {
        codigo: 1,
        titulo: 'Titanic',
        duracao: 3.5,
        atores: ['Leonardo Dicaprio','Kate Winslet'],
        anoDeLancamento: 1997,
        emCartaz:false
    },
    {
        codigo: 2,
        titulo: 'Encanto',
        duracao: 2,
        atores: ['Mirabel Madrigal','bruno Madrigal'],
        anoDeLancamento: 2021,
        emCartaz:true

    }
]



let buscarFilme = codigo => {
    for(let i = 0; i < catalogo.length; i++) {
        if(catalogo[i].codigo === codigo){
            return catalogo[i]
        }
    }
}

console.log(buscarFilme(2))


let alterarStatusEmCartaz = codigo => {
    for(let i = 0; i < buscarFilme.length; i++) {
        if(catalogo[i].emCartaz){
            catalogo[i].emCartaz = false
        }else{
            catalogo[i].emCartaz = true
        }
    }
}

console.log(alterarStatusEmCartaz(1))
console.log(catalogo[0])


//listar filmes em cartaz na array

let listarTodosOsFilmes = () => {
    for(let i = 0; i < catalogo.length; i++){
        console.log(catalogo[i].titulo)
    }
}
//listarTodosOsFilmes()

//listar apenas filmes em cartaz na array
let listarFilmesEmCartaz = () => {
    for(let i = 0; i < catalogo.length; i++){
        if(catalogo[i].emCartaz){
            console.log(catalogo[i].titulo)
        }
    }
}


let alterarStatusEmCartaz = codigo => {
    for(let i = 0; i < buscarFilme.length; i++) {
        // if(catalogo[i].emCartaz){
        //     catalogo[i].emCartaz = false
        // }else{
        //     catalogo[i].emCartaz = true
        // }
        return catalogo[i].emCartaz ? catalogo[i].emCartaz = false : catalogo[i].emCartaz = true
    }
}

let catalogo = [
    { 
        codigo: 1, 
        titulo: 'Jogos vorazes',
        duracao: 1.5, 
        atores: ['Jennifer Lawrence','Josh Hutcherson', 'Liam Hemsworth'],
        anoDeLancamento: 2012,
        emCartaz: false
    },
    { 
        codigo: 2, 
        titulo: 'Encanto',
        duracao: 2, 
        atores: ['Mirabel Madrigal','Bruno Madrigal', 'Luisa Madrigal'],
        anoDeLancamento: 2021,
        emCartaz: true
    },
    { 
        codigo: 3, 
        titulo: 'A culpa é das estrelas',
        duracao: 4, 
        atores: ['Shailene Woodley','Ansel Elgort', 'natt Wolff'],
        anoDeLancamento: 2014,
        emCartaz: false
    },
    { 
        codigo: 4, 
        titulo: 'Como se fosse a primeira vez',
        duracao: 3, 
        atores: ['Adam Sandler','Drew Barrimore', 'Rob Schneider'],
        anoDeLancamento: 2004,
        emCartaz: false
    }]
