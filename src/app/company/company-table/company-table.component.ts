import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-table',
  template: `
    <table class="table table-striped">
      <thead>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let company of companies">
          <td>{{company.name}}</td>
          <td>{{company.email}}</td>
          <td>{{company.phone}}</td>
          <td>
             <button class="btn btn-default" [routerLink]="['/company/edit', company.id]">Edit</button>
             <button class="btn btn-default" (click)="onDeleteCompany.emit(company.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class CompanyTableComponent {
  @Input() companies: Company[];
  @Output() onDeleteCompany = new EventEmitter<number>();
}
