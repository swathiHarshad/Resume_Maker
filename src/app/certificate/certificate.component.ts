import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.less']
})
export class CertificateComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}


  content = "Upload any certificate badges"
  comp = "Certification"
  certificateIcon = []

  fileChangeEvent(fileInput: any){
    
    if (fileInput.target.files && fileInput.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (e : Event) => {
          this.certificateIcon.push(e.target["result"])
          console.log(this.certificateIcon)
          
      }
      console.log('ReadAsDefault ', reader.readAsDataURL(fileInput.target.files[0]))
    }
  }

}
