package com.bethaCode.livros.model.repository;

import com.bethaCode.livros.model.entity.Editora;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EditoraRepository extends JpaRepository<Editora, Integer> {
}
