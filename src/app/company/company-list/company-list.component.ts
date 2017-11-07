import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { AppState } from '../../reducers/index';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies$: Observable<Company[]>;

  constructor(
    private store: Store<AppState>,
    private companyService: CompanyService) {
    this.companies$ = this.store.select(state => state.companies);
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

  deleteCompany(companyId: number) {
    this.companyService.removeCompany(companyId)
      .subscribe(() => this.getCompanies());
  }
}
