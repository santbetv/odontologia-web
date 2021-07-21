import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from '../../shared/service/persona.service';
import { Persona } from '../../shared/model/persona';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css'],
})
export class CrearPersonaComponent implements OnInit {
  title = 'Crear persona';
  public cita: Persona[] = [];
  public formularioPersona: any;
  public datoFecha: String = "";


  constructor(
    private personaService: PersonaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.formularioPersona = this.formBuilder.group({
      nombre: ['', [
        Validators.required,
        Validators.pattern('[A-Za-zá-úÁ-Ú ]*')
      ]],
      celular: ['', [
        Validators.required,
        Validators.pattern('^[0-9]+')
      ]]
    });
  }

  public f() {
    return this.formularioPersona.controls;
  }

  public extraerNombre() {
    return this.formularioPersona.get('nombre');
  }

  public extraerCelular() {
    return this.formularioPersona.get('celular');
  }

  private crearPersona(): Persona {
    const persona: Persona = {
      id: 1,
      nombre: this.formularioPersona.get('nombre').value,
      celular: this.formularioPersona.get('celular').value
    }
    return persona;
  }

  public agregarPersona() {

    if (this.formularioPersona.invalid) {

      Swal.fire('Oops...', 'Valida los valores!', 'error')
      return;
    } else {
      this.personaService.guardar(this.crearPersona()).
        subscribe(() => {
          this.router.navigate(['/persona/listar']);
          Swal.fire('Nueva persona', `Persona ${this.crearPersona().nombre} creada`, 'success')
        },
          (error) => {
            Swal.fire(`Error ${error.error.nombreExcepcion}`, error.error.mensaje, 'error');
          }
        )
    }
  }




















}
