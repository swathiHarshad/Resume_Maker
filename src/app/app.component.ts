import { Component, Input } from '@angular/core';
import { curdServices } from './services/curd.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Resume';
  variables = {
    contactInfo: false ,
    certificate: false,
    Skills: false,
    experence: false,
    project: false,
    education: false
  } 
  constructor(private curOperation: curdServices){
    curOperation.menuupdate.subscribe((value)=>{
      this.variables[value] = !this.variables[value]
      console.log(this.variables[value])

    })
  }
}
