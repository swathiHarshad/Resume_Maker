import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { CurdOperationComponent } from './commonComponent/curd-operation/curd-operation.component';
import { curdServices } from './services/curd.services';
import { PopUpContentComponent } from './commonComponent/pop-up-content/pop-up-content.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ContactListComponent } from './contact-info/contact-list/contact-list.component';
import { HoverDirectiveDirective } from './hover-directive.directive';
import { DateTemplateComponent } from './commonComponent/date-template/date-template.component';
import { ProjectComponent } from './project/project.component';
import { SkillTagComponent } from './commonComponent/skill-tag/skill-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactInfoComponent,
    ExperienceComponent,
    CurdOperationComponent,
    PopUpContentComponent,
    SkillComponent,
    EducationComponent,
    CertificateComponent,
    ContactListComponent,
    HoverDirectiveDirective,
    DateTemplateComponent,
    ProjectComponent,
    SkillTagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [curdServices],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
