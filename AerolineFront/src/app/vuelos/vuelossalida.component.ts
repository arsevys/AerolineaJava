import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VuelosSalida } from './vuelossalida';
import { VuelosSalidaService } from './vuelossalida.service';

@Component({
    selector: 'app-vuelosSalida',
    templateUrl: './vuelossalida.component.html',
    styleUrls: []
})
export class VuelosSalidasComponent{ 
    vuelossalidas: VuelosSalida[];

    constructor(private formBuilder: FormBuilder, private _destinoSerive: VuelosSalidaService, private _router: Router){
        this._destinoSerive.GetVuelosSalida("")
        .subscribe(data =>{ this.vuelossalidas= data});
     

    }

}