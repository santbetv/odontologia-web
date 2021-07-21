import { NgModule } from '@angular/core';

import { PersonaRoutingModule } from './persona-routing.module';
import { ListarPersonaComponent } from './components/listar-persona/listar-persona.component';
import { CrearPersonaComponent } from './components/crear-persona/crear-persona.component';
import { PersonaComponent } from './components/persona/persona.component';
import { SharedModule } from '@shared/shared.module';
import { DatePipe } from '@angular/common';
import { PersonaService } from './shared/service/persona.service'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    ListarPersonaComponent,
    PersonaComponent
  ],
  imports: [PersonaRoutingModule, SharedModule, FormsModule],
  providers: [PersonaService, DatePipe]
})
export class PersonaModule { }
