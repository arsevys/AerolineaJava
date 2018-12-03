import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VuelosSalida } from './vuelossalida';
import { VuelosSalidaService } from './vuelossalida.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-vuelosSalida',
    templateUrl: './vuelossalida.component.html',
    styleUrls: []
})
export class VuelosSalidasComponent{
    
    pipe = new DatePipe('en-US'); // Use your own locale
    vuelossalidas: VuelosSalida[];
    fecha1: string;

    constructor(private formBuilder: FormBuilder, private _destinoSerive: VuelosSalidaService, private _router: Router){

    }

    irMetodo(fecha1 : string,){
        this.fecha1 = this.pipe.transform(fecha1, 'dd-MM-yyyy');

        this._destinoSerive.GetVuelosSalida(this.fecha1)
        .subscribe(
            data => {
                this.vuelossalidas = data;                
            }, error => {
                console.error(error);
            }
        );
    }

}