import { Component, OnInit, Input } from '@angular/core';

import { variable, CurdOperationData, DateUpdateObj, Experience } from '../variable.module';
import { curdServices } from '../services/curd.services'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {
  @Input() experience_data = variable.experienceData
  
  @Input() last = false
  @Input() index: Number
  comp= "experience"
  
  constructor(private curdOperation: curdServices) { 
    this.curdOperation.actionStatus.subscribe(
      (obj: CurdOperationData) => {
        if(obj.status !== '' && obj.component=== this.comp){
          switch (obj.status) {
            case 'add' :
              let new_Data = new Experience('', '', '', '', '',[]);
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
  // Skill Tag
  toRemoveSkill(skillIndex: number, experienceIndex: number){
    // this.experience_data.splice(index,1)
    console.log(skillIndex, experienceIndex)
    this.experience_data[experienceIndex].Skill.splice(skillIndex,1)
    console.log(this.experience_data[experienceIndex].Skill)
  }
  SkillSetData(event: any, experienceIndex: number){
    console.log(event.target.value)
    let value = event.target.value
    if(event.code === 'Enter'){
      this.experience_data[experienceIndex].Skill.push(value)
      event.currentTarget.value= ''
    }
  }

  toAddTracker(el:any): number {
    return el.index;
  }
  textAreaAdjust(event){
    console.log(event)
    event.target.style.height = "1px";
    event.target.style.height = (25+event.target.scrollHeight)+"px";
  }
  ngOnInit(): void {
  }
}
