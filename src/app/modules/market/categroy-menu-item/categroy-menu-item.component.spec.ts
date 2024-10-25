import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategroyMenuItemComponent } from './categroy-menu-item.component';

describe('CategroyMenuItemComponent', () => {
  let component: CategroyMenuItemComponent;
  let fixture: ComponentFixture<CategroyMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategroyMenuItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategroyMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
