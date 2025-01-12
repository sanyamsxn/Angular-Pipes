import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
interface Sales{
  id : string;
  country : string;
  sales : number;
}
@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
sales :Sales[] = [
  {id : '1', country : 'Texas', sales :1000232.00},
  {id : '2', country : 'Los Angeles', sales :101022.00},
  {id : '3', country : 'New York', sales :999822.00},
  {id : '4', country : 'Scranton', sales :853232.00},
  {id : '5', country : 'Nashua', sales :1031902.00},
  {id : '6', country : 'Coloroda', sales :2350232.00},
];
}
