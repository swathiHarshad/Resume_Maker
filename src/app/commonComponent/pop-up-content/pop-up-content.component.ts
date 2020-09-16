import { Component, Input, OnInit } from '@angular/core';
import { curdServices } from '../../services/curd.services';

@Component({
  selector: 'app-pop-up-content',
  templateUrl: './pop-up-content.component.html',
  styleUrls: ['./pop-up-content.component.less']
})
export class PopUpContentComponent implements OnInit {
  @Input() comp: string
  @Input() content: string
  @Input() contact: []
  toShow: boolean = false
  popup: boolean = true
  constructor(private curdOperation : curdServices) {
  }
  ngOnInit(){}

  toConfirm(onClickEvent: any){
    this.curdOperation.PopUpAction.emit(onClickEvent.target.textContent)
  }

}
