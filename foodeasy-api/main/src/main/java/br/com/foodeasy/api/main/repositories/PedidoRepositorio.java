package br.com.foodeasy.api.main.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.foodeasy.api.main.models.Pedido;

@Repository
public interface PedidoRepositorio extends JpaRepository<Pedido, Integer> {

}
