import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { switchMap } from 'rxjs/operators/switchMap';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/index';

@Injectable()
export class CompanyService {
  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) {
    // this.startRandomAdding();
  }

  getCompanies(): Observable<Company[]> {
    return this.httpClient
      .get<Company[]>(`${this.API_BASE}/company`)
      .pipe(catchError(error => this.errorHandler(error)));
  }

  removeCompany(companyId: number): Observable<Company> {
    return this.httpClient.delete<Company>(
      `${this.API_BASE}/company/${companyId}`
    );
  }

  addCompany(company: Company): Observable<Company> {
    return this.httpClient
      .post<Company>(`${this.API_BASE}/company`, company)
      .pipe(catchError(error => this.errorHandler(error)));
  }

  updateCompany(company: Company): Observable<Company> {
    return this.httpClient
      .put<Company>(`${this.API_BASE}/company/${company.id}`, company)
      .pipe(catchError(error => this.errorHandler(error)));
  }

  getCompany(companyId: number) {
    return this.httpClient
      .get<Company>(`${this.API_BASE}/company/${companyId}`)
      .pipe(catchError(error => this.errorHandler(error)));
  }

  startRandomAdding() {
    IntervalObservable.create(5000)
      .pipe(
        switchMap(interval =>
          this.httpClient.post<Company>(`${this.API_BASE}/company`, {
            name: `company-${interval}`,
            email: 'email',
            phone: 123
          })
        )
      )
      .subscribe(console.log);
  }

  private errorHandler(error: Error): Observable<any> {
    console.error('implement custom errort handler here', error);
    // return Observable.throw(error);
    return new EmptyObservable();
  }

  // 1/ return union type so 400(bad request), 422(unprocessable) and 404(notfound)
  // 2/ return and empty observable means it is completed
  // 3/ use http interceptor and move this logic to a globale handler vs 500(server error)
}
