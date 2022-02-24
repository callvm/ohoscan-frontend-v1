import { Component, OnInit } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars
  faSearch = faSearch
  showSidebar: boolean = false

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.onSetSidebarOpen.subscribe(open => this.showSidebar = open)
  }

  openSidebar(){
    this.sidebarService.setSidebarOpen(true)
    this.showSidebar = true
  }

}
