import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
    selector: 'app-oferta',
    templateUrl: './oferta.component.html',
    styleUrls: ['./oferta.component.css'],
    providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

    private tempoObservableSubscripion: Subscription;
    private meuObservableTesteSubscripion: Subscription;

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
        ); */


        let tempo = Observable.interval(2000);

        this.tempoObservableSubscripion = tempo.subscribe(
            (intervalo: number) => { console.log(intervalo); }
        );



        // Observable (observável)

        let meuObservableTeste = Observable.create((observer: Observer<number>) => {
            observer.next(1);
            observer.next(3);
            observer.complete();
            observer.next(3);
        });

        // Observable (observador)
        this.meuObservableTesteSubscripion = meuObservableTeste.subscribe(
            (resultado: any) => console.log(resultado + 10),
            (erro: string) => console.log(erro),
            () => console.log('Stream deeventos foi finalizado')
        );
    }

    ngOnDestroy() {
        this.meuObservableTesteSubscripion.unsubscribe();
        this.tempoObservableSubscripion.unsubscribe();
    }

}
