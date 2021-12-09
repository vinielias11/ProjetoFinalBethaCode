package com.bethaCode.livros.rest;

import com.bethaCode.livros.model.dto.LivroDTO;
import com.bethaCode.livros.model.entity.Autor;
import com.bethaCode.livros.model.entity.Editora;
import com.bethaCode.livros.model.entity.Livro;
import com.bethaCode.livros.model.repository.AutorRepository;
import com.bethaCode.livros.model.repository.EditoraRepository;
import com.bethaCode.livros.model.repository.LivroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/livros")
@CrossOrigin("http://localhost:4200")
@RequiredArgsConstructor
public class LivroController {

    private final LivroRepository livroRepository;
    private final EditoraRepository editoraRepository;
    private final AutorRepository autorRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Livro salvar(@RequestBody LivroDTO livroDTO){

        Integer idEditora = livroDTO.getIdEditora();
        Editora editora = editoraRepository
                            .findById(idEditora)
                            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                                          "A editora " + idEditora + " não existe na aplicação!"));

        Integer idAutor = livroDTO.getIdAutor();
        Autor autor = autorRepository
                            .findById(idAutor)
                            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                                            "O autor " + idAutor + " não existe na aplicação!"));

        Livro livro = new Livro();
        livro.setTitulo(livroDTO.getTitulo());
        livro.setNumeroPaginas(livroDTO.getNumeroPaginas());
        livro.setAnoPublicacao(livroDTO.getAnoPublicacao());
        livro.setGenero(livroDTO.getGenero());
        livro.setIdioma(livroDTO.getIdioma());
        livro.setAutor(autor);
        livro.setEditora(editora);

        return livroRepository.save(livro);
    }

    @GetMapping("{id}")
    public Livro acharPorId(@PathVariable Integer id){
        return livroRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                                                "Livro " + id + " não cadastrado!"));
    }

    @GetMapping
    public List<Livro> pesquisar(
            @RequestParam(value = "nome", required = false, defaultValue = "") String nomeDoAutor){

        return livroRepository.acharAutorPorNome("%" + nomeDoAutor + "%");
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id){
        livroRepository
                .findById(id)
                .map(livro -> {
                    livroRepository.delete(livro);
                    return Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                                                "Livro " + id + " não cadastrado!"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @RequestBody LivroDTO livroAtualizado){

        Integer idEditora = livroAtualizado.getIdEditora();
        Editora editora = editoraRepository
                            .findById(idEditora)
                            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                                                "A editora " + idEditora + " não existe na aplicação!"));

        Integer idAutor = livroAtualizado.getIdAutor();
        Autor autor = autorRepository
                            .findById(idAutor)
                            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                                                "O autor " + idAutor + " não existe na aplicação!"));

        /*private String titulo;
        private Integer numeroPaginas;
        private Integer anoPublicacao;
        private String genero;
        private String idioma;
        private Integer idAutor;
        private Integer idEditora; */

        livroRepository
                .findById(id)
                .map(livro -> {
                    livro.setTitulo(livroAtualizado.getTitulo());
                    livro.setNumeroPaginas(livroAtualizado.getNumeroPaginas());
                    livro.setAnoPublicacao(livroAtualizado.getAnoPublicacao());
                    livro.setGenero(livroAtualizado.getGenero());
                    livro.setIdioma(livroAtualizado.getIdioma());
                    livro.setAutor(autor);
                    livro.setEditora(editora);
                    return livroRepository.save(livro);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                                                "Livro " + id + " não cadastrado!"));
    }
}
