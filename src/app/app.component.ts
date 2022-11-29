import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practica-angular';
  name = 'Sebastian';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;

  person = {
    name:'Sebas',
    age:19,
    img:'https://www.w3schools.com/howto/img_avatar.png'
  }

  Desactivar(){
    this.btnDisabled =! this.btnDisabled;
  }

  Edad(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  cambiarNombre(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
