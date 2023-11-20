package br.com.foodeasy.api.main.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import br.com.foodeasy.api.main.models.FeedbackUser;
import br.com.foodeasy.api.main.models.Restaurante;
import br.com.foodeasy.api.main.models.Usuario;
import br.com.foodeasy.api.main.repositories.RestauranteRepositorio;
import br.com.foodeasy.api.main.repositories.UsuarioRepositorio;

@Service
public class RestauranteServicoImpl implements RestauranteServico {

    @Autowired
    private RestauranteRepositorio restauranteRepositorio;

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Autowired
    private FeedbackUser feedbackUser;

    @Override
    public ResponseEntity<?> saveRestaurante(Restaurante restaurante, Integer usuario_id) {
        try {
            validateRestaurante(restaurante);

            // Verifica se o usuário existe
            Usuario usuario = usuarioRepositorio.findById(usuario_id)
                    .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado"));

            // Associa o usuário ao restaurante
            restaurante.setUsuario(usuario);

            return new ResponseEntity<>(restauranteRepositorio.save(restaurante), HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            feedbackUser.setMessage(e.getMessage());
            return new ResponseEntity<>(feedbackUser, HttpStatus.BAD_REQUEST);
        }
    }

    private void validateRestaurante(Restaurante restaurante) {
        if (restaurante.getNome() == null || restaurante.getNome().isEmpty()) {
            throw new IllegalArgumentException("Nome do restaurante obrigatório!");
        }
        if (restaurante.getEndereco() == null || restaurante.getEndereco().isEmpty()) {
            throw new IllegalArgumentException("Endereço do restaurante obrigatório!");
        }
    }

    @Override
    public List<Restaurante> getAllRestaurantes() {
        return restauranteRepositorio.findAll();
    }

    @Override
    public Restaurante get(Integer restaurante_id) {
        return restauranteRepositorio.findById(restaurante_id).orElse(null);
    }

    @Override
    public void delete(Integer restaurante_id) {
        restauranteRepositorio.deleteById(restaurante_id);
    }
}
