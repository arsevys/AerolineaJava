import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Pasajero } from './pasajero';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class PasajeroService {
    private _getTotalVentasURL: string = 'http://djvq.tk:8080/ProyAerolinea_Servicio/pasajeros/totalVentas';

    constructor(private _http: Http) {
    }
 
    pasajero: Pasajero[];

    GetTotalVentas(): Observable<Pasajero[]> {
        return this._http.get(this._getTotalVentasURL)
            .pipe(map((response: Response) => <Pasajero[]>response.json()),
                catchError(error => {
                    return throwError("Server error");
                })
            )
    }
}