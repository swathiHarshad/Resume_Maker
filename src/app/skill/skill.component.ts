import { Component, OnInit, Output } from '@angular/core';
import { Skill, CurdOperationData } from '../variable.module';
import { curdServices } from '../services/curd.services';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.less']
})
export class SkillComponent implements OnInit {
  @Output() skill:Skill[] = [
    new Skill('Skill Name', 100)
  ]
  skillPercent: number = 0
  PercentageColor: {
    background: string
  } 
  onclick = false
  comp = "Skill Set"
  constructor(private curdOperation: curdServices) {
    this.curdOperation.actionStatus.subscribe(
      (obj: CurdOperationData)=>{

        if(obj.status !== '' && obj.component === "SkillSet"){
          switch (obj.status) {
            case 'add' :
              let new_Data = new Skill('Skill Name', 0 );
              this.skill.push(new_Data)
              console.log(this.skill)
              break;
            case 'remove' :
              this.skill.splice(obj.index,1)
              break;
          }
        }

      }
    )
   }

  ngOnInit(): void {
  }





  SkillPercent(i:number, percentInput: string){
    console.log(percentInput)
    if(percentInput !== '') {
      this.skill[i].Percentage = +percentInput
    }else{
      this.skill[i].Percentage = 0
    }
    if(this.skill[i].Percentage <= 100)
    this.getPercentageColor(this.skill[i].Percentage)
    else {
      this.getPercentageColor(0)
      this.skill[i].Percentage = 0 
    }
    this.onclick = true
  }
  getPercentageColor(Percent: number){

    this.skillPercent = 3.6 * Percent // 3.6= 360deg / 100%
    this.PercentageColor = {
      background: 'conic-gradient( rgb(247, 168, 143) 0deg '+ this.skillPercent +'deg, lightgrey '+this.skillPercent+'deg 360deg )'
    }
    return this.PercentageColor 
  }
  toAddTracker(index:number, el:any): number {
    return el.index;
  }
}
