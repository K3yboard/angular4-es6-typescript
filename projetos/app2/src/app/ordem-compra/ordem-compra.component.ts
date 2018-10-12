import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service'
import { CarrinhoService } from '../carrinho.service';

import { Pedido } from '../shared/pedido.model';
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

    @ViewChild('formulario') public formulario: NgForm;

    public idPedidoCompra: number;
    public itensCarrinho: ItemCarrinho[] = [];

    constructor(
        private ordemCompraService: OrdemCompraService,
        private carrinhoService: CarrinhoService
    ) { }

    ngOnInit() {
        this.itensCarrinho = this.carrinhoService.exibirItens();
        console.log(
            this.itensCarrinho
        )
    }

    public confirmarCompra(): void {

        let pedido: Pedido = new Pedido(
            this.formulario.value.endereco,
            this.formulario.value.numero,
            this.formulario.value.complemento,
            this.formulario.value.formaPagamento
        );

        this.ordemCompraService.efetivarCompra(pedido)
            .subscribe((idPedido: number) => {
                this.idPedidoCompra = idPedido
            });
    }
}
