import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { State } from '../../models/State';
import * as companyActions from './../../state/company.actions';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  loading$: Observable<boolean>;
  companies$: Observable<Company[]>;

  constructor(
    private store: Store<State>,
    private companyService: CompanyService) {
      // this.companies$ = this.store.select(state => state.companies.results);
      this.companies$ = this.companyService.companies$;
      this.loading$ = this.store.select(state => state.companies.loading);
    }

    ngOnInit() {
      this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies();
    // this.companies$
    // this.store.dispatch(new companyActions.LoadCompanyAction());
    // this.store.dispatch(new companyActions.LoadCompanyAction());
  }

  addCompany() {
this.companyService.
  }

  deleteCompany(companyId: number) {
    // this.companyService.removeCompany(companyId)
    //   .subscribe(() => this.getCompanies());
    this.store.dispatch(new companyActions.DeleteCompanyAction(companyId));
    // this.store.dispatch(new companyActions.DeleteCompanyAction(companyId));
  }
}
