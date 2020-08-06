import { Component, OnInit } from '@angular/core';
import { faCalendarDay, faBarcode,faMoneyCheckAlt, faBuilding, faClipboard, faFileSignature, faListOl, faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { Evento } from 'src/app/models/evento';
import { EventoService } from 'src/app/services/evento.service';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-evento-card',
  templateUrl: './evento-card.component.html',
  styleUrls: ['./evento-card.component.css']
})
export class EventoCardComponent implements OnInit {
  faCalendarDay=faCalendarDay;
  faBarcode=faBarcode;
  faMoneyCheckAlt=faMoneyCheckAlt;
  faBuilding = faBuilding;
  faClipboard = faClipboard;
  faFileSignature=faFileSignature;
  faListOl = faListOl;
  faArrowAltCircleLeft=faArrowAltCircleLeft;

  evento : Evento;
  categoria : Categoria;


  constructor(private eventoService: EventoService, 
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.eventoService.retrieve(params['id']).subscribe(
            result => this.evento = result
          )
        }
      }
    );
  }

}
