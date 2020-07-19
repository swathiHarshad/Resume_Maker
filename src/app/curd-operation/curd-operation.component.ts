import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { curdServices } from '../services/curd.services';

@Component({
  selector: 'app-curd-operation',
  templateUrl: './curd-operation.component.html',
  styleUrls: ['./curd-operation.component.less']
})
export class CurdOperationComponent implements OnInit {
  toOpenPopUp = false
  @Input() last:boolean
  @Input() index: Number
  @Input() comp: string

  @ViewChild('toGetId') toGetComponentName
  constructor(private curdOperation: curdServices,
    private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  statusUpdate(data: string, event){
    let obj = {
      status: data,
      index: +this.index,
      component: this.elRef.nativeElement.closest('.wholeContainer').attributes.id.value
    }
    if(data === 'remove'){
      this.toOpenPopUp = true
      this.curdOperation.PopUpAction.subscribe(
        (PopUpData:string) => {
          (PopUpData === 'Yes')?  this.curdOperation.actionStatus.emit(obj) : ''
          this.toOpenPopUp = false
        }
      )
    } else{
      this.curdOperation.actionStatus.emit(obj)
    }
  }
}
