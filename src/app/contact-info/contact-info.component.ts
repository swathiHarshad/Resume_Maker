import { Component, OnInit, HostListener } from '@angular/core';
import { ContactInfo } from '../variable.module';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.less']
})
export class ContactInfoComponent implements OnInit {
  
  // nationality:string = 'data'
  constructor() { }
  ngOnInit(): void {}
// To show the options
  comp = 'Content-info'
  content: 'To remove any contact info in the column';
  show = false

}
