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
  public cartTotal!: number;

  private suscription!: Subscription;


  @Input() callBackDeleteItemCart!: (id: number) => void;
  @Input() callBackIncreaseQuantity!: (id: number) => void;
  @Input() callBackDecreaseQuantity!: (id: number) => void;
  @Input() callBackClearCart!: () => void;

  constructor(private dataService: DataServices) { }

  ngOnInit(): void {
    // Suscrípcion para recibir los datos de DataServices
    this.suscription = this.dataService.getData().subscribe(item => {

      // Recibimos los items
      this.guitars = item;

      // Actualizamos el total del carrito

      this.cartTotal = this.guitars.reduce((total, guitar) => total + (guitar.price * guitar.quantity!), 0)

    })
  }

  /**
   * deleteItemCart(Enviando datos al padre)
  */
  public deleteItemCart(id: number) {
    this.callBackDeleteItemCart(id);
  }

  /**
   * increaseQuantity(id:number)
   */
  public increaseQuantity(id: number) {
    this.callBackIncreaseQuantity(id);
  }

  /**
   * decreaseQuantity(id:number)  
   */
  public decreaseQuantity(id: number) {
    this.callBackDecreaseQuantity(id);
  }


  /**
   * clearCart
   */
  public clearCart() {
    this.callBackClearCart()
  }

  // Destruimos la suscripción
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }


}
