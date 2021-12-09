package com.bethaCode.livros;

import com.bethaCode.livros.model.dto.LivroDTO;
import com.bethaCode.livros.model.entity.Livro;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LivrosApplication {

    public static void main(String[] args) {

        SpringApplication.run(LivrosApplication.class, args);
    }
}
