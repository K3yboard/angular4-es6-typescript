import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';

@Component({
    selector: 'app-oferta',
    templateUrl: './oferta.component.html',
    styleUrls: ['./oferta.component.css'],
    providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

    public oferta: Oferta;

    constructor(
        private route: ActivatedRoute,
        private ofertasService: OfertasService
    ) { }

    ngOnInit() {
        this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
            .then(( oferta: Oferta ) => {
                this.oferta = oferta;
            });

            /*
        this.route.params.subscribe(
            (parametro: any) => { console.log(parametro); },
            (erro: any) => console.log(erro),
            () => console.log('Processamento foi classificado como concluído')
        );

        let tempo = Observable.interval(2000);

        tempo.subscribe(
            (intervalo: number) => { console.log(intervalo); }
        );

        */

        // Observable (observável)

        let meuObservableTeste = Observable.create((observer: Observer<number>) => {
            observer.next(1);
            observer.next(3);
            observer.complete();
            observer.next(3);
        });

        // Observable (observador)
        meuObservableTeste.subscribe(
            (resultado: any) => console.log(resultado + 10),
            (erro: string) => console.log(erro),
            () => console.log('Stream deeventos foi finalizado')
        );
    }

}
