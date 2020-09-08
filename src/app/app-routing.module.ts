import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoluntarioMainComponent} from './components/voluntario-main/voluntario-main.component';
import { VoluntarioCardComponent } from './components/voluntario-card/voluntario-card.component';
import { VoluntarioFormComponent } from './components/voluntario-main/voluntario-form/voluntario-form.component';
import { EventoFormComponent } from './components/evento-form/evento-form.component';
import { EventoListComponent } from './components/evento-list/evento-list.component';
import { EventoCardComponent } from './components/evento-card/evento-card.component';
import { IngresoFormComponent } from './components/ingreso-form/ingreso-form.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'voluntario', component: VoluntarioMainComponent, canActivate : [AuthGuard], data:{permittedRoles:["usuario"]}},
  {path: 'voluntario/:id', component: VoluntarioCardComponent},
  {path: 'voluntariocread', component: VoluntarioFormComponent},
  {path: 'voluntariocread/:id', component: VoluntarioFormComponent},

  {path: 'evento/form', component: EventoFormComponent},
  {path: 'evento/form/:id', component: EventoFormComponent},
  {path: 'evento/list', component: EventoListComponent},
  {path: 'evento/card/:id', component:  EventoCardComponent},
  {path: 'login', component:  IngresoFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
