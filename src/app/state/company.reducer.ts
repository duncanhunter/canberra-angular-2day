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
      case companyActions.DELETE_COMPANY:
      return {
        ...state,
        loading: true
      };
      case companyActions.DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        results: state.results.filter(company => action.payload.id !== company.id)
      };
    default:
      return state;
  }
}
