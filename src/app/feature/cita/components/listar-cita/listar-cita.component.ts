import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';
/* import Swal from 'sweetalert2'; */

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {

  tituloCitas: String = 'Citas clientes'
  public listaCitas: Observable<Cita[]>;
  filtroForm: FormGroup;
  validarFiltro = false;

  constructor(protected citaService: CitaService) { }

  ngOnInit(): void {
    this.inizializarTabla();
  }

  /*  eliminarCita(cita: Cita) {
 
     const swalWithBootstrapButtons = Swal.mixin({
       customClass: {
         confirmButton: 'btn btn-success',
         cancelButton: 'btn btn-danger'
       },
       buttonsStyling: false
     })
 
 
     swalWithBootstrapButtons.fire({
       title: 'Esta seguro?',
       text: `¿Seguro que desea eliminar al cliente ${cita.nombre}?`,
       icon: 'warning',
       showCancelButton: true,
       confirmButtonText: 'Si, elimnar!',
       cancelButtonText: 'No, cancelar!',
       reverseButtons: true
     }).then((result) => {
 
       if (result.isConfirmed) {
 
         this.citaService.eliminar(cita.id).subscribe(
           reponse => {
             console.log(reponse)
             this.inizializarTabla();
             swalWithBootstrapButtons.fire(
               'Eliminado!',
               `Tu Cita ${cita.nombre} ha sido Eliminada.`,
               'success'
             )
           }
         )
 
       }
     })
   } */

  eliminarCita(cita: Cita) {
    this.citaService.eliminar(cita.id).subscribe();
    this.inizializarTabla();
  }

  inizializarTabla() {
    this.listaCitas = this.citaService.consultar();
  }
}
