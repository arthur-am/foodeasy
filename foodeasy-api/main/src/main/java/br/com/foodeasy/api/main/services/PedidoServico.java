package br.com.foodeasy.api.main.services;

import java.util.List;
import br.com.foodeasy.api.main.models.Pedido;

public interface PedidoServico {

    Pedido get(Integer pedido_id);

    void delete(Integer pedido_id);

    List<Pedido> getAllPedidos();

    Pedido savePedido(Pedido pedido);
}
