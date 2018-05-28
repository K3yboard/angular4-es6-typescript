import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css'],
    providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

    public ofertas: Observable<Oferta[]>;
    private subjectPesquisa: Subject<string> = new Subject<string>();

    constructor(private ofertasService: OfertasService) { }

    ngOnInit() {
        this.ofertas = this.subjectPesquisa
            .debounceTime(1000)
            .distinctUntilChanged()
            .switchMap((termo: string) => {
                if (termo.trim() === '') {
                    return Observable.of<Oferta[]>([]);
                }
                console.log('requisição http para api');
                return this.ofertasService.pesquisaOfertas(termo);
            })
            .catch((err: any) => {
                console.log(err);
                return Observable.of<Oferta[]>([]);
            });

        this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
    }

    public pesquisa(termoDaBusca: string): void {
        console.log('keyup caracter: ', termoDaBusca);
        this.subjectPesquisa.next(termoDaBusca);
    }

}
