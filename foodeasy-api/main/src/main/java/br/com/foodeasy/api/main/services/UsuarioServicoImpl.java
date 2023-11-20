package br.com.foodeasy.api.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import br.com.foodeasy.api.main.models.FeedbackUser;
import br.com.foodeasy.api.main.models.Usuario;
import br.com.foodeasy.api.main.repositories.UsuarioRepositorio;

@Service
class UsuarioServicoImpl implements UsuarioServico {

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Autowired
    private FeedbackUser feedbackUser;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public ResponseEntity<?> saveUsuario(Usuario usuario) {
        try {
            validateUser(usuario);
            usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
            return new ResponseEntity<Usuario>(usuarioRepositorio.save(usuario), HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            feedbackUser.setMessage(e.getMessage());
            return new ResponseEntity<FeedbackUser>(feedbackUser, HttpStatus.BAD_REQUEST);
        }
    }

    private void validateUser(Usuario usuario) {
        if (usuario.getNome().isEmpty()) {
            throw new IllegalArgumentException("Nome do usuário obrigatório!");
        }
        if (usuario.getEmail().isEmpty()) {
            throw new IllegalArgumentException("E-mail do usuário obrigatório!");
        }
    }

    @Override
    public List<Usuario> getAllUsuarios() {
        return usuarioRepositorio.findAll();
    }

    @Override
    public Usuario get(Integer usuario_id) {
        return usuarioRepositorio.findById(usuario_id).get();
    }

    @Override
    public void delete(Integer usuario_id) {
        usuarioRepositorio.deleteById(usuario_id);
    }

    @Override
    public Usuario getByLogin(String login) {
        return usuarioRepositorio.findByLogin(login);
    }
}
