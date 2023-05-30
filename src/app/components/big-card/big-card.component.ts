import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  photoCover:string = "https://th.bing.com/th/id/R.3f0e177895ffea21ca745ce8702b4c87?rik=tGcTFvw9EGz%2foQ&pid=ImgRaw&r=0"
  cardTitle:string = "NOVO HOMEM DE FERRO ANUNCIADO"
  cardDescription:string = "Marvel Studios anuncia novo filme do Homem de Ferro"

  constructor(){ }
  ngOnInit(): void{
  }
}
