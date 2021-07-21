import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/* import { Persona } from '@shared/model/persona'; */
/* import { PersonaService } from '@shared/service/persona.service'; */
/* import { Observable } from 'rxjs'; */
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css'],
})
export class CrearCitaComponent implements OnInit {

  title = 'Crear cita';
  public cita: Cita[] = [];
  public formularioCita: any;
  public datoFecha: String = "";


  constructor(
    protected citaService: CitaService,
    private formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.formularioCita = this.formBuilder.group({
      nombre: ['', [
        Validators.required,
        Validators.pattern('[A-Za-zá-úÁ-Ú ]*')
      ]],
      odontologo: ['', [
        Validators.required,
        Validators.pattern('[A-Za-zá-úÁ-Ú ]*')
      ]],
      valor: ['', [
        Validators.required,
        Validators.pattern('^[0-9]+')
      ]],
      fechaCreacion: ['', [
        Validators.required
      ]]
    });
  }

  validarFecha(): String {
    const dateSendingToServer = new DatePipe('en-US').transform(this.formularioCita.get('fechaCreacion').value, 'yyyy-MM-dd');
    this.datoFecha = "" + dateSendingToServer;
    return this.datoFecha;
  }

  public f() {
    return this.formularioCita.controls;
  }

  public extraerNombre() {
    return this.formularioCita.get('nombre');
  }

  public extraerOdontologo() {
    return this.formularioCita.get('odontologo');
  }

  public extraerValor() {
    return this.formularioCita.get('valor');
  }

  public extraerFecha() {
    return this.formularioCita.get('fechaCreacion');
  }

  private crearCita(): Cita {
    const cita: Cita = {
      id: 1,
      nombre: this.formularioCita.get('nombre').value,
      odontologo: this.formularioCita.get('odontologo').value,
      valor: this.formularioCita.get('valor').value,
      fechaCreacion: this.validarFecha(),
      idPersona: 1
    }
    return cita;
  }

  crearCitaPrueba(): Cita {
    const cita: Cita = {
      id: 1,
      nombre: "Corona",
      odontologo: "Tomas",
      valor: 80000,
      fechaCreacion: "2021-07-15",
      idPersona: 1
    }
    return cita;
  }

  public agregarCita() {

    if (this.formularioCita.invalid) {

      Swal.fire('Oops...', 'Valida los valores!', 'error')
      return;
    } else {
      this.citaService.guardar(this.crearCita()).
        subscribe(() => {
          this.router.navigate(['/cita/listar']);
          Swal.fire('Nueva cita', `Cita ${this.crearCita().nombre} creada para el siguiente día hábil`, 'success')
        },
          (error) => {
            Swal.fire(`Error ${error.error.nombreExcepcion}`, error.error.mensaje, 'error');
          }
        )
    }
  }
}
