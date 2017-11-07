import * as companyActions from './company.actions';
import { Company } from '../company/company';

export interface CompanyState {
  loading: boolean;
  results: Company[];
}

export const initialState: CompanyState = {
  loading: false,
  results: []
};

export function reducer(
  state = initialState,
  action: companyActions.Actions
): CompanyState {
  switch (action.type) {
    case companyActions.LOAD_COMPANY_SUCCESS:
      return {
        ...state,
        results: action.payload
      };
    default:
      return state;
  }
}
