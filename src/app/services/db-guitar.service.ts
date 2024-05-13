import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interface Guitars
import { Guitars } from "../models/guitars";

@Injectable({
  providedIn: 'root'
})
export class DbGuitarService {

  private dbURL = './../../assets/db/bd.json';


  constructor(private http: HttpClient) { }


  // Consulta de tipo Observable
  public get getGuitars(): Observable<Guitars[]> {
    return this.http.get<Guitars[]>(this.dbURL);
  }


}
