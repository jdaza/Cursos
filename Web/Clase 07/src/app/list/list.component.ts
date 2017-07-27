import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cwa-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Dentro de este método va el código de inicialización del componente. 
    //No es lo mismo que usar el constructor.
  }

}
