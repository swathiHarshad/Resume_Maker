import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skill-tag',
  templateUrl: './skill-tag.component.html',
  styleUrls: ['./skill-tag.component.less']
})
export class SkillTagComponent implements OnInit {
  skillSet = ["One"]
  @ViewChild('skillInput') skill : ElementRef
  toRemoveSkill(index: number){
    this.skillSet.splice(index,1)
  }
  SkillSetData(event: any){
    if(event.code === 'Enter'){
      this.skillSet.push(event.target.value)
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
