package com.bethaCode.livros.rest;

import com.bethaCode.livros.model.entity.Autor;
import com.bethaCode.livros.model.repository.AutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("api/autores")
@CrossOrigin("http://localhost:4200")
public class AutorController {

    private final AutorRepository repository;

    @Autowired
    public AutorController(AutorRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Autor salvar(@Valid @RequestBody Autor autor) {
        return repository.save(autor);
    }

    @GetMapping("{id}")
    public Autor acharPorId(@PathVariable Integer id) {
        return repository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                                                "Autor " +id+ " não cadastrado!"));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id) {
        repository
                .findById(id)
                .map(autor -> {
                    repository.delete(autor);
                    return Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                                                "Autor " +id+ " não cadastrado!"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @Valid @RequestBody Autor autorAtualizado) {
        repository
                .findById(id)
                .map(autor -> {
                    autor.setNome(autorAtualizado.getNome());
                    return repository.save(autor);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                                                "Autor " +id+ " não cadastrado!"));
    }
}
