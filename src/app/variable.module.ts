export class Experience {
  constructor(public Title: string, public Company: string, public description: string){
  }
}
export class ContactInfo {
  constructor( public name:string, public iconImage:string, public PathUrl: string){
  }
}

export class Education {
  constructor(public Degree: string, public College: string) {
  }
}

export class CurdOperationData {
  constructor(public status: string, public index: number, public component){
  }
}

export class Skill {
  constructor(public SkillName: string, public Percentage: number){
  }
}