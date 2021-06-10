import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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


  
  constructor() { }



  ngOnInit(): void {
  }

}
