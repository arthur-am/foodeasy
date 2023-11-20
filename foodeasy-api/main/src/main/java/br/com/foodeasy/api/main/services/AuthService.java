package br.com.foodeasy.api.main.services;

import org.springframework.http.ResponseEntity;

public interface AuthService {
    ResponseEntity<?> login(String login, String senha);

    ResponseEntity<?> validateToken(String token);
}
