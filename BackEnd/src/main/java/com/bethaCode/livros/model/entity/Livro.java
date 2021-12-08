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

    @NotEmpty(message = "O campo título é obrigatório.")
    @Column(nullable = false, length = 100)
    private String titulo;

    @NotEmpty(message = "O campo número de páginas é obrigatório.")
    @Column(nullable = false, length = 5)
    private Integer numeroPaginas;

    @NotEmpty(message = "O campo ano de publicação é obrigatório.")
    @Column(nullable = false, length = 4)
    private Integer anoPublicacao;

    @NotEmpty(message = "O campo gênero é obrigatório.")
    @Column(nullable = false, length = 20)
    private String genero;

    @NotEmpty(message = "O campo idioma é obrigatório.")
    @Column(nullable = false, length = 15)
    private String idioma;

    @ManyToOne
    @NotEmpty(message = "O campo autor é obrigatório.")
    @JoinColumn(name = "id_autor")
    private Autor autor;

    @ManyToOne
    @NotEmpty(message = "O campo editora é obrigatório.")
    @JoinColumn(name = "id_editora")
    private Editora editora;
}
