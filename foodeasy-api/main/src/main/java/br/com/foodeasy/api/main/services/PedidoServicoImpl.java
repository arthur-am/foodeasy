package br.com.foodeasy.api.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.foodeasy.api.main.models.Pedido;
import br.com.foodeasy.api.main.repositories.PedidoRepositorio;

@Service
public class PedidoServicoImpl implements PedidoServico {

    @Autowired
    private PedidoRepositorio pedidoRepositorio;

    @Override
    public Pedido get(Integer pedido_id) {
        return pedidoRepositorio.findById(pedido_id).orElse(null);
    }

    @Override
    public void delete(Integer pedido_id) {
        pedidoRepositorio.deleteById(pedido_id);
    }

    @Override
    public List<Pedido> getAllPedidos() {
        return pedidoRepositorio.findAll();
    }

    @Override
    public Pedido savePedido(Pedido pedido) {
        return pedidoRepositorio.save(pedido);
    }
}
