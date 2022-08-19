import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CardsComponent } from 'src/app/cards/cards.component';
import { TableComponent } from 'src/app/table/table.component';
import { ThemeComponent } from 'src/app/theme/theme.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TableComponent },
  { path: 'card', component: CardsComponent },
  { path: 'theme', component: ThemeComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
