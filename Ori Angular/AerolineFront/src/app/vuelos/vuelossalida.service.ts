import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { VuelosSalida } from './vuelossalida';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class VuelosSalidaService {
    private _getDestinoURL: string = 'http://djvq.tk:8080/ProyAerolinea_Servicio/vuelos?';



    constructor(private _http: Http) {
    }

    vuelossalida: VuelosSalida[];

    GetVuelosSalida(fecha1: string): Observable<VuelosSalida[]> {
        return this._http.get('www.djvq.tk:8080/ProyAerolinea_Servicio/vuelos/vuelos_salida/20-11-2018')
            .pipe(map((response: Response) => <VuelosSalida[]>response.json()),
                catchError(error => {
                    return throwError("Server error");
                })
            )
    }
}