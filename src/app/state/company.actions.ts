import { Action } from '@ngrx/store';
import { Company } from '../company/company';

export const LOAD_COMPANY = '[Company] Load';
export const LOAD_COMPANY_SUCCESS = '[Company] Load Success';
export const LOAD_COMPANY_FAIL = '[Company] Load Fail';

export class LoadCompanyAction implements Action {
  readonly type = LOAD_COMPANY;
}

export class LoadCompanySuccessAction implements Action {
  readonly type = LOAD_COMPANY_SUCCESS;
  constructor(public payload: Company[]) { }
}

export class LoadCompanyFailAction implements Action {
  readonly type = LOAD_COMPANY_FAIL;
  constructor(public payload: any) { }
}

export type Actions =
  | LoadCompanyAction
  | LoadCompanySuccessAction
  | LoadCompanyFailAction;
