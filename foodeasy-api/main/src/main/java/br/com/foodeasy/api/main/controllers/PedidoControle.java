package br.com.foodeasy.api.main.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import br.com.foodeasy.api.main.models.Pedido;
import br.com.foodeasy.api.main.services.PedidoServico;
import java.util.List;

@RestController
@RequestMapping("/pedidos")
class PedidoControle {

    @Autowired
    private PedidoServico pedidoServico;

    @PostMapping("/add")
    public ResponseEntity<Pedido> add(@RequestBody Pedido pedido) {
        Pedido savedPedido = pedidoServico.savePedido(pedido);
        return ResponseEntity.ok(savedPedido);
    }

    @GetMapping("/getAll")
    public List<Pedido> getAllPedidos() {
        return pedidoServico.getAllPedidos();
    }
}
