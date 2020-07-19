import { Component, OnInit } from '@angular/core';
import { ContactInfo } from '../variable.module';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.less']
})
export class ContactInfoComponent implements OnInit {
  contactInfoData:ContactInfo[] = [
    new ContactInfo('rharshad93@gmail.com', 'gmail', 'rharshad93@gmail.com'),
    new ContactInfo('swathi', 'swa', 'swa')
  ]
  nationality:string = 'data'
  constructor() { }

  ngOnInit(): void {
  }

}
