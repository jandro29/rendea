import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
