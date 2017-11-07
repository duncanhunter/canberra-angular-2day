import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { CompanyService } from '../company.service';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  companyForm: FormGroup;
  isNewCompany: boolean;
  companyId: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.companyId = this.activatedRoute.snapshot.params['id'];
    this.isNewCompany = this.companyId === 'new';
    this.buildForm();
    if (!this.isNewCompany) {
      this.getCompany();
    }
  }

  buildForm(): void {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['']
    });
  }

  getCompany() {
    this.companyService
      .getCompany(this.companyId)
      .subscribe(company => this.companyForm.patchValue(company));
  }

  saveCompany(): void {
    if (this.isNewCompany) {
      this.companyService
        .addCompany(this.companyForm.value)
        .subscribe(() => this.router.navigate([`/company/list`]));
    } else {
      const newCompany = { ...this.companyForm.value, id: this.companyId };
      this.companyService.updateCompany(newCompany)
      .subscribe(() => this.router.navigate([`/company/list`]));
    }
  }
}
