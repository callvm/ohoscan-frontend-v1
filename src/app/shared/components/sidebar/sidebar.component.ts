import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() closeSidebar: EventEmitter<any> = new EventEmitter()

  faWindowClose = faWindowClose

  constructor() { }

  ngOnInit(): void {
  }

}
