import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTableComponent } from './company-table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Company } from '../company';
import { By } from '@angular/platform-browser';

describe('CompanyTablesComponent', () => {
  let component: CompanyTableComponent;
  let fixture: ComponentFixture<CompanyTableComponent>;
  let fakeCompanies: Company[];

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [CompanyTableComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTableComponent);
    component = fixture.componentInstance;
    fakeCompanies = [{id: 1, name: 'fakeName', email: 'fakeEmail', phone: 123 }];
    component.companies = fakeCompanies;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a single company`, () => {
    const tableRows  = fixture.debugElement.queryAll(By.css('.company-row'));
    expect(tableRows.length).toEqual(1);
  });


});
