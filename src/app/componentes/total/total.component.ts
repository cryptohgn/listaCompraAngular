import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
 @Input() misProductos: Producto[] = [];
 ngOnInit(){
  this.cargarTotal()
 }
 cargarTotal(){
  let suma = 0;
  this.misProductos.forEach(producto => suma += producto.price)
  return suma;
 }
}
