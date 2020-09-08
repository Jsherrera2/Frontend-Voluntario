import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoluntarioService} from './services/voluntario.service';
import { ServiceInterceptor} from './services/service.interceptor';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VoluntarioMainComponent } from './components/voluntario-main/voluntario-main.component';
import { VoluntarioListComponent } from './components/voluntario-main/voluntario-list/voluntario-list.component';
import { VoluntarioFormComponent } from './components/voluntario-main/voluntario-form/voluntario-form.component';
import { VoluntarioCardComponent } from './components/voluntario-card/voluntario-card.component';
import { MasmasPipe } from './shared/pipes/masmas.pipe';
import { NavBarVoluntarioComponent } from './components/nav-bar-voluntario/nav-bar-voluntario.component';
import { EventoFormComponent } from './components/evento-form/evento-form.component';
import { EventoCardComponent } from './components/evento-card/evento-card.component';
import { EventoListComponent } from './components/evento-list/evento-list.component';
import { IngresoFormComponent } from './components/ingreso-form/ingreso-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VoluntarioMainComponent,
    VoluntarioListComponent,
    VoluntarioFormComponent,
    VoluntarioCardComponent,
    MasmasPipe,
    NavBarVoluntarioComponent,
    EventoFormComponent,
    EventoCardComponent,
    EventoListComponent,
    IngresoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule 
  ],
  providers: [VoluntarioService, {
    provide: HTTP_INTERCEPTORS,
    useClass: ServiceInterceptor,
    multi: true

  },
  {
    provide: LOCALE_ID,
    useValue : 'es-EC'
  } 
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
