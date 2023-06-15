function gerarLista(){
    const lista = [
        <span>1,&nbsp;</span>,
        <span>2,&nbsp;</span>,
        <span>3,&nbsp;</span>,
        <span>4,&nbsp;</span>,
        <span>5,&nbsp;</span>,
        <span>6,&nbsp;</span>,
        <span>7,&nbsp;</span>,
        <span>8,&nbsp;</span>,
        <span>9,&nbsp;</span>,
        <span>10</span>
    ] 
    return lista
}
export default function lista(){
    return(
        <div>
            {gerarLista()}
        </div>
    )
}