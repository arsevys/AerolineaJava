import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Destino } from './destino';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class DestinoService {
    private _getDestinoURL: string = 'http://djvq.tk:8080/ProyAerolinea_Servicio/pasajeros/destinos';
    
    
    constructor(private _http: Http) {
    }

    destino: Destino[];

    GetDestinos(): Observable<Destino[]> {
        return this._http.get(this._getDestinoURL)
            .pipe(map((response: Response) => <Destino[]>response.json()),
                catchError(error => {
                    return throwError("Server error");
                })
            )
    }
}