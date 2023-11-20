package br.com.foodeasy.api.main.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import br.com.foodeasy.api.main.models.Entregador;
import br.com.foodeasy.api.main.repositories.EntregadorRepositorio;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class EntregadorServicoImpl implements EntregadorServico {

    @Autowired
    private EntregadorRepositorio entregadorRepositorio;

    @Override
    public ResponseEntity<?> saveEntregador(Entregador entregador) {
        try {
            return new ResponseEntity<>(entregadorRepositorio.save(entregador), HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public List<Entregador> getAllEntregadores() {
        return entregadorRepositorio.findAll();
    }

    @Override
    public ResponseEntity<?> getEntregador(Integer entregador_id) {
        try {
            Entregador entregador = entregadorRepositorio.findById(entregador_id).orElseThrow();
            return new ResponseEntity<>(entregador, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>("Entregador não encontrado.", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<?> updateEntregador(Entregador entregador, Integer entregador_id) {
        try {
            Entregador existingEntregador = entregadorRepositorio.findById(entregador_id).orElse(null);
            if (existingEntregador != null) {
                entregador.setEntregador_id(existingEntregador.getEntregador_id());
                entregadorRepositorio.save(entregador);
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Entregador não encontrado.", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public String deleteEntregador(Integer entregador_id) {
        entregadorRepositorio.deleteById(entregador_id);
        return "Entregador excluído com sucesso!";
    }
}
