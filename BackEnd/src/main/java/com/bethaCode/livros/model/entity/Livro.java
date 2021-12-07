package com.bethaCode.livros.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Getter@Setter
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotEmpty(message = "O nome não pode ser vazio!")
    @Column(nullable = false, length = 100)
    private String nome;

    @ManyToOne
    @NotNull(message = "O autor não pode ser nulo!")
    @JoinColumn(name = "id_autor")
    private Autor autor;

    @ManyToOne
    @NotNull(message = "A editora não pode ser nula!")
    @JoinColumn(name = "id_editora")
    private Editora editora;
}
