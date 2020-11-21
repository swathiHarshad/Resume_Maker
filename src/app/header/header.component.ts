import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  name:string 
  occupation:string 
  profileImage: string = ''

  fileChangeEvent(fileInput: any){
    
    if (fileInput.target.files && fileInput.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (e : Event) => {
          this.profileImage = e.target["result"]
          console.log(this.profileImage)
          
      }
      console.log('ReadAsDefault ', reader.readAsDataURL(fileInput.target.files[0]))
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
