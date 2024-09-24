import { Component } from '@angular/core';

import { signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
 welcome =  "Bienvenidos";
 tasks =signal(["Instalar Angular", "Crear proyecto", "Crear componente", "Crear Servicio"]) ;
 name = signal ('Jose');
 age = 30;

 person = signal (
  {
    name:"nicolas",
    age: 16,
    tasks: "http://w3schools.com/howto/img_avatar.png"
  }
 )
 colorCtrl = new FormControl();
 widthCtrl = new FormControl(50,{
  nonNullable: true,
 });
 nameCtrl = new FormControl(50,{
  nonNullable: true,
  validators: [
    Validators.required,
    Validators.minLength(3),
  ]
 });


 constructor()
{
  this.colorCtrl.valueChanges.subscribe(value => console.log(value));
 
} clickHandler(){
  alert("hola")
 }
 keyDownHandler(event: KeyboardEvent){
  alert("keydown")
 }
changeHandler(event: Event){
  const input = event.target as HTMLInputElement;
  const newValue = input.value
  this.name.set(newValue);
}
changeAge (event: Event){
  const input = event.target as HTMLInputElement;
  const newValue = input.value
  this.person.update(prevState=>{
    return {...prevState, age: parseInt(newValue)}
  });
}
changeName(event: Event){
  const input = event.target as HTMLInputElement;
  const newValue = input.value
  this.person.update(prevState=>{
    return {...prevState, name: newValue}
  });
}
}
