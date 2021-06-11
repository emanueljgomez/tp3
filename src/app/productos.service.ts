import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  // Usamos el método getAll para RETORNAR el mismo contenido del Array (hardcodeado) 'productos' que se encontraba en home.components.ts

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

  // Método para retornar un elemento único, en este caso un JSON hardcodeado se usa como ejemplo

  getById(id){
    return {
      id: 1,
      name:"iPhone X",
      price:"1000",
      description:"Desc iPhone X"
    }

  }


}
