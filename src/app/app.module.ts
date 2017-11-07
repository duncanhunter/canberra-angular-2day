import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from './company/company.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { companyReducer } from './reducers/companyReducer';
import { CompanyTableComponent } from './company/company-table/company-table.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyTablesComponent } from './company/company-tables/company-tables.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyTableComponent,
    CompanyEditComponent,
    CompanyTablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ companies: companyReducer })
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
