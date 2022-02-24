import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HomeSummaryItemComponent } from './home/home-summary-item/home-summary-item.component';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

@NgModule({
  declarations: [AppComponent, HomeComponent, HomeSummaryItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
