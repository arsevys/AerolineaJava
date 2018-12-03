import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Avion } from './avion';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Avion2 } from './Avion2';

@Injectable()
export class AvionService {
    private _getAvionURL: string = 'http://djvq.tk:8080/ProyAerolinea_Servicio/aviones/listaAviones';

    private _insertarAvionURL: string = "www.djvq.tk:8080/ProyAerolinea_Servicio/aviones/insertarAvion";


    constructor(private _http: Http) {
    }

    aviones: Avion[];
    avion: Avion2 = null;
 
    GetAviones(): Observable<Avion[]> {
        return this._http.get(this._getAvionURL)
            .pipe(map((response: Response) => <Avion[]>response.json()),
                catchError(error => {
                    return throwError("Server error");
                })
            )
    }

    InsertAvion(avion: Avion2): Observable<Avion> {
        var body = {
            anioFrabricacion: avion.AnioFabriacion,
            capacidad: avion.Capacidad,
            codigo: avion.Codigo,
            fabricante: avion.Fabricante,
            modelo: avion.Modelo
        };
        var request = this._http.post(this._insertarAvionURL, body); 

        return request.pipe(map((response: Response) => <Avion>response.json()),
            catchError(error => {
                return throwError("Server Error");
            })
        )
    }


}