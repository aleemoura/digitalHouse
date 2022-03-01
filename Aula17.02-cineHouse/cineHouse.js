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
    