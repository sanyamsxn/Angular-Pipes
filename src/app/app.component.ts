import { Component } from '@angular/core';
import { ContainerComponent } from "./container/container.component";
import { SalesComponent } from './sales/sales.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ContainerComponent, SalesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'temperaturePipes';
}
