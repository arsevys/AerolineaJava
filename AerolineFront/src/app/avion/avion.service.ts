import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Avion } from './avion';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class AvionService {
    private _getAvionURL: string = 'https://oculus.serveo.net/ProyAerolinea_Servicio/aviones/listaAviones';

    constructor(private _http: Http) {
    }

    avion: Avion[];

    GetAviones(): Observable<Avion[]> {
        return this._http.get(this._getAvionURL)
            .pipe(map((response: Response) => <Avion[]>response.json()),
                catchError(error => {
                    return throwError("Server error");
                })
            )
    }
}