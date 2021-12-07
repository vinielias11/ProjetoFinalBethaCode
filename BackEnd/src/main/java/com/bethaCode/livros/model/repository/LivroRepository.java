package com.bethaCode.livros.model.repository;

import com.bethaCode.livros.model.entity.Livro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LivroRepository extends JpaRepository<Livro, Integer> {

    @Query(" select l from Livro l join l.autor a where upper(a.nome) like upper(:nome) ")
    List<Livro> acharAutorPorNome(@Param("nome") String nome);
}
