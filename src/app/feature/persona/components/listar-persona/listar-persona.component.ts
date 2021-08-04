import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../../shared/model/persona';
import { PersonaService } from '../../shared/service/persona.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {
  tituloPersonas = 'Personas en sistema';
  public listaPersonas: Observable<Persona[]>;
  public persona: Observable<Persona[]>;

  constructor(protected personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.inizializarTabla();
  }

  actualizarPersona(persona: Persona){
    this.router.navigate(['/persona/actualizar'], {state : { persona }});
  }

  inizializarTabla(){
    this.listaPersonas = this.personaService.consultar();
  }

}
