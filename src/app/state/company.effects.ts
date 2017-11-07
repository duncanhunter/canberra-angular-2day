import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { switchMap, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { CompanyService } from '../company/company.service';
import * as companyActions from './company.actions';

@Injectable()
export class CompanyEffects {

  constructor(
    private companyService: CompanyService,
    private actions$: Actions
  ) { }

  @Effect() get$ = this.actions$
     .ofType(companyActions.LOAD_COMPANY)
     .pipe(
        tap(_ => console.log(companyActions.LOAD_COMPANY)),
        switchMap(payload => this.companyService.getCompanies()),
        map(companies => (new companyActions.LoadCompanySuccessAction(companies))
     )).catch((error) => Observable.of(new companyActions.LoadCompanyFailAction(error)));

}