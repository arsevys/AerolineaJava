
import { Component, OnInit } from '@angular/core';
import { Avion } from './avion';
import { AvionService } from './avion.service';
//import * as $ from 'jquery'
//declare var $: any; // Para jQuery
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from "sweetalert2";
import { Avion2 } from './Avion2';

@Component({
    selector: 'app-registrar-usuario',
    templateUrl: './insertarAvion.component.html',
    //styleUrls: ['./registrarUsuario.component.css']

})

export class InsertarAvionComponent implements OnInit {
    formRegistrarAvion: FormGroup;
    submitted = false;

    ngOnInit(): void {
        this.formRegistrarAvion = this.formBuilder.group({
            name: ['', Validators.required],
            apePat: ['', Validators.required],
            apeMat: ['', Validators.required],
            dni: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],

        }); 
    }

    // convenience getter for easy access to form fields
    get f() { return this.formRegistrarAvion.controls; }

    avion: Avion2 = null;

    constructor(private _router: Router, private _avionService: AvionService, private formBuilder: FormBuilder) {

        this.avion = <Avion2>{
            AnioFabriacion: "",
            Codigo: "",
            Capacidad: "",
            Fabricante: "",
            Modelo: ""
        };
    }
 
    messageAlert: string = "";

    insertarAvion(): void {
        console.log("método Insertar Avion");
        this.submitted = true;

        if (this.formRegistrarAvion.invalid) {
            this._avionService.InsertAvion(this.avion)
            .subscribe(
                data =>{
                    swal('Avión registrado', this.messageAlert, 'success');

                }
            );
        }
        else {
            return;

        }

        
    }
}