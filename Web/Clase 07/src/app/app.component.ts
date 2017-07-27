import { Component } from '@angular/core';

// cwa es el acronimo de curso web angular.
//Un componente es html, con estilos y comportamientos.
@Component({
  selector: 'cwa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwa';
}
