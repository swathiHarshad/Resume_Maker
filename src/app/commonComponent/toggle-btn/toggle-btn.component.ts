import { Component, Input, OnInit } from '@angular/core';
import { curdServices } from 'src/app/services/curd.services';

@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.less']
})
export class ToggleBtnComponent implements OnInit {
  @Input() toShow: boolean
  @Input() comp : string
  @Input() variables : object
  constructor(private curdOperation: curdServices) {
   }
   menuShortUpdate(event){
     console.log(this.comp)
    this.curdOperation.menuupdate.emit(this.comp)
   }
  ngOnInit(): void {
  }

}
