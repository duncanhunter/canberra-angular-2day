import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent {
  @Input() companies: Company[];
  @Output() onDeleteCompany = new EventEmitter<number>();

  removeCompany(companyId: number) {
    this.onDeleteCompany.emit(companyId);
  }
}
