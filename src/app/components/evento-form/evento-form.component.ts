import { Component, OnInit } from '@angular/core';
import { faCalendarDay, faBarcode,faMoneyCheckAlt, faBuilding, faClipboard, faFileSignature, faListOl} from '@fortawesome/free-solid-svg-icons';
import { Evento } from 'src/app/models/evento';
import { Categoria } from 'src/app/models/categoria'
import { EventoService } from 'src/app/services/evento.service';
import { CategoriaService } from 'src/app/services/categoria.service'
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {
  title = "Nuevo registro de Evento";
  faCalendarDay=faCalendarDay;
  faBarcode=faBarcode;
  faMoneyCheckAlt=faMoneyCheckAlt;
  faBuilding = faBuilding;
  faClipboard = faClipboard;
  faFileSignature=faFileSignature;
  faListOl = faListOl;

  evento : Evento = new Evento();
  categorias : Categoria[];
  form: FormGroup;
  submitted: boolean = false;
  constructor(private eventoService: EventoService,
    private categoriaService: CategoriaService, 
    private formBuilder: FormBuilder, 
    private activatedRoute : ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.listCategoria();
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      fecha_inicio: ['',[Validators.required]],
      fecha_final: ['',[Validators.required]],      
      organizador: ['',[Validators.required]],      
      idcategoria: ['',[Validators.required]],      
    });

    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.eventoService.retrieve(params['id']).subscribe(
              result =>
              { 
                this.evento = result;
                this.title = "Actualizando el Evento de " + this.evento.nombre;
              }
          )
        }
      }
    );



  }

  listCategoria() : void {
    this.categoriaService.list().subscribe(result => this.categorias = result);
  }

  get f(){
    return this.form.controls;
  }


  onSubmit() : void {
    this.submitted = true;
    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    console.log(this.evento );

    this.eventoService.save(this.evento ).subscribe(
      result => {
        this.submitted = false;
        console.log(result);   
        this.router.navigate(['evento/list']);

      }
    );
  }

  onReset() : void { 
    this.submitted = false;  
    this.form.reset();    
  }
}


