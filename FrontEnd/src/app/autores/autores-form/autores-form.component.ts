import { Component, OnInit } from '@angular/core';
import { Autor } from '../autor';

@Component({
  selector: 'app-autores-form',
  templateUrl: './autores-form.component.html',
  styleUrls: ['./autores-form.component.css']
})
export class AutoresFormComponent implements OnInit {

  autor: Autor;

  constructor() { }

  ngOnInit(): void {

  }

  onClickSalvar() {
    
  }

}
