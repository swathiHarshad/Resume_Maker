import { Component, OnInit } from '@angular/core';
import { ContactInfo } from 'src/app/variable.module';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  contactInfoData:ContactInfo[] = [
    new ContactInfo('Mail Id', 'gmail', true),
    new ContactInfo('Contact Number', 'phone', true),
    new ContactInfo('Github URL', 'github', true),
    new ContactInfo('LinkedIn', 'linkedin', true),
    new ContactInfo('Website URL', 'website', true)
  ]
}
