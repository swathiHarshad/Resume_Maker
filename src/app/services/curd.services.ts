import { EventEmitter } from '@angular/core'
import { CurdOperationData, variable } from '../variable.module';

export class curdServices {

  actionStatus = new EventEmitter<CurdOperationData>();
  PopUpAction = new EventEmitter<string>();
  dateUpdate = new EventEmitter<object>();
  menuupdate = new EventEmitter<string>();
  variableUpdate = new EventEmitter<object>();
}