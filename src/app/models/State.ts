import { Company } from '../company/company';
import { CompanyState } from '../state/company.reducer';

export interface State {
  companies: CompanyState;
}
