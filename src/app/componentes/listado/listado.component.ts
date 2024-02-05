import { Producto } from './../../interfaces/producto.interface';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
 @Input() misProductos:Producto[] = [];
 ngOnInit(){
  this.cargarProductos()
 }

 cargarProductos() {
  let html="";
  this.misProductos.forEach( producto => {
  html +=`<li>${producto.name} - ${producto.price}€</li> `
  })
  return html
 }
}
