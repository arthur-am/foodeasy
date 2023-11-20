package br.com.foodeasy.api.main.services;

import java.util.List;
import org.springframework.http.ResponseEntity;
import br.com.foodeasy.api.main.models.Usuario;

public interface UsuarioServico {

    public ResponseEntity<?> saveUsuario(Usuario user);

    public Usuario get(Integer usuario_id);

    public void delete(Integer usuario_id);

    public List<Usuario> getAllUsuarios();

    Usuario getByLogin(String login);
}
