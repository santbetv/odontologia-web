import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';
/* import Swal from 'sweetalert2'; */

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {

  tituloCitas = 'Citas clientes';
  citas: Cita[] = [];
  filtroForm: FormGroup;
  validarFiltro = false;

  constructor(protected citaService: CitaService) { }

  ngOnInit(): void {
    this.inizializarTabla();
  }

  public inizializarTabla() {
    this.citaService.consultar().subscribe(
      citas => this.citas = citas
    );
  }

  eliminarCita(cita: Cita) {
    this.citaService.eliminar(cita.id).subscribe(
      () => {
        this.citas = this.citas.filter(cit => cit !== cita);
      }
    );
  }
}
