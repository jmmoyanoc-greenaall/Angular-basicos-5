import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado:string = '';
  mostrar:boolean = false;

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    if(this.heroeBorrado != ''){
      this.mostrar = true;
    }
  }

  restaurar(){
    this.mostrar = false;
  }
}


