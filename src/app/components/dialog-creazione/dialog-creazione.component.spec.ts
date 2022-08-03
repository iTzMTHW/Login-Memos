import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreazioneComponent } from './dialog-creazione.component';

describe('DialogCreazioneComponent', () => {
  let component: DialogCreazioneComponent;
  let fixture: ComponentFixture<DialogCreazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
