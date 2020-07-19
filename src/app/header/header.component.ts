import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  name:string = 'Harshad Ranganathan'
  occupation:string = 'Software Developer | AWS, GCP, IBM Cloud certified'
  constructor() { }

  ngOnInit(): void {
  }

}
