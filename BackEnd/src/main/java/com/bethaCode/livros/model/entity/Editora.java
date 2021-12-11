package com.bethaCode.livros.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Getter@Setter
public class Editora {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotEmpty(message = "O campo nome é obrigatório.")
    @Column(nullable = false, length = 100)
    private String nome;

    @NotEmpty(message = "O campo país é obrigatório.")
    @Column(nullable = false, length = 30)
    private String pais;

    @NotNull(message = "O campo ano de fundação é obrigatório.")
    @Column(name = "ano_fundacao", nullable = false, length = 4)
    private Integer anoFundacao;

}
