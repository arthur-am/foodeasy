package br.com.foodeasy.api.main.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import br.com.foodeasy.api.main.models.Treinamento;

import java.util.List;

@Repository
public interface TreinamentoRepositorio extends JpaRepository<Treinamento, Integer> {
    @Query("SELECT t FROM Treinamento t WHERE t.restaurante_id = :restaurante_id")
    List<Treinamento> findAllByRestauranteId(@Param("restaurante_id") Integer restaurante_id);
}
