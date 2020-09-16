import { Component, OnInit, Input } from '@angular/core';

import { Experience, CurdOperationData, DateUpdateObj } from '../variable.module';
import { curdServices } from '../services/curd.services'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {
  @Input() experience_data : Experience[] = [
    new Experience('Designation', 'Company', "Description", '',''),
  ]
  
  @Input() last = false
  @Input() index: Number
  comp= "experience"
  
  constructor(private curdOperation: curdServices) { 
    this.curdOperation.actionStatus.subscribe(
      (obj: CurdOperationData) => {
        if(obj.status !== '' && obj.component=== 'experience'){
          switch (obj.status) {
            case 'add' :
              let new_Data = new Experience('Designation', 'Company Name', 'Description', '', '');
              this.experience_data.push(new_Data)
              break;
            case 'remove' :
              this.experience_data.splice(obj.index,1)
              break;
          }
        }
      }
    );
    this.curdOperation.dateUpdate.subscribe((Obj: DateUpdateObj)=>{
      if(Obj.comp === this.comp){
        this.experience_data[Obj.index][Obj.when] = Obj.date
      }
    })
  }

  ngOnInit(): void {
  }
  toAddTracker(el:any): number {
    return el.index;
  }
  textAreaAdjust(event){
    console.log(event)
    event.target.style.height = "1px";
    event.target.style.height = (25+event.target.scrollHeight)+"px";
  }
}
