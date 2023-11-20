package br.com.foodeasy.api.main.services;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import br.com.foodeasy.api.main.models.Usuario;
import br.com.foodeasy.api.main.repositories.UsuarioRepositorio;
import java.security.Key;
import java.util.Date;

@Service
public class AuthServiceImpl implements AuthService {

    private static final long TOKEN_EXPIRATION_TIME = 864000000; // 10 dias em milissegundos
    private final UsuarioRepositorio usuarioRepositorio;
    private final BCryptPasswordEncoder passwordEncoder;
    private final Key jwtKey = Keys.secretKeyFor(SignatureAlgorithm.HS512);

    public AuthServiceImpl(UsuarioRepositorio usuarioRepositorio, BCryptPasswordEncoder passwordEncoder) {
        this.usuarioRepositorio = usuarioRepositorio;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public ResponseEntity<?> login(String login, String senha) {
        Usuario usuario = usuarioRepositorio.findByLogin(login);

        if (usuario == null) {
            return new ResponseEntity<>("Credenciais inválidas", HttpStatus.UNAUTHORIZED);
        }

        String senhaUsuarioBanco = usuario.getSenha();

        if (!passwordEncoder.matches(senha, senhaUsuarioBanco)) {
            return new ResponseEntity<>("Credenciais inválidas", HttpStatus.UNAUTHORIZED);
        }

        String token = generateToken(usuario.getLogin());

        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    private String generateToken(String subject) {
        return Jwts.builder()
                .setSubject(subject)
                .signWith(jwtKey, SignatureAlgorithm.HS512)
                .setExpiration(new Date(System.currentTimeMillis() + TOKEN_EXPIRATION_TIME))
                .compact();
    }

    public ResponseEntity<?> validateToken(String token) {
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(jwtKey)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            String username = claims.getSubject();

            return new ResponseEntity<>("Token válido para o usuário: " + username, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Token inválido", HttpStatus.UNAUTHORIZED);
        }
    }
}
