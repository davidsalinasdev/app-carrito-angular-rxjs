import { Injectable } from '@angular/core';

// RXJS
import { Observable, Subject } from 'rxjs';

// Modelos interfaces
import { Guitars } from '../models/guitars';

@Injectable({
  providedIn: 'root'
})
export class DataServices {

  // Permite emitir y escuchar datos(Suscribirse)
  private dataSubject: Subject<Guitars[]> = new Subject<Guitars[]>();

  constructor() { }

  /**
   * sendData - Permite enviar datos
   */
  public sendData(data: Guitars[]) {
    this.dataSubject.next(data);
  }

  /**
   * getData - Permite obtener datos
   */
  public getData(): Observable<Guitars[]> {
    return this.dataSubject.asObservable();
  }

}
