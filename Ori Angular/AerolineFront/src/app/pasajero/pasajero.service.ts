import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Pasajero } from './pasajero';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Pasajero2 } from './pasajero2';

@Injectable()
export class PasajeroService {

    private _insertarPasajeroURL: string = "www.djvq.tk:8080/ProyAerolinea_Servicio/pasajeros/insertarPasajero";

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

    ID: string;
    Nombre: string;
    Apellido: string;
    Email: string;
    NumDocumento: string;
    Pais: string;
    Telefono: string;
    TipoDocumento: string;
    TotalVenta: string;

    InsertPasajero(pasajero: Pasajero2): Observable<Pasajero> {
        var body = {
            id: pasajero.ID,
            nombre: pasajero.Nombre,
            apellido: pasajero.Apellido,
            email: pasajero.Email,
            numDocumento: pasajero.NumDocumento,
            pais: pasajero.Pais,
            telefono: pasajero.Telefono,
            tipoDocumento: pasajero.TipoDocumento
        };
        var request = this._http.post(this._insertarPasajeroURL, body);

        return request.pipe(map((response: Response) => <Pasajero>response.json()),
            catchError(error => {
                return throwError("Server Error");
            })
        )
    }
}