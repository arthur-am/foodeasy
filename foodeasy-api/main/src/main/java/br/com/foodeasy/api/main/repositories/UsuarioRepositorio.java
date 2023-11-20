package br.com.foodeasy.api.main.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import br.com.foodeasy.api.main.models.Usuario;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Integer> {
    @Query("SELECT u FROM Usuario u WHERE u.login = :login")
    Usuario findByLogin(@Param("login") String login);
}
