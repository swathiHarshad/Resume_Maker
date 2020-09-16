export class Experience {
  constructor(public Title: string, public Company: string, public description: string, public From: string, public To: string){
  }
}
export class ContactInfo {
  constructor( public name:string, public iconImage:string, public toShow: boolean){
  }
}

export class Education {
  constructor(public Degree: string, public College: string, public From: string, public To: string) {
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

export class DateUpdateObj {
  constructor(public comp: string, public index: number, public when: string, public date: string){}
}

export class Skill {
  constructor(public SkillName: string, public Percentage: number){
  }
}