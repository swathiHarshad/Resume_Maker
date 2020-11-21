import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.less']
})
export class ToggleBtnComponent implements OnInit {
  toShow: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
