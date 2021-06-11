import { Component, OnInit } from '@angular/core';
// Los servicios deben importarse en el/los componentes donde serán usados
import { ProductosService } from '../productos.service'; // Autoimport generado por la línea 46

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*

  // Crear Array de objetos para mostrar (Mockup data)

  productos=[
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

  */


  productos:any=[]  // Se define el array como "any" para evitar conflicto de tipo de datos (no es lo recomendable)
  

  constructor(
    private productosService:ProductosService // Injección de Dependencia -- Al escribir esta línea se genera automáticamente el import de ProductosService
  ) {
    
    /* this.productos = this.productosService.getAll(); */ // Con esta línea se obtiene la mockup data


    this.productosService.getAll()
    .subscribe(data=>{  // Método Subscribe: nos "suscribimos" al Observable, escuchando los cambios en tiempo real
        console.log(data) // Se ejecuta la función al recibir novedades del Observable
        this.productos=data
    })


  }



  ngOnInit(): void {
  }

}
