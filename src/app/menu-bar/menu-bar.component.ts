import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.less']
})
export class MenuBarComponent implements OnInit {
  popup: boolean = true
  @Input() variables : object
  constructor() { }

  ngOnInit(): void {
  }

}
