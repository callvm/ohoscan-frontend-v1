import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  onSetSidebarOpen: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  setSidebarOpen(open: boolean){
    this.onSetSidebarOpen.emit(open)
  }



}
