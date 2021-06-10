import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Crear Array para mostrar

  productos=[
    "iPhone X",
    "Moto G",
    "iPhone 12"
  ]


  constructor() { }


  
  ngOnInit(): void {
  }

}
