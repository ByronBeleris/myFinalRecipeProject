import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeUserListDetailComponent } from './recipe-user-list-detail.component';

describe('RecipeUserListDetailComponent', () => {
  let component: RecipeUserListDetailComponent;
  let fixture: ComponentFixture<RecipeUserListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeUserListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeUserListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
