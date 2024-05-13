import { Component, OnInit } from '@angular/core';

// Servicios
import { DbGuitarService } from './services/db-guitar.service';
import { DataServices } from './services/data-services.service';

// Modelos interfaces
import { Guitars } from './models/guitars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  // Logica para el componente Principal

  // Propiedades de la clase
  public guitars: Guitars[] = [];
  public cart: Guitars[] = [];

  constructor(
    private servicesDbGuitar: DbGuitarService,
    private dataServices: DataServices
  ) { }

  ngOnInit(): void {

    this.servicesDbGuitar.getGuitars.subscribe({

      next: (guitars: Guitars[]) => {
        this.guitars = guitars
      },

      error: error => console.log(error),

      complete: () => console.log('Consulta http completada')

    })
  }

  /**
   * addItemCart
   * Al definir addItemCart como una función de flecha, te aseguras de que el contexto 
   * de this se mantenga incluso cuando se pase como una propiedad de entrada al componente hijo. 
   */
  public addItemCart = (item: Guitars) => {


    let updateCart: Guitars[] = [];

    // Si existe devuelve la posicion del item, si no existe devuelve -1(No Muta)
    const itemExists = this.cart.findIndex(guitar => guitar.id === item.id);

    if (itemExists >= 0) { // Si existe

      updateCart = [...this.cart]; // Tomamos la copia del array guitars

      if (updateCart[itemExists].quantity) {
        updateCart[itemExists].quantity!++; // Aumentamos la cantidad si existe
      }

      // Actualizamos nuestro carrito this.cart
      this.cart = updateCart;

      // Servicio que envia los datos[] mediante el observable
      this.dataServices.sendData(updateCart);

    } else {

      item.quantity! = 1; // Si no existe, inicializamos la cantidad

      updateCart = [...this.cart, item];

      // Actualizamos nuestro carrito this.cart
      this.cart = updateCart;

      // Servicio que envia los datos[] mediante el observable
      this.dataServices.sendData(updateCart);
    }

  }


  /**
   * deleteItemCart
   * Al definir deleteItemCart como una función de flecha, te aseguras de que el contexto 
   * de this se mantenga incluso cuando se pase como una propiedad de entrada al componente hijo. 
   */
  public deleteItemCart = (id: number) => {

    // Array methoth filter que NOMUTA el state
    const newCart: Guitars[] = this.cart.filter(guitar => guitar.id !== id);

    // Actualizamos nuestro carrito this.cart    
    this.cart = newCart;

    // Servicio que envia los datos[] mediante el observable
    this.dataServices.sendData(this.cart);
  }

}
