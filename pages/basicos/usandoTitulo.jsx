import Titulo from "@/components/Titulo"

export default function usandoTitulo(){
    return(
        <div>
            <Titulo
                principal="Página de Cadastro"
                secundario="Incluir, alterar e excluir coisas"
            ></Titulo>
            <Titulo
                principal="Página de Login"
                secundario="Informe seu email e senha"
                pequeno={true}
            ></Titulo>
            <Titulo
                principal="Página de Principal"
                secundario="Aqui temos todas as informações"
                pequeno
            ></Titulo>
        </div>
    )
}