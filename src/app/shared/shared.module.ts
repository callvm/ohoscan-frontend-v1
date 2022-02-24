import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LatestInfoComponent } from './components/latest-info/latest-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SummaryComponent } from './components/summary/summary.component';
import { RouterModule } from '@angular/router';
import { BlockService } from './services/http/block.service';

@NgModule({
  declarations: [HeaderComponent, LatestInfoComponent, SidebarComponent, SummaryComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [HeaderComponent, SidebarComponent, SummaryComponent, LatestInfoComponent],
})
export class SharedModule {}
