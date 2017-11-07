import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from './company/company.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CompanyTableComponent } from './company/company-table/company-table.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyEffects } from './state/company.effects';
import { reducer } from './state/company.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyTableComponent,
    CompanyEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({companies: reducer}),
    EffectsModule.forRoot([CompanyEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
