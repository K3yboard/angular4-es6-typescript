import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import '../util/rxjs-extensions';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css'],
    providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

    public ofertas: Observable<Oferta[]>;
    private subjectPesquisa: Subject<string> = new Subject<string>();
    public ofertas2: Oferta[];

    constructor(private ofertasService: OfertasService) { }

    ngOnInit() {
        this.ofertas = this.subjectPesquisa // retorna Oferta[]
            .debounceTime(1000) // executa a ação do switchMap após 1 segundo
            .distinctUntilChanged() // oara fazer pesquisas distintas
            .switchMap((termo: string) => {
                if (termo.trim() === '') {
                    // retorna um observable de array de ofertas vazio
                    return Observable.of<Oferta[]>([]);
                }
                console.log('requisição http para api');
                return this.ofertasService.pesquisaOfertas(termo);
            })
            .catch((err: any) => {
                console.log(err);
                return Observable.of<Oferta[]>([]);
            });

        this.ofertas.subscribe((ofertas: Oferta[]) => {
            console.log(ofertas);
            this.ofertas2 = ofertas;
        });
    }

    public pesquisa(termoDaBusca: string): void {
        console.log('keyup caracter: ', termoDaBusca);
        this.subjectPesquisa.next(termoDaBusca);
    }

}
