import { Component, OnInit } from '@angular/core';
import { faListAlt, faEye, faPencilAlt, faTrash,faSave } from '@fortawesome/free-solid-svg-icons';
import { Evento } from 'src/app/models/evento'
import { EventoService } from 'src/app/services/evento.service'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.css']
})
export class EventoListComponent implements OnInit {

  faListAlt = faListAlt;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  faSave = faSave;

  eventos: Evento[];

  constructor(private eventoService : EventoService) { }

  ngOnInit(): void {
    this.list();
  }
  list() : void {
    this.eventoService.list().subscribe(result => this.eventos = result);
  }

  delete(a:Evento) :void {
    Swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El evento de " + a.nombre + " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.eventoService.delete(a).subscribe(
          result => {
            console.log(result);
            this.list();
          }
        )
      }
    })
  }
}
