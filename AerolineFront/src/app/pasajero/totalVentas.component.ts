import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pasajero } from './pasajero';
import { PasajeroService } from './pasajero.service';


@Component({
    selector: 'app-total-ventas',
    templateUrl: './totalVentas.component.html',
    //styleUrls: ['./totalVentas.component.css']
})
export class TotalVentasComponent{ 
    pasajeros: Pasajero[];

    constructor(private formBuilder: FormBuilder, private _pasajeroSerive: PasajeroService, private _router: Router){
        this._pasajeroSerive.GetTotalVentas()
        .subscribe(
            data => this.pasajeros = data
        );
    }

}