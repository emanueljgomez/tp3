import { HttpClient } from '@angular/common/http';  // Autoimport generado por la línea 10
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http:HttpClient // Inyección de Dependencia necesaria para el consumo de peticiones HTTP
  ) { }

  /* Usamos el método getAll para RETORNAR el mismo contenido del Array (hardcodeado) 'productos' que se encontraba en home.components.ts

  getAll(){
    return [
      {
        id: 1,
        name:"iPhone X",
        price:"1000",
        description:"Desc iPhone X"
      },
  
      {
        id:2,
        name:"Moto G",
        price:"500",
        description:"Desc Moto G"
      },
      
      {
        id:3,
        name:"iPhone 12",
        price:"1500",
        description:"Desc iPhone 12"
      },
    ]
  }

  */

  // Método getAll: En este caso retornará el JSON de la API consumida

  getAll(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments?postId=1")  // Devuelve un OBSERVABLE (asincrónico). No devuelve datos.
  }


  /* Método para retornar un elemento único, en este caso un "JSON hardcodeado" se usa como ejemplo

  getById(id){
    return {
      id: 1,
      name:"iPhone X",
      price:"1000",
      description:"Desc iPhone X"
    }

  }

  */

  // Método getById: En este caso retornará un elemento del JSON de la API consumida

  getById(id){
    return this.http.get("https://jsonfy.com/items"+id)
  }
  

}
