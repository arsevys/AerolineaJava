
import { Component, OnInit } from '@angular/core';
import { Avion } from './avion';
import { AvionService } from './avion.service';
//import * as $ from 'jquery'
//declare var $: any; // Para jQuery
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from "sweetalert2";

@Component({
    selector: 'app-registrar-usuario',
    templateUrl: './insertarAvion.component.html',
    //styleUrls: ['./registrarUsuario.component.css']

})

export class InsertarAvionComponent implements OnInit {
    formRegistrarUsuario: FormGroup;
    submitted = false;

    ngOnInit(): void {
        this.formRegistrarUsuario = this.formBuilder.group({
            name: ['', Validators.required],
            apePat: ['', Validators.required],
            apeMat: ['', Validators.required],
            dni: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],

        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.formRegistrarUsuario.controls; }

    avion: Avion = null;

    constructor(private _router: Router, private _avionService: AvionService, private formBuilder: FormBuilder) {

        this.avion = <Avion>{
            AnioFabriacion: "",
            Codigo: "",
            Capacidad: "",
            Fabricante: "",
            Modelo: ""
        };
    }
 
    messageAlert: string = "";

    insertarAvion(): void {
        this.submitted = true;

        if (this.formRegistrarUsuario.invalid) {
            return;
        }
        else {
         this._avionService.InsertAvion(this.avion)
            .subscribe(
                data =>{
                    swal('Avión registrado', this.messageAlert, 'success');

                }
            );

        }

        
    }
}