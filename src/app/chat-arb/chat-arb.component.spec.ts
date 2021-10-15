import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatArbComponent } from './chat-arb.component';

describe('ChatArbComponent', () => {
  let component: ChatArbComponent;
  let fixture: ComponentFixture<ChatArbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatArbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatArbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
