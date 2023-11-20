package br.com.foodeasy.api.main.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.foodeasy.api.main.models.Entregador;

@Repository
public interface EntregadorRepositorio extends JpaRepository<Entregador, Integer> {

}
