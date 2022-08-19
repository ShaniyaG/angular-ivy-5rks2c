import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../../app-routing-module';
import { CardsComponent } from './cards/cards.component';
import { TableComponent } from './table/table.component';
import { ThemeComponent } from './theme/theme.component';
import { TableService } from './table.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    CardsComponent,
    TableComponent,
    ThemeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TableService],
})
export class AppModule {}
