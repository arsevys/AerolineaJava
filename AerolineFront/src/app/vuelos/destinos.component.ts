import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Destino } from './destino';
import { DestinoService } from './destino.service';


@Component({
    selector: 'app-destinos',
    templateUrl: './destinos.component.html',
    styleUrls: ['./destinos.component.css']
})
export class DestinosComponent{ 
    destinos: Destino[];

    constructor(private formBuilder: FormBuilder, private _destinoSerive: DestinoService, private _router: Router){
        this._destinoSerive.GetDestinos()
        .subscribe(

            data =>{
             this.destinos= data;
               console.log(this.destinos,86532);}
        );

    }

}