package br.com.foodeasy.api.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import br.com.foodeasy.api.main.models.FeedbackUser;
import br.com.foodeasy.api.main.models.Treinamento;
import br.com.foodeasy.api.main.repositories.TreinamentoRepositorio;

@Service
class TreinamentoServicoImpl implements TreinamentoServico {

    @Autowired
    private TreinamentoRepositorio treinamentoRepositorio;

    @Autowired
    private FeedbackUser feedbackUser;

    public ResponseEntity<?> saveTreinamento(Treinamento treinamento) {
        try {
            return new ResponseEntity<Treinamento>(treinamentoRepositorio.save(treinamento), HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            feedbackUser.setMessage(e.getMessage());
            return new ResponseEntity<FeedbackUser>(feedbackUser, HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public List<Treinamento> getAll() {
        return treinamentoRepositorio.findAll();
    }

    @Override
    public Treinamento get(Integer treinamento_id) {
        return treinamentoRepositorio.findById(treinamento_id).get();
    }

    @Override
    public void delete(Integer treinamento_id) {
        treinamentoRepositorio.deleteById(treinamento_id);
    }

    @Override
    public List<Treinamento> getAllPerRestaurante(Integer restaurante_id) {
        return treinamentoRepositorio.findAllByRestauranteId(restaurante_id);
    }
}
