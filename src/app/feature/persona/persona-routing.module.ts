import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPersonaComponent } from './components/crear-persona/crear-persona.component';
import { ListarPersonaComponent } from './components/listar-persona/listar-persona.component';
import { PersonaComponent } from './components/persona/persona.component';


const routes: Routes = [
  {
    path: '',
    component: PersonaComponent,
    children: [
      {
        path: 'crear',
        component: CrearPersonaComponent
      },
      {
        path: 'listar',
        component: ListarPersonaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
