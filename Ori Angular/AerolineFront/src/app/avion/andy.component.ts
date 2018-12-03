import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Avion } from './avion';
import { AvionService } from './avion.service';


@Component({
    selector: 'app-andy',
    templateUrl: './andy.component.html',
    styleUrls: ['./ListarAviones.component.css']
})
export class AndyComponent{ 
    aviones: Avion[];

    constructor(private formBuilder: FormBuilder, private _avionSerive: AvionService, private _router: Router){
        this._avionSerive.GetAviones()
        .subscribe(

            data =>{
             this.aviones = data;
               console.log(this.aviones,86532);}
        );

    }

}