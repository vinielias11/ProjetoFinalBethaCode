package com.bethaCode.livros.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;

@Entity
@Getter@Setter
public class Autor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotEmpty(message = "O campo nome é obrigatório!")
    @Column(nullable = false, length = 100)
    private String nome;

    @NotEmpty(message = "O campo nacionalidade é obrigatório!")
    @Column(nullable = false, length = 100)
    private String nacionalidade;

    @NotEmpty(message = "O campo data de nascimento é obrigatório!")
    @Column(nullable = false, name = "data_nascimento")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataNascimento;

}
