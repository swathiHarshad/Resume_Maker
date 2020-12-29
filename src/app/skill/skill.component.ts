import { Component, OnInit, Output } from '@angular/core';
import { Skill, CurdOperationData } from '../variable.module';
import { curdServices } from '../services/curd.services';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.less']
})
export class SkillComponent implements OnInit {
  @Output() skill:Skill[] = [ new Skill('Skill Name', 100) ]
  comp = "Skill Set"
  constructor(private curdOperation: curdServices) {
    this.curdOperation.actionStatus.subscribe(
      (obj: CurdOperationData)=>{
        if(obj.status !== '' && obj.component === "SkillSet"){
          switch (obj.status) {
            case 'add' :
              let new_Data = new Skill('Skill Name', 0 );
              this.skill.push(new_Data)
              break;
            case 'remove' :
              this.skill.splice(obj.index,1)
              break;
          }
        }
      }
    )
   }
  ngOnInit(): void {}
  SkillPercent(i:number, percentInput: string, event: any){
    if(percentInput !== '' && +percentInput <= 100) {
      this.skill[i].Percentage = +percentInput
      this.getPercentageColor(this.skill[i].Percentage)
    }else{
      this.skill[i].Percentage = 0
      this.getPercentageColor(0)
    }
  }
  getPercentageColor(Percent: number){
    let skillPercent = 3.6 * Percent // 3.6= 360deg / 100%
    let percent = {
      background: 'conic-gradient( rgb(247, 168, 143) 0deg '+ skillPercent +'deg, lightgrey '+skillPercent+'deg 360deg )'
    }
      return percent
  }
  toAddTracker(index:number, el:any): number {
    return el.index;
  }
}
