package br.com.foodeasy.api.main.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.foodeasy.api.main.models.Restaurante;

@Repository
public interface RestauranteRepositorio extends JpaRepository<Restaurante, Integer> {

}
