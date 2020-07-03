import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteVisualizaComponent } from './cliente-visualiza.component';

describe('ClienteVisualizaComponent', () => {
  let component: ClienteVisualizaComponent;
  let fixture: ComponentFixture<ClienteVisualizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteVisualizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteVisualizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
