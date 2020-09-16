import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { curdServices } from 'src/app/services/curd.services';

@Component({
  selector: 'app-date-template',
  templateUrl: './date-template.component.html',
  styleUrls: ['./date-template.component.less']
})
export class DateTemplateComponent implements OnInit {
  
  @Input() component: string
  @Input() index: number
  

  constructor(private curdOperation: curdServices) { 
    console.log(this.component, this.index)
  }
  Date(when: string, event: any){
    let obj={
      comp: this.component,
      index: this.index,
      when: when,
      date: event.target.value
    }
    console.log(obj)

    this.curdOperation.dateUpdate.emit(obj)
    
  }
  ngOnInit(): void {
  }

}
