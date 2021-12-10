package com.bethaCode.livros.rest;

import com.bethaCode.livros.model.entity.Editora;
import com.bethaCode.livros.model.repository.EditoraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("api/editoras")
@CrossOrigin("http://localhost:4200")
public class EditoraController {

    private final EditoraRepository repository;

    @Autowired
    public EditoraController(EditoraRepository repository){
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Editora salvar(@Valid @RequestBody Editora editora){
        return repository.save(editora);
    }

    @GetMapping("{id}")
    public Editora acharPorId(@PathVariable Integer id){
        return repository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                                            "Editora " +id+ " não cadastrada!"));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id){
        repository
                .findById(id)
                .map(editora -> {
                    repository.delete(editora);
                    return Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                                            "Editora " +id+ " não cadastrada!"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @Valid @RequestBody Editora editoraAtualizada){
        repository
                .findById(id)
                .map(editora -> {
                    editora.setNome(editoraAtualizada.getNome());
                    return repository.save(editora);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
