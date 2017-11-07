import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'company/list', component: CompanyListComponent },
  { path: 'company/edit/:id', component: CompanyEditComponent },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
