package com.bethaCode.livros.model.repository;

import com.bethaCode.livros.model.entity.Autor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AutorRepository extends JpaRepository<Autor, Integer> {
}
