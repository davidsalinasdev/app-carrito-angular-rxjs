import { Component, Input, OnDestroy, OnInit } from '@angular/core';

// Modelo interfaces
import { Guitars } from '../../models/guitars';

// Servicios
import { DataServices } from '../../services/data-services.service';

// RXJS
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {

  public guitars: Guitars[] = [];
  private suscription!: Subscription;

  @Input() callBack!: (id: number) => void;

  constructor(private dataService: DataServices) { }

  ngOnInit(): void {
    // Suscrípcion para recibir los datos de DataServices
    this.suscription = this.dataService.getData().subscribe(item => {
      this.guitars = item;
    })
  }

  /**
   * deleteItemCart(Enviando datos al padre)
  */
  public deleteItemCart(id: number) {
    this.callBack(id);
  }

  // Destruimos la suscripción
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }


}
