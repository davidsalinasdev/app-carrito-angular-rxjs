import { Component, Input, OnInit } from '@angular/core';

// Model Interfaces
import { Guitars } from '../../models/guitars';


@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrl: './guitar.component.css'
})
export class GuitarComponent implements OnInit {


  /*Recibiendo datos del padre
   La exclamación(!) después del tipo indica que esta propiedad puede ser inicializada
    más tarde, pero no necesariamente en el momento de su declaración.
   */
  @Input() guitar!: Guitars;
  @Input() callBackAddItemCart!: (guitar: Guitars) => void;

  ngOnInit(): void {
    // console.log(this.guitar);
  }

  // Enviando datos al padre
  public addItemCart(guitar: Guitars) {

    this.callBackAddItemCart(guitar);

  }


}
