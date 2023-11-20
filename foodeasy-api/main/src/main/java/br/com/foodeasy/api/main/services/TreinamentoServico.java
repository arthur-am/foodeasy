package br.com.foodeasy.api.main.services;

import java.util.List;
import org.springframework.http.ResponseEntity;
import br.com.foodeasy.api.main.models.Treinamento;

public interface TreinamentoServico {

    public ResponseEntity<?> saveTreinamento(Treinamento treinamento);

    public Treinamento get(Integer treinamento_id);

    public void delete(Integer treinamento_id);

    public List<Treinamento> getAll();

    public List<Treinamento> getAllPerRestaurante(Integer restaurante_id);

}
