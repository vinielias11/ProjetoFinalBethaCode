package com.bethaCode.livros.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Getter@Setter
public class Editora {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotEmpty(message = "O campo nome é obrigatório.")
    @Column(nullable = false, length = 100)
    private String nome;
}
