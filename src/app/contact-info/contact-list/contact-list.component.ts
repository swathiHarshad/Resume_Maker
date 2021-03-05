import { Component, OnInit, Input } from '@angular/core';
import { variable } from 'src/app/variable.module';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {
  @Input() popup: boolean

  constructor() { }
  ngOnInit(): void {}
  contactInfoData = variable.contactInfoData
}
