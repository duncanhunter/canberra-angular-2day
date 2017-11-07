import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyTableComponent } from './company-table.component';
import { Company } from '../company';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  template: ''
})
class DummyComponent {}

describe('CompanyTableComponent', () => {
  let component: CompanyTableComponent;
  let fixture: ComponentFixture<CompanyTableComponent>;
  let location: Location;
  const fakeCompanies: Company[] = [
    { id: 1, name: 'fake', email: 'email', phone: 123 }
  ];

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes([
            {
              path: 'company/edit/:id',
              component: DummyComponent
            }
          ])
        ],
        declarations: [DummyComponent, CompanyTableComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTableComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location);
    component.companies = fakeCompanies;
    fixture.detectChanges();
  });

  it('should create a table component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a single companie in the table`, () => {
    const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toEqual(1);
  });

  it(`should emit a companyid ondelete`, () => {
    let emittedId: number;

    component.onDeleteCompany.subscribe(id => {
      emittedId = id;
    });

    const button = fixture.debugElement.queryAll(By.css('button'))[1];
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(emittedId).toEqual(1);
  });

  it(`should have the correct text content bound to each td `, () => {
    const firstRowTds = fixture.debugElement.queryAll(By.css('tbody tr td'));
    expect(firstRowTds[0].nativeElement.textContent).toEqual(
      fakeCompanies[0].name
    );
    expect(firstRowTds[1].nativeElement.textContent).toEqual(
      fakeCompanies[0].email
    );
    expect(firstRowTds[2].nativeElement.textContent).toEqual(
      fakeCompanies[0].phone.toString()
    );
  });

  it(`should navigate on edit button clicked`,
    async(() => {
      const button = fixture.debugElement.queryAll(By.css('button'))[0];
      button.triggerEventHandler('click', null);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/company/edit/1');
    });
    })
  );


});
