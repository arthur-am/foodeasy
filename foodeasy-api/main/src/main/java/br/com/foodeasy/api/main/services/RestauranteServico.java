package br.com.foodeasy.api.main.services;

import java.util.List;
import org.springframework.http.ResponseEntity;

import br.com.foodeasy.api.main.models.Restaurante;

public interface RestauranteServico {

    Restaurante get(Integer restaurante_id);

    void delete(Integer restaurante_id);

    List<Restaurante> getAllRestaurantes();

    ResponseEntity<?> saveRestaurante(Restaurante restaurante, Integer usuario_id);
}
