import { Component, OnInit,Input, Output, EventEmitter, SimpleChanges  } from '@angular/core';
import { faListAlt, faEye, faPencilAlt, faTrash,faSave } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';
import { Voluntario } from 'src/app/models/voluntario';
import { VoluntarioService } from 'src/app/services/voluntario.service';
@Component({
  selector: 'app-voluntario-list',
  templateUrl: './voluntario-list.component.html',
  styleUrls: ['./voluntario-list.component.css']
})
export class VoluntarioListComponent implements OnInit {

  faListAlt = faListAlt;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  faSave = faSave;

  voluntario : Voluntario[];
  @Output() alumnoToEdit = new EventEmitter<Voluntario>();
  @Input() flagToReload;
  @Output() reloadComplete = new EventEmitter<Boolean>();

  constructor(private voluntarioService:VoluntarioService) { }

  ngOnInit(): void {
    this.list();
  }


  ngOnChanges(changes: SimpleChanges) {
    if(changes.flagToReload.currentValue){
      if(this.flagToReload){
        this.list();
      }
    }
  }

  update(v:Voluntario) :void {
    console.log(v);
    this.alumnoToEdit.emit(v);
  }


  delete(v:Voluntario) :void {
    swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El registro de " + v.nombres + " " + v.apellidos + " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.voluntarioService.delete(v).subscribe(
          result => console.log(result)
        )
      }
    })
  }



  list() : void {
    this.voluntarioService.list().subscribe(result => {      
      console.log(result);
      this.voluntario = result;
      this.reloadComplete.emit(true);
    });
  }  




}
