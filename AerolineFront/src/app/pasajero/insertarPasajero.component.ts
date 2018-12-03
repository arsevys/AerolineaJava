
import { Component, OnInit } from '@angular/core';
import { Pasajero } from './pasajero';
import { PasajeroService } from './pasajero.service';
//import * as $ from 'jquery'
//declare var $: any; // Para jQuery
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from "sweetalert2";

@Component({
    selector: 'app-insertar-pasajero',
    templateUrl: './insertarPasajero.component.html',
    //styleUrls: ['./registrarUsuario.component.css']

})

export class InsertarPasajeroComponent implements OnInit {
    formRegistrarUsuario: FormGroup;
    submitted = false;

    ngOnInit(): void {
        this.formRegistrarUsuario = this.formBuilder.group({
            name: ['', Validators.required],
            apePat: ['', Validators.required],
            apeMat: ['', Validators.required],
            dni: ['', Validators.required],
            email: ['', Validators.required],
            tDocumento: ['', Validators.required],
            pais: ['', Validators.required],
            telefono: ['', Validators.required],


        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.formRegistrarUsuario.controls; }

    pasajero: Pasajero = null;

    constructor(private _router: Router, private _pasajeroService: PasajeroService, private formBuilder: FormBuilder) {

        this.pasajero = <Pasajero>{
            ID: "",
            Nombre: "",
            Apellido: "",
            Email: "",
            NumDocumento: "",
            Pais: "",
            Telefono: "",
            TipoDocumento: "",
            TotalVenta: ""
        };
    }
 
    messageAlert: string = "";

    insertarAvion(): void {
        this.submitted = true;

        if (this.formRegistrarUsuario.invalid) {
            return;
        }
        else {
         this._pasajeroService.InsertPasajero(this.pasajero)
            .subscribe(
                data =>{
                    swal('Pasajero registrado', this.messageAlert, 'success');

                }
            );

        }

        
    }
}