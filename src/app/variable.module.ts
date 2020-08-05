export class Experience {
  constructor(public Title: string, public Company: string, public description: string){
  }
}
export class ContactInfo {
  constructor( public name:string, public iconImage:string, public toShow: boolean){
  }
}

export class Education {
  constructor(public Degree: string, public College: string) {
  }
}
export let contactInfoData:ContactInfo[] = [
  new ContactInfo('Mail Id', 'gmail', true),
  new ContactInfo('Contact Number', 'phone', true),
  new ContactInfo('Github URL', 'github', true),
  new ContactInfo('LinkedIn', 'linkedin', true),
  new ContactInfo('Website URL', 'website', true)
] 

export class CurdOperationData {
  constructor(public status: string, public index: number, public component){
  }
}

export class Skill {
  constructor(public SkillName: string, public Percentage: number){
  }
}