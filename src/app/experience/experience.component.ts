import { Component, OnInit, Input } from '@angular/core';

import { Experience, CurdOperationData } from '../variable.module';
import { curdServices } from '../services/curd.services'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {
  @Input() experience_data : Experience[] = [
    new Experience('Associate', 'Cognizant', "Description"),
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
              let new_Data = new Experience('Designation', 'Company Name', 'Description');
              this.experience_data.push(new_Data)
              break;
            case 'remove' :
              this.experience_data.splice(obj.index,1)
              break;
          }
        }
      }
    );
  }

  ngOnInit(): void {
  }
  toAddTracker(index:number, el:any): number {
    return el.index;
  }
}
