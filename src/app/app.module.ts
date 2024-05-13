import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// Para permitir peticiones http 
import { HttpClientModule } from '@angular/common/http';

// Componentes de App(Principal-Main)
import { AppComponent } from './app.component';

// Modulo Components
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
