import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { FormComponent } from './componentes/form/form.component';
import { TotalComponent } from './componentes/total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    FormComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
