import { Component, Input, OnInit } from '@angular/core';
import { curdServices } from '../services/curd.services';
import { CurdOperationData, Project } from '../variable.module';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {
  @Input() last = false
  @Input() index: Number
  comp= "project"

  projectData: Project[] = [
    new Project('', "", "", "", "", "", [])
  ]

  constructor(private curdOperation: curdServices) { 
    this.curdOperation.actionStatus.subscribe(
      (obj: CurdOperationData) => {
        if(obj.status !== '' && obj.component=== this.comp){
          switch (obj.status) {
            case 'add' :
              let new_Data = new Project('', '', '', '', '', '',[]);
              this.projectData.push(new_Data)
              break;
            case 'remove' :
              this.projectData.splice(obj.index,1)
              break;
          }
        }
      }
    );
  }

  // Skill Tag
  toRemoveSkill(skillIndex: number, projectIndex: number){
    // this.experience_data.splice(index,1)
    console.log(skillIndex, projectIndex)
    this.projectData[projectIndex].Skill.splice(skillIndex,1)
    console.log(this.projectData[projectIndex].Skill)
  }
  SkillSetData(event: any, projectIndex: number){
    console.log(event.target.value)
    let value = event.target.value
    if(event.code === 'Enter'){
      this.projectData[projectIndex].Skill.push(value)
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
