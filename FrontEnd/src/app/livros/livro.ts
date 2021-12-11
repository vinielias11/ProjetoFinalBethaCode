export class Livro {
    id: number;
    titulo: string;
    numeroPaginas: number;
    idAutor: number;
    idEditora: number;
    anoPublicacao: number;
    genero: string;
    idioma: string;
    // Estas variáveis são para quando retornar ao cadastro termos acesso ao id pela notacao ponto.
    autor: Livro;
    editora: Livro;
}