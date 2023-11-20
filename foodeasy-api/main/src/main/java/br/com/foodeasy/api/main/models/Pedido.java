package br.com.foodeasy.api.main.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pedido_id;

    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = false)
    private Usuario cliente;

    @ManyToOne
    @JoinColumn(name = "restaurante_id", nullable = false)
    private Restaurante restaurante;

    private LocalDateTime dataPedido;

    // @Enumerated(EnumType.STRING)
    // private StatusPedido status;

    @ManyToOne
    @JoinColumn(name = "entregador_id")
    private Entregador entregador;

    // @ManyToOne
    // @JoinColumn(name = "entrega_id")
    // private Entrega entrega;

    // @ManyToOne
    // @JoinColumn(name = "avaliacao_id")
    // private Avaliacao avaliacao;
}
