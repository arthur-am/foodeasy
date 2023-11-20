package br.com.foodeasy.api.main.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import br.com.foodeasy.api.main.models.Entregador;
import br.com.foodeasy.api.main.services.EntregadorServico;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/entregadores")
public class EntregadorControle {

    @Autowired
    private EntregadorServico entregadorServico;

    @PostMapping("/add")
    public ResponseEntity<?> addEntregador(@RequestBody Entregador entregador) {
        return entregadorServico.saveEntregador(entregador);
    }

    @GetMapping("/getAll")
    public List<Entregador> getAllEntregadores() {
        return entregadorServico.getAllEntregadores();
    }

    @GetMapping("/{entregador_id}")
    public ResponseEntity<?> getEntregador(@PathVariable Integer entregador_id) {
        try {
            ResponseEntity<?> response = entregadorServico.getEntregador(entregador_id);
            if (response.getBody() instanceof Entregador) {
                Entregador entregador = (Entregador) response.getBody();
                return new ResponseEntity<>(entregador, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{entregador_id}")
    public ResponseEntity<?> updateEntregador(@RequestBody Entregador entregador, @PathVariable Integer entregador_id) {
        try {
            ResponseEntity<?> response = entregadorServico.updateEntregador(entregador, entregador_id);
            return response;
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{entregador_id}")
    public ResponseEntity<String> deleteEntregador(@PathVariable Integer entregador_id) {
        String mensagem = entregadorServico.deleteEntregador(entregador_id);
        return new ResponseEntity<>(mensagem, HttpStatus.OK);
    }
}
