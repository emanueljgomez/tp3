import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosPromiseService {

  constructor(
    private http:HttpClient
  ) { }

// Método getAllPromise: En este casó cumplirá la misma función que el método getAll de 'productos.service.ts' pero usando una promesa

  getAllPromise(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments?postId=1").toPromise() // Transforma al observable en una promesa
  }

}
