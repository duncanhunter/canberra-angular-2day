import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable()
export class CompanyService {

  constructor() { }

  getCompanies(): Company[] {
    return [
     {name: 'company name 1', email: 'email', phone: 123},
     {name: 'company name 2', email: 'email', phone: 123}
   ];
 }

}
