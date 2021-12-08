package com.bethaCode.livros.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter@Setter
public class LivroDTO {

    private String titulo;
    private Integer idAutor;
    private Integer idEditora;

    public LivroDTO(){}
}
