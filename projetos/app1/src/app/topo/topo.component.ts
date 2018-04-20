import { Component } from '@angular/core';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    // styles: [`
    //     .exemplo {
    //         color: red;
    //         font-size: 25px;
    //         padding: 5px 10px;
    //         box-shadow: 1px 1px 1px 1px #c9c9c7;
    //         text-align: center;
    //     }
    // `],
    styleUrls: ['./topo.component.css']
})
export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês';
}
