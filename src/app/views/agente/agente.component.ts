import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-agente',
  templateUrl: './agente.component.html',
  styleUrls: ['./agente.component.css']
})
export class AgenteComponent implements OnInit {

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
