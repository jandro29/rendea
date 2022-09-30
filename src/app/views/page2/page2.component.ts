import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
