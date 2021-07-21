import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../../shared/model/persona';
import { PersonaService } from '../../shared/service/persona.service';

@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.css'],
})
export class ActualizarPersonaComponent implements OnInit {
  
  title = 'Crear cita';

  persona: Persona;
  fechaActual: any;
  mostrarMensajeAlerta = false;
  mensajeAlertaCita: string;
  constructor(
    private datePipe: DatePipe,
    private router: Router,
    protected personaService: PersonaService
  ) {
    const { state } = this.router.getCurrentNavigation().extras;

    if (!state) {
      this.router.navigate(['/persona/lista']);
    }

    this.persona = state.persona;
  }
  get fechaActualString() {
    return this.datePipe.transform(this.fechaActual, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.fechaActual = new Date();
    this.construirFormularioCita();
  }

  private construirFormularioCita() {
  }

}
