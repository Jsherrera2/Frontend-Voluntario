import { Component, OnInit } from '@angular/core';
import { Voluntario } from 'src/app/models/voluntario';
import { VoluntarioService } from 'src/app/services/voluntario.service';
import { ActivatedRoute } from '@angular/router';
import { faUser, faIdCard, faCalendar, faMapMarked, faGenderless,faPhone,faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-voluntario-card',
  templateUrl: './voluntario-card.component.html',
  styleUrls: ['./voluntario-card.component.css']
})
export class VoluntarioCardComponent implements OnInit {

  faUser = faUser;
  faIdCard = faIdCard;
  faCalendar = faCalendar;
  faMapMarked = faMapMarked;
  faGenderless = faGenderless;
  faPhone = faPhone;
  faArrowAltCircleLeft=faArrowAltCircleLeft;

  voluntario : Voluntario;

  constructor(private voluntarioService: VoluntarioService, 
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.voluntarioService.retrieve(params['id']).subscribe(
            result => this.voluntario = result
          )
        }
      }
    );

  }

}
