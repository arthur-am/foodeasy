package br.com.foodeasy.api.main.controllers;

import java.util.List;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.foodeasy.api.main.models.Usuario;
import br.com.foodeasy.api.main.services.AuthService;
import br.com.foodeasy.api.main.services.UsuarioServico;

@RestController
@RequestMapping("/usuarios")
class UsuarioControle {
    @Autowired
    private UsuarioServico usuarioServico;

    @Autowired
    private AuthService authService;

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody Usuario usuario) {
        return usuarioServico.saveUsuario(usuario);
    }

    @GetMapping("/getAll")
    public List<Usuario> getAllUsuarios() {
        return usuarioServico.getAllUsuarios();
    }

    @GetMapping("/{usuario_id}")
    public ResponseEntity<?> get(@PathVariable Integer usuario_id) {
        try {
            Usuario user = usuarioServico.get(usuario_id);
            return new ResponseEntity<Usuario>(user, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{usuario_id}")
    public ResponseEntity<?> update(@RequestBody Usuario usuario, @PathVariable Integer usuario_id) {
        try {
            Usuario existingUser = usuarioServico.get(usuario_id);
            if (existingUser != null) {
                usuario.setUsuario_id(existingUser.getUsuario_id());
                usuarioServico.saveUsuario(usuario);
                return new ResponseEntity<Usuario>(HttpStatus.OK);
            } else {
                return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
            }
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{usuario_id}")
    public String delete(@PathVariable Integer usuario_id) {
        usuarioServico.delete(usuario_id);
        return "Usuário excluído com sucesso!";
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) {
        String login = usuario.getLogin();
        String senha = usuario.getSenha();

        return authService.login(login, senha);
    }
}
