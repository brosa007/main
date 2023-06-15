function gerarLista(final = 10){
    const lista = []
    for(let i = 1; i<=final; i++){
        lista.push(<span>{i},&nbsp;</span>)
    }
    return lista
}

export default function lista(){
    return (
        <div>
            <div>
                {gerarLista(20)}
            </div>
            <div>
                {gerarLista(10)}
            </div>
        </div>
    )
}