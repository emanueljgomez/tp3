import { Component, OnInit } from '@angular/core';
import { ProductosPromiseService } from '../productos-promise.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  productosPromise:any=[]

  constructor(
    private ProductosPromiseService:ProductosPromiseService
  ) { 
    /*this.ProductosPromiseService.getAllPromise()
    .then(data=>{
      console.log(data)
      this.productosPromise=data
    })*/
    this.getProductos()
  }
 
  async getProductos(){
    this.productosPromise = await this.ProductosPromiseService.getAllPromise()
  }

  ngOnInit(): void {
  }

}
