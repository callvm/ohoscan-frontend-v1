import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarService } from './shared/services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild(MatSidenavModule) sidebar!: MatSidenavModule

  title = 'ohoscan-frontend-v1';
  showSidebar = false

  constructor(private sidebarService: SidebarService){

  }

  ngOnInit(): void {
      this.sidebarService.onSetSidebarOpen.subscribe(open => {
        console.log('got toggle in app')
        this.showSidebar = open
      })
  }

  closeSidebar(){
    this.showSidebar = false
    this.sidebarService.setSidebarOpen(false)
  }

}
