import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes de Components
import { HeaderComponent } from './header/header.component';
import { GuitarComponent } from './guitar/guitar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    GuitarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    HeaderComponent,
    FooterComponent,
    GuitarComponent
  ]
})
export class ComponentsModule { }
