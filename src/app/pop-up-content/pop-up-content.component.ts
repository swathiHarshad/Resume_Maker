import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { curdServices } from '../services/curd.services';

@Component({
  selector: 'app-pop-up-content',
  templateUrl: './pop-up-content.component.html',
  styleUrls: ['./pop-up-content.component.less']
})
export class PopUpContentComponent implements OnInit, OnChanges {
  @Input() comp: string
  @Input() content: string

  constructor(private curdOperation : curdServices) {
   
   }
  ngOnInit(): void {
    if(this.comp === "Certification"){
      this.toShow = true;
    }
  }
  ngOnChanges(): void {
    if(this.comp === "Certification"){
      this.toShow = true;
    }else {
      this.toShow = false
    }
  }

  
  toShow: boolean = false
  toConfirm(onClickEvent: any){
    console.log(onClickEvent.target.textContent)
    this.curdOperation.PopUpAction.emit(onClickEvent.target.textContent)
  }
  showStyle() {
    if(this.toShow){
      let style = {
        "padding": "10px"
      };
      return style
    }
  }
}
