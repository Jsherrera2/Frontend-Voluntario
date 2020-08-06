import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faCalendar, faMapMarkedAlt, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { VoluntarioService } from 'src/app/services/voluntario.service';
import { Voluntario } from 'src/app/models/voluntario';
import { ActivatedRoute,  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-voluntario-form',
  templateUrl: './voluntario-form.component.html',
  styleUrls: ['./voluntario-form.component.css']
})
export class VoluntarioFormComponent implements OnInit {
  title = "Nuevo Registro Voluntario";
  faUserPlus =faUserPlus;
  faIdCard = faIdCard;
  faSave = faSave;
  faTimes = faTimes;
  faUser = faUser;
  faCalendar = faCalendar;
  faMapMarkedAlt = faMapMarkedAlt;
  faGenderless = faGenderless;

  voluntario: Voluntario = new Voluntario();
  form: FormGroup;  
  submitted: boolean = false;
  
  
  constructor(private voluntarioService: VoluntarioService,
    private activatedRoute : ActivatedRoute, 
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      fecha_nacimiento: [''],
      direccion: [''],
      telefono: [''],
      sexo: ['',[Validators.maxLength(1)]],      
    });


    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.voluntarioService.retrieve(params['id']).subscribe(
              result =>
              { 
                this.voluntario = result;
                this.title = "Actualizando el Registro de " + this.voluntario.nombres+" "+this.voluntario.apellidos;
              }
          )
        }
      }
    );

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

    console.log(this.voluntario);

    this.voluntarioService.save(this.voluntario).subscribe(
      result => {
        this.submitted = false;
        console.log(result);   
        this.router.navigate(['voluntario']);

      }
    );
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset(); 
  }



}
