import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
interface Temperature{
  id:string;
  value:string;
  city:string;
}

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})


export class ContainerComponent {
  temps: Temperature[] = [
    {id:'1', value:'11.89877', city:'Delhi'},
    {id:'2', value:'16.89765', city:'Jaipur'},
    {id:'3', value:'10.76546', city:'Lucknow'},
    {id:'4', value:'8.7657', city:'Bareilly'},
    {id:'5', value:'11.98754', city:'Agra'},
  ];

  flag =false;

  changeToFahr(){
    this.flag = true;
  }

  convertToNum(value:string){
    return Number(value);
  }

  changeToCel(){
    this.flag = false;
  }
}
