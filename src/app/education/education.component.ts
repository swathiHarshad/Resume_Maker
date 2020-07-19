import { Component, OnInit, Input } from '@angular/core';
import { Education, CurdOperationData } from '../variable.module';
import { curdServices } from '../services/curd.services';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent implements OnInit {
  
  @Input() Education_data : Education[] =[
    new Education ('Degree', 'College')
  ]

  comp = "Educational" 

  constructor(private curdOperation: curdServices) {
    this.curdOperation.actionStatus.subscribe(
      (obj: CurdOperationData) => {
        if(obj.status !== '' && obj.component === 'education'){
          switch (obj.status) {
            case 'add' :
              let new_Data = new Education('Degree', 'College Name');
              this.Education_data.push(new_Data)
              break;
            case 'remove' :
              this.Education_data.splice(obj.index,1)
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
