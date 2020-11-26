import { EventEmitter } from '@angular/core'
import { CurdOperationData } from '../variable.module';

export class curdServices {

  actionStatus = new EventEmitter<CurdOperationData>();
  PopUpAction = new EventEmitter<string>();
  dateUpdate = new EventEmitter<object>();
  menuupdate = new EventEmitter<string>();
}