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
    contactInfo: true ,
    certificate: true,
    Skills: true,
    experence: true,
    project: true,
    education: true
  } 
  constructor(private curOperation: curdServices){
    curOperation.menuupdate.subscribe((value)=>{
      this.variables[value] = !this.variables[value]
      console.log(this.variables[value])
    })
  }
}
