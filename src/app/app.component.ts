import { Component } from '@angular/core';
import { Producto } from './interfaces/producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //ng interface interfaces/Producto --type= interface
  arrProducts: Producto [] = [{
    name: 'Leche Desnatada',
    price: 2.5

  },
  {
    name: 'Pan',
    price: 1
  },
  {
    name: 'Aceite de Oliva',
    price: 10
  }

]
}
