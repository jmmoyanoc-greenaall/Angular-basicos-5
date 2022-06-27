import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input('data') personajes: Personaje[] = [];

  @Input('nuevo') nuevo:Personaje = {
    nombre: '',
    poder: 0
  } 

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    //event.preventDefault();
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    //this.onNuevoPersonaje.emit(this.nuevo);
    //this.personajes.push(this.nuevo);
    this.dbzService.agregarPersonajes(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    console.log(this.nuevo);
  }

  cambiarNombre(event: any){
    console.log(event.target.value);
  }

  constructor(private dbzService:DbzService){

  }

}
