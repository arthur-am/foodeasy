package br.com.foodeasy.api.main.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Entregador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer entregador_id;

    private String veiculoEntrega;
    private String disponibilidade;

    @OneToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
}
