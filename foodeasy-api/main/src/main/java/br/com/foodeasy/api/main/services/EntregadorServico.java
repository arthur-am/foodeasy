package br.com.foodeasy.api.main.services;

import org.springframework.http.ResponseEntity;
import br.com.foodeasy.api.main.models.Entregador;

import java.util.List;

public interface EntregadorServico {

    ResponseEntity<?> saveEntregador(Entregador entregador);

    List<Entregador> getAllEntregadores();

    ResponseEntity<?> getEntregador(Integer entregador_id);

    ResponseEntity<?> updateEntregador(Entregador entregador, Integer entregador_id);

    String deleteEntregador(Integer entregador_id);
}
