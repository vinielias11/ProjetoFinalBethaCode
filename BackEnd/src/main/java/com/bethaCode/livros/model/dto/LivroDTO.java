package com.bethaCode.livros.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter@Setter
public class LivroDTO {

    private String nome;
    private Integer idAutor;
    private Integer idEditora;

    public LivroDTO(){}
}
