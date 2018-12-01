import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { VuelosSalida } from './vuelossalida';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class VuelosSalidaService {
    private _getDestinoURL: string = 'http://djvq.tk:8080/ProyAerolinea_Servicio/vuelos/vuelos_salida/';
    
    
    constructor(private _http: Http) {
    }

    vuelossalida: VuelosSalida[];

    GetVuelosSalida(fecha:string): Observable<VuelosSalida[]> {
        return this._http.get(this._getDestinoURL+fecha)
            .pipe(map((response: Response) => <VuelosSalida[]>response.json()),
                catchError(error => {
                    return throwError("Server error");
                })
            )
    }
}