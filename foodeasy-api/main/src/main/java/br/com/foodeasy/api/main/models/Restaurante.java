package br.com.foodeasy.api.main.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;

@Getter
@Setter
@Entity
public class Restaurante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int restaurante_id;
    private String nome;
    private String telefone;
    private String endereco;
    private BigDecimal saudeFinanceira;
    private String inspecaoHigiene;
    private String qualidadeAlimentos;
    private String cumprimentoDiretrizes;
    private String aprovacaoGerente;
    private String decisaoFinal;
    private String treinamentoSuporte;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    // @ManyToOne
    // @JoinColumn(name = "treinamento_dado_id", referencedColumnName =
    // "treinamento_id")
    // private Treinamento treinamentoDado;

    // @ManyToOne
    // @JoinColumn(name = "documento_id")
    // private Documento documento;

    // @ManyToOne
    // @JoinColumn(name = "inspecao_id")
    // private Inspecao inspecao;

    // @Enumerated(EnumType.STRING)
    // private Disponibilidade disponibilidade;

    // @ManyToOne
    // @JoinColumn(name = "avaliacao_id")
    // private Avaliacao avaliacao;
}
