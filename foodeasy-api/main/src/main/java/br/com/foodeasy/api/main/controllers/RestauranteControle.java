package br.com.foodeasy.api.main.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import br.com.foodeasy.api.main.models.Restaurante;
import br.com.foodeasy.api.main.services.RestauranteServico;
import java.util.List;

@RestController
@RequestMapping("/restaurantes")
class RestauranteControle {
    @Autowired
    private RestauranteServico restauranteService;

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody Restaurante restaurante, Integer usuario_id) {
        return restauranteService.saveRestaurante(restaurante, usuario_id);
    }

    @GetMapping("/getAll")
    public List<Restaurante> getAllRestaurantes() {
        return restauranteService.getAllRestaurantes();
    }
}
